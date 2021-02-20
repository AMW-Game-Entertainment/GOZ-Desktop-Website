import { isEqual } from 'lodash/fp';
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast as Toastify } from 'react-toastify';
import { Notifications } from '~/Constants';
import 'react-toastify/dist/ReactToastify.css';

const { MAX_TOASTS, types } = Notifications;
const initToastifyConfig    = {
    position:        'top-left',
    newestOnTop:     true,
    autoClose:       10000,
    hideProgressBar: true,
    closeOnClick:    true,
    closeButton:     false,
};

const onUpdatedToastifyConfig = {
    autoClose: 4000,
};

class ToastCompoent extends Component {
    state = {
        removedNotifications: [],
        currentToasts:        {},
    };

    shouldComponentUpdate(nextProps, nextState) {
        const { currentToasts }          = nextState;
        const { toasts }                 = nextProps;
        const { toasts: previousToasts } = this.props;
        const allowRender                = (Object.keys(currentToasts).length - 1) <
            MAX_TOASTS
            && Object.keys(toasts).length > 0
            && !isEqual(toasts, previousToasts)
            && !isEqual(toasts, currentToasts);

        return allowRender;
    }

    onRemoveToast = (ToastId) => {
        const { removeToast }                         = this.props;
        const { removedNotifications, currentToasts } = this.state;
        const newRemovedNotifications                 = removedNotifications;
        const newCurrentToasts                        = currentToasts;

        newRemovedNotifications.push(ToastId);
        delete newCurrentToasts[ToastId];

        const refreshComponent = Object.keys(currentToasts)
            .filter((toastType) => newRemovedNotifications
                .includes(toastType)).length === Object.keys(currentToasts).length;

        if (refreshComponent) {
            removeToast(ToastId);
            this.setState({
                removedNotifications: [],
                currentToasts:        newCurrentToasts,
            });
            return;
        }

        this.setState({
            removedNotifications: newRemovedNotifications,
            currentToasts:        newCurrentToasts,
        });
    };

    getToastByType = (type) => {
        if (type === types.DEFAULT) {
            return Toastify;
        } else if (type === types.SUCCESS) {
            return Toastify.success;
        } else if (type === types.ERROR) {
            return Toastify.error;
        } else if (type === types.WARN) {
            return Toastify.warn;
        } else if (type === types.INFO) {
            return Toastify.info;
        }
        return Toastify.custom;
    };

    getToastClassByType = (type) => {
        if (type === types.DEFAULT) {
            return {
                className: 'sgToastifyDefaultContainer',
            };
        } else if (type === types.SUCCESS) {
            return {
                className: 'sgToastifySuccessContainer',
            };
        } else if (type === types.ERROR) {
            return {
                className: 'sgToastifyErrorContainer',
            };
        } else if (type === types.WARN) {
            return {
                className: 'sgToastifyWarnContainer',
            };
        } else if (type === types.INFO) {
            return {
                className: 'sgToastifyInfoContainer',
            };
        }
        return {
            className: 'sgToastifyContainer',
        };
    };

    createToast = ({ type, id: ToastId, text }) => {
        const { removedNotifications, currentToasts: toastsVisible } = this.state;

        if (toastsVisible[ToastId]) {
            return;
        }

        if (Toastify.isActive(ToastId) || removedNotifications[ToastId]) {
            Toastify.update(ToastId, onUpdatedToastifyConfig);
            return;
        }

        this.getToastByType(type)(
            <div className='toast'>
                <div className='content'>{text}</div>
            </div>, {
                ...initToastifyConfig,
                ...this.getToastClassByType(type),
                onClose: () => {
                    this.onRemoveToast(ToastId);
                },
            },
        );

        toastsVisible[ToastId] = {
            text,
            type,
            id: ToastId,
        };

        this.setState({
            currentToasts: toastsVisible,
        });
    };

    render() {
        const { toasts } = this.props;

        return (
            <Fragment>
                <ToastContainer />
                {
                    Object.keys(toasts)
                        .map((toastType) => this.createToast({ type: toastType, ...toasts[toastType] }))
                }
            </Fragment>
        );
    }
}

ToastCompoent.propTypes = {
    removeToast: PropTypes.func.isRequired,
    toasts:      PropTypes.arrayOf(PropTypes.shape({
        id:   PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        type: PropTypes.number.isRequired,
    })).isRequired,
};

export default ToastCompoent;
