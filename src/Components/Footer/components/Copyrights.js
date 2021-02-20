import React from 'react';
import { styled } from 'styletron-react';
import { theme, Config } from '~/Constants';

const StyleCopyrights = styled('div', {
    padding:   '0.6rem',
    textAlign: 'center',
    color:     theme.color.LIGHT_DARK_GRAY_153,
    fontSize:  '0.6rem',
    borderTop: `0.18rem solid ${theme.color.RED_236_58_0_9}`,
});

export default () => (<StyleCopyrights>{Config.Copyrights}</StyleCopyrights>);
