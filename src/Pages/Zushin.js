import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import components
import {
    ZushinCoverContainer,
    HeaderContainer,
    NotesContainer,
    EventsContainer,
    NewsFeedContainer,
    NotificationContainer,
} from '~/Containers';
import { pageInitUtil } from '~/Utils';
import { ZushinPage } from '~/Layouts';
import { Footer } from '~/Components';

class BaseZushin extends Component {
    componentDidMount() {
        /* eslint-disable indent */
        const {
                  onRouteChange,
                  clearPostsList,
                  getCurrentUser,
                  getProfile,
              } = this.props;
        /* eslint-enable ident */
        const { CurrentUserId, ProfileUserId } = pageInitUtil.MainPageParams();
        // routing
        onRouteChange();
        // refresh
        clearPostsList();
        // logged user
        if (CurrentUserId) {
            getCurrentUser(CurrentUserId);
        }
        // get data
        getProfile(ProfileUserId);
    }

    render() {
        return (
            <ZushinPage
                Header={HeaderContainer}
                Notification={NotificationContainer}
                CoverPhoto={ZushinCoverContainer}
                Notes={NotesContainer}
                Events={EventsContainer}
                NewsFeed={NewsFeedContainer}
                Footer={Footer}
            />
        );
    }
}

BaseZushin.propTypes = {
    onRouteChange:  PropTypes.func.isRequired,
    clearPostsList: PropTypes.func.isRequired,
    getCurrentUser: PropTypes.func.isRequired,
    getProfile:     PropTypes.func.isRequired,
};

export default BaseZushin;
