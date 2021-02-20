import React from 'react';
import { styled } from 'styletron-react';
import { phrases, theme } from '~/Constants';

const StyleSubtitle = styled('div', {
    minHeight:  '5rem',
    margin:     'auto',
    position:   'relative',
    top:        '5rem',
    fontFamily: 'Manga Temple',
    fontSize:   '1.2rem',
    color:      theme.color.WHITESMOKE,
    textAlign:  'center',
    padding:    '0.5rem',
});

const Subtitle = () => (
    <StyleSubtitle>{phrases.GameCoverSubtitle}</StyleSubtitle>
);

export default Subtitle;
