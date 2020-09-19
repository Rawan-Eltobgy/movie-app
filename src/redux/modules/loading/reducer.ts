import {handleActions} from 'redux-actions';
import {setLoading} from './actions';

const initialState = {
  app: true,
};

const loadingReducer = handleActions(
  {
    [setLoading]: (state, {payload}) => ({
      ...state,
      [payload.key]: payload.value,
    }),
  },
  initialState,
);

export default loadingReducer;
