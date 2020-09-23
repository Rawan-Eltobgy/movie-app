import {Dimensions, AppState} from 'react-native';
import {handleActions} from 'redux-actions';
import * as actions from './actionTypes';

const {height, width} = Dimensions.get('window');
/**
 * Represents an initial state for network reducer
 * @type {object}
 * @const
 */
const initialState = {
  isConnected: false,
  deviceWidth: width,
  deviceHeight: height,
  isTablet: false,
  appState: AppState.currentState,
};

/**
 * Represents a networkReducer - specify how the state changes.
 * @param {object} actions.
 * @param {object} initial state.
 * @return {object} reducer
 */
const deviceReducer = handleActions(
  {
    [actions.connectionChanged.toString()]: (state, action) => ({
      ...state,
      isConnected: action.payload,
    }),
    [actions.dimensionChanged.toString()]: (state, action) => {
      if (
        state.deviceWidth !== action.payload.deviceWidth ||
        state.deviceHeight !== action.payload.deviceHeight
      ) {
        return {...state, ...action.payload};
      }
    },
    [actions.typeChanged.toString()]: (state, action) => ({
      ...state,
      isTablet: action.payload,
    }),
    [actions.stateChanged.toString()]: (state, _action) => ({
      ...state,
      appState: action.payload,
    }),
  initialState,
);

export default deviceReducer;
