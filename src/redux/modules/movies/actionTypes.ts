import {createAction} from 'redux-actions';

/**
 * Create an action creator
 * @param {string} [description] - action description.
 * @return {function} action
 */

export const fetchMovies = createAction('fetchMovies');
export const fetchMoviesSuccess = createAction('fetchMoviesSuccess');
export const fetchMoviesFailed = createAction('fetchMoviesFailed');
