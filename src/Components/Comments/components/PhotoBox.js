import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { animationUtil } from '~/Utils';

const StylePhotoContainer = styled(`div`, {
    padding: '0.5rem',
    margin:  `0`,
    width:   '7rem',
    height:  `5rem`,
});

const StylePhoto = styled(`div`, ({ $isPreview, $Image }) => ({
    width:                `100%`,
    height:               `100%`,
    backgroundImage:      `url(${$Image})`,
    backgroundSize:       `cover`,
    backgroundPosition:   `top center`,
    backgroundAttachment: `inherit`,
    boxShadow:            `inset -4px 0rem 3rem 4px ${theme.color.DARK_GRAY_27}, 
    inset 0 -0.2rem 0.3rem ${theme.color.DARK_GRAY_27}, 
    inset 0.2rem 0 0.3rem ${theme.color.DARK_GRAY_27}, 
    inset 0rem 0px 4rem 1px ${theme.color.DARK_GRAY_27}`,
    ...$isPreview ? {
        opacity:         '0.5',
        backgroundImage: theme.color.loadingWaves,
        ...animationUtil.waves({ positionX: 10 }),
    } : {},
}));

const PhotoBox = ({ isReal, Image, ImageId, onImageClick }) => (
    <StylePhotoContainer>
        <StylePhoto
            onClick={() => onImageClick(ImageId)}
            $Image={Image}
            $isPreview={!isReal}
        />
    </StylePhotoContainer>
);

PhotoBox.propTypes = {
    isReal:       PropTypes.bool.isRequired,
    Image:        PropTypes.string.isRequired,
    ImageId:      PropTypes.number.isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default PhotoBox;
