import axios from 'axios'
import axiosInstance from '../../shared/axiosinstance';

export const editProfileActionCreator = (username, firstName, surName, phone, token, redirectOnSuccess) => {
    console.log("token",token)
    return dispatch => {
        return axios
            .post("http://localhost:8080/api/user/edit",
                {
                    username: username,
                    firstName: firstName,
                    surname: surName,
                    phone: phone,
                },{
                    headers: {"AUTHORIZATION":token}
                }
            )
            .then(res => {
                redirectOnSuccess()
            })
        //.catch((err) => alert("Something went wrong..."));
    }
}
export const changePassActionCreator = (password, redirectOnSuccess, token) => {
    return dispatch => {
        return axios
            .post("http://localhost:8080/api/user/edit",
                {
                    password: password
                }
            )
            .then(res => {
                redirectOnSuccess()
            })
            .catch((err) => alert("Something went wrong..."));
    }
}
