import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import { theme, phrases } from '~/Constants';
import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleFA = styled(FA, {
    paddingRight: '0.5rem',
});

const StyleLink = styled(`div`, {
    color:     `white`,
    fontSize:  `1rem`,
    margin:    `0.5rem 0.2rem`,
    textAlign: `right`,
});

const StyleTitle = styled(`div`, {
    padding:    `0.2rem`,
    margin:     `1rem 1rem`,
    boxShadow:  `0 0.1rem 0 ${theme.color.DARK_GRAY_37}`,
    color:      theme.color.WHITESMOKE,
    textAlign:  `left`,
    fontFamily: `Manga Temple`,
    fontSize:   `2rem`,
});

const StyleBtn = styled(`a`, {
    fontSize:        '0.9rem',
    lineHeight:      '0.9rem',
    fontFamily:      'Manga Speak Two',
    color:           'white',
    padding:         '0.2rem 1.5rem',
    margin:          '0rem, 0.5rem',
    textAlign:       'center',
    backgroundColor: theme.color.ORANGE_236_58_0_9,
    gridArea:        'btn',
});

const ListHeader = ({ links }) => (
    <StyleTitle>
        <div>
            <StyleFA
                icon={['fal', 'newspaper']}
                fixedWidth
            />
            {phrases.NewsFeed.News}
        </div>
        <StyleLink>
            {
                links.map((link) =>
                    (
                        <StyleBtn
                            href={link.Href}
                            key={links.indexOf(link)}
                        >
                            <StyleFA
                                icon={['fal', 'angle-right']}
                                fixedWidth
                            />
                            {link.Text}
                        </StyleBtn>
                    ))
            }
        </StyleLink>
    </StyleTitle>
);

ListHeader.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        Href: PropTypes.string,
        Text: PropTypes.string,
    })).isRequired,
};

export default ListHeader;
