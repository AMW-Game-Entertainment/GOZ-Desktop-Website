import { connect } from 'react-redux';
import { getPostsSel, getLastPostId, isLoadingPostsSel } from '~/Redux/selectors';
import { Config } from '~/Constants';
import { News } from '~/Components';
import { actions } from '~/Redux';

const { Limits } = Config;

const mapStateToProps = (state) => ({
    newsFeed:   getPostsSel(state),
    lastPostId: getLastPostId(state),
    isLoading:  isLoadingPostsSel(state),
});

const mapDispatchToProps = (dispatch) => ({
    getPosts:     (ProfileUserId) => dispatch(actions.getPosts({
        UserId:     ProfileUserId,
        LastPostId: 0,
        Limit:      Limits.News,
    })),
    loadMorePost: (LastPostId, UserId) => dispatch(actions.getPosts({
        LastPostId,
        UserId,
        Limit: Limits.NewsPagintion,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
