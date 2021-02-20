import { types } from '~/Redux';
import { ReducerUtil } from '~/Utils';

const defaultState = {
    message:    '',
    lastAction: '',
};

const onRecievedError = ((state, { payload: { error, lastAction } }) => ({ ...state, message: error, lastAction }));

export default ReducerUtil.createReducer(defaultState, {
    [types.ERROR_RECIEVED]: onRecievedError,
});
