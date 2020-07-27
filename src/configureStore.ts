import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'

import { State, rootReducer } from './reducers'

import { rootSaga } from './sagas'
import createSagaMiddleware from 'redux-saga'

const logger = createLogger()

export const history = createBrowserHistory()

const sagaMiddleWare = createSagaMiddleware()

export function configureStore(preloadedState?: State) {
  const middlewares = [routerMiddleware(history), sagaMiddleWare, logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const store = createStore(rootReducer(history), preloadedState, middlewareEnhancer)
  sagaMiddleWare.run(rootSaga)
  return store
}