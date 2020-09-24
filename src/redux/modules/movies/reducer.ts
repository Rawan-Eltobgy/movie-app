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
  page: 1,
  movies: [],
};

/**
 * Represents a movies reducer.
 * @param {object} actions.
 * @param {object} initial state.
 * @return {object} reducer
 */

const moviesReducer = handleActions(
  {
    //All movies 
    [actions.fetchMovies.toString()]: (state) => ({
      ...state,
      // movies: action.payload,
    }),

    [actions.fetchMoviesSuccess.toString()]: (state, action) => {
      const payload = action.payload;
      const currentPage = action.page;
      //TODO add paginating
      let newData = currentPage === 1 ? payload : [...payload];
      console.log("newData, ",newData, currentPage);
      return {
        ...state,
        movies: newData,
        page: currentPage,
        // total: payload.nbHits,
        // loading: false ,
      };
    },
    [actions.fetchMoviesFailed.toString()]: (state, {payload}) => ({
      ...state,
      error: payload,
    }),
  },
  initialState,
);

export default moviesReducer;
