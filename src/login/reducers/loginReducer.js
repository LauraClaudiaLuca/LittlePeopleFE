import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/loginActionTypes";

const initialState = {
    isLoggedIn: false,
    loginError: false,
    isFetching: false,
    message: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loginError: false,
                isFetching: true
            }
        case LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                loginError: false,
                isFetching: false,
                message: action.message
            }
        case LOGIN_FAILURE:
            return {
                isLoggedIn: false,
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