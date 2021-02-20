import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleFA = styled(FA, {
    paddingRight: '0.5rem',
});

const StyleBtn = styled(Link, {
    fontSize:        '0.9rem',
    lineHeight:      '0.9rem',
    fontFamily:      'Manga Speak Two',
    color:           theme.color.WHITE,
    padding:         '0.2rem 0.8rem',
    margin:          '0rem, 0.5rem',
    textAlign:       'center',
    backgroundColor: theme.color.RED_236_58_0_9,
    gridArea:        'btn',
});

const BoxBtn = ({ href, text, icon }) => (
    <StyleBtn
        to={href}
    >
        <StyleFA
            icon={icon}
            fixedWidth
        />
        {text}
    </StyleBtn>
);

BoxBtn.propTypes = {
    href:         PropTypes.string.isRequired,
    text:         PropTypes.string.isRequired,
    icon:         PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
};

export default BoxBtn;
