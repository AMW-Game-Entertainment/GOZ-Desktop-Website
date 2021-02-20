import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    List:       {},
    isFetching: false,
};

const getLikes = (state) => ({
    ...state,
    isFetching: false,
});

const setLikes = (state, { payload: { list: likes } }) => ({
    ...state,
    List:       {
        ...state.List,
        ...likes,
    },
    isFetching: false,
});

const failedLikes = (state) => ({
    ...state,
    isFetching: false,
});

const addLike = (state, { payload: { list: like } }) => ({
    ...state,
    List:       {
        ...state.List,
        ...like,
    },
    isFetching: true,
});

export default ReducerUtil.createReducer(defaultState, {
    [types.GET_LIKES]:              getLikes,
    [types.UPDATE_LIKES]:           setLikes,
    [types.API_FAILED_LIKES]:       failedLikes,
    [types.API_FAILED_ADD_LIKE]:    failedLikes,
    [types.API_FAILED_DELETE_LIKE]: failedLikes,
    [types.UPDATE_LIKE]:            addLike,
});
