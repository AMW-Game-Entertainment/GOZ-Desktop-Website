import { connect } from 'react-redux';
import { actions } from '~/Redux';
import { getLikesSel, getCurrentUserIdSel } from '~/Redux/selectors';
import { LikesBtn } from '~/Components';

const mapStateToProps = (state) => ({
    likes:   getLikesSel(state),
    userId:  getCurrentUserIdSel(state),
});

const mapDispatchToProps = (dispatch) => ({
    getLikes:   (PostId, Type) => dispatch(actions.getLikes({ PostId, Type })),
    addLike:    (PostId, Type) => dispatch(actions.addLike({ PostId, Type })),
    deleteLike: (PostId, Type) => dispatch(actions.deleteLike({ PostId, Type })),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikesBtn);
