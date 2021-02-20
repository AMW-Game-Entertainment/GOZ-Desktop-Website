import { connect } from 'react-redux';
import { PostPage } from '~/Pages';
import { actions } from '~/Redux';
import { getPostPageBackground } from '~/Redux/selectors';

const mapStateToProps = (state) => ({
    BackgroundImage: getPostPageBackground(state),
});

const mapDispatchToProps = (dispatch) => ({
    onRouteChange:  () => dispatch(actions.initializeChangePage()),
    getCurrentUser: (UserId) => dispatch(actions.getCurrentUser({ UserId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
