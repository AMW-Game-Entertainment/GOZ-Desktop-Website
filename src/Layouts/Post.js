import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { pageInitUtil } from '~/Utils';

const StyleGridZushin = styled(`div`, ({ $PostImage }) => ({
    backgroundColor:      theme.color.DARK_GRAY_27,
    backgroundImage:      `${theme.color.PostPageCover}, 
    url(${$PostImage})`,
    backgroundRepeat:     `no-repeat`,
    backgroundSize:       `cover`,
    backgroundAttachment: `fixed`,
    backgroundPosition:   `center center`,
    gridTemplateColumns:  `repeat(5,1fr)`,
    gridTemplateRows:     `repeat(5,1fr)`,
    gridTemplateAreas:    `
        'header                 header                  header                  header               header'
            '.                  post                    post                    post                 .'
        'footer                  footer                  footer                  footer               footer'
        `,
}));

const StyleContentContainer = styled('div', {
    textAlign:  'center',
    background: theme.color.DARK_GRAY_27,
});

const StyleFooterContainer = styled(`footer`, {
    minHeight: '10rem',
});

const Layout = ({ BackgroundImage, Notification, Header, Post, Footer }) => (
    <StyleGridZushin
        $PostImage={BackgroundImage}
    >
        <Notification />
        <Header
            areaName='header'
        />
        <StyleContentContainer>
            <Post
                PostId={pageInitUtil.PostPageParams().PostId}
                areaName='post'
            />
        </StyleContentContainer>
        <StyleFooterContainer>
            <Footer />
        </StyleFooterContainer>
    </StyleGridZushin>
);

Layout.propTypes = {
    BackgroundImage: PropTypes.string.isRequired,
    Notification:    PropTypes.func.isRequired,
    Header:          PropTypes.func.isRequired,
    Post:            PropTypes.func.isRequired,
    Footer:          PropTypes.func.isRequired,
};

export default Layout;

