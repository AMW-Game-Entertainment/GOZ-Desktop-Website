import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { LikesBtnContainer } from '~/Containers';

const StyleMediaContainer = styled('div', {
    flex:          '3 100%',
    display:       'flex',
    flexDirection: 'row-reverse',
    height:        '2.1rem',
    maxHeight:     '2.1rem',
    background:    theme.color.MINE_SHAFT_32,
});

const StyleLikeBtn = styled('div', {
    flex:      '1 20%',
    maxWidth:  '4rem',
    borderTop: `1px solid ${theme.color.DARK_GRAY_31}`,
});

const MediaControls = ({ CommentId, Type }) => (
    <StyleMediaContainer>
        <StyleLikeBtn>
            <LikesBtnContainer
                PostId={CommentId}
                Type={Type}
            />
        </StyleLikeBtn>
    </StyleMediaContainer>
);

MediaControls.propTypes = {
    CommentId: PropTypes.number.isRequired,
    Type:      PropTypes.number.isRequired,
};

export default MediaControls;
