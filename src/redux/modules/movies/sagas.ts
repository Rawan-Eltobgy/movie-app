import {Platform, NativeModules} from 'react-native';
import {
  put,
  takeEvery,
  takeLatest,
  call,
  all,
  select,
} from 'redux-saga/effects';
import axios from 'axios';
// import {setLoading} from '../loading/actions';
import * as actions from './actionTypes';
import settings from '../../../config/env/staging';

/**
 * fetch movies saga
 * @param action
 */
export const fetchMoviesAsync = function* (action: {payload: any}) {
  let params = action.payload;
  let page = params.page || 1;
  console.log('url: ', settings.MOVIES_BASE_URL);
  const key = 'fetchMovies';
  let url = `${settings.MOVIES_BASE_URL}?s=${params.inputValue}&page=${page}&apikey=${settings.OMDb_API_KEY}`;
  console.log('url FINAL: ', url);

  try {
    // yield put({
    //   // type: setLoading,
    //   payload: {key, value: true},
    // });

    const response = yield call(axios.get, url, params);
    console.log('response in fetch movies', response, response.Search);
    let result = response.data;

    yield all([
      put({
        type: actions.fetchMoviesSuccess,
        payload: result.Search,
        page: page,
      }),
      // put({
      //   // type: setLoading,
      //   payload: {key, value: false}}),
    ]);
  } catch (e) {
    console.log('error: ', e);
    let msg = '';
    if (e.response) {
      const data = e.response.data;
      console.log('error: ', data);
    } else {
      msg = e.message;
    }

    yield all([
      put({type: actions.fetchMoviesFailed, payload: msg}),
      //   put({
      //     // type: setLoading,
      //     payload: {key, value: false}}),
    ]);
  }
};

/**
 * Watch movies saga
 */
export const moviesSagas = function* () {
  yield takeEvery(actions.fetchMovies, fetchMoviesAsync);
};
