import { createSelector } from 'reselect';
import { phrases, Paths } from '~/Constants';

export const getProfileSel = (state) => state.user.Profile;

export const getProfileCoverSel = (state) => state.user.Profile.CoverImage;

export const getProfileCharNameSel = (state) => state.user.Profile.Nickname;

export const getCurrentUserCharNameSel = (state) => state.user.CurrentUser.Profile.Nickname;

export const getCurrentUserProfileImageSel = (state) => state.user.CurrentUser.Profile.ProfileImage;

export const getCurrentUserCoverImageSel = (state) => state.user.CurrentUser.Profile.CoverImage;

export const getCurrentUserIdSel = (state) => state.user.CurrentUser.Profile.UserId || 0;

export const isLoggedSel = (state) => state.user.CurrentUser.isLogged;

export const getNotesSel = (state) => state.notes.List;

export const getNotesLoadingSel = (state) => state.notes.isFetching;

export const getNotesErrorSel = (state) => state.notes.hasError;

export const getEventsSel = (state) => state.events.List;

export const getEventsLoadingSel = (state) => state.events.isFetching;

export const getEventsErrorSel = (state) => state.events.hasError;

export const getLikesSel = (state) => state.likes.List;

export const getLikesLoadingSel = (state) => state.likes.isFetching;

export const getCommentsSel = (state) => state.comments.List;

export const getCommentsFirstIdsSel = (state) => state.comments.FirstIds;

export const getCommentsLoadingSel = (state) => state.comments.isFetching;

export const getPostsSel = (state) => state.posts.List;

export const getPostSel = (state) => state.posts.List[0] || {};

export const getUploadedFilesSel = (state) => state.uploads.List || {};

export const isLoadingPostsSel = (state) => state.posts.isFetching;

export const getCurretRouteSel = (state) => state.page.CurrentRoute;

export const getNamespaceSel = (state) => state.page.Namespace;

export const isConnectedSel = (state) => state.api.isConnected;

export const getSocketId = (state) => state.api.SocketId;

export const getCompVisibileDialogCommentsSel = (state) => state.componentVisibility.dialog.comments;

export const getCompVisibileDialogAddCommentsSel = (state) => state.componentVisibility.dialog.addComment;

export const getUpoadConfSel = (state) => state.oM.List.UploadConfig || {};

export const getOmSel = (state) => state.oM.List || {};

export const getNotificatonsSel = (state) => state.notifications.messages;

export const doneLoadingPage = createSelector(
    [isConnectedSel, getSocketId],
    (isConnected = false, socketId) => Boolean(isConnected && socketId),
);

export const getCurrentUserCharName = createSelector(
    [getCurrentUserCharNameSel],
    (charName = phrases.Guest) => charName,
);

export const getCurrentUserProfileImage = createSelector(
    [getCurrentUserProfileImageSel],
    (image = Paths.default.ProfileImage) => image,
);

export const getCurrentUserCoverImage = createSelector(
    [getCurrentUserProfileImageSel],
    (image = Paths.default.CoverImage) => image,
);

export const getPostFirstImage = createSelector(
    [getPostSel],
    (posts = []) => posts[0] ? posts.Post.ImageSrc : '' || '',
);

export const getPostPageBackground = createSelector(
    [getPostFirstImage],
    (image = Paths.Assets.ContentBackground) => image,
);

export const getLastPostId = createSelector(
    [getPostsSel],
    (posts = []) => posts.length ? posts[(posts.length - 1)].Post.Id : 0,
);

export const getProfileCover = createSelector(
    [getProfileCoverSel],
    (image = Paths.default.CoverImage) => image,
);

export const getPostType = (PostId) => createSelector(
    [getPostsSel],
    (posts) => {
        const { Post } = posts.find(({ Post: { Id } }) => Id === PostId) || {};
        return Post.Type || 0;
    },
);

export const getCommentsByPostId = (PostId) => createSelector(
    [getCommentsSel, getPostType(PostId)],
    (comments, Type) => comments[PostId]
        ? comments[PostId][Type]
            ? comments[PostId][Type]
            : []
        : [] || [],
);

export const getCommentsFirstId = (PostId) => createSelector(
    [getCommentsFirstIdsSel, getPostType(PostId)],
    (lastIds, Type) => lastIds[PostId]
        ? lastIds[PostId][Type]
            ? lastIds[PostId][Type]
            : 0
        : 0 || 0,
);

export const getFilesUploaded = (uploadType) => createSelector(
    [getUploadedFilesSel],
    (allTypeFiles) => Object.keys(allTypeFiles[uploadType] || {}).length
        ? allTypeFiles[uploadType].Files || [] : [],
);

export const isUploadingFiles = (uploadType) => createSelector(
    [getUploadedFilesSel],
    (allTypeFiles) => Object.keys(allTypeFiles[uploadType] || {}).length
        ? allTypeFiles[uploadType].isUploading || false : false,
);

export const getFormFilesUploading = (uploadType) => createSelector(
    [getUploadedFilesSel],
    (allTypeFiles) => Object.keys(allTypeFiles[uploadType] || {}).length
        ? allTypeFiles[uploadType].FormFiles || [] : [],
);

export const hasOM = createSelector(
    [getOmSel],
    (oM) => Object.keys(oM).length > 0,
);
