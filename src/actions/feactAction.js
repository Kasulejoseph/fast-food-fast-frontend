import { FETCHMENU, POSTMENU, REGISTER, LOGIN } from './type';
import React from 'react';
import { toast } from 'react-toastify';

let token = window.localStorage.getItem('token');

export const myMenu = function(menu) {
  return function(dispatch) {
    fetch('https://fast-food-fast-db.herokuapp.com/api/v1/menu', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(menu)
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: POSTMENU,
          payload: data
        });
      });
  };
};

export const registerAction = function(user, history) {
  return function(dispatch) {
    fetch('https://fast-food-fast-db.herokuapp.com/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (
          data.status === 'Missing' ||
          data.status === 'Space Error' ||
          data.status === 'Error' ||
          data.status === 'Failed'
        ) {
          toast.error(data.message, 'error');
        }
        if (data.status === 'Success') {
          toast.success(data.message, 'success');
          history.push('/');
        }
        dispatch({
          type: REGISTER,
          payload: data
        });
      });
  };
};

export const loginAction = function(user, history) {
  return function(dispatch) {
    fetch('https://fast-food-fast-db.herokuapp.com/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'Failed') {
          toast.error(data.message, 'error');
        }

        if (data.auth_token) {
          window.localStorage.setItem(data.auth_token, 'token');
          toast.success(data.message, 'success');
          history.push('/addmenu');

        }
        dispatch({
          type: LOGIN,
          payload: data
        });
      });
  };
};
