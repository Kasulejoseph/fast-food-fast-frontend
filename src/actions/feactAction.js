import { FETCHMENU, POSTMENU, REGISTER, LOGIN } from './type';
import React from 'react';
import { toast } from 'react-toastify';

let token = window.localStorage.getItem('token')
export const getList = function(dispatch) {
  fetch('https://fast-food-fast-db.herokuapp.com/api/v1/menu')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCHMENU,
        payload: data.Onmenu
      });
    });
};

export const fetchMenu = function() {
  return function(dispatch) {
    getList(dispatch);
  };
};

export const myMenu = function(menu) {
  return function(dispatch) {
    fetch('https://fast-food-fast-db.herokuapp.com/api/v1/menu', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(menu)
    })
      .then(res => res.json())
      .then(data => {          
        getList(dispatch);
        dispatch({
          type: POSTMENU,
          payload: data
        });
      });
  };
};

export const registerAction = function(user) {
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
        
        if (data.status === 'Missing' || data.status === 'Error' || data.status === 'Failed') {
            toast.error(data.message, 'error');
          }
        if (data.status === 'Success') {
            toast.success(data.message, 'success');
          }
        dispatch({
          type: REGISTER,
          payload: data
        });
      });
  };
};

export const loginAction = function(user) {
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
            window.localStorage.setItem(data.auth_token, 'token')
            toast.success(data.message, 'success');            
          }
        dispatch({
          type: LOGIN,
          payload: data
        });
      });
  };
};
