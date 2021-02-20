import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleFA = styled(FA, {
    paddingRight: '0.2rem',
});

export const StyleBtnLink = styled('a', {
    color: 'white',
});

export const StyleBtn = styled('div', {
    width:           '9rem',
    fontSize:        '1.1rem',
    lineHeight:      '1.1rem',
    fontFamily:      'Manga Speak Two',
    color:           'white',
    padding:         '0.5rem',
    margin:          '0.2rem, 0.5rem',
    textAlign:       'center',
    backgroundColor: theme.color.ORANGE_236_58_0_9,
    ':hover':        {
        backgroundColor: theme.color.ORANGE_236_58_0_7,
        ':after':        {
            height: '80rem',
            width:  '60rem',
            left:   '-20rem',
        },
    },
    ':after':        {
        content:         '""',
        height:          '50rem',
        width:           '30rem',
        left:            '-80rem',
        top:             '-4rem',
        opacity:         '0.2',
        position:        'absolute',
        zIndex:          '2',
        backgroundColor: theme.color.WHITE,
        transform:       'rotate(35deg)',
        transition:      'all 850ms cubic-bezier(0.19, 1, 0.22, 1)',
    },
});

const SlideBtn = ({ text, link, icon }) => (
    <StyleBtnLink
        href={link}
    >
        <StyleBtn>
            <StyleFA
                icon={icon}
                fixedWidth
            />
            {text}
        </StyleBtn>
    </StyleBtnLink>
);

SlideBtn.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
};

export default SlideBtn;
