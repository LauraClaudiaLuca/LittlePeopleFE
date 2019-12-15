import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from './loginActionTypes';

export const loginRequestAction = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginFailureAction = () => {
    return {
        type: LOGIN_FAILURE,
        message: "Error: Invalid email or password!"
    }
}

export const loginSuccessAction = email => {
    return {
        type: LOGIN_SUCCESS,
        message: `Hello ${email}!`
    }
}

export const loginActionCreator = (email, password, redirectOnSuccess) => {
    return dispatch => {
        dispatch(loginRequestAction())
        return axios
            .post("http://localhost:8080/api/login",
                {
                    email: email,
                    password: password
                })
            .then(res => {
                const token = res.data
                localStorage.setItem('token', JSON.stringify(token))
                dispatch(loginSuccessAction(email))
                redirectOnSuccess()
            })
            .catch((err) => dispatch(loginFailureAction()))
    }
}
