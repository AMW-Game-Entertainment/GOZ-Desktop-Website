import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    dialog: {
        comments:   {},
        addComment: {},
    },
};

const showCommentDialog = (state, { payload: { id } }) => ({
    ...state,
    dialog: {
        ...state.dialog,
        comments: {
            ...state.dialog.comments,
            ...{ [id]: true },
        },
    },
});

const hideCommentDialog = (state, { payload: { id } }) => ({
    ...state,
    dialog: {
        ...state.dialog,
        comments: {
            ...state.dialog.comments,
            ...{ [id]: false },
        },
    },
});


const showAddCommentDialog = (state, { payload: { id } }) => ({
    ...state,
    dialog: {
        ...state.dialog,
        addComment: {
            ...state.dialog.addComment,
            ...{ [id]: true },
        },
    },
});

const hideAddCommentDialog = (state, { payload: { id } }) => ({
    ...state,
    dialog: {
        ...state.dialog,
        addComment: {
            ...state.dialog.addComment,
            ...{ [id]: false },
        },
    },
});

export default ReducerUtil.createReducer(defaultState, {
    [types.SHOW_COMMENT_DIALOG]:     showCommentDialog,
    [types.HIDE_COMMENT_DIALOG]:     hideCommentDialog,
    [types.SHOW_ADD_COMMENT_DIALOG]: showAddCommentDialog,
    [types.HIDE_ADD_COMMENT_DIALOG]: hideAddCommentDialog,
});
