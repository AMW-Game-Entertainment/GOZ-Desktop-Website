import { ReducerUtil } from '~/Utils';
import { types } from '~/Redux/index';

const defaultState = {
    status:            0,
    isConnected:       false,
    SocketId:          null,
    latestRecievedMsg: {},
    latestSentMsg:     {},
};

const setConnected = (state) => ({
    ...state,
    status:      1,
    isConnected: true,
});

const setDisconnected = (state) => ({
    ...state,
    status:      4,
    isConnected: false,
});

const setLatestRecievedMsg = (state, payload) => ({
    ...state,
    latestRecievedMsg: payload,
});

const setLatestSentMsg = (state, payload) => ({
    ...state,
    latestSentMsg: payload,
});

const setSocketId = (state, { payload: { SocketId } }) => ({
    ...state,
    SocketId,
});

export default ReducerUtil.createReducer(defaultState, {
    [types.API_CONNECTED]:       setConnected,
    [types.API_DISCONNECT]:      setDisconnected,
    [types.API_RECIEVE_MESSAGE]: setLatestRecievedMsg,
    [types.API_SEND_MESSAGE]:    setLatestSentMsg,
    [types.SET_SOCKET_ID]:       setSocketId,
});
