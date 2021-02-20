import { styled } from 'styletron-react';
import { theme, Paths } from '~/Constants';

export default styled(`div`, {
    width:              '13rem',
    height:             '8rem',
    filter:             'contrast(0%)',
    backgroundImage:    `url('${Paths.Logo}')`,
    backgroundPosition: 'center center',
    backgroundSize:     'contain',
    backgroundRepeat:   'no-repeat',
    margin:             '0 0.8rem 0 0',
    borderRight:        `1px solid ${theme.color.DARKER_GRAY_51}`,
});
