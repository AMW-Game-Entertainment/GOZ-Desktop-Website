import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { fontsUtil, routeUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleFA = styled(FA, {
    paddingRight: '0.3rem',
});

const StyleProfileLink = styled(Link, {
    color:    theme.color.WHITESMOKE,
    ':hover': {
        opacity: '0.8',
    },
});

const StyleArrowRight = styled(FA, {
    color:        theme.color.GOLDENROD,
    paddingRight: '0.4rem',
    paddingLeft:  '0.5rem',
});

const StyleHeader = styled(`div`, {
    backgroundColor: theme.color.DARK_GRAY_7,
    width:           `50rem`,
    height:          `4.2rem`,
    marginTop:       `3rem`,
    marginBottom:    `0.1rem`,
    boxShadow:       `-42.5rem 0.5rem 0rem ${theme.color.DARK_GRAY_37}`,
});

const StyleImage = styled(`div`, ({ $ProfileImage }) => ({
    width:              `4.4rem`,
    height:             `4.4rem`,
    borderRadius:       `50%`,
    marginLeft:         `2.8rem`,
    position:           `absolute`,
    backgroundPosition: `center center`,
    backgroundRepeat:   `no-repeat`,
    backgroundSize:     `cover`,
    backgroundImage:    `url(${$ProfileImage})`,
}));

const StyleName = styled(`div`, {
    color:      theme.color.WHITESMOKE,
    width:      `40rem`,
    padding:    '0.5rem',
    marginLeft: `8rem`,
    textAlign:  `left`,
    fontSize:   `1rem`,
    fontFamily: `Manga Temple`,
    borderLeft: `1px solid ${theme.color.DARKER_GRAY_51}`,
});

const StyleDate = styled(`div`, {
    color:      theme.color.GOLDENROD,
    width:      `40rem`,
    marginLeft: `8rem`,
    padding:    '1rem 0.5rem 0.5rem 0.5rem',
    fontSize:   `0.6rem`,
    fontFamily: `Manga Speak Two`,
    textAlign:  `right`,
});

const User = ({ FromName, ToName, FromId, ToId }) => (
    <Fragment>
        {
            (FromId > 0) &&
            <StyleProfileLink to={routeUtil.toProfileLink(FromId)}>
                {FromName}
            </StyleProfileLink>
        }
        {
            (ToId > 0) &&
            <Fragment>
                <StyleArrowRight
                    icon={['fas', 'caret-right']}
                    fixedWidth
                />
                <StyleProfileLink to={routeUtil.toProfileLink(ToId)}>
                    {ToName}
                </StyleProfileLink>
            </Fragment>
        }
    </Fragment>
);

const Header = ({ ProfileImage, FromName, ToName, FromId, ToId, isSameUser, Date }) => (
    <StyleHeader>
        <StyleImage
            $ProfileImage={ProfileImage}
        />
        <StyleName>
            {
                isSameUser
                    ? <User
                        FromName={FromName}
                        FromId={FromId}
                    />
                    : <User
                        FromName={FromName}
                        ToName={ToName}
                        FromId={FromId}
                        ToId={ToId}
                    />

            }
        </StyleName>
        <StyleDate>
            <StyleFA
                icon={['fal', 'clock']}
            />
            {Date}
        </StyleDate>
    </StyleHeader>
);

User.defaultProps = {
    ToName: '',
    ToId:   0,
};

User.propTypes = {
    FromName: PropTypes.string.isRequired,
    ToName:   PropTypes.string,
    FromId:   PropTypes.number.isRequired,
    ToId:     PropTypes.number,
};

Header.defaultProps = {
    ToName: '',
    ToId:   0,
};

Header.propTypes = {
    FromName:     PropTypes.string.isRequired,
    ToName:       PropTypes.string,
    FromId:       PropTypes.number.isRequired,
    ToId:         PropTypes.number,
    isSameUser:   PropTypes.bool.isRequired,
    ProfileImage: PropTypes.string.isRequired,
    Date:         PropTypes.string.isRequired,
};

export default Header;
