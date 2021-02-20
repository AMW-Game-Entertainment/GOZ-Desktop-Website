import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    Namespace:    null,
    CurrentRoute: null,
};

const setNamepsace = (state, { payload: { Namespace } }) => ({
    ...state,
    Namespace,
});

const setCurrentRoute = (state, { payload: { Route } }) => ({
    ...state,
    CurrentRoute: Route,
});

export default ReducerUtil.createReducer(defaultState, {
    [types.UPDATE_NAMESPACE]: setNamepsace,
    [types.UPDATE_ROUTE]:     setCurrentRoute,
});
