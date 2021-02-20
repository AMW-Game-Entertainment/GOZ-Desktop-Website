import React from 'react';
import { styled } from 'styletron-react';
import { theme, Paths } from '~/Constants';

const StyleLogo = styled('div', {
    width:              '7rem',
    height:             '3.5rem',
    maxWidth:           '7rem',
    position:           'absolute',
    left:               '1rem',
    top:                '1rem',
    filter:             'contrast(0%)',
    WebkitFilter:       'contrast(0%)',
    msFilter:           'contrast(0%)',
    backgroundImage:    `url('${Paths.Logo}')`,
    backgroundPosition: 'center center',
    backgroundSize:     'contain',
    backgroundRepeat:   'no-repeat',
    margin:             '0 0.8rem 0 0',
    borderRight:        `1px solid ${theme.color.DARKER_GRAY_51}`,
});

const Logo = () => (<StyleLogo />);

export default Logo;
