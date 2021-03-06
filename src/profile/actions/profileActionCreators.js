import axiosInstance from '../../shared/axiosinstance';
import Swal from 'sweetalert2'


export const editProfileActionCreator = (username, firstName, surName, phone, redirectOnSuccess) => {
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
                const token = res.data;
                localStorage.setItem('token', JSON.stringify(token));
                redirectOnSuccess(true)
            })
            .catch((err) =>
                {Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong.',
                    confirmButtonColor: '#db3d44',
                    confirmButtonText: 'OK'
                })
                redirectOnSuccess(false);
            }
            );
    }
}
export const changePassActionCreator = (password, redirectOnSuccess) => {
    return dispatch => {
        return axiosInstance
            .post("http://localhost:8080/api/user/update_password",
                {
                    newPassword: password,
                }
            )
            .then(res => {
                redirectOnSuccess()
            })
            .catch((err) =>
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong.',
                    confirmButtonColor: '#db3d44',
                    confirmButtonText: 'OK'
                })
            );
    }
}
