import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import components
import {
    HeaderContainer,
    PostContainer,
    NotificationContainer,
} from '~/Containers';
import { PostPage } from '~/Layouts';
import { Footer } from '~/Components';
import { pageInitUtil } from '~/Utils';

class BasePost extends Component {
    componentDidMount() {
        /* eslint-disable indent */
        const {
                  onRouteChange,
                  getCurrentUser,
              } = this.props;
        /* eslint-enable indent */
        const { CurrentUserId } = pageInitUtil.PostPageParams();
        // routing
        onRouteChange();
        // if logged
        if (CurrentUserId) {
            getCurrentUser(CurrentUserId);
        }
    }

    render() {
        const { BackgroundImage } = this.props;
        return (
            <PostPage
                BackgroundImage={BackgroundImage}
                Notification={NotificationContainer}
                Header={HeaderContainer}
                Post={PostContainer}
                Footer={Footer}
            />
        );
    }
}

BasePost.propTypes = {
    BackgroundImage: PropTypes.string.isRequired,
    onRouteChange:   PropTypes.func.isRequired,
    getCurrentUser:  PropTypes.func.isRequired,
};

export default BasePost;
