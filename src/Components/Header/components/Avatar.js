import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';

const StyleAvatarContainer = styled('div', {
    width:     '8rem',
    height:    '3.5rem',
    position:  'absolute',
    right:     '1.5rem',
    top:       '1.5rem',
    textAlign: 'center',
});

const StyleAvatarImage = styled('div', ({ image }) => ({
    width:              '5rem',
    height:             '5rem',
    position:           'absolute',
    right:              '-3.5rem',
    top:                '-3.5rem',
    margin:             'auto',
    boxShadow:          `0rem 0rem 0.5rem ${theme.color.DARK_GRAY}`,
    borderRadius:       '100%',
    border:             `0.18rem solid ${theme.color.WHITESMOKE}`,
    backgroundColor:    theme.color.WHITESMOKE,
    backgroundImage:    `url('${image}')`,
    backgroundPosition: 'center center',
    backgroundSize:     'cover',
    backgroundRepeat:   'no-repeat',
    zIndex:             '10',
    transition:         'all 0.5s ease',
    ':hover':           {
        right: '-2.5rem',
        top:   '-2.5rem',
    },
}));

const Avatar = ({ image }) => (
    <StyleAvatarContainer>
        <StyleAvatarImage
            image={image}
        />
    </StyleAvatarContainer>
);

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
};

export default Avatar;
