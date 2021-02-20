import { connect } from 'react-redux';
import {
    isLoggedSel,
    getProfileCover,
    getProfileCharNameSel,
} from '~/Redux/selectors';
import { ZushinCover } from '~/Components';

const mapStateToProps = (state) => ({
    isLogged: isLoggedSel(state),
    image:    getProfileCover(state),
    title:    getProfileCharNameSel(state),
});

export default connect(mapStateToProps, null)(ZushinCover);
