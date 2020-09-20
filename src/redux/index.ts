import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import loading from './modules/loading/reducer';
// import movies from './modules/movies/reducer';

/**
 * create a Saga middleware
 * @type {SagaMiddleware}
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Combine and persist reducers
 */
const reducers = combineReducers({
  // movies,
  loading,
});

const composeEnhancers = composeWithDevTools({realtime: true});

/**
 * create application's redux store.
 * @type {Store}
 */
const store = createStore(
  reducers, // application's reducers
  {}, // application's initial state
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware, // connect the Saga middleware to the Redux store
    ),
  ),
);

/**
 * Run a list of Sagas
 */
sagaMiddleware.run(sagas);

export default store;
