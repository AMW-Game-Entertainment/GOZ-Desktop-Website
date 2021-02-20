import { connect } from 'react-redux';
import { Notification } from '~/Components';
import { getNotificatonsSel } from '~/Redux/selectors';
import { actions } from '~/Redux';

const mapStateToProps = (state) => ({
    toasts: getNotificatonsSel(state),
});

const mapDispatchToProps = (dispatch) => ({
    removeToast: (ToastId) => dispatch(actions.notificationDismissalRequested(ToastId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
