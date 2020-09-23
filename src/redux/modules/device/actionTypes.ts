import {createAction} from 'redux-actions';

/**
 * Create an action creator
 * @param {string} [description] - action description.
 * @return {function} action
 */
export const connectionChanged = createAction('connection changed');
export const dimensionChanged = createAction('dimension changed');
export const typeChanged = createAction('type changed');
export const stateChanged = createAction('state changed');
