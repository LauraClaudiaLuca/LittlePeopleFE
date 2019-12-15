import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/loginActionTypes";

const initialState = {
    loginError: false,
    isFetching: false,
    message: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loginError: false,
                isFetching: true
            }
        case LOGIN_SUCCESS:
            return {
                loginError: false,
                isFetching: false,
                message: action.message
            }
        case LOGIN_FAILURE:
            return {
                loginError: true,
                isFetching: false,
                message: action.message
            }
        default:
            break;
    }
    return state;
}

export default loginReducer