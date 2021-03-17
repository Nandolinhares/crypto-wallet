import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root-saga'

// Reducers
import userReducer from './reducers/user-reducer'
import cryptoReducer from './reducers/crypto-reducer'

// Middleware
const sagaMiddleware = createSagaMiddleware()

const initialState = {}

const reducers = combineReducers({
  user: userReducer,
  crypto: cryptoReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducers, initialState, enhancer)
sagaMiddleware.run(rootSaga)

export default store
