import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleHeader = styled('div', {
    width:         '100%',
    height:        '4rem',
    display:       'flex',
    flexDirection: 'row',
    borderBottom:  `1px solid ${theme.color.DARKER_GRAY_4}`,
    background:    theme.color.DARK_GRAY_37,
});

const StyleCloseBtn = styled('div', {
    lineHeight: '4rem',
    fontSize:   '1.2rem',
    color:      theme.color.LIGHT_DARK_GRAY_153,
    background: theme.color.DARKER_GRAY_4,
    flex:       '2 10%',
    ':hover':   {
        opacity: '.8',
    },
});

const StyleTitle = styled('div', {
    color:       theme.color.WHITESMOKE,
    lineHeight:  '3.9rem',
    fontSize:    `.9rem`,
    paddingLeft: '1rem',
    textAlign:   'left',
    fontFamily:  `Manga Temple`,
    flex:        '1 90%',
});

const Header = ({ Title, Menu, handleDialogVisibility }) => (
    <StyleHeader>
        <StyleTitle>
            {Title}
        </StyleTitle>
        <Menu />
        <StyleCloseBtn
            onClick={() => handleDialogVisibility(false)}
        >
            <FA
                icon={['fal', 'times']}
                fixedWidth
            />
        </StyleCloseBtn>
    </StyleHeader>
);

Header.propTypes = {
    Title:                  PropTypes.string.isRequired,
    Menu:                   PropTypes.func.isRequired,
    handleDialogVisibility: PropTypes.func.isRequired,
};

export default Header;
