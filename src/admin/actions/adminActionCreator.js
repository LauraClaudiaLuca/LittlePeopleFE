import axiosInstance from '../../shared/axiosinstance';
import { ADD_SUCCESS, ADD_FAILURE, ADD_REQUEST, GET_VOLUNTEERS_REQUEST, GET_VOLUNTEERS_SUCCESS, GET_VOLUNTEERS_FAILURE, GET_HOSPITALS_SUCCESS, GET_HOSPITALS_FAILURE, GET_HOSPITALS_REQUEST } from "./adminActionTypes"
import Swal from 'sweetalert2'
// --------------- ADD --------------------
export const addRequestAction = () => {
    return {
        type: ADD_REQUEST
    }
}

export const addSuccessAction = () => {
    return {
        type: ADD_SUCCESS,
    }
}

export const addFailureAction = () => {
    return {
        type: ADD_FAILURE
    }
}

export const addActionCreator = (email, hospitalId) => {
    return dispatch => {
        dispatch(addRequestAction())
        return axiosInstance
            .post("http://localhost:8080/api/user/add",
                {
                    email: email,
                    hospitalId: hospitalId
                })
            .then(res => {
                alert("added");
                dispatch(addSuccessAction());
            })
            .catch(
                (err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong.',
                        confirmButtonColor: '#db3d44',
                        confirmButtonText: 'OK'
                    })
                    dispatch(addFailureAction())
                }
            )
    }
}

// --------------- GET VOLUNTEERS --------------------
export const getVolunteersRequestAction = () => {
    return {
        type: GET_VOLUNTEERS_REQUEST
    }
}

export const getVolunteersSuccessAction = (volunteers) => {
    return {
        type: GET_VOLUNTEERS_SUCCESS,
        volunteers: volunteers
    }
}

export const getVolunteersFailureAction = () => {
    return {
        type: GET_VOLUNTEERS_FAILURE
    }
}

export const getVolunteersActionCreator = (city) => {
    return dispatch => {
        dispatch(addRequestAction())
        return axiosInstance
            .get("http://localhost:8080/api/.......")
            .then(res => {
                dispatch(getVolunteersSuccessAction(res.data));
            })
            .catch(
                (err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong.',
                        confirmButtonColor: '#db3d44',
                        confirmButtonText: 'OK'
                    })
                    dispatch(getVolunteersFailureAction())
                }
            )
    }
}
// --------------- GET HOSPITALS --------------------
export const getHospitalsRequestAction = () => {
    return {
        type: GET_HOSPITALS_REQUEST
    }
}

export const getHospitalsSuccessAction = (volunteers) => {
    return {
        type: GET_HOSPITALS_SUCCESS,
        volunteers: volunteers
    }
}

export const getHospitalsFailureAction = () => {
    return {
        type: GET_HOSPITALS_FAILURE
    }
}
export const getHospitalsActionCreator = (city) => {
    return dispatch => {
        dispatch(getHospitalsRequestAction())
        return axiosInstance
            .get("http://localhost:8080/api/hospitals")
            .then(res => {
                dispatch(getHospitalsSuccessAction(res.data));
            })
            .catch(
                (err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong.',
                        confirmButtonColor: '#db3d44',
                        confirmButtonText: 'OK'
                    })
                    dispatch(getHospitalsFailureAction())
                }
            )
    }
}