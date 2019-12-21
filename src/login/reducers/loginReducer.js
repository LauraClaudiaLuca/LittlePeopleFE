import { LOGIN_SUCCESS } from "../actions/loginActionTypes";

const initialErr = {
    token : "",
}

const loginReducer = (state = initialErr, action) => {
    const newState = state;
    switch (action.type) {
        case LOGIN_SUCCESS:
            newState.token = action.token
            break;
        default:
            break;
    }
    return newState;
}

export default loginReducer