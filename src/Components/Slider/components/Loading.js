import React from 'react';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

export const StyleLoadingSlides = styled('div', () => ({
    width:           '-webkit-fill-available',
    height:          '-webkit-fill-available',
    padding:         '1rem',
    backgroundImage: `linear-gradient(rgba(36, 36, 36, 0.94), rgba(36, 36, 36, 0.34))`,
    position:        'relative',
    overflow:        'hidden',
    lineHeight:      '8rem',
    verticalAlign:   'middle',
    fontSize:        `2.2rem`,
    color:           theme.color.WHITE,
}));

const Loading = () => (
    <StyleLoadingSlides>
        <FA
            icon={['fal', 'spinner-third']}
            fixedWidth
            spin
        />
    </StyleLoadingSlides>
);

export default Loading;
