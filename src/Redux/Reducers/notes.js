import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    List:       [],
    isFetching: false,
    hasError:   false,
};
const getNotes     = (state) => ({ ...state, isFetching: true });
const failedNotes  = (state) => ({ ...state, isFetching: false, hasError: true });
const setNotes     = (state, { payload }) => ({ ...state, List: payload, isFetching: false });

export default ReducerUtil.createReducer(defaultState, {
    [types.GET_NOTES]:        getNotes,
    [types.UPDATE_NOTES]:     setNotes,
    [types.API_FAILED_NOTES]: failedNotes,
});
