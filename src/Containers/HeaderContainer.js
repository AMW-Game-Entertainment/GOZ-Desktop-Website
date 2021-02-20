import { connect } from 'react-redux';
import {
    isLoggedSel,
    getCurrentUserProfileImage,
    getCurrentUserCharName,
} from '~/Redux/selectors';
import { Header } from '~/Components';

const mapStateToProps = (state) => ({
    logged:       isLoggedSel(state),
    profileImage: getCurrentUserProfileImage(state),
    name:         getCurrentUserCharName(state),
});

export default connect(mapStateToProps, null)(Header);
