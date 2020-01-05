import { LOAD_ACTIVITIES, LOAD_ACTIVITIES_SUCCESS, LOAD_ACTIVITIES_FAILURE } from '../actions'

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
        default:
            return state
    }
}

export default calendarReducer