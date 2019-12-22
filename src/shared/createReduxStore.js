import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import loginReducer from "../login/reducers/loginReducer"
import profileReducer from "../profile/reducers/profileReducer"

export const createReduxStore = () => {
    let middlewares = [thunk]

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        const logger = createLogger()
        middlewares.push(logger)
    }


    const rootReducer = combineReducers({
        loginReducer : loginReducer,
        profileReducer: profileReducer,
    }) // TODO: use combineReducers()

    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    )
    return store

}

