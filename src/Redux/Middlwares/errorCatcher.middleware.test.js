import { errorCatcherMiddleware } from './index';

let store;
let next;
let invoke;
let errorHandlerCb;
let errorCatcher;
let errorCatcherMiddlewareMocked;

const create = (onErrorCb) => {
    errorCatcherMiddlewareMocked = jest.fn(errorCatcherMiddleware);
    errorCatcher                 = jest.fn(errorCatcherMiddlewareMocked(onErrorCb));

    store  = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn(),
    };
    next   = jest.fn();
    invoke = (action) => errorCatcher(store)(next)(action);

    return { store, next, invoke };
};

beforeEach(() => {
    errorHandlerCb = jest.fn();
    ({ store, next, invoke } = create(errorHandlerCb));
});

describe('errorCatcher middleware', () => {
    it('should pass all actions', () => {
        const action = { type: 'SHOULD_PASS', payload: {} };

        invoke(action);

        expect(next).toHaveBeenCalledWith(action);
    });

    it('should accept onError cb', () => {
        expect(errorCatcherMiddlewareMocked).toHaveBeenCalledWith(errorHandlerCb);
    });

    it('should call onError cb on actions with Error payload', () => {
        const action = { type: 'SHOULD_BE_CATCHED', payload: Error() };

        invoke(action);

        expect(errorHandlerCb).toHaveBeenCalledTimes(1);
    });

    it('should pass next, getState, error, lastAction as arguments to onError cb', () => {
        const action = { type: 'SHOULD_BE_CATCHED', payload: Error() };

        invoke(action);

        expect(errorHandlerCb).toHaveBeenCalledWith(
            next,
            store.getState,
            action.payload,
            action,
        );
    });
});
