import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { Link } from 'react-router-dom';
import { theme } from '~/Constants';
import { routeUtil, fontsUtil, animationUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleFA = styled(FA, {
    paddingRight: '0.3rem',
});

const StyleDeleteBtn = styled('div', {
    flex:       '3 5%',
    border:     '0',
    fontSize:   '.7rem',
    color:      theme.color.LIGHT_DARK_GRAY_153,
    background: theme.color.DARKER_GRAY_4,
    ':hover':   {
        opacity: '0.8',
    },
});

const StyleHeader = styled('div', ({ $isPreview }) => ({
    flex:          '1 100%',
    display:       'flex',
    flexDirection: 'row',
    padding:       '.2rem .2rem .1rem 2rem',
    margin:        '.04rem 0',
    minHeight:     `2rem`,
    maxHeight:     '2rem',
    lineHeight:    `2rem`,
    ...$isPreview ? {
        background:      theme.color.COD_GRAY_30,
        backgroundImage: theme.color.linearWave,
        ...animationUtil.waves({ positionX: 15 }),
        ':after':        {
            content:         '""',
            position:        'absolute',
            zIndex:          '1',
            backgroundColor: theme.color.MINE_SHAFT_32,
            border:          `1px solid ${theme.color.BLACK}`,
        },
    } : {},
}));

const StyleDate = styled('div', {
    flex:       '2 15%',
    fontFamily: `Manga Speak Two`,
    fontSize:   '.5rem',
    textAlign:  'right',
    padding:    '0 .8rem',
    color:      theme.color.GOLDENROD,
});

const StyleName = styled(Link, {
    flex:       '1 80%',
    textAlign:  'left',
    fontSize:   `.9rem`,
    fontFamily: `Manga Temple`,
    color:      theme.color.WHITESMOKE,
    ':hover':   {
        opacity: '0.8',
    },
});
const Header    = ({ isReal, CharName, UserId, CurrentUserId, Created, onDeleteClickBtn }) => (
    <StyleHeader $isPreview={!isReal}>
        <StyleName
            to={routeUtil.toProfileLink(UserId)}
        >
            {CharName}
        </StyleName>
        <StyleDate>
            <StyleFA
                icon={['fal', 'clock']}
            />
            {Created}
        </StyleDate>
        {
            UserId === CurrentUserId && isReal &&
            <StyleDeleteBtn
                onClick={() => onDeleteClickBtn()}
            >
                <FA
                    icon={['far', 'trash-alt']}
                    fixedWidth
                />
            </StyleDeleteBtn>
        }
    </StyleHeader>
);

Header.propTypes = {
    isReal:           PropTypes.bool.isRequired,
    CharName:         PropTypes.string.isRequired,
    UserId:           PropTypes.number.isRequired,
    CurrentUserId:    PropTypes.number.isRequired,
    Created:          PropTypes.string.isRequired,
    onDeleteClickBtn: PropTypes.func.isRequired,
};

export default Header;
