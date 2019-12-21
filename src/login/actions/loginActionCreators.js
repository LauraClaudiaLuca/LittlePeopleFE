import axios from 'axios';
import { LOGIN_SUCCESS } from './loginActionTypes';

export const loginActionCreator = (email, password, redirectOnSuccess) => {
    return dispatch => {
        return axios
            .post("http://localhost:8080/api/login",
                {
                    email: email,
                    password: password
                })
            .then(res => {
                const token = res.data;
                localStorage.setItem('token', JSON.stringify(token));
                dispatch(loginActionSuccesful(token))
                redirectOnSuccess()
            })
            .catch((err) => alert("Wrong password or email..."));
    }
}
export const loginActionSuccesful=(token)=>{
    return {
        type:LOGIN_SUCCESS,
        token:token
    }
}