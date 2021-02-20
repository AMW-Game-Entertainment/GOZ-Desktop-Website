import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    List:       [],
    isFetching: false,
    hasError:   false,
};

const getEvents      = (state) => ({ ...state, isFetching: true });
const failedEvents   = (state) => ({ ...state, isFetching: false, hasError: true });
const responseEvents = (state, { payload }) => ({ ...state, List: payload, isFetching: false });

export default ReducerUtil.createReducer(defaultState, {
    [types.GET_EVENTS]:        getEvents,
    [types.UPDATE_EVENTS]:     responseEvents,
    [types.API_FAILED_EVENTS]: failedEvents,
});
