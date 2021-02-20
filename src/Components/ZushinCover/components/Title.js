import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';

const StyleTitle = styled('div', {
    minHeight:  '4rem',
    margin:     'auto',
    position:   'relative',
    top:        '5rem',
    fontFamily: 'Manga Speak Two',
    fontSize:   '3.5rem',
    fontWeight: 'bolder',
    color:      theme.color.WHITE_7,
    textAlign:  'center',
    padding:    '0.5rem',
});

const Title = ({ title }) => (
    <StyleTitle>{title}</StyleTitle>
);

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
