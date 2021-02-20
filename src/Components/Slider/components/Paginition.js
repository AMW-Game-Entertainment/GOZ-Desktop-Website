import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';

const StylePaginition = styled('div', {
    width:           '0.8rem',
    height:          '0.8rem',
    margin:          '0.7rem',
    fontSize:        '1.2rem',
    verticalAlign:   'middle',
    fontFamily:      'Manga Speak Two',
    color:           'whitesmoke',
    backgroundColor: theme.color.ORANGE_236_58_0_9,
    ':hover':        {
        backgroundColor: theme.color.ORANGE_236_58_0_7,
        ':after':        {
            left: '70rem',
        },
    },
    ':after':        {
        content:         '""',
        height:          '10rem',
        width:           '80rem',
        left:            '-80rem',
        top:             '-2rem',
        opacity:         '0.2',
        position:        'absolute',
        zIndex:          '-10',
        backgroundColor: theme.color.WHITE,
        transform:       'rotate(35deg)',
        transition:      'all 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
    },
});

const Paginition = ({ onClickSlide, slideIndex }) => (
    <StylePaginition onClick={() => onClickSlide(slideIndex)} />
);

Paginition.propTypes = {
    onClickSlide: PropTypes.func.isRequired,
    slideIndex:   PropTypes.string.isRequired,
};

export default Paginition;
