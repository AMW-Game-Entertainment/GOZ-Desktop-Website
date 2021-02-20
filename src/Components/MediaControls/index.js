import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LikesBtnContainer, CommentsContainer } from '~/Containers';

const MediaControls = ({ PostId, Type }) => (
    <Fragment>
        <LikesBtnContainer
            PostId={PostId}
            Type={Type}
        />
        <CommentsContainer
            PostId={PostId}
        />
    </Fragment>
);

MediaControls.propTypes = {
    PostId: PropTypes.number.isRequired,
    Type:   PropTypes.number.isRequired,
};

export default MediaControls;
