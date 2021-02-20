import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { urlUtil } from '~/Utils';
import YouTube from 'react-youtube';

const StyleVideoContainer = styled(`div`, {
    padding: '0.5rem',
    margin:  `auto`,
    width:   `80rem`,
    height:  `25rem`,
});

const StyleVideo = styled(YouTube, {
    boxShadow: `inset -4px 0rem 3rem 4px ${theme.color.DARK_GRAY_27}, 
    inset 0 -0.2rem 0.3rem ${theme.color.DARK_GRAY_27}, 
    inset 0.2rem 0 0.3rem ${theme.color.DARK_GRAY_27}, 
    inset 0rem 0px 4rem 1px ${theme.color.DARK_GRAY_27}`,
});

const VideoBox = ({ VideoSrc }) => (
    <StyleVideoContainer>
        <StyleVideo
            videoId={urlUtil.getYouTubeId(VideoSrc)}
            opts={{
                width:  `100%`,
                height: `100%`,
            }}
        />
    </StyleVideoContainer>
);

VideoBox.propTypes = {
    VideoSrc:     PropTypes.string.isRequired,
};

export default VideoBox;
