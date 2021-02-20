import { connect } from 'react-redux';
import { Notes } from '~/Components';
import { Config } from '~/Constants';
import { actions } from '~/Redux';
import { getNotesSel, getNotesLoadingSel, getNotesErrorSel } from '~/Redux/selectors';

const { Limits } = Config;

const mapStateToProps = (state) => ({
    notes:    getNotesSel(state),
    loading:  getNotesLoadingSel(state),
    hasError: getNotesErrorSel(state),
});

const mapDispatchToProps = (dispatch) => ({
    getNotes:       (ProfileUserId) => dispatch(actions.getNotes({ UserId: ProfileUserId, Limit: Limits.Notes })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
