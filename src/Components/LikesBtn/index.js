import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { fontsUtil, likeUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleLikeButtonContainer = styled(`div`, {
    display:    'inline-flex',
    minWidth:   '3.5rem',
    background: theme.color.DARK_GRAY,
});
const StyleLikesTotal          = styled(`div`, {
    color:            theme.color.LIGHT_DARK_GRAY_153,
    border:           `1px solid ${theme.color.DARK_GRAY}`,
    borderRightColor: theme.color.DARK_GRAY_40,
    padding:          '0.3rem',
    minWidth:         `1rem`,
    marginRight:      `0.3rem`,
    ':hover':         {
        opacity: '0.8',
    },
});
const StyleLikesIcon           = styled(FA, ({ $isLiked }) => ({
    color:     $isLiked ? theme.color.GOLDENROD : theme.color.LIGHT_DARK_GRAY_153,
    width:     `2rem`,
    padding:   0,
    marginTop: `0.25rem`,
    ':hover':  {
        opacity: '0.8',
    },
}));

class LikeButton extends Component {
    componentDidMount() {
        const { getLikes, PostId, Type } = this.props;
        getLikes(PostId, Type);
    }

    getLikes() {
        const { likes, PostId, Type } = this.props;
        return likes[PostId]
            ? likes[PostId][Type]
                ? likes[PostId][Type]
                : []
            : [] || [];
    }

    handleLike = () => {
        const { userId, addLike, deleteLike, PostId, Type } = this.props;
        if (likeUtil.isLiked(this.getLikes(), userId)) {
            deleteLike(PostId, Type);
        } else {
            addLike(PostId, Type);
        }
    };

    render() {
        const { userId } = this.props;

        return (
            <StyleLikeButtonContainer
                onClick={this.handleLike}
            >
                <StyleLikesTotal>
                    {likeUtil.getTotalLikes(this.getLikes())}
                </StyleLikesTotal>
                <StyleLikesIcon
                    icon={['fal', 'thumbs-up']}
                    $isLiked={likeUtil.isLiked(this.getLikes(), userId)}
                />
            </StyleLikeButtonContainer>
        );
    }
}

LikeButton.propTypes = {
    likes:      PropTypes.shape({}).isRequired,
    userId:     PropTypes.number.isRequired,
    PostId:     PropTypes.number.isRequired,
    Type:       PropTypes.number.isRequired,
    getLikes:   PropTypes.func.isRequired,
    deleteLike: PropTypes.func.isRequired,
    addLike:    PropTypes.func.isRequired,
};

export default LikeButton;
