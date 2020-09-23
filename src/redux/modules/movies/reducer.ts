import {Dimensions} from 'react-native';
import {handleActions} from 'redux-actions';

import * as actions from './actionTypes';
import {AnyAction} from 'redux';

/**
 * Represents an initial state for network reducer
 * @type {object}
 * @const
 */
const initialState = {
  error: {},
  // data: {
  //   page: 0,
  //   hitsPerPage: 10,
  //   nbHits: 0,
  //   npPages: 0,
  // },
  movies: [],
};

/**
 * Represents a networkReducer - specify how the state changes.
 * @param {object} actions.
 * @param {object} initial state.
 * @return {object} reducer
 */

const moviesReducer = handleActions(
  {
    [actions.fetchMovies.toString()]: (state) => ({
      ...state,
      // movies: action.payload,
    }),

    [actions.fetchMoviesSuccess.toString()]: (state, action) => {
      const payload = action.payload;
      console.log('Payload results: ', payload);
      //TODO add paginating
      // let newData = payload.page === 0 ? payload.movies : [...state.data, ...payload.movies]
      let newData = payload.movies;
      return {
        ...state,
        movies: newData,
        // npPages: payload.npPages,
        // total: payload.nbHits,
        // loading: false ,
      };
    },

    ////
    [actions.fetchMoviesFailed.toString()]: (state, {payload}) => ({
      ...state,
      error: payload,
    }),
  },
  initialState,
);

export default moviesReducer;
