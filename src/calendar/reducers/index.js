import { LOAD_ACTIVITIES, LOAD_ACTIVITIES_SUCCESS, LOAD_ACTIVITIES_FAILURE, 
         DELETE_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAILURE, 
         CREATE_ACTIVITY_SUCCESS, CREATE_ACTIVITY_FAILURE } from '../actions'

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
        case DELETE_ACTIVITY_SUCCESS:
            let index = state.activities.findIndex(activity => activity.id === action.activityId)
            let activities = [...state.activities]
            activities.splice(index, 1)
            return {
                isFetching: false,
                activities
            }
        case CREATE_ACTIVITY_SUCCESS:
            return {
                isFetching: false,
                activities: [
                    ...state.activities,
                    action.activity
                ]
            }
        case LOAD_ACTIVITIES_FAILURE || DELETE_ACTIVITY_FAILURE || CREATE_ACTIVITY_FAILURE:
            return {
                isFetching: false,
                ...state
            }
        default:
            return state
    }
}

export default calendarReducer