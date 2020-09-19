import {all, fork} from 'redux-saga/effects';
import {watchConnectionChange} from './modules/movies/sagas';

/**
 * single entry point to start all Sagas at once
 */
export default sagas = function* () {
  yield all([watchConnectionChange(), fork(moviesSagas)]);
};
