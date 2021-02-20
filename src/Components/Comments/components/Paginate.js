import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { phrases, theme } from '~/Constants';

const StylePaginate = styled('div', {
    width:      '50.8%',
    color:      theme.color.WHITE,
    borderTop:  `.1rem solid ${theme.color.DARK_GRAY_7}`,
    padding:    '1rem',
    fontSize:   '.8rem',
    marginTop:  '.5rem',
    marginLeft: '13.5rem',
    fontFamily: 'Manga Speak Two',
    ':hover':   {
        background: theme.color.DARK_GRAY_8,
        transition: 'background 250ms ease',
    },
});

const Paginate = ({ loadMoreComment }) => (
    <StylePaginate
        onClick={loadMoreComment}
    >
        {phrases.LoadMore}
    </StylePaginate>
);

Paginate.propTypes = {
    loadMoreComment: PropTypes.func.isRequired,
};

export default Paginate;
