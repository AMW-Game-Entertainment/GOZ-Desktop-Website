import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';

const StylePhotoContainer = styled(`div`, {
    padding: '0.5rem',
    margin:  `auto`,
    width:   `80rem`,
    height:  `25rem`,
});

const StylePhoto = styled(`div`, ({ $Image }) => ({
    width:                `76%`,
    height:               `100%`,
    backgroundImage:      `url(${$Image})`,
    backgroundSize:       `cover`,
    backgroundPosition:   `top center`,
    backgroundAttachment: `inherit`,
    boxShadow:            `inset -4px 0rem 3rem 4px ${theme.color.DARK_GRAY_27}, 
    inset 0 -0.2rem 0.3rem ${theme.color.DARK_GRAY_27}, 
    inset 0.2rem 0 0.3rem ${theme.color.DARK_GRAY_27}, 
    inset 0rem 0px 4rem 1px ${theme.color.DARK_GRAY_27}`,
}));

const PhotoBox = ({ Image, onImageClick }) => (
    <StylePhotoContainer>
        <StylePhoto
            onClick={() => onImageClick(true)}
            $Image={Image}
        />
    </StylePhotoContainer>
);

PhotoBox.propTypes = {
    Image:        PropTypes.string.isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default PhotoBox;
