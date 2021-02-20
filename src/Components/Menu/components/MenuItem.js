import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from 'styletron-react';
import { fontsUtil } from '~/Utils';
import { theme } from '~/Constants';

const { FA } = fontsUtil;

const StyleLinkMenuItem = styled(Link, ({ $hoverColor }) => ({
    minWidth:   '3.5rem',
    height:     '3.5rem',
    lineHeight: '3.5rem',
    textAlign:  'center',
    wordBreak:  'line-break',
    whiteSpace: 'nowrap',
    padding:    '1rem',
    fontFamily: 'Manga Speak Two',
    fontSize:   '0.8rem',
    transition: 'all 0.2s ease',
    color:      theme.color.WHITE,
    ':hover':   {
        backgroundColor: theme.color.LIGHT_GRAY_1,
        color:           $hoverColor,
        fontWeight:      'normal',
    },
}));

const StyleMenuItem = styled(`div`, ({ $hoverColor }) => ({
    minWidth:   '3.5rem',
    height:     '3.5rem',
    lineHeight: '3.5rem',
    textAlign:  'center',
    wordBreak:  'line-break',
    whiteSpace: 'nowrap',
    padding:    '1rem',
    fontFamily: 'Manga Speak Two',
    fontSize:   '0.8rem',
    transition: 'all 0.2s ease',
    color:      theme.color.WHITE,
    ':hover':   {
        backgroundColor: theme.color.LIGHT_GRAY_1,
        color:           $hoverColor,
        fontWeight:      'normal',
    },
}));

const StyleTextMenuItem = styled('span', ({ $withoutText }) => ({
    margin: $withoutText ? '0 0 0 0' : '0 0 0 1rem',
}));

const StyleMenuBottomIcon = styled('span', {
    margin: '0 0 0 0.5rem',
});

class MenuItem extends Component {
    withLink() {
        const { menuId, name, icon, link, onMenuClick, hoverColor, hasDropDown } = this.props;
        return (
            <StyleLinkMenuItem
                onClick={() => onMenuClick(menuId)}
                $hoverColor={hoverColor}
                to={link}
            >
                <FA
                    icon={icon}
                />
                <StyleTextMenuItem
                    $withoutText={(name === '' || name === undefined)}
                >
                    {name}
                    {hasDropDown &&
                        <StyleMenuBottomIcon>
                            <FA
                                icon={['fal', 'angle-down']}
                            />
                        </StyleMenuBottomIcon>
                    }
                </StyleTextMenuItem>
            </StyleLinkMenuItem>
        );
    }

    withoutLink() {
        const { menuId, name, icon, onMenuClick, hoverColor, hasDropDown } = this.props;
        return (
            <StyleMenuItem
                onClick={() => onMenuClick(menuId)}
                $hoverColor={hoverColor}
            >
                <FA
                    icon={icon}
                />
                <StyleTextMenuItem
                    $withoutText={(name === '' || name === undefined)}
                >
                    {name}
                    {hasDropDown &&
                        <StyleMenuBottomIcon>
                            <FA
                                icon={['fal', 'angle-down']}
                            />
                        </StyleMenuBottomIcon>
                    }
                </StyleTextMenuItem>
            </StyleMenuItem>
        );
    }

    render() {
        const { link } = this.props;
        return link ? this.withLink() : this.withoutLink();
    }
}

MenuItem.propTypes = {
    menuId:      PropTypes.number.isRequired,
    name:        PropTypes.string.isRequired,
    icon:        PropTypes.arrayOf(PropTypes.string).isRequired,
    link:        PropTypes.string.isRequired,
    onMenuClick: PropTypes.func.isRequired,
    hoverColor:  PropTypes.string.isRequired,
    hasDropDown: PropTypes.bool.isRequired,
};

export default MenuItem;
