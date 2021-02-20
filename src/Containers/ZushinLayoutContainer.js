import { connect } from 'react-redux';
import { ZushinPage } from '~/Pages';
import { actions } from '~/Redux';

const mapDispatchToProps = (dispatch) => ({
    onRouteChange:  () => dispatch(actions.initializeChangePage()),
    clearPostsList: () => dispatch(actions.cleanPostsList()),
    getCurrentUser: (CurrentUserId) => dispatch(actions.getCurrentUser({ UserId: CurrentUserId })),
    getProfile:     (ProfileUserId) => dispatch(actions.getProfile({ UserId: ProfileUserId })),
});

export default connect(null, mapDispatchToProps)(ZushinPage);
