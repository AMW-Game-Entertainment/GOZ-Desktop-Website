import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { pageInitUtil } from '~/Utils';

const { ProfileUserId } = pageInitUtil.MainPageParams();

const StyleGridZushin = styled(`div`, {
    backgroundColor:      theme.color.DARK_GRAY_27,
    backgroundRepeat:     `no-repeat`,
    backgroundSize:       `contain`,
    backgroundAttachment: `fixed`,
    backgroundPosition:   `center center`,
    gridTemplateColumns:  `repeat(5,1fr)`,
    gridTemplateRows:     `repeat(5,1fr)`,
    gridTemplateAreas:    `
        'header                 header                  header                  header               header'
        'cover-photo-zushin     cover-photo-zushin      cover-photo-zushin      cover-photo-zushin   cover-photo-zushin'
        '.                      slider-events           .                       slider-notes         .'
        '.                      latest-news             latest-news             latest-news          .'
        'footer                 footer                  footer                   footer              footer'
        `,
});

const StyleSlidesContainer = styled('div', {
    display: 'inline-flex',
    width:   '100%',
});

const StyleContentContainer = styled('div', {
    textAlign:  'center',
    background: theme.color.DARK_GRAY_27,
});

const StyleFooterContainer = styled(`footer`, {
    minHeight: '10rem',
});

const Layout = ({ Header, Notification, CoverPhoto, Notes, Events, NewsFeed, Footer }) => (
    <StyleGridZushin>
        <Notification />
        <Header
            areaName='header'
        />
        <CoverPhoto
            areaName='cover-photo-zushin'
        />
        <StyleContentContainer>
            <StyleSlidesContainer>
                <Notes
                    areaName='slider-notes'
                    userId={ProfileUserId}
                />
                <Events
                    areaName='slider-events'
                    userId={ProfileUserId}
                />
            </StyleSlidesContainer>
            <NewsFeed
                areaName='latest-news'
                userId={ProfileUserId}
            />
        </StyleContentContainer>
        <StyleFooterContainer>
            <Footer />
        </StyleFooterContainer>
    </StyleGridZushin>
);

Layout.propTypes = {
    Header:       PropTypes.func.isRequired,
    Notification: PropTypes.func.isRequired,
    CoverPhoto:   PropTypes.func.isRequired,
    Notes:        PropTypes.func.isRequired,
    Events:       PropTypes.func.isRequired,
    NewsFeed:     PropTypes.func.isRequired,
    Footer:       PropTypes.func.isRequired,
};

export default Layout;

