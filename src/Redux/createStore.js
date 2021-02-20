import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import thunk from 'redux-thunk';
import { errorCatcherMiddleware, apiMiddleware } from '~/Redux/Middlwares';
import combinedReducers from '~/Redux/Reducers';
import * as epic from '~/Redux/epics';

const epicMiddleware = createEpicMiddleware(
    combineEpics(
        epic.appInit,
        epic.apiConnected,
        epic.apiHandleRecievedMsgs,
        epic.AddedNewSocketId,
        epic.AddedClientToSocketId,
        epic.onRouteChange,
        epic.GetEventsList,
        epic.updateEvents,
        epic.GetNotesList,
        epic.updateNotes,
        epic.GetProfileById,
        epic.updateProfile,
        epic.GetCurrentUserById,
        epic.updateCurrentUser,
        epic.GetPostsList,
        epic.updatePosts,
        epic.GetPost,
        epic.updatePost,
        epic.GetLikesList,
        epic.updateLikes,
        epic.addLike,
        epic.deleteLike,
        epic.GetCommentsList,
        epic.updateComments,
        epic.deleteComment,
        epic.uploadFileRequested,
        epic.uploadFileFulfillied,
        epic.apiErrorHandling,
        epic.deleteFiles,
        epic.requestServerUploadFiles,
        epic.addComment,
        epic.deleteCommentUpdate,
        epic.addCommentsUpdate,
    ),
);

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware       =
          composeEnhancers(
              applyMiddleware(
                  errorCatcherMiddleware(),
                  apiMiddleware,
                  thunk,
                  epicMiddleware,
              ),
          );

export default () => createStore(
    combinedReducers,
    middleware,
);
