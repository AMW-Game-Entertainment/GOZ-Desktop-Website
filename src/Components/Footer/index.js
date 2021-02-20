import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { Logo, Navigation, Copyrights } from './components';

const StyleFooter = styled(`div`, ({ $areaName }) => ({
    width:      '100%',
    height:     '100%',
    background: theme.color.DARK_GRAY_27,
    gridArea:   $areaName,
}));

const StyleContentContainer = styled(`div`, {
    display:        'flex',
    flexWrap:       'nowrap',
    justifyContent: 'space-evenly',
});

const Footer = ({ areaName }) => (
    <StyleFooter $areaName={areaName}>
        <StyleContentContainer>
            <Logo />
            <Navigation />
        </StyleContentContainer>
        <Copyrights />
    </StyleFooter>
);

Footer.defaultProps = {
    areaName: 'footer',
};

Footer.propTypes = {
    areaName: PropTypes.string,
};

export default Footer;
