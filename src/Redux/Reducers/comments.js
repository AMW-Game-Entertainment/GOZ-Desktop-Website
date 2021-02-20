import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    List:       {},
    FirstIds:   {},
    isFetching: false,
};

const getComments = (state) => ({
    ...state,
    isFetching: true,
});

const deleteComment = (state) => ({
    ...state,
    isFetching: true,
});

const setComments = (state, { payload: { list: comments } }) => ({
    ...state,
    List:       {
        ...state.List,
        ...comments,
    },
    isFetching: false,
});

const failedComments = (state) => ({
    ...state,
    isFetching: false,
});

const addComment = (state, { payload: { list: comment } }) => ({
    ...state,
    List:       {
        ...state.List,
        ...comment,
    },
    isFetching: true,
});

const updateFirstIds = (state, { payload: { list: FirstIds } }) => ({
    ...state,
    FirstIds,
});

export default ReducerUtil.createReducer(defaultState, {
    [types.GET_COMMENTS]:              getComments,
    [types.UPDATE_COMMENTS]:           setComments,
    [types.DELETE_COMMENT]:            deleteComment,
    [types.API_FAILED_COMMENTS]:       failedComments,
    [types.API_FAILED_ADD_COMMENT]:    failedComments,
    [types.API_FAILED_DELETE_COMMENT]: failedComments,
    [types.ADD_COMMENT]:               addComment,
    [types.UPDATE_FIRST_IDS]:          updateFirstIds,
});
