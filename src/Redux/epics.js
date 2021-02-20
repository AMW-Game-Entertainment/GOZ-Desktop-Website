/* global Buffer */
import { ofType } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import {
    flatMap,
    map,
    delay,
    catchError,
    concat,
    tap,
    switchMap,
    filter,
} from 'rxjs/operators';
import {
    hasOM,
    getSocketId,
    getCurrentUserCharName,
    getCurrentUserIdSel,
    getCurrentUserProfileImage,
    getCurrentUserCoverImage,
    getLikesSel,
    getCommentsSel,
    getUpoadConfSel,
    getCommentsFirstIdsSel,
    getFilesUploaded,
    getPostType,
} from '~/Redux/selectors';
import { Config, phrases, Notifications, ModelType } from '~/Constants';
import { actions, types } from '~/Redux';
import { apiHelper } from '~/Helpers';
import {
    noteUtil,
    eventUtil,
    postsUtil,
    cookieUtil,
    urlUtil,
    likeUtil,
    commentUtil,
    fileUtil,
    textUtil,
    errorUtil,
} from '~/Utils';

const { Socket: { Namespace: { GOZ } } } = Config;

const uploadFiles = (files, extraParams, failedPayload) => enhanceApiCall$(
    apiHelper.uploadFiles.bind(null, files, extraParams),
    [
        types.API_REQUEST_UPLOAD_FILES,
        types.API_FAILED_UPLOAD_FILES,
        types.API_RESPONSE_UPLOAD_FILES,
        types.API_COMPLETE_UPLOAD_FILES,
    ],
    failedPayload,
);

export const appInit = (actions$) => actions$.pipe(
    ofType(types.APP_INITIALIZED),
    map(() => ({
        Namespace: GOZ,
        Route:     urlUtil.getCurrentRoute(),
    })),
    flatMap(({ Namespace, Route }) => of(
        actions.updateNamespace({ Namespace }),
        actions.updateRoute({ Route }),
        actions.connectToAPI(),
    )),
);

export const apiConnected = (action$) => action$.pipe(
    ofType(types.API_CONNECTED),
    delay(1000),
    map(() => ({
        SocketId: cookieUtil.getCookie('SocketId') || false,
    })),
    map(({ SocketId }) => ({
        ...SocketId ? actions.apiRequestAddClient({ SocketId }) : actions.apiRequestNewSocketId(),
    })),
    flatMap((msg) => of(actions.sendToAPI(msg))),
);

export const AddedNewSocketId = (action$, store) => action$.pipe(
    ofType(types.API_RESPONSE_NEW_SOCKET_ID),
    tap(({ payload: { SocketId } }) => cookieUtil.setCookie('SocketId', SocketId)),
    map(() => ({
        hasOMConfs: hasOM(store.getState()),
    })),
    flatMap(({ hasOMConfs }) => of(
        ...hasOMConfs ? [] : [actions.sendToAPI(actions.apiRequestOM())],
        actions.setSocketId({ SocketId: cookieUtil.getCookie('SocketId') }),
    )),
);

export const AddedClientToSocketId = (actions$, store) => actions$.pipe(
    ofType(types.API_RESPONSE_ADD_CLIENT),
    map(() => ({
        hasOMConfs: hasOM(store.getState()),
    })),
    flatMap(({ hasOMConfs }) => of(
        ...hasOMConfs ? [] : [actions.sendToAPI(actions.apiRequestOM())],
        actions.setSocketId({ SocketId: cookieUtil.getCookie('SocketId') }),
    )),
);

export const onRouteChange = (action$) => action$.pipe(
    ofType(types.INIT_CHANGE_PAGE),
    map(() => ({
        Namespace: GOZ,
        Route:     urlUtil.getCurrentRoute(),
    })),
    flatMap(({ Namespace, Route }) => of(
        actions.updateNamespace({ Namespace }),
        actions.updateRoute({ Route }),
    )),
);

export const apiHandleRecievedMsgs = (action$) => action$.pipe(
    ofType(types.API_RECIEVE_MESSAGE),
    flatMap(({ payload: { type, payload } }) => of({ type, payload })),
);

export const GetPost = (actions$) => actions$.pipe(
    ofType(types.GET_POST),
    map(({ payload: { PostId } }) => ({
        PostId,
    })),
    flatMap(
        ({ PostId }) => of(actions.sendToAPI(actions.apiRequestPost({
            PostId,
        }))),
    ),
);

export const updatePost = (actions$) => actions$.pipe(
    ofType(types.API_RESPONSE_POST),
    map(({ payload: { List: posts } }) => [...postsUtil.refactorPosts(posts)]),
    flatMap((posts) => of(actions.updatePost(posts))),
);

export const GetPostsList = (actions$) => actions$.pipe(
    ofType(types.GET_POSTS),
    map(({ payload: { UserId, LastPostId, Limit } }) => ({
        UserId,
        LastPostId,
        Limit,
    })),
    flatMap(
        ({ UserId, LastPostId, Limit }) => of(actions.sendToAPI(actions.apiRequestPosts({
            UserId,
            LastPostId,
            Limit,
        }))),
    ),
);

export const updatePosts = (actions$) => actions$.pipe(
    ofType(types.API_RESPONSE_POSTS),
    map(({ payload: { List: posts } }) => [...postsUtil.refactorPosts(posts)]),
    flatMap((posts) => of(actions.updatePosts(posts))),
);

export const GetNotesList = (action$) => action$.pipe(
    ofType(types.GET_NOTES),
    map(({ payload: { UserId, Limit } }) => ({
        UserId,
        Limit,
    })),
    flatMap(
        ({ UserId, Limit }) => of(actions.sendToAPI(actions.apiRequestNotes({
            UserId,
            Limit,
        }))),
    ),
);

export const updateNotes = (action$) => action$.pipe(
    ofType(types.API_RESPONSE_NOTES),
    map(({ payload: { List: notes } }) => [...noteUtil.refactorNotes(notes)]),
    flatMap((notes) => of(actions.updateNotes(notes))),
);

export const GetEventsList = (action$) => action$.pipe(
    ofType(types.GET_EVENTS),
    map(({ payload: { UserId, Limit } }) => ({
        UserId,
        Limit,
    })),
    flatMap(
        ({ UserId, Limit }) => of(actions.sendToAPI(actions.apiRequestEvents({
            UserId,
            Limit,
        }))),
    ),
);

export const updateEvents = (action$) => action$.pipe(
    ofType(types.API_RESPONSE_EVENTS),
    map(({ payload: { List: events } }) => ({
        events: [...eventUtil.refactorEvents(events)],
    })),
    flatMap(({ events }) => of(actions.updateEvents(events))),
);

export const GetLikesList = (action$) => action$.pipe(
    ofType(types.GET_LIKES),
    map(({ payload: { PostId, Type, Limit } }) => ({
        Type,
        PostId,
        Limit,
    })),
    flatMap(
        ({ PostId, Type, Limit }) => of(actions.sendToAPI(actions.apiRequestLikes({
            PostId,
            Type,
            Limit,
        }))),
    ),
);

export const GetCommentsList = (action$, store) => action$.pipe(
    ofType(types.GET_COMMENTS),
    map(({ payload: { PostId, LastId, Limit } }) => ({
        PostType: getPostType(PostId)(store.getState()),
        PostId,
        LastId,
        Limit,
    })),
    flatMap(
        ({ PostId, PostType, LastId, Limit }) => of(actions.sendToAPI(actions.apiRequestComments({
            PostId,
            PostType,
            LastId,
            Limit,
        }))),
    ),
);

export const updateComments = (action$, store) => action$.pipe(
    ofType(types.API_RESPONSE_COMMENTS),
    map(({ payload: { List: comments, PostId, PostType, FirstCommentId } }) => ({
        comments:        commentUtil.refactorComments(
            comments,
            PostId,
            PostType,
            getCommentsSel(store.getState()),
            true,
        ),
        PostId,
        PostType,
        firstCommentIds: commentUtil.refactorCommentsId(
            getCommentsFirstIdsSel(store.getState()),
            FirstCommentId,
            PostId,
            PostType,
        ),
    })),
    flatMap(({ comments, firstCommentIds, PostId, PostType }) => of(actions.updateComment({
        list: comments,
        PostId,
        Type: PostType,
    }), actions.updateCommentFirstIds({ list: firstCommentIds }))),
);

export const deleteCommentUpdate = (action$, store) => action$.pipe(
    ofType(types.API_RESPONSE_DELETE_COMMENT),
    map(({ payload: { List: comments, PostId, PostType, FirstCommentId } }) => ({
        comments:        commentUtil.refactorComments(
            comments,
            PostId,
            PostType,
            getCommentsSel(store.getState()),
            false,
        ),
        PostId,
        PostType,
        firstCommentIds: commentUtil.refactorCommentsId(
            getCommentsFirstIdsSel(store.getState()),
            FirstCommentId,
            PostId,
            PostType,
        ),
    })),
    flatMap(({ comments, firstCommentIds, PostId, PostType }) => of(actions.updateComment({
        list: comments,
        PostId,
        Type: PostType,
    }), actions.updateCommentFirstIds({ list: firstCommentIds }))),
);

export const addCommentsUpdate = (action$, store) => action$.pipe(
    ofType(types.API_RESPONSE_ADD_COMMENT),
    map(({ payload: { List: comments, FirstCommentId, PostId, PostType } }) => ({
        comments:        commentUtil.refactorComments(
            comments,
            PostId,
            PostType,
            getCommentsSel(store.getState()),
            false,
        ),
        PostId,
        PostType,
        firstCommentIds: commentUtil.refactorCommentsId(
            getCommentsFirstIdsSel(store.getState()),
            FirstCommentId,
            PostId,
            PostType,
        ),
    })),
    flatMap(({ comments, firstCommentIds, PostId, PostType }) => of(
        actions.resetFiles({
            uploadType: ModelType.UploadFile.CommentImage,
        }),
        actions.updateComment({
            list: comments,
            PostId,
            Type: PostType,
        }),
        actions.updateCommentFirstIds({ list: firstCommentIds }),
    )),
);

export const updateLikes = (action$, store) => action$.pipe(
    ofType(
        types.API_RESPONSE_LIKES,
        types.API_RESPONSE_ADD_LIKE,
        types.API_RESPONSE_DELETE_LIKE,
    ),
    map(({ payload: { List: newLikes, Type, PostId } }) => ({
        Type,
        newLikes,
        PostId,
    })),
    map(({ newLikes, PostId, Type }) => ({
        likes: likeUtil.refactorLikes(newLikes, PostId, Type, getLikesSel(store.getState())),
        PostId,
        Type,
    })),
    flatMap(({ likes, PostId, Type }) => of(actions.updateLikes({ list: likes, PostId, Type }))),
);

export const GetCurrentUserById = (actions$) => actions$.pipe(
    ofType(types.GET_CURRENT_USER),
    map(({ payload: { UserId } }) => ({
        UserId,
        MultipleClients: true,
        SocketId:        cookieUtil.getCookie('SocketId'),
    })),
    flatMap(
        ({ UserId, SocketId, MultipleClients }) => of(actions.sendToAPI(actions.apiRequestCurrentUserById({
            UserId,
            SocketId,
            MultipleClients,
        }))),
    ),
);

export const addLike = (action$, store) => action$.pipe(
    ofType(types.ADD_LIKE),
    map(({ payload: { PostId, Type } }) => ({
        Id:        0,
        LikesList: getLikesSel(store.getState()),
        Like:      likeUtil.constructLike({
            PostId,
            Type,
            Char_Name:     getCurrentUserCharName(store.getState()),
            Cover_Image:   getCurrentUserCoverImage(store.getState()),
            Profile_Image: getCurrentUserProfileImage(store.getState()),
            UserId:        getCurrentUserIdSel(store.getState()),
        }),
        PostId,
        Type,
    })),
    map(({ LikesList, Like, PostId, Type }) => ({
        postLikes: likeUtil.addLike(LikesList, Like, PostId, Type),
        PostId,
        Type,
    })),
    flatMap(({ postLikes: likes, PostId, Type }) => of(
        actions.updateLike({ list: likes, PostId, Type }),
        actions.sendToAPI(actions.apiRequestAddLike({
            PostId,
            Type,
            UserId:   getCurrentUserIdSel(store.getState()),
            SocketId: getSocketId(store.getState()),
        })),
    )),
);

export const addComment = (action$, store) => action$.pipe(
    ofType(types.ADD_COMMENT),
    map(({ payload: { PostId, Text, Limit } }) => ({
        PostId,
        Text,
        Limit,
        PostType:     getPostType(PostId)(store.getState()),
        Images:       getFilesUploaded(ModelType.UploadFile.CommentImage)(store.getState()),
        CommentsList: getCommentsSel(store.getState()),
        Comment:      commentUtil.constructComment({
            PostId,
            Text,
            PostType:      getPostType(PostId)(store.getState()),
            Images:        getFilesUploaded(ModelType.UploadFile.CommentImage)(store.getState()),
            Char_Name:     getCurrentUserCharName(store.getState()),
            Cover_Image:   getCurrentUserCoverImage(store.getState()),
            Profile_Image: getCurrentUserProfileImage(store.getState()),
            UserId:        getCurrentUserIdSel(store.getState()),
        }),
    })),
    map(({ CommentsList, Comment, PostId, PostType, Images, Text, Limit }) => ({
        postComments:   commentUtil.addComment(CommentsList, Comment, PostId, PostType),
        CurrentFirstId: commentUtil.getPaginitionId(CommentsList[PostId][PostType]),
        PostId,
        PostType,
        Images,
        Text,
        Limit,
    })),
    flatMap(({ postComments: comments, PostId, PostType, Images, Text, Limit, CurrentFirstId }) => of(
        actions.updateComment({ list: comments, PostId, PostType }),
        actions.sendToAPI(actions.apiRequestAddComment({
            CurrentFirstId,
            PostId,
            PostType,
            Images,
            Text,
            Limit,
            UserId: getCurrentUserIdSel(store.getState()),
        })),
    )),
);

export const deleteLike = (action$, store) => action$.pipe(
    ofType(types.DELETE_LIKE),
    map(({ payload: { PostId, Type } }) => ({
        PostId,
        Type,
        UserId:    getCurrentUserIdSel(store.getState()),
        LikesList: getLikesSel(store.getState()),
    })),
    map(({ PostId, Type, UserId, LikesList }) => ({
        PostId,
        Type,
        LikeId:       likeUtil.getLikeId(LikesList[PostId][Type], UserId),
        newLikesList: likeUtil.removeLike(LikesList, PostId, UserId, Type),
    })),
    filter(({ LikeId }) => LikeId > 0),
    flatMap(({ PostId, Type, newLikesList, LikeId }) => of(
        actions.updateLike({ list: newLikesList, PostId, Type }),
        actions.sendToAPI(actions.apiRequestDeleteLike({
            PostId,
            Type,
            LikeId,
        })),
    )),
);

export const uploadFileRequested = (action$, store) => action$.pipe(
    ofType(types.UPLOAD_FILE_REQUESTED),
    map(({ payload: { files, uploadType } }) => ({
        files:         Array.from(files),
        uploadedFiles: getFilesUploaded(uploadType)(store.getState()),
        config:        getUpoadConfSel(store.getState())[uploadType],
        uploadType,
    })),
    map(({ files, config, uploadType, uploadedFiles }) => ({
        validResult: fileUtil.validateImageFile(files, uploadedFiles, config),
        uploadType,
    })),
    flatMap(({ validResult, uploadType }) => validResult.isError
        ? of(
            ...validResult.Errors.map((error) => actions.addNotificationRequested({
                text: textUtil.buildPhraseFromObj(error.search, phrases.ErroCodes[error.code]),
                type: Notifications.types.ERROR,
            })),
            ...validResult.Files.length
                ? [actions.requestServerUploadFiles({
                    Files: validResult.Files,
                    uploadType,
                })]
                : [actions.apiRequestStopUploadFiles({ uploadType })],
        )
        : of(actions.requestServerUploadFiles({ Files: validResult.Files, uploadType }))),
);

export const requestServerUploadFiles = (action$) => action$.pipe(
    ofType(types.REQUEST_SERVER_UPLOAD_FILES),
    map(({ payload: { Files, uploadType } }) => ({
        Files,
        uploadType,
    })),
    filter(({ Files }) => Files.length),
    switchMap(({ Files, uploadType }) => uploadFiles(Files, { uploadType })),
);

export const uploadFileFulfillied = (action$) => action$.pipe(
    ofType(types.API_RESPONSE_UPLOAD_FILES),
    map(({ payload: { Files, Errors, uploadType, isError } }) => ({
        isError,
        Files,
        Errors,
        uploadType,
    })),
    flatMap(({ Errors, Files, isError, uploadType }) => isError
        ? of(
            ...Errors.map((error) => actions.addNotificationRequested({
                text: textUtil.buildPhraseFromObj(error.Search, phrases.ErroCodes[error.ErroCodes]),
                type: Notifications.types.ERROR,
            })),
            ...Files.length ? [actions.uploadFilesFulfilled({ Files, uploadType })] : [],
        )
        : of(actions.uploadFilesFulfilled({ Files, uploadType }))),
);

export const apiErrorHandling = (actions$) => actions$.pipe(
    ofType(types.API_FAILED_UPLOAD_FILES),
    map(({ payload: { isError, Error: ErrorCode, Search } }) => ({
        isError,
        ErrorCode,
        Search,
    })),
    map(({ Search, ErrorCode }) => errorUtil.refactorError(ErrorCode, Search)),
    flatMap(({ isFatal, text, type }) => isFatal
        ? of(actions.addNotificationRequested({ text, type }))
        : of(actions.addNotificationRequested({ text, type }))),
);

export const deleteComment = (action$, { getState }) => action$.pipe(
    ofType(types.DELETE_COMMENT),
    map(({ payload: { PostId, CommentType, CommentId, Limit } }) => ({
        PostId,
        CommentId,
        Limit,
        CommentType,
        PostType:     getPostType(PostId)(getState()),
        CommentsList: getCommentsSel(getState()),
    })),
    map(({ PostId, CommentId, PostType, CommentType, CommentsList, Limit }) => ({
        PostId,
        CommentId,
        CommentType,
        PostType,
        Limit,
        CurrentFirstId:  commentUtil.getDeleteCurrentFirstId(CommentsList[PostId][PostType]),
        newCommentsList: commentUtil.removeComment(CommentsList, PostId, CommentId, PostType),
    })),
    filter(({ CommentId }) => CommentId > 0),
    flatMap(({ PostId, PostType, CommentType, newCommentsList, CommentId, CurrentFirstId, Limit }) => of(
        actions.updateComment({ list: newCommentsList, PostId, Type: PostType }),
        actions.sendToAPI(actions.apiRequestDeleteComment({
            PostId,
            PostType,
            CommentType,
            CurrentFirstId,
            CommentId,
            Limit,
        })),
    )),
);

export const deleteFiles = (action$, store) => action$.pipe(
    ofType(types.DELETE_FILES_REQUESTED),
    map(({ payload: { paths, uploadType } }) => ({
        paths,
        uploadType,
        files: getFilesUploaded(uploadType)(store.getState()),
    })),
    map((msg) => fileUtil.removeFile(msg)),
    flatMap(({ deletePaths, uploadType, newFiles }) =>
        of(
            actions.deleteFileFulfillied({ newFiles, uploadType }),
            actions.sendToAPI(actions.apiRequestDeleteFiles({ paths: deletePaths, uploadType })),
        )),
);

export const updateCurrentUser = (action$) => action$.pipe(
    ofType(types.API_RESPONSE_CURRENT_USER_BY_ID),
    map(({ payload: { List } }) => ({
        ...List[0],
    })),
    flatMap((user) => of(actions.updateCurrentUser(user))),
);

export const GetProfileById = (action$) => action$.pipe(
    ofType(types.GET_PROFILE),
    map(({ payload: { UserId } }) => ({
        UserId,
        SocketId: cookieUtil.getCookie('SocketId'),
    })),
    flatMap(
        ({ UserId, SocketId }) => of(actions.sendToAPI(actions.apiRequestProfileById({
            UserId,
            SocketId,
        }))),
    ),
);

export const updateProfile = (action$) => action$.pipe(
    ofType(types.API_RESPONSE_PROFILE_BY_ID),
    map(({ payload: { List } }) => ({
        ...List[0],
    })),
    flatMap((user) => of(actions.updateProfile(user))),
);

function enhanceApiCall$(fetch$, dispatchTypes, failedPayload) {
    /* eslint-disable indent */
    const [
              requestType = types.API_REQUEST,
              failureType = types.API_FAILED,
              successType = types.API_RESPONSE,
              complteType = types.API_COMPLETE,
          ]               = dispatchTypes;

    /* eslint-enable indent */
    return of({ type: requestType }).pipe( // 1st. dispatch requestType at the beginning
        concat( // concat emmits actions one after another, use merge to emmit all of them at once
            fetch$()
                .pipe(
                    map(
                        ({ type, payload }) => ({ type: type || successType, payload }), // 2nd dispatch success
                    ),
                    catchError((error) => { // catch the error - 3rd. dispatch error
                        console.warn(error); // eslint-disable-line no-console
                        // 2. catch error and - dispatch failure action *if provided
                        // OR propogate error to handle in epic
                        if (failureType) {
                            return of({ type: failureType, payload: { error, failedPayload }, isError: true });
                        }

                        return _throw(error);
                    }),
                ),
            of({ type: complteType }),
        ),
    );
}

/* eslint-enable */

