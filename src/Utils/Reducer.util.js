import { propOr, identity } from 'ramda';

export default {
    createReducer: (initialState, actionHandlers) =>
        (state = initialState, action) =>
            propOr(identity, action.type, actionHandlers)(state, action),
};
