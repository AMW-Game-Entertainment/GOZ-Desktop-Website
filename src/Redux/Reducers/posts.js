import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    List:       [],
    isFetching: false,
};

const getPosts = (state) => ({
    ...state,
    isFetching: true,
});

const setPosts = (state, { payload }) => ({
    ...state,
    isFetching: false,
    List:       [
        ...state.List,
        ...payload,
    ],
});

const setPost = (state, { payload }) => ({
    ...state,
    isFetching: false,
    List:       payload,
});

const failedPosts = (state) => ({
    ...state,
    isFetching: false,
});

const cleanPostsList = (state) => ({
    ...state,
    isFetching: false,
    List:       [],
});

export default ReducerUtil.createReducer(defaultState, {
    [types.GET_POSTS]:        getPosts,
    [types.UPDATE_POSTS]:     setPosts,
    [types.API_FAILED_POSTS]: failedPosts,
    [types.GET_POST]:         getPosts,
    [types.UPDATE_POST]:      setPost,
    [types.API_FAILED_POST]:  failedPosts,
    [types.CLEAN_POSTS]:      cleanPostsList,
});
