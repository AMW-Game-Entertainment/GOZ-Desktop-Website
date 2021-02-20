import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';

const StyleTitle = styled('div', {
    fontSize:   '1.5rem',
    fontFamily: 'Manga Speak Two',
    padding:    '1rem',
    textAlign:  'left',
    margin:     '0 0 1rem 0',
    color:      theme.color.WHITE,
});

const Title = ({ title }) => (<StyleTitle>{title}</StyleTitle>);

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
