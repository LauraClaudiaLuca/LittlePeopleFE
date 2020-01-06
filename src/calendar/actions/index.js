import axiosInstance from "../../shared/axiosinstance"
import Swal from 'sweetalert2'

export const LOAD_ACTIVITIES = 'GET_ACTIVITIES'
export const LOAD_ACTIVITIES_SUCCESS = 'LOAD_ACTIVITIES_SUCCESS'
export const LOAD_ACTIVITIES_FAILURE = 'LOAD_ACTIVITIES_FAILURE'

export const CREATE_ACTIVITY_SUCCESS = 'ADD_ACTIVITY_SUCCESS'
export const CREATE_ACTIVITY_FAILURE = 'ADD_ACTIVITY_FAILURE'

export const UPDATE_ACTIVITY_SUCCEESS = 'UPDATE_ACTIVITY_SUCCESS'
export const UPDATE_ACTIVITY_FAILURE = 'UPDATE_ACTIVITY_FAILURE'

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
        return axiosInstance.get(`http://localhost:8080/api/activity/getActivitiesByCity?city=${token.city}`)
        .then(res => dispatch(loadActivitiesSuccess(res.data)))
        .catch(() => dispatch(loadActivitiesFailure()))
    }
}

const deleteActivitySuccess = activityId => {
    return {
        type: DELETE_ACTIVITY_SUCCESS,
        activityId
    }
}

const deleteActivityFailure = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Could not delete activity!',
        confirmButtonColor: '#db3d44',
        confirmButtonText: 'OK'
    })
    return {
        type: DELETE_ACTIVITY_FAILURE
    }
}

export const deleteActivity = (activityId, dispatch) => {
    return dispatch => {
        return axiosInstance.post(`http://localhost:8080/api/activity/leader/delete?activityId=${activityId}`)
        .then(() => dispatch(deleteActivitySuccess(activityId)))
        .catch(() => dispatch(deleteActivityFailure()))
    }
}

const createActivitySuccess = activity => {
    return {
        type: CREATE_ACTIVITY_SUCCESS,
        activity
    }
}

const createActivityFailure = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Could not create activity!',
        confirmButtonColor: '#db3d44',
        confirmButtonText: 'OK'
    })
    return {
        type: CREATE_ACTIVITY_FAILURE
    }
}

export const createActivity = (activity, dispatch) => {
    return dispatch => {
        return axiosInstance.post('http://localhost:8080/api/activity/leader/add', activity)
        .then(res => dispatch(createActivitySuccess(res.data)))
        .catch(() => dispatch(createActivityFailure()))
    }
}