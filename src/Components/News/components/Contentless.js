import React from 'react';
import { styled } from 'styletron-react';
import { theme, phrases } from '~/Constants';
import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleLoading = styled(`div`, {
    margin:        '2rem',
    height:        `12rem`,
    lineHeight:    '10rem',
    verticalAlign: 'middle',
    fontSize:      `2.8rem`,
    color:         theme.color.WHITE,
});

export default () => (
    <StyleLoading>
        <FA
            icon={['fal', 'empty-set']}
            fixedWidth
            spin
        />
        {phrases.Error.Empty}
    </StyleLoading>
);
