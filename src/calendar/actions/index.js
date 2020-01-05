import axiosInstance from "../../shared/axiosinstance"
import Swal from 'sweetalert2'

export const LOAD_ACTIVITIES = 'GET_ACTIVITIES'
export const LOAD_ACTIVITIES_SUCCESS = 'LOAD_ACTIVITIES_SUCCESS'
export const LOAD_ACTIVITIES_FAILURE = 'LOAD_ACTIVITIES_FAILURE'

export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const ADD_ACTIVITY_SUCCESS = 'ADD_ACTIVITY_SUCCESS'
export const ADD_ACTIVITY_FAILURE = 'ADD_ACTIVITY_FAILURE'

export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY'
export const UPDATE_ACTIVITY_SUCCEESS = 'UPDATE_ACTIVITY_SUCCESS'
export const UPDATE_ACTIVITY_FAILURE = 'UPDATE_ACTIVITY_FAILURE'

export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'
export const DELETE_ACTIVITY_SUCCESS = 'DELETE_ACTIVITY_SUCCESS'
export const DELETE_ACTIVITY_FAILURE = 'DELETE_ACTIVITY_FAILURE'


const loadActivitiesSuccess = activities => {
    return {
        type: LOAD_ACTIVITIES_SUCCESS,
        activities
    }
}

const loadActivitiesFailure = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Could not fetch activities from the server!',
        confirmButtonColor: '#db3d44',
        confirmButtonText: 'OK'
    })
    return {
        type: LOAD_ACTIVITIES_FAILURE
    }
}

const loadActivitiesRequest = () => {
    return {
        type: LOAD_ACTIVITIES
    }
}

export const loadActivities = dispatch => {
    return dispatch => {
        dispatch(loadActivitiesRequest())
        let token = JSON.parse(localStorage.getItem('token'))
        return axiosInstance.get(`http://localhost:8080/api/activity/getActivitiesByCity?city=${token.city}`, {}, {
            headers: {
                authorization: token.userToken
            }
        })
        .then(res => {
            dispatch(loadActivitiesSuccess(res.data))
        })
        .catch(() => {
            dispatch(loadActivitiesFailure())
        })
    }
}