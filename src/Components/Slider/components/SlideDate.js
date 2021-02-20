import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';

const StlyeCreated = styled('div', {
    fontSize:   '0.8rem',
    fontFamily: 'Manga Speak Two',
    textAlign:  'right',
    color:      theme.color.WHITESMOKE,
});

const Created = ({ date }) => (<StlyeCreated>{date}</StlyeCreated>);

Created.propTypes = {
    date: PropTypes.string.isRequired,
};

export default Created;
