import axios from 'axios'
import axiosInstance from '../../shared/axiosinstance';
import Swal from 'sweetalert2'


export const editProfileActionCreator = (username, firstName, surName, phone, token, redirectOnSuccess) => {
    console.log("token", token)
    return dispatch => {
        return axiosInstance
            .post("http://localhost:8080/api/user/edit",
                {
                    username: username,
                    firstName: firstName,
                    surname: surName,
                    phone: phone,
                }
            )
            .then(res => {
                redirectOnSuccess()
            })
        //.catch((err) => alert("Something went wrong..."));
        // return axios({
        //     method: 'post',
        //     url: "http://localhost:8080/api/user/edit",
        //     data: {
        //         username: username,
        //         firstName: firstName,
        //         surname: surName,
        //         phone: phone,
        //     },
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        //         'AUTHORIZATION': token
        //     }
        // })
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
