import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    messages: [],
    id:       0,
};

const addNotification = (state, { payload }) => {
    const id = state.id + 1;

    return {
        ...state,
        id:       (state.id + 1),
        messages: [
            ...state.messages,
            { id, ...payload },
        ],
    };
};

const removeNotification = (state, { payload: { id } }) => ({
    ...state,
    messages: state.messages.filter((item) => item.id !== id),
});

export default ReducerUtil.createReducer(defaultState, {
    [types.ADD_NOTIFICATION]:    addNotification,
    [types.REMOVE_NOTIFICATION]: removeNotification,
});
