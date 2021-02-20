import React from 'react';
import { styled } from 'styletron-react';
import { theme, phrases } from '~/Constants';
import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

export const StyleErrorSlides = styled('div', () => ({
    width:           '-webkit-fill-available',
    height:          '-webkit-fill-available',
    padding:         '1rem',
    backgroundImage: `linear-gradient(rgba(36, 36, 36, 0.94), rgba(36, 36, 36, 0.34))`,
    position:        'relative',
    overflow:        'hidden',
    lineHeight:      '8rem',
    verticalAlign:   'middle',
    fontSize:        `1rem`,
    color:           theme.color.WHITE,
}));

const Loading = () => (
    <StyleErrorSlides>
        <FA
            icon={['fal', 'times']}
            fixedWidth
        />
        {phrases.Error.UnableToLoad}
    </StyleErrorSlides>
);

export default Loading;
