import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { postsUtil } from '~/Utils';

const StylePostBox = styled(`div`, {
    borderRight: `0.15rem solid ${theme.color.DARK_GRAY}`,
    color:       theme.color.WHITESMOKE,
    fontSize:    `0.9rem`,
    padding:     '2rem',
    margin:      `auto`,
    width:       `80rem`,
    wordBreak:   `break-word`,
    whiteSpace:  `pre-wrap`,
    textAlign:   `justify`,
});

const PostBox = ({ Text }) => (
    <StylePostBox
        dangerouslySetInnerHTML={{ __html: postsUtil.formatPostText(Text) }}
    />
);

PostBox.propTypes = {
    Text: PropTypes.string.isRequired,
};

export default PostBox;
