import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import config from '../config';

function getMiddlewares() {
  const middlewares: any[] = [thunk];
  if (config.API_CONNECTOR_LOGS_ACTIVATED) {
    middlewares.push(logger);
  }
  return middlewares;
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...getMiddlewares())),
);
// export const store = createStore(rootReducer, applyMiddleware(...getMiddlewares()));

export type Store = ReturnType<typeof rootReducer>;
