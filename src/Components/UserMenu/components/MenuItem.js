import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { Link } from 'react-router-dom';
import { fontsUtil } from '~/Utils';
import { theme } from '~/Constants';

const { FA } = fontsUtil;

export const StyleUserMenuItem = styled(Link, {
    width:          '100%',
    minWidth:       '5rem',
    textAlign:      'center',
    padding:        '0.5rem 1rem 0.5rem 1rem',
    fontFamily:     'Manga Speak Two',
    fontSize:       '0.55rem',
    transition:     'all 0.2s ease',
    color:          theme.color.WHITE,
    ':first-child': {
        color:      theme.color.GOLDENROD,
        fontWeight: 'bold',
        fontFamily: 'Manga Temple',
        fontSize:   '0.6rem',
        ':hover':   {
            color:           theme.color.WHITESMOKE,
            backgroundColor: theme.color.GOLDENROD,
        },
    },
    ':hover':       {
        backgroundColor: theme.color.LIGHT_GRAY_1,
        color:           theme.color.LIGHT_GRAY_233_232_233,
        fontWeight:      'normal',
    },
});

const UserMenuItem = ({ menuId, name, icon, link, onClickMenu }) => (
    <StyleUserMenuItem
        onClick={() => onClickMenu(menuId)}
        to={link}
    >
        <FA
            icon={icon}
            pull='left'
        />
        {name}
    </StyleUserMenuItem>
);

UserMenuItem.propTypes = {
    menuId:      PropTypes.number.isRequired,
    name:        PropTypes.string.isRequired,
    icon:        PropTypes.arrayOf(PropTypes.string).isRequired,
    link:        PropTypes.string.isRequired,
    onClickMenu: PropTypes.func.isRequired,
};

export default UserMenuItem;
