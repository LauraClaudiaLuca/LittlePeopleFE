import axios from 'axios'

var headers = {
    'Content-Type': 'application/json',
    'Authorization': '',
}
export const editProfileActionCreator = (username, firstName, surName, phone, token, redirectOnSuccess) => {
    headers.Authorization = token;
    return dispatch => {
        return axios
            .post("http://localhost:8080/api/user/edit",
                {
                    username: username,
                    firstName: firstName,
                    surname: surName,
                    phone: phone,
                },
                {
                    headers: headers
                },
            )
            .then(res => {
                redirectOnSuccess()
            })
        //.catch((err) => alert("Something went wrong..."));
    }
}
export const changePassActionCreator = (password, redirectOnSuccess, token) => {
    headers.Authorization = token;
    return dispatch => {
        return axios
            .post("http://localhost:8080/api/user/edit",
                {
                    password: password
                },
                {
                    headers: headers
                }
            )
            .then(res => {
                redirectOnSuccess()
            })
            .catch((err) => alert("Something went wrong..."));
    }
}
