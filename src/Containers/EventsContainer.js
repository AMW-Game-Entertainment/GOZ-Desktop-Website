import { connect } from 'react-redux';
import { Events } from '~/Components';
import { Config } from '~/Constants';
import { actions } from '~/Redux';
import { getEventsSel, getEventsLoadingSel, getEventsErrorSel } from '~/Redux/selectors';

const { Limits } = Config;

const mapStateToProps = (state) => ({
    events:   getEventsSel(state),
    loading:  getEventsLoadingSel(state),
    hasError: getEventsErrorSel(state),
});

const mapDispatchToProps = (dispatch) => ({
    getEvents: (ProfileUserId) => dispatch(actions.getEvents({ UserId: ProfileUserId, Limit: Limits.Events })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
