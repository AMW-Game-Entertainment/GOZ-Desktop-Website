import * as SocketIo from 'socket.io-client';
import { Config, Routes } from '~/Constants';
import { types, actions } from '~/Redux';
import { isEmpty } from 'lodash/fp';

export default (() => {
    let ApiSocketIO;

    const initGameEngineConnection = ({ dispatch }, wsEndPoint) => {
        const { EndPoints: { API: endPointSocket } } = Routes;
        ApiSocketIO                                  = SocketIo(wsEndPoint);

        ApiSocketIO.on('connect', (data) => {
            console.log('Connected Websocket => ', JSON.stringify(data)); // eslint-disable-line no-console
            dispatch(actions.connectedToAPI());
        });
        ApiSocketIO.on(endPointSocket, ({ type, payload }) => {
            console.log('Received Msg Websocket => ', JSON.stringify(type, payload)); // eslint-disable-line no-console
            dispatch(actions.recievedFromAPI({ type, payload }));
        });
        ApiSocketIO.on('error', (error) => {
            console.log('Received Error Websocket => ', JSON.stringify(error)); // eslint-disable-line no-console
            dispatch(actions.errorFromAPI(error));
        });
        ApiSocketIO.on('disconnect', (error) => {
            console.log('Disconnected Websocket => ', JSON.stringify(error)); // eslint-disable-line no-console
            if (typeof error !== 'undefined') {
                dispatch(actions.disconnectAPI());
                dispatch(actions.connectToAPI());
            }
        });
    };

    const closeGameEngineConnection = ({ dispatch }) => {
        if (ApiSocketIO) {
            ApiSocketIO.close();
        }
        dispatch(actions.disconnectedAPI());
    };

    const sendSocketMssage = ({ dispatch }, { type, payload }) => {
        const { EndPoints: { API: endPointSocket } } = Routes;
        console.log('Send Msg to GE Socket => ', JSON.stringify({ type, payload })); // eslint-disable-line no-console

        ApiSocketIO.emit(endPointSocket, { type, payload });
        dispatch({ type, payload });
    };

    return (store) => (next) => (_action) => {
        switch (_action.type) {
        case types.API_CONNECT: {
            const { API: { wsEndPoint } } = Config;
            initGameEngineConnection(store, wsEndPoint);
            return next(_action);
        }
        case types.API_DISCONNECT: {
            closeGameEngineConnection(store);
            return next(_action);
        }
        case types.API_SEND_MESSAGE: {
            if (ApiSocketIO) {
                if (isEmpty(_action.payload)) {
                    return next(_action);
                }
                sendSocketMssage(store, _action.payload);
            } else {
                // eslint-disable-next-line no-console
                console.warn(`Socket is not initialised, ignoring. Trigger a API_CONNECT first.`);
            }
            return next(_action);
        }
        default:
            return next(_action);
        }
    };
})();
