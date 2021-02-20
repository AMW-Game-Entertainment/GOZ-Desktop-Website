import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme, ModelType } from '~/Constants';
import { SubMenu } from '~/Components';
import { MenuItem } from './components';

const StyleMenuContainer = styled('div', {
    position:  'absolute',
    top:       '0rem',
    left:      '9rem',
    padding:   '0',
    listStyle: 'none',
    display:   'inline-flex',
    boxShadow: `-0.4px 0px 0px ${theme.color.DARKER_GRAY_42}`,
});

class Menu extends Component {
    state = {
        menusState:    [],
        hasMenuEffect: true,
    };

    toggleMenu = (menuId) => {
        const { menusState: newState } = this.state;
        const canAnimate               = newState.find((menu) => menu === true);
        const hadMenuOpen              = newState[menuId];
        newState.fill(false);
        newState[menuId] = !hadMenuOpen;

        this.setState({
            menusState:    newState,
            hasMenuEffect: !canAnimate,
        });
    };

    render() {
        const { menusState, hasMenuEffect } = this.state;
        const { menuData }                  = this.props;

        return (
            <StyleMenuContainer>
                {menuData.map(({ Id, Name, Icon, Link, HoverColor, SubMenuList }) =>
                    (
                        <React.Fragment key={Id}>
                            <MenuItem
                                onMenuClick={this.toggleMenu}
                                menuId={Id}
                                name={Name}
                                icon={Icon}
                                link={Link}
                                hoverColor={HoverColor}
                                hasDropDown={SubMenuList && SubMenuList.length > 0 && Name !== ''}
                            />
                            <SubMenu
                                menuData={SubMenuList}
                                menuId={Id}
                                hoverColor={HoverColor}
                                $onShow={menusState}
                                hasMenuEffect={hasMenuEffect}
                                category={ModelType.Style.MENU}
                            />
                        </React.Fragment>
                    ))
                }
            </StyleMenuContainer>
        );
    }
}

Menu.propTypes = {
    menuData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Menu;
