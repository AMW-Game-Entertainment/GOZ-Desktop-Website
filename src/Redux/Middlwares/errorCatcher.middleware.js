import { actions } from '~/Redux';

const errorCatcherHandler = (next, getState, error, lastAction) => {
    next(actions.errorReceived(error, lastAction));
    // eslint-disable-next-line no-console
    console.error(`error in action type ${lastAction.type}`, error);
    // TODO: log to sentry
};

export default (onErrorCb = errorCatcherHandler) => (store) => (next) => (_action) => {
    if (_action && _action.payload && _action.payload.error instanceof Error &&
        onErrorCb) {
        const { getState }       = store;
        const { payload: { error } } = _action;

        onErrorCb(next, getState, error, _action);
    }

    return next(_action);
};
