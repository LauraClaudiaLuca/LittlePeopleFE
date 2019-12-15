import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import loginReducer from "../login/reducers/loginReducer"

export const createReduxStore = () => {
    let middlewares = [thunk]

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.log('is develop')
        const logger = createLogger()
        middlewares.push(logger)
    }


    const rootReducer = combineReducers({
        login : loginReducer
    }) // TODO: use combineReducers()

    
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middlewares)
        )
    )
    return store
}

