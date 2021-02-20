import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux';

const defaultState = {
    List: {},
};

const setUploadFileRequest = (state, { payload: { uploadType, files } }) => ({
    ...state,
    List: {
        ...state.List,
        [uploadType]: {
            ...state.List[uploadType],
            isUploading: true,
            FormFiles:   [
                ...state.List[uploadType] ? state.List[uploadType].FormFiles || [] : [],
                ...files,
            ],
        },
    },
});

const setUploadFileResponse = (state, { payload: { Files, uploadType } }) => ({
    ...state,
    List: {
        ...state.List,
        [uploadType]: {
            ...state.List[uploadType],
            isUploading: false,
            Files:       [
                ...state.List[uploadType] ? state.List[uploadType].Files || [] : [],
                ...Files,
            ],
            FormFiles:   [],
        },
    },
});

const setUploadFileFailed = (state, { payload: { failedPayload: { uploadType } } }) => ({
    ...state,
    List: {
        ...state.List,
        [uploadType]: {
            ...state.List[uploadType],
            isUploading: false,
            FormFiles:   [],
        },
    },
});

const setUploadFileStop = (state, { payload: { uploadType } }) => ({
    ...state,
    List: {
        ...state.List,
        [uploadType]: {
            ...state.List[uploadType],
            isUploading: false,
            FormFiles:   [],
        },
    },
});

const deleteUploadFilesFulfielled = (state, { payload: { newFiles, uploadType } }) => ({
    ...state,
    List: {
        ...state.List,
        [uploadType]: {
            ...state.List[uploadType],
            isUploading: false,
            Files:       newFiles,
            FormFiles:   [],
        },
    },
});

const resetUploadedFiles = (state, { payload: { uploadType } }) => ({
    ...state,
    List: {
        ...state.List,
        [uploadType]: {
            ...state.List[uploadType],
            isUploading: false,
            Files:       [],
            FormFiles:   [],
        },
    },
});

export default ReducerUtil.createReducer(defaultState, {
    [types.UPLOAD_FILE_REQUESTED]:   setUploadFileRequest,
    [types.UPLOAD_FILE_FULFILLIED]:  setUploadFileResponse,
    [types.API_FAILED_UPLOAD_FILES]: setUploadFileFailed,
    [types.API_STOP_UPLOAD_FILES]:   setUploadFileStop,
    [types.DELETE_FILES_FULFILLIED]: deleteUploadFilesFulfielled,
    [types.RESET_FILES]:             resetUploadedFiles,
});
