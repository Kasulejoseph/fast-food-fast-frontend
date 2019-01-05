
import {FETCHMENU, POSTMENU} from './types';

export const getList = function (dispatch) {
        fetch('https://fast-food-fast-db.herokuapp.com/api/v1/menu'
        )
        .then(res => res.json())
        //.then(yy => console.log(yy['Onmenu']))
        .then(data =>  {
                dispatch({
                    type: FETCHMENU,
                    payload: data.Onmenu
                });
            });
    
}

export const fetchMenu = function () {
    return function (dispatch) {
        getList(dispatch);
    }
}

export const myMenu= function (menu){
    return function (dispatch){
        fetch('https://fast-food-fast-db.herokuapp.com/api/v1/menu',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNva29AZ21haWwuY29tIiwiZXhwIjoxNTQ2Njk0OTU2LCJpYXQiOjE1NDY2MTIxNTYsInN1YiI6Niwicm9sZSI6ImFkbWluIn0.6QV3dL1SNKtIlroAQM_kEFgC697j0YrYKXiI4AIbrVc'
            },
            body: JSON.stringify(menu)
        })
        .then(res => res.json())
        .then(data => {
            getList(dispatch);
            dispatch({
            type: POSTMENU,
            payload: data});
        });
    }
}
