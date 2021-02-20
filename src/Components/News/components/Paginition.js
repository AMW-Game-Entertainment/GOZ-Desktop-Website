import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme, phrases } from '~/Constants';

const StylePaginition = styled('div', {
    color:      theme.color.WHITE,
    borderTop:  `0.1rem solid ${theme.color.DARK_GRAY_7}`,
    padding:    '1rem',
    fontSize:   '1.2rem',
    marginTop:  '0.5rem',
    fontFamily: 'Manga Speak Two',
    ':hover':   {
        background:  theme.color.DARK_GRAY_8,
        transition:  'background 250ms ease',
    },
});

const Paginition = ({ handleLoadPosts }) => (
    <StylePaginition
        onClick={handleLoadPosts}
    >
        {phrases.LoadMore}
    </StylePaginition>
);

Paginition.propTypes = {
    handleLoadPosts: PropTypes.func.isRequired,
};

export default Paginition;
