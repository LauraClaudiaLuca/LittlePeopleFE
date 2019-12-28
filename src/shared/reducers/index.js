import { GET_USER_DATA } from '../actions'

export default function userDataReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return action.token

        default:
            return state
    }

}