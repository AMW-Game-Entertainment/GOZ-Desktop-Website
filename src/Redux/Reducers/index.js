import { combineReducers } from 'redux';
import reducerEvents from '~/Redux/Reducers/events';
import reducerUser from '~/Redux/Reducers/user';
import reducerNotes from '~/Redux/Reducers/notes';
import reducerPosts from '~/Redux/Reducers/posts';
import reducerError from '~/Redux/Reducers/error';
import reducerAPI from '~/Redux/Reducers/api';
import reducerPage from '~/Redux/Reducers/page';
import reducerLikes from '~/Redux/Reducers/likes';
import reducerComments from '~/Redux/Reducers/comments';
import reducerComponentVisibility from '~/Redux/Reducers/componentVisibility';
import reducerUploads from '~/Redux/Reducers/uploads';
import reducerOm from '~/Redux/Reducers/oM';
import reducerNotifications from '~/Redux/Reducers/notifications';

export default combineReducers({
    oM:                  reducerOm,
    error:               reducerError,
    events:              reducerEvents,
    notes:               reducerNotes,
    user:                reducerUser,
    posts:               reducerPosts,
    api:                 reducerAPI,
    page:                reducerPage,
    likes:               reducerLikes,
    comments:            reducerComments,
    componentVisibility: reducerComponentVisibility,
    notifications:       reducerNotifications,
    uploads:             reducerUploads,
});

