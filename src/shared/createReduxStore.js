import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import loginReducer from "../login/reducers/loginReducer"
import profileReducer from "../profile/reducers/profileReducer"
import userDataReducer from './reducers'

export const createReduxStore = () => {
    let middlewares = [thunk]

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        const logger = createLogger()
        middlewares.push(logger)
    }


    const rootReducer = combineReducers({
        user: userDataReducer,
        login : loginReducer,
        profileReducer: profileReducer,
    })

    
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middlewares)
        )
    )
    return store
}

