export default {
    APP_INITIALIZED:    'APP_INITIALIZED',
    INIT_PAGE_REQUESTS: 'INIT_PAGE_REQUESTS',
    INIT_CHANGE_PAGE:   'INIT_CHANGE_PAGE',

    ERROR_RECIEVED: 'ERROR_RECIEVED',

    GET_EVENTS:                  'GET_EVENTS',
    UPDATE_EVENTS:               'UPDATE_EVENTS',
    GET_PROFILE:                 'GET_PROFILE',
    UPDATE_PROFILE:              'UPDATE_PROFILE',
    GET_CURRENT_USER:            'GET_CURRENT_USER',
    UPDATE_CURRENT_USER:         'UPDATE_CURRENT_USER',
    GET_NOTES:                   'GET_NOTES',
    UPDATE_NOTES:                'UPDATE_NOTES',
    GET_LIKES:                   'GET_LIKES',
    GET_COMMENTS:                'GET_COMMENTS',
    UPDATE_LIKES:                'UPDATE_LIKES',
    GET_POSTS:                   'GET_POSTS',
    UPDATE_POSTS:                'UPDATE_POSTS',
    GET_POST:                    'GET_POST',
    UPDATE_POST:                 'UPDATE_POST',
    CLEAN_POSTS:                 'CLEAN_POSTS',
    ADD_LIKE:                    'ADD_LIKE',
    DELETE_LIKE:                 'DELETE_LIKE',
    UPDATE_LIKE:                 'UPDATE_LIKE',
    UPDATE_FIRST_IDS:            'UPDATE_FIRST_IDS',
    ADD_COMMENT:                 'ADD_COMMENT',
    DELETE_COMMENT:              'DELETE_COMMENT',
    UPDATE_COMMENTS:             'UPDATE_COMMENTS',
    UPLOAD_FILE_REQUESTED:       'UPLOAD_FILE_REQUESTED',
    UPLOAD_FILE_FULFILLIED:      'UPLOAD_FILE_FULFILLIED',
    REQUEST_SERVER_UPLOAD_FILES: 'REQUEST_SERVER_UPLOAD_FILES',
    REMOVE_NOTIFICATION:         'REMOVE_NOTIFICATION',
    ADD_NOTIFICATION:            'ADD_NOTIFICATION',
    DELETE_FILES_REQUESTED:      'DELETE_FILES_REQUESTED',
    DELETE_FILES_FULFILLIED:     'DELETE_FILES_FULFILLIED',
    RESET_FILES:                 'RESET_FILES',

    SHOW_COMMENT_DIALOG:     'SHOW_COMMENT_DIALOG',
    HIDE_COMMENT_DIALOG:     'HIDE_COMMENT_DIALOG',
    SHOW_ADD_COMMENT_DIALOG: 'SHOW_ADD_COMMENT_DIALOG',
    HIDE_ADD_COMMENT_DIALOG: 'HIDE_ADD_COMMENT_DIALOG',

    // @API
    // DEFAULT
    API_REQUEST:  '@API/REQUEST',
    API_RESPONSE: '@API/RESPONSE',
    API_STOP:     '@API/STOP',
    API_FAILED:   '@API/FAILED',
    API_COMPLETE: '@API/COMPLETE',

    UPDATE_NAMESPACE: 'UPDATE_NAMESPACE',
    UPDATE_ROUTE:     'UPDATE_ROUTE',

    INIT_MAIN_PAGE: 'INIT_MAIN_PAGE',
    INIT_POST_PAGE: 'INIT_POST_PAGE',

    API_CONNECT:         '@API/CONNECT',
    API_CONNECTED:       '@API/CONNECTED',
    API_DISCONNECT:      '@API/DISCONNECT',
    API_DISCONNECTED:    '@API/DISCONNECTED',
    API_SEND_MESSAGE:    '@API/SEND_MESSAGE',
    API_SOCKET_ERROR:    '@API/SOCKET_ERROR',
    API_RECIEVE_MESSAGE: '@API/API_RECIEVE_MESSAGE',

    SET_SOCKET_ID: 'SET_SOCKET_ID',

    // NEW SOCKET ID
    API_REQUEST_NEW_SOCKET_ID:  '@API/REQUEST_NEW_SOCKET_ID',
    API_RESPONSE_NEW_SOCKET_ID: '@API/RESPONSE_NEW_SOCKET_ID',
    API_FAILED_NEW_SOCKET_ID:   '@API/FAILED_NEW_SOCKET_ID',

    // ADD CLIENT WITH SOCKET ID
    API_REQUEST_ADD_CLIENT:  '@API/REQUEST_ADD_CLIENT',
    API_RESPONSE_ADD_CLIENT: '@API/RESPONSE_ADD_CLIENT',
    API_FAILED_ADD_CLIENT:   '@API/FAILED_ADD_CLIENT',

    // EVENTS
    API_REQUEST_EVENTS:  '@API/REQUEST_EVENTS',
    API_RESPONSE_EVENTS: '@API/RESPONSE_EVENTS',
    API_FAILED_EVENTS:   '@API/API_FAILED_EVENTS',

    // NOTES
    API_REQUEST_NOTES:  '@API/REQUEST_NOTES',
    API_RESPONSE_NOTES: '@API/RESPONSE_NOTES',
    API_FAILED_NOTES:   '@API/FAILED_NOTES',

    // LIKES
    API_REQUEST_LIKES:  '@API/REQUEST_LIKES',
    API_RESPONSE_LIKES: '@API/RESPONSE_LIKES',
    API_FAILED_LIKES:   '@API/FAILED_LIKES',

    // ADD_LIKE
    API_REQUEST_ADD_LIKE:  '@API/REQUEST_ADD_LIKE',
    API_RESPONSE_ADD_LIKE: '@API/RESPONSE_ADD_LIKE',
    API_FAILED_ADD_LIKE:   '@API/FAILED_ADD_LIKE',

    // DELETE_LIKE
    API_REQUEST_DELETE_LIKE:  '@API/REQUEST_DELETE_LIKE',
    API_RESPONSE_DELETE_LIKE: '@API/RESPONSE_DELETE_LIKE',
    API_FAILED_DELETE_LIKE:   '@API/FAILED_DELETE_LIKE',

    // COMMENTS
    API_REQUEST_COMMENTS:  '@API/REQUEST_COMMENTS',
    API_RESPONSE_COMMENTS: '@API/RESPONSE_COMMENTS',
    API_FAILED_COMMENTS:   '@API/FAILED_COMMENTS',

    // ADD_COMMENT
    API_REQUEST_ADD_COMMENT:  '@API/REQUEST_ADD_COMMENT',
    API_RESPONSE_ADD_COMMENT: '@API/RESPONSE_ADD_COMMENT',
    API_FAILED_ADD_COMMENT:   '@API/FAILED_ADD_COMMENT',

    // DELETE_COMMENT
    API_REQUEST_DELETE_COMMENT:  '@API/REQUEST_DELETE_COMMENT',
    API_RESPONSE_DELETE_COMMENT: '@API/RESPONSE_DELETE_COMMENT',
    API_FAILED_DELETE_COMMENT:   '@API/FAILED_DELETE_COMMENT',

    // UPLOAD_FILES
    API_REQUEST_UPLOAD_FILES:  '@API/REQUEST_UPLOAD_FILES',
    API_RESPONSE_UPLOAD_FILES: '@API/RESPONSE_UPLOAD_FILES',
    API_FAILED_UPLOAD_FILES:   '@API/FAILED_UPLOAD_FILES',
    API_COMPLETE_UPLOAD_FILES: '@API/API_COMPLETE_UPLOAD_FILES',
    API_STOP_UPLOAD_FILES:     '@API/API_STOP_UPLOAD_FILES',

    // DELETE_FILE
    API_REQUEST_DELETE_FILES:  '@API/REQUEST_DELETE_FILES',
    API_RESPONSE_DELETE_FILES: '@API/RESPONSE_DELETE_FILES',
    API_FAILED_DELETE_FILES:   '@API/FAILED_DELETE_FILES',

    // POSTS
    API_REQUEST_POSTS:  '@API/REQUEST_POSTS',
    API_RESPONSE_POSTS: '@API/RESPONSE_POSTS',
    API_FAILED_POSTS:   '@API/FAILED_POSTS',

    // POST
    API_REQUEST_POST:  '@API/REQUEST_POST',
    API_RESPONSE_POST: '@API/RESPONSE_POST',
    API_FAILED_POST:   '@API/FAILED_POST',

    // USER
    API_REQUEST_PROFILE_BY_ID:  '@API/REQUEST_PROFILE_BY_ID',
    API_RESPONSE_PROFILE_BY_ID: '@API/RESPONSE_PROFILE_BY_ID',
    API_FAILED_PROFILE_BY_ID:   '@API/FAILED_PROFILE_BY_ID',

    // CURRENT USER
    API_REQUEST_CURRENT_USER_BY_ID:  '@API/REQUEST_CURRENT_USER_BY_ID',
    API_RESPONSE_CURRENT_USER_BY_ID: '@API/RESPONSE_CURRENT_USER_BY_ID',
    API_FAILED_CURRENT_USER_BY_ID:   '@API/FAILED_CURRENT_USER_BY_ID',

    API_REQUEST_OPEN_MESSAGE:  '@API/REQUEST_OPEN_MESSAGE',
    API_RESPONSE_OPEN_MESSAGE: '@API/RESPONSE_OPEN_MESSAGE',
    API_FAILED_OPEN_MESSAGE:   '@API/FAILED_OPEN_MESSAGE',
};
