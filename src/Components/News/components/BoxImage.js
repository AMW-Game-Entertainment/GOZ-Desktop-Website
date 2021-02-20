import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

const StyleImage = styled(`div`, ({ $image }) => ({
    backgroundImage:    `linear-gradient(rgba(255, 255, 255, 0.1), rgba(14, 13, 14, 0.85)), url(${$image})`,
    backgroundSize:     `cover`,
    backgroundRepeat:   `no-repeat`,
    backgroundPosition: `center center`,
    transition:         `all 0.4s ease`,
    zIndex:             `1`,
    ':hover':           {
        backgroundImage:    `linear-gradient(rgba(255, 255, 255, 0.1), rgba(14, 13, 14, 0.95)), url(${$image})`,
        backgroundPosition: `top center`,
    },
    gridArea:           'icon',
}));

const BoxImage = ({ image }) => (<StyleImage $image={image} />);

BoxImage.propTypes = {
    image: PropTypes.string.isRequired,
};

export default BoxImage;
