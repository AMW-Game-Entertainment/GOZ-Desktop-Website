import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { animationUtil } from '~/Utils';
import { SubMenuItem } from './components';

const StyleSubMenuContainer = styled('div', ({ $onShow, $hasMenuEffect }) => ({
    ...animationUtil.smoothFade($onShow, $hasMenuEffect),
    ...{
        display:         'inline-flex',
        minWidth:        '3.5rem',
        margin:          'auto',
        textAlign:       'center',
        position:        'absolute',
        top:             '5.5rem',
        left:            '0rem',
        padding:         '0',
        zIndex:          $onShow ? `21` : `-1`,
        backgroundColor: theme.color.DARK_GRAY_7,
    },
}));

const SubMenu = ({ $onShow, menuId, menuData, hoverColor, hasMenuEffect, category }) => (
    <StyleSubMenuContainer
        $onShow={$onShow[menuId]}
        $hasMenuEffect={hasMenuEffect}
        $category={category}
    >
        {menuData.map((menu) =>
            (<SubMenuItem
                name={menu.Name}
                icon={menu.Icon}
                link={menu.Link}
                $isExternal={menu.IsExternal}
                hoverColor={menu.HoverColor ? menu.HoverColor : hoverColor}
                hasMenuEffect={hasMenuEffect}
                $onShow={$onShow[menuId]}
                key={menu.Id}
            />))}
    </StyleSubMenuContainer>
);

SubMenu.defaultProps = {
    menuData:   [],
    hoverColor: '',
};

SubMenu.propTypes = {
    menuId:        PropTypes.number.isRequired,
    $onShow:       PropTypes.arrayOf(PropTypes.bool).isRequired,
    menuData:      PropTypes.arrayOf(PropTypes.shape()),
    hoverColor:    PropTypes.string,
    hasMenuEffect: PropTypes.bool.isRequired,
    category:      PropTypes.string.isRequired,

};
export default SubMenu;
