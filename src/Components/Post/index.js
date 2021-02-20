import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme, phrases } from '~/Constants';
import { Dialog, Overlay, MediaControls, DialogPhotoBox } from '~/Components';
import { Header, PostBox, PhotoBox, VideoBox } from './components';

const StylePostContainer = styled('div', ({ $areaName }) => ({
    color:    theme.color.WHITESMOKE,
    gridArea: $areaName,
}));

class Post extends Component {
    state = {
        isDialogOpen: false,
    };

    componentDidMount() {
        const { getPost, PostId } = this.props;
        getPost(PostId);
    }

    setPost() {
        const { Post: PostData, areaName, PostId } = this.props;
        const { isDialogOpen }             = this.state;
        /* eslint-disable indent */
        const {
                  Profile: { From_Image, From_CharName, To_CharName }, /* eslint-disable-line camelcase */
                  Post:    { isByOwner, Created, FromId, UserId: ToId, Text, ImageSrc, VideoSrc, Type },
              } = PostData;
        /* eslint-enable indent */
        return (
            <Fragment>
                <Overlay
                    isVisible={isDialogOpen}
                    onOverlayClick={() => this.handleDialogVisibility(false)}
                />
                <Dialog
                    size={{
                        width:  '80rem',
                        height: '40rem',
                    }}
                    Title={this.DialogTitle()}
                    Content={this.DialogContent()}
                    isOpen={isDialogOpen}
                    handleDialogVisibility={this.handleDialogVisibility}
                />
                <StylePostContainer
                    $areaName={areaName}
                >
                    <Header
                        FromName={From_CharName} /* eslint-disable-line camelcase */
                        FromId={FromId}
                        ToName={To_CharName} /* eslint-disable-line camelcase */
                        ToId={ToId}
                        ProfileImage={From_Image} /* eslint-disable-line camelcase */
                        isSameUser={isByOwner}
                        Date={Created}
                    />
                    <PostBox
                        Text={Text}
                    />
                    {
                        ImageSrc &&
                        <PhotoBox
                            onImageClick={this.handleDialogVisibility}
                            Image={ImageSrc}
                        />
                    }
                    {
                        VideoSrc &&
                        <VideoBox
                            VideoSrc={VideoSrc}
                        />
                    }
                    <MediaControls
                        PostId={PostId}
                        Type={Type}
                    />
                </StylePostContainer>
            </Fragment>
        );
    }

    handleDialogVisibility = (visibility) => {
        this.setState({
            isDialogOpen: visibility,
        });
    };

    DialogTitle() {
        /* eslint-disable indent, react/prop-types */
        const { Post: PostData } = this.props;
        const {
                  Post:    { ImageSrc, isByOwner },
                  Profile: { From_CharName, To_CharName },
              }                  = PostData;
        /* eslint-enable indent */
        if (ImageSrc) {
            return isByOwner
                ? phrases.Post.Title_PhotoUsers
                    .replace('{user1}', From_CharName)
                : phrases.Post.Title_PhotoMultiUsers
                    .replace(`{user1}`, From_CharName)
                    .replace(`{user2`, To_CharName);
        }

        return ``;
    }

    DialogContent() {
        const { Post: { Post: { ImageSrc } } } = this.props;

        if (ImageSrc) {
            return (
                <DialogPhotoBox
                    Image={ImageSrc}
                />);
        }
        return (<span />);
    }

    render() {
        const { Post: PostData } = this.props;

        return (
            Object.keys(PostData).length
                ? this.setPost()
                : <div>Not found post</div>
        );
    }
}

Post.propTypes = {
    PostId:   PropTypes.number.isRequired,
    Post:     PropTypes.shape({}).isRequired,
    getPost:  PropTypes.func.isRequired,
    areaName: PropTypes.string.isRequired,
};

export default Post;
