import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

const StyleText = styled(`div`, {
    padding:      `1rem`,
    fontSize:     `1rem`,
    textAlign:    `justify`,
    overflow:     'hidden',
    textOverflow: 'ellipsis',
    whiteSpace:   `nowrap`,
    gridArea:     'text',
});

const BoxText = ({ text }) => (
    <StyleText>{text}</StyleText>
);

BoxText.propTypes = {
    text: PropTypes.string.isRequired,
};

export default BoxText;
