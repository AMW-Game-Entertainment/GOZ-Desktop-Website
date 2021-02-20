import { connect } from 'react-redux';
import { ModelType } from '~/Constants';
import {
    isUploadingFiles,
    getCommentsLoadingSel,
    getCurrentUserProfileImage,
    getFilesUploaded,
    getFormFilesUploading,
    getUpoadConfSel,
    getCompVisibileDialogAddCommentsSel,
} from '~/Redux/selectors';
import { AddComment } from '~/Components';
import { actions } from '~/Redux';

const mapStateToProps = (state) => ({
    CurrentUserImage: getCurrentUserProfileImage(state),
    isUploading:      isUploadingFiles(ModelType.UploadFile.CommentImage)(state),
    isLoading:        getCommentsLoadingSel(state),
    previewFiles:     getFilesUploaded(ModelType.UploadFile.CommentImage)(state),
    previewFormFiles: getFormFilesUploading(ModelType.UploadFile.CommentImage)(state),
    visibileList:     getCompVisibileDialogAddCommentsSel(state),
    config:           getUpoadConfSel(state)[ModelType.UploadFile.CommentImage],
});

const mapStateToDispatch = (dispatch) => ({
    addComment:           (PostId, Text, Limit) => dispatch(actions.addComment({
        PostId,
        Text,
        Limit,
    })),
    uploadCommentFiles:   (files) => dispatch(actions.uploadFilesRequested({
        files,
        uploadType: ModelType.UploadFile.CommentImage,
    })),
    removeCommentImage:   (paths) => dispatch(actions.deleteFileRequested({
        paths,
        uploadType: ModelType.UploadFile.CommentImage,
    })),
    showDialogAddComment: (id) => dispatch(actions.showDialogAddComment(id)),
    hideDialogAddComment: (id) => dispatch(actions.hideDialogAddComment(id)),
});

export default connect(mapStateToProps, mapStateToDispatch)(AddComment);
