import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { animationUtil } from '~/Utils';

const StyleOverlay = styled(`div`, ({ $isVisible }) => ({
    background: theme.color.DARK_GRAY_71_9,
    width:      `100%`,
    height:     `100%`,
    visibility: $isVisible ? 'visible' : 'hidden',
    zIndex:     $isVisible ? '998' : '-11',
    position:   'fixed',
    top:        0,
    bottom:     0,
    left:       0,
    right:      0,
    ...animationUtil.smoothFadeFast($isVisible, true),
}));

const Overlay = ({ isVisible, onOverlayClick }) => (
    <StyleOverlay
        $isVisible={isVisible}
        onClick={onOverlayClick}
    />
);

Overlay.defaultProps = {
    isVisible: false,
};

Overlay.propTypes = {
    onOverlayClick: PropTypes.func.isRequired,
    isVisible:      PropTypes.bool,
};

export default Overlay;
