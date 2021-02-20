import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme, ModelType, phrases } from '~/Constants';
import { SubMenu } from '~/Components';
import { UserMenuItem } from './components';

export const StyleUserMenuContainer = styled(`div`, {
    minWidth:        '10rem',
    position:        'absolute',
    top:             '0rem',
    right:           '3rem',
    padding:         '0',
    backgroundColor: theme.color.DARK_GRAY_8,
    listStyle:       'none',
    display:         'inline-flex',
    boxShadow:       '-0.4px 0px 0px #2a2a2a',
});

class UserMenu extends Component {
    state = {
        menusState:    [],
        hasMenuEffect: true,
    };

    toggleMenu = (menuId) => {
        const { menusState } = this.state;
        const newState       = menusState;
        const hadMenuOpen    = menusState.find((menu) => menu === true);
        const newMenuEffect  = !hadMenuOpen;

        if (newState[menuId]) {
            newState.fill(false);
        } else {
            newState.fill(false);
            newState[menuId] = true;
        }

        this.setState({
            menusState:    newState,
            hasMenuEffect: newMenuEffect,
        });
    };

    render() {
        const { menusState, hasMenuEffect } = this.state;
        const { menuData, name }            = this.props;

        return (
            <StyleUserMenuContainer>
                {menuData.map(({ Id, Name, Link, Icon, HoverColor, SubMenuList }) =>
                    (
                        <React.Fragment key={Id}>
                            <UserMenuItem
                                onClickMenu={this.toggleMenu}
                                menuId={Id}
                                name={Name.replace('{Username}', name)}
                                icon={Icon}
                                link={Link}
                                hoverColor={HoverColor}
                                hasDropDown={SubMenuList && SubMenuList.length > 0 && Name !== ''}
                            />
                            <SubMenu
                                menuData={SubMenuList}
                                menuId={Id}
                                $onShow={menusState}
                                hasMenuEffect={hasMenuEffect}
                                category={ModelType.Style.USER_MENU}
                            />
                        </React.Fragment>
                    ))
                }
            </StyleUserMenuContainer>
        );
    }
}

UserMenu.defaultProps = {
    name: phrases.Guest,
};

UserMenu.propTypes = {
    name:     PropTypes.string,
    menuData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default UserMenu;
