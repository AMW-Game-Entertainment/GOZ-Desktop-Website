import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { phrases, ModelType } from '~/Constants';
import { Overlay, Dialog, DialogPhotoBox, DialogDeleteBox } from '~/Components';
import { AddCommentContainer } from '~/Containers';
import { commentUtil } from '~/Utils';
import { Header, CommentBox, MediaControls, Paginate, Loading } from './components';

const StyleCommentButtonContainer = styled(`div`, {
    width:      '57%',
    minHeight:  '6rem',
    marginLeft: '9rem',
});

const StyleCommentBox = styled('div', {
    display:       'flex',
    flexDirection: 'row',
    minHeight:     '6rem',
});

const StylePhoto = styled('div', ({ $image }) => ({
    flex:               '1 6%',
    height:             `3.5rem`,
    maxHeight:          `3.5rem`,
    borderRadius:       `50%`,
    backgroundImage:    `url(${$image})`,
    backgroundSize:     'cover',
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center center',
}));

const StyleContent = styled('div', {
    display:       'flex',
    flex:          '2 94%',
    flexDirection: 'column',
    marginLeft:    '1rem',
});

class Comments extends Component {
    state = {
        type:    null,
        ImageId: null,
    };

    componentDidMount() {
        const { getComments, PostId } = this.props;
        getComments(PostId, 0);
    }

    changeDialogType = (type, ImageId) => {
        this.setState({ type, ImageId });
    };

    DialogStyle = () => {
        const { type } = this.state;

        switch (type) {
        case ModelType.Dialog.PHOTO: {
            return {
                width:  '80rem',
                height: '40rem',
            };
        }
        case ModelType.Dialog.DELETE: {
            return {
                width:  '40rem',
                height: '11rem',
            };
        }
        default: {
            return {
                width:  '80rem',
                height: '40rem',
            };
        }
        }
    };

    DialogContent = ({ Images, Type, PostId, Id }) => {
        const { hideDialogComment, deleteComment, comments } = this.props;
        const { type, ImageId }                              = this.state;

        switch (type) {
        case ModelType.Dialog.PHOTO: {
            return (
                <DialogPhotoBox
                    Image={Images[ImageId]}
                />
            );
        }
        case ModelType.Dialog.DELETE: {
            return (
                <DialogDeleteBox
                    Title={phrases.Dialog.DeleteCommentDescription}
                    onConfirm={() => {
                        this.changeDialogType(null);
                        hideDialogComment(Id);
                        deleteComment(PostId, Type, Id, commentUtil.getLimit(comments));
                    }}
                    onCancel={() => hideDialogComment(Id)}
                />
            );
        }
        default: {
            return (<div />);
        }
        }
    };

    DialogTitle = ({ CharName, Id }) => {
        const { type } = this.state;

        switch (type) {
        case ModelType.Dialog.PHOTO: {
            return phrases.Comment.Title_PhotoUsers.replace('{user1}', CharName);
        }
        case ModelType.Dialog.DELETE: {
            return phrases.Dialog.TitleDeleteComment.replace('{id}', Id);
        }
        default: {
            return ``;
        }
        }
    };
    /* eslint-disable indent */
    CommentBox = ({

                      Id, Type, PostId, Images,
                      Profile: { Profile_Image, Char_Name: CharName, UserId }, /* eslint-disable-line camelcase */
                      Text, Created,
                  }) => {
        /* eslint-enable indent */
        const { hideDialogComment, showDialogComment, visibileList, CurrentUserId } = this.props;
        const isDialogVisible                                                       = visibileList[Id];
        const isReal                                                                = Id > 0;
        return (
            <StyleCommentBox key={Id}>
                {
                    isDialogVisible &&
                    <Fragment>
                        <Overlay
                            isVisible={isDialogVisible}
                            onOverlayClick={() => hideDialogComment(Id)}
                        />
                        <Dialog
                            size={this.DialogStyle()}
                            Content={this.DialogContent({ Images, Type, PostId, Id })}
                            Title={this.DialogTitle({ CharName, Id })}
                            isOpen={isDialogVisible}
                            handleDialogVisibility={() => hideDialogComment(Id)}
                        />
                    </Fragment>
                }
                <StylePhoto $image={Profile_Image} />
                <StyleContent>
                    <Header
                        isReal={isReal}
                        CharName={CharName}
                        UserId={UserId}
                        CurrentUserId={CurrentUserId}
                        Created={Created}
                        onDeleteClickBtn={() => {
                            this.changeDialogType(ModelType.Dialog.DELETE, null);
                            showDialogComment(Id);
                        }}
                    />
                    <CommentBox
                        isReal={isReal}
                        Images={Images}
                        Text={Text}
                        showDialogComment={(ImageId) => {
                            this.changeDialogType(ModelType.Dialog.PHOTO, ImageId);
                            showDialogComment(Id);
                        }}
                    />
                    {
                        isReal &&
                        <MediaControls
                            CommentId={Id}
                            Type={Type}
                        />
                    }
                </StyleContent>
            </StyleCommentBox>
        );
    };

    isRealComments = (comments) => Object.keys(comments.find(({ Id }) => Id === 0) || {}).length === 0;

    render() {
        const { PostId, loadMoreComment, FirstId, isLoading, comments } = this.props;
        return (
            <Fragment>
                <StyleCommentButtonContainer>
                    {comments.map((comment) => this.CommentBox(comment))}
                </StyleCommentButtonContainer>
                {
                    !isLoading &&
                    commentUtil.isCommented(comments) &&
                    (FirstId > 0 && FirstId !== commentUtil.getPaginitionId(comments))
                    && this.isRealComments(comments) &&
                    <Paginate
                        loadMoreComment={() => loadMoreComment(PostId, commentUtil.getPaginitionId(comments))}
                    />
                }
                {
                    isLoading &&
                    <Loading />
                }
                <AddCommentContainer
                    PostId={PostId}
                    isReal={this.isRealComments(comments)}
                    Limit={commentUtil.getLimit(comments)}
                />
            </Fragment>
        );
    }
}

Comments.propTypes = {
    comments:          PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    CurrentUserId:     PropTypes.number.isRequired,
    isLoading:         PropTypes.bool.isRequired,
    PostId:            PropTypes.number.isRequired,
    FirstId:           PropTypes.number.isRequired,
    visibileList:      PropTypes.shape({}).isRequired,
    getComments:       PropTypes.func.isRequired,
    deleteComment:     PropTypes.func.isRequired,
    loadMoreComment:   PropTypes.func.isRequired,
    showDialogComment: PropTypes.func.isRequired,
    hideDialogComment: PropTypes.func.isRequired,
};

export default Comments;
