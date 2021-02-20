import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';

const StylePhotoContainer = styled(`div`, {
    width:  `100%`,
    height: `100%`,
});

const StylePhoto = styled(`div`, ({ $Image }) => ({
    width:              `100%`,
    height:             `100%`,
    backgroundImage:    `url(${$Image})`,
    backgroundSize:     `100% 100%`,
    backgroundPosition: `center center`,
    backgroundRepeat:   'no-repeat',
    boxShadow:          `inset -4px 0rem 3rem 4px ${theme.color.DARK_GRAY_27}`,
}));

const DialogPhotoBox = ({ Image }) => (
    <StylePhotoContainer>
        <StylePhoto
            $Image={Image}
        />
    </StylePhotoContainer>
);

DialogPhotoBox.defaultProps = {
    Image: '',
};

DialogPhotoBox.propTypes = {
    Image: PropTypes.string,
};

export default DialogPhotoBox;
