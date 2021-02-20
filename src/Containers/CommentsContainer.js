import { connect } from 'react-redux';
import { actions } from '~/Redux';
import { Config } from '~/Constants';
import {
    getCommentsByPostId,
    getCommentsLoadingSel,
    getCurrentUserIdSel,
    getCurrentUserProfileImage,
    getCompVisibileDialogCommentsSel,
    getCommentsFirstId,
} from '~/Redux/selectors';
import { Comments } from '~/Components';

const { Limits } = Config;

const mapStateToProps = (state, ownProps) => ({
    comments:         getCommentsByPostId(ownProps.PostId)(state),
    FirstId:          getCommentsFirstId(ownProps.PostId)(state),
    isLoading:        getCommentsLoadingSel(state),
    CurrentUserImage: getCurrentUserProfileImage(state),
    CurrentUserId:    getCurrentUserIdSel(state),
    visibileList:     getCompVisibileDialogCommentsSel(state),
});

const mapDispatchToProps = (dispatch) => ({
    getComments:       (PostId, LastId) => dispatch(actions.getComments({
        PostId,
        LastId,
        Limit: Limits.Comments,
    })),
    deleteComment:     (PostId, CommentType, CommentId, Limit) => dispatch(actions.deleteComment({
        PostId,
        CommentType,
        CommentId,
        Limit,
    })),
    loadMoreComment:   (PostId, LastCommentId) => dispatch(actions.getComments({
        LastId: LastCommentId,
        Limit:  Limits.Comments,
        PostId,
    })),
    showDialogComment: (id) => dispatch(actions.showDialogComment(id)),
    hideDialogComment: (id) => dispatch(actions.hideDialogComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
