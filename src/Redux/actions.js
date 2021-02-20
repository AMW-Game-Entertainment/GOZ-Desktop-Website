import { types } from '~/Redux';

export default {
    appInitialized() {
        return {
            type: types.APP_INITIALIZED,
        };
    },
    initializeChangePage() {
        return {
            type: types.INIT_CHANGE_PAGE,
        };
    },
    getEvents({ UserId, Limit }) {
        return {
            type:    types.GET_EVENTS,
            payload: { UserId, Limit },
        };
    },
    getNotes({ UserId, Limit }) {
        return {
            type:    types.GET_NOTES,
            payload: { UserId, Limit },
        };
    },
    getLikes({ PostId, Type, Limit }) {
        return {
            type:    types.GET_LIKES,
            payload: { PostId, Type, Limit },
        };
    },
    addLike({ PostId, Type }) {
        return {
            type:    types.ADD_LIKE,
            payload: { PostId, Type },
        };
    },
    deleteLike({ PostId, Type }) {
        return {
            type:    types.DELETE_LIKE,
            payload: { PostId, Type },
        };
    },
    getComments({ PostId, LastId, Limit }) {
        return {
            type:    types.GET_COMMENTS,
            payload: { PostId, LastId, Limit },
        };
    },
    addComment({ PostId, Text, Limit }) {
        return {
            type:    types.ADD_COMMENT,
            payload: { PostId, Text, Limit },
        };
    },
    deleteComment({ PostId, CommentType, CommentId, Limit }) {
        return {
            type:    types.DELETE_COMMENT,
            payload: { PostId, CommentType, CommentId, Limit },
        };
    },
    uploadFilesRequested({ files, uploadType }) {
        return {
            type:    types.UPLOAD_FILE_REQUESTED,
            payload: { files, uploadType },
        };
    },
    uploadFilesFulfilled({ Files, uploadType }) {
        return {
            type:    types.UPLOAD_FILE_FULFILLIED,
            payload: { Files, uploadType },
        };
    },
    resetFiles({ uploadType }) {
        return {
            type:    types.RESET_FILES,
            payload: { uploadType },
        };
    },
    requestServerUploadFiles({ Files, uploadType }) {
        return {
            type:    types.REQUEST_SERVER_UPLOAD_FILES,
            payload: { Files, uploadType },
        };
    },
    deleteFileRequested({ paths, uploadType }) {
        return {
            type:    types.DELETE_FILES_REQUESTED,
            payload: { paths, uploadType },
        };
    },
    deleteFileFulfillied({ newFiles, uploadType }) {
        return {
            type:    types.DELETE_FILES_FULFILLIED,
            payload: { newFiles, uploadType },
        };
    },
    notificationDismissalRequested(id) {
        return {
            type:    types.REMOVE_NOTIFICATION,
            payload: { id },
        };
    },
    addNotificationRequested(payload) {
        return {
            type: types.ADD_NOTIFICATION,
            payload,
        };
    },
    getProfile({ UserId }) {
        return {
            type:    types.GET_PROFILE,
            payload: { UserId },
        };
    },
    getCurrentUser({ UserId }) {
        return {
            type:    types.GET_CURRENT_USER,
            payload: { UserId },
        };
    },
    getPosts({ UserId, LastPostId, Limit }) {
        return {
            type:    types.GET_POSTS,
            payload: { UserId, LastPostId, Limit },
        };
    },
    getPost({ PostId }) {
        return {
            type:    types.GET_POST,
            payload: { PostId },
        };
    },
    showDialogComment(id) {
        return {
            type:    types.SHOW_COMMENT_DIALOG,
            payload: { id },
        };
    },
    hideDialogComment(id) {
        return {
            type:    types.HIDE_COMMENT_DIALOG,
            payload: { id },
        };
    },
    showDialogAddComment(id) {
        return {
            type:    types.SHOW_ADD_COMMENT_DIALOG,
            payload: { id },
        };
    },
    hideDialogAddComment(id) {
        return {
            type:    types.HIDE_ADD_COMMENT_DIALOG,
            payload: { id },
        };
    },
    apiRequestEvents({ UserId, Limit }) {
        return {
            type:    types.API_REQUEST_EVENTS,
            payload: { UserId, Limit },
        };
    },
    apiRequestLikes({ PostId, Type, Limit }) {
        return {
            type:    types.API_REQUEST_LIKES,
            payload: { PostId, Type, Limit },
        };
    },
    apiRequestComments({ PostId, PostType, LastId, Limit }) {
        return {
            type:    types.API_REQUEST_COMMENTS,
            payload: { PostId, PostType, LastId, Limit },
        };
    },
    apiRequestAddComment({ PostId, PostType, CurrentFirstId, Limit, Images, UserId, Text }) {
        return {
            type:    types.API_REQUEST_ADD_COMMENT,
            payload: { PostId, PostType, CurrentFirstId, Limit, Images, UserId, Text },
        };
    },
    apiRequestDeleteComment({ PostId, PostType, CommentType, CurrentFirstId, CommentId, Limit }) {
        return {
            type:    types.API_REQUEST_DELETE_COMMENT,
            payload: { PostId, PostType, CommentType, CurrentFirstId, CommentId, Limit },
        };
    },
    apiRequestNotes({ UserId, Limit }) {
        return {
            type:    types.API_REQUEST_NOTES,
            payload: { UserId, Limit },
        };
    },
    apiRequestPosts({ UserId, Limit, LastPostId }) {
        return {
            type:    types.API_REQUEST_POSTS,
            payload: { UserId, Limit, LastPostId },
        };
    },
    apiRequestPost({ PostId }) {
        return {
            type:    types.API_REQUEST_POST,
            payload: { PostId },
        };
    },
    apiRequestProfileById({ UserId, SocketId }) {
        return {
            type:    types.API_REQUEST_PROFILE_BY_ID,
            payload: { UserId, SocketId },
        };
    },
    apiRequestCurrentUserById({ UserId, SocketId }) {
        return {
            type:    types.API_REQUEST_CURRENT_USER_BY_ID,
            payload: { UserId, SocketId },
        };
    },
    apiRequestDeleteFiles({ paths, uploadType }) {
        return {
            type:    types.API_REQUEST_DELETE_FILES,
            payload: { paths, uploadType },
        };
    },
    apiRequestOM() {
        return {
            type: types.API_REQUEST_OPEN_MESSAGE,
        };
    },
    apiRequestAddLike({ PostId, Type, SocketId, UserId }) {
        return {
            type:    types.API_REQUEST_ADD_LIKE,
            payload: { PostId, SocketId, Type, UserId },
        };
    },
    apiRequestDeleteLike({ PostId, Type, LikeId }) {
        return {
            type:    types.API_REQUEST_DELETE_LIKE,
            payload: { PostId, Type, LikeId },
        };
    },
    apiRequestStopUploadFiles({ uploadType }) {
        return {
            type:    types.API_STOP_UPLOAD_FILES,
            payload: { uploadType },
        };
    },
    setSocketId({ SocketId }) {
        return {
            type:    types.SET_SOCKET_ID,
            payload: { SocketId },
        };
    },
    apiRequestNewSocketId() {
        return {
            type: types.API_REQUEST_NEW_SOCKET_ID,
        };
    },
    apiRequestAddClient({ SocketId }) {
        return {
            type:    types.API_REQUEST_ADD_CLIENT,
            payload: { SocketId },
        };
    },
    updateNamespace({ Namespace }) {
        return {
            type:    types.UPDATE_NAMESPACE,
            payload: { Namespace },
        };
    },
    updateRoute({ Route }) {
        return {
            type:    types.UPDATE_ROUTE,
            payload: { Route },
        };
    },
    updateEvents(events) {
        return {
            type:    types.UPDATE_EVENTS,
            payload: events,
        };
    },
    updateNotes(notes) {
        return {
            type:    types.UPDATE_NOTES,
            payload: notes,
        };
    },
    updateLikes(likes) {
        return {
            type:    types.UPDATE_LIKES,
            payload: likes,
        };
    },
    updateProfile(user) {
        return {
            type:    types.UPDATE_PROFILE,
            payload: user,
        };
    },
    updateCurrentUser(user) {
        return {
            type:    types.UPDATE_CURRENT_USER,
            payload: user,
        };
    },
    updatePosts(posts) {
        return {
            type:    types.UPDATE_POSTS,
            payload: posts,
        };
    },
    updatePost(post) {
        return {
            type:    types.UPDATE_POST,
            payload: post,
        };
    },
    updateLike({ list, PostId, Type }) {
        return {
            type:    types.UPDATE_LIKE,
            payload: { list, PostId, Type },
        };
    },
    updateComment({ list, PostId, PostType }) {
        return {
            type:    types.UPDATE_COMMENTS,
            payload: { list, PostId, PostType },
        };
    },
    updateCommentFirstIds({ list }) {
        return {
            type:    types.UPDATE_FIRST_IDS,
            payload: { list },
        };
    },
    cleanPostsList() {
        return {
            type: types.CLEAN_POSTS,
        };
    },
    errorReceived(error, lastAction) {
        return {
            type:    types.ERROR_RECIEVED,
            payload: { error, lastAction },
        };
    },
    errorFromAPI(error) {
        return {
            type:    types.API_SOCKET_ERROR,
            payload: error,
        };
    },
    connectToAPI() {
        return {
            type: types.API_CONNECT,
        };
    },
    connectedToAPI() {
        return {
            type: types.API_CONNECTED,
        };
    },
    disconnectAPI() {
        return {
            type: types.API_DISCONNECT,
        };
    },
    disconnectedAPI() {
        return {
            type: types.API_DISCONNECTED,
        };
    },
    sendToAPI(msg) {
        return {
            type:    types.API_SEND_MESSAGE,
            payload: msg,
        };
    },
    recievedFromAPI(msg) {
        return {
            type:    types.API_RECIEVE_MESSAGE,
            payload: msg,
        };
    },
};
