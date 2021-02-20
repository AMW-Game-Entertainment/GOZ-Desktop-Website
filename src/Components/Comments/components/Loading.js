import React from 'react';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { animationUtil } from '~/Utils';

const StyleLoading = styled('div', {
    width:           '40rem',
    minHeight:       '.3rem',
    margin:          '1rem',
    marginLeft:      '20.5rem',
    opacity:         '.5',
    backgroundImage: theme.color.multiWaves,
    ...animationUtil.multiWaves(),
    ':after':        {
        content:         '""',
        position:        'absolute',
        zIndex:          '1',
        backgroundColor: theme.color.MINE_SHAFT_32,
        border:          `1px solid ${theme.color.BLACK}`,
    },
});

const Loading = () => (
    <StyleLoading />
);

export default Loading;
