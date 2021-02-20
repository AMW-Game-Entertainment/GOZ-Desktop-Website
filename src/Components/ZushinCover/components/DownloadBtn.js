import React from 'react';
import { styled } from 'styletron-react';
import { phrases, theme, Paths, Config } from '~/Constants';

const StyleDownloadBtn = styled('div', {
    height:              '3.2rem',
    fontFamily:          'Manga Temple',
    fontSize:            '1.2rem',
    lineHeight:          '3.2rem',
    color:               theme.color.WHITESMOKE,
    position:            'relative',
    textAlign:           'center',
    padding:             '0.5rem',
    top:                 '2rem',
    left:                '0rem',
    backgroundImage:     `url('${Paths.Assets.DownloadBtn}')`,
    backgroundSize:      'contain',
    backgroundPosition:  'center center',
    backgroundPositionX: '53%',
    backgroundRepeat:    'no-repeat',
    transition:          'all 0.4s ease-out',
    ':hover':            {
        opacity: '0.8',
    },
});

const DownloadLink = styled(`a`, {});

const DownloadBtn = () => (
    <DownloadLink
        target='_blank'
        href={Config.API.DownloadGOZ}
    >
        <StyleDownloadBtn>
            {phrases.DownloadBtn}
        </StyleDownloadBtn>
    </DownloadLink>
);

export default DownloadBtn;
