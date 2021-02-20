import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    List:       {},
    isFetching: false,
};

const requestOM = (state) => ({
    ...state,
    isFetching: true,
});

const updateOM = (state, { payload }) => ({
    ...state,
    List:       payload,
    isFetching: false,
});

const failedOM = (state) => ({
    ...state,
    isFetching: false,
});

export default ReducerUtil.createReducer(defaultState, {
    [types.API_REQUEST_OPEN_MESSAGE]:  requestOM,
    [types.API_RESPONSE_OPEN_MESSAGE]: updateOM,
    [types.API_FAILED_OPEN_MESSAGE]:   failedOM,
});
