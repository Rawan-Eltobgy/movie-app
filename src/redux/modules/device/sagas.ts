import {takeLatest} from 'redux-saga/effects';
import {connectionChanged} from './actionTypes';

/**
 *  Watcher Saga: spawn a new connectionHasChanged task on each stateChanged
 */
export const watchConnectionChange = function* () {
  yield takeLatest(connectionChanged, function* () {});
};
