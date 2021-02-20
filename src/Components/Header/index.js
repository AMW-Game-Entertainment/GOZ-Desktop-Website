import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import { theme } from '~/Constants';
import { Menu, UserMenu } from '~/Components';
import { MenuData, UserMenuData } from '~/ComponentsData';
import { Avatar, Search, Logo } from './components';

const StyleHeader = styled('div', {
    width:           '98%',
    height:          '4rem',
    padding:         '1rem',
    position:        'relative',
    left:            '0',
    top:             '0',
    backgroundColor: theme.color.DARK_GRAY,
    color:           theme.color.WHITESMOKE,
    gridArea:        `header`,
});

class Header extends Component {
    getMenu = (isLogged) => isLogged
        ? MenuData.Logged
        : MenuData.Guest;

    getUserMenu = (isLogged) => isLogged
        ? UserMenuData.Logged
        : UserMenuData.Guest;

    render() {
        const { profileImage, name, logged } = this.props;
        return (
            <StyleHeader>
                <Logo />
                <Menu
                    menuData={this.getMenu(logged)}
                />
                <UserMenu
                    menuData={this.getUserMenu(logged)}
                    name={name}
                />
                <Search />
                <Avatar
                    image={profileImage}
                    name={name}
                />
            </StyleHeader>
        );
    }
}

Header.propTypes = {
    profileImage: PropTypes.string.isRequired,
    name:         PropTypes.string.isRequired,
    logged:       PropTypes.bool.isRequired,
};

export default Header;
