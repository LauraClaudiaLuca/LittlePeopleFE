import { LOAD_ACTIVITIES, LOAD_ACTIVITIES_SUCCESS, LOAD_ACTIVITIES_FAILURE, 
         DELETE_ACTIVITY, DELETE_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAILURE } from '../actions'

const intialState = {
    isFetching: false,
    activities: []
}

const calendarReducer = (state = intialState, action) => {
    switch (action.type) {
        case LOAD_ACTIVITIES:
            return {
                ...state,
                isFetching: true
            }
        case LOAD_ACTIVITIES_SUCCESS:
            return {
                isFetching: false,
                activities: action.activities
            }
        case LOAD_ACTIVITIES_FAILURE:
            return {
                isFetching: false,
                activities: []
            }
        case DELETE_ACTIVITY:
            return {
                ...state,
                isFetching: true
            }
        case DELETE_ACTIVITY_SUCCESS:
            return {
                isFetching: false,
                ...state
            }
        case DELETE_ACTIVITY_FAILURE:
            return {
                isFetching: false,
                ...state
            }
        default:
            return state
    }
}

export default calendarReducer