import { connect } from 'react-redux';
import { Post } from '~/Components';
import { actions } from '~/Redux';
import { getPostSel } from '~/Redux/selectors';

const mapStateToProps = (state) => ({
    Post: getPostSel(state),
});

const mapDispatchToProps = (dispatch) => ({
    getPost: (PostId) => dispatch(actions.getPost({ PostId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
