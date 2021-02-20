import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from 'styletron-react';

import { theme } from '~/Constants';
import { animationUtil, fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleSubMenuItem = styled('a', ({ $hoverColor, $onShow, $hasMenuEffect }) => ({
    ...animationUtil.smoothFadeFast($onShow, $hasMenuEffect),
    ...{
        minWidth:        '3.5rem',
        height:          '1.2rem',
        lineHeight:      '1.2rem',
        textAlign:       'center',
        wordBreak:       'line-break',
        whiteSpace:      'nowrap',
        padding:         '1rem',
        fontFamily:      'Manga Speak Two',
        fontSize:        '0.8rem',
        color:           theme.color.WHITE,
        backgroundColor: theme.color.DARK_GRAY_7,
        boxShadow:       `-0.4px 0px 0px ${theme.color.DARKER_GRAY_42}`,
        ':hover':        {
            backgroundColor: theme.color.LIGHT_GRAY_1,
            color:           $hoverColor,
            fontWeight:      'normal',
        },
    },
}));

const StyleLinkSubMenuItem = styled(Link, ({ $hoverColor, $onShow, $hasMenuEffect }) => ({
    ...animationUtil.smoothFadeFast($onShow, $hasMenuEffect),
    ...{
        minWidth:        '3.5rem',
        height:          '1.2rem',
        lineHeight:      '1.2rem',
        textAlign:       'center',
        wordBreak:       'line-break',
        whiteSpace:      'nowrap',
        padding:         '1rem',
        fontFamily:      'Manga Speak Two',
        fontSize:        '0.8rem',
        color:           theme.color.WHITE,
        backgroundColor: theme.color.DARK_GRAY_7,
        boxShadow:       `-0.4px 0px 0px ${theme.color.DARKER_GRAY_42}`,
        ':hover':        {
            backgroundColor: theme.color.LIGHT_GRAY_1,
            color:           $hoverColor,
            fontWeight:      'normal',
        },
    },
}));

const StyleTextMenuItem = styled('span', {
    margin: '0 0 0 1rem',
});

class SubMenuItem extends Component {
    LinkContent = () => {
        const { name, icon } = this.props;

        return (
            <Fragment>
                <FA
                    icon={icon}
                />
                <StyleTextMenuItem>
                    {name}
                </StyleTextMenuItem>
            </Fragment>
        );
    };

    render() {
        const { link, hoverColor, $isExternal, $onShow, hasMenuEffect } = this.props;

        return (
            $isExternal ?
                <StyleSubMenuItem
                    $hoverColor={hoverColor}
                    $hasMenuEffect={hasMenuEffect}
                    $onShow={$onShow}
                    href={link}
                    target='_blank'
                >
                    {this.LinkContent()}
                </StyleSubMenuItem>
                :
                <StyleLinkSubMenuItem
                    $hoverColor={hoverColor}
                    $hasMenuEffect={hasMenuEffect}
                    $onShow={$onShow}
                    to={link}
                >
                    {this.LinkContent()}
                </StyleLinkSubMenuItem>
        );
    }
}

SubMenuItem.defaultProps = {
    hoverColor: '',
    $onShow:    false,
};

SubMenuItem.propTypes = {
    name:          PropTypes.string.isRequired,
    icon:          PropTypes.arrayOf(PropTypes.string).isRequired,
    link:          PropTypes.string.isRequired,
    hoverColor:    PropTypes.string,
    $isExternal:   PropTypes.bool.isRequired,
    $onShow:       PropTypes.bool,
    hasMenuEffect: PropTypes.bool.isRequired,
};

export default SubMenuItem;
