import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { styled } from 'styletron-react';
import { theme, phrases } from '~/Constants';
import { postsUtil } from '~/Utils';
import { Header, UploadedImagesList } from './components';

const CommentContainer = styled('div', {
    display:       'flex',
    flexDirection: 'row',
    width:         '57%',
    minHeight:     '6rem',
    margin:        '2rem 9rem',
});

const Avatar = styled('div', ({ $image }) => ({
    flex:               '1 6%',
    height:             `3.5rem`,
    maxHeight:          `3.5rem`,
    borderRadius:       `50%`,
    backgroundImage:    `url(${$image})`,
    backgroundSize:     'cover',
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center center',
}));

const TextBox = styled('textarea', ({ $visible }) => ({
    flex:            '2 60%',
    maxHeight:       '8.5rem',
    margin:          '.5rem',
    padding:         '.8rem',
    textAlign:       'justify',
    overflowY:       'auto',
    resize:          'vertical',
    opacity:         $visible ? 1 : 0,
    transition:      $visible ? 'all .1s ease-in' : '',
    border:          `0px solid ${theme.color.MINE_SHAFT_32}`,
    background:      theme.color.MINE_SHAFT_32,
    color:           theme.color.WHITESMOKE,
    fontSize:        '1.1rem',
    '::placeholder': {
        fontFamily: 'Manga Speak Two',
        fontSize:   '0.5rem',
        color:      theme.color.GOLDENROD,
    },
    ':focus':        {
        outline:         'none',
        border:          `0px solid ${theme.color.MINE_SHAFT_32}`,
        backgroundColor: theme.color.MINE_SHAFT_32,
        fontSize:        '1.1rem',
    },
}));

const PreviewContent = styled('div', ({ $visible }) => ({
    flex:       '2 60%',
    minHeight:  '3rem',
    maxHeight:  '8.5rem',
    margin:     '.5rem',
    padding:    '.8rem',
    fontWeight: 'normal',
    fontSize:   '.8rem',
    textAlign:  'justify',
    wordBreak:  `break-word`,
    whiteSpace: `pre-wrap`,
    opacity:    $visible ? 1 : 0,
    transition: $visible ? 'all .1s ease-in' : '',
}));

const Content = styled('div', {
    display:       'flex',
    flex:          '2 94%',
    flexDirection: 'column',
    marginLeft:    '1rem',
    background:    theme.color.MINE_SHAFT_32,
});

class AddComment extends Component {
    constructor() {
        super();

        this.textInput   = createRef();
        this.uploadInput = createRef();
    }

    state = {
        isDisabled:       false,
        canClear:         false,
        isPreviewVisible: false,
    };

    static getDerivedStateFromProps(props, state) {
        return state.isDisabled && !props.isLoading ? {
            canClear:         true,
            isPreviewVisible: false,
            isDisabled:       false,
        } : null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        const canUpdate = this.props.previewFiles !== nextProps.previewFiles
            || this.props.isUploading !== nextProps.isUploading
            || !isEqual(this.props.visibileList, nextProps.visibileList)
            || this.state.isPreviewVisible !== nextState.isPreviewVisible
            || this.props.CurrentUserImage !== nextProps.CurrentUserImage;
        return canUpdate;
    }

    onWrite = ({ which: keyCode }) => {
        if (keyCode === 13) {
            const text                                       = this.getContentText();
            const { addComment, PostId, Limit, isUploading } = this.props;

            if (text.length > 0 && !isUploading) {
                this.setState({
                    isDisabled: true,
                });
                addComment(PostId, text, Limit);
            }
        }
    };

    setPreviewTabVisibility = () => {
        const { isPreviewVisible, isDisabled } = this.state;

        if (!isDisabled) {
            this.setState({
                isPreviewVisible: !isPreviewVisible,
            });
        }
    };

    getContentText = () => {
        if (this.textInput.current && this.textInput.current.value) {
            return this.textInput.current.value.length
                ? this.textInput.current.value : '';
        }
        return '';
    };

    checkChanges() {
        if (this.state.canClear && this.props.isReal) {
            this.setState({
                canClear: false,
            });
            this.textInput.current.value = '';
        }
    }

    handleUpload = ({ target: { files: newFiles } }) => {
        const { uploadCommentFiles } = this.props;

        if (newFiles.length) {
            uploadCommentFiles(newFiles);
        }
    };

    handleUploadTab = () => {
        if (this.uploadInput.current && !this.props.isUploading) {
            this.uploadInput.current.click();
        }
    };

    render() {
        /* eslint-disable indent */
        const {
                  CurrentUserImage,
                  previewFiles,
                  previewFormFiles,
                  isUploading,
                  visibileList,
                  config,
                  showDialogAddComment,
                  hideDialogAddComment,
                  removeCommentImage,
              } = this.props;
        /* eslint-enable indent */
        const { isPreviewVisible, isDisabled } = this.state;
        const hasFiles                         = (previewFiles.length || previewFormFiles.length || isUploading);

        this.checkChanges();

        return (
            <CommentContainer>
                <Avatar
                    $image={CurrentUserImage}
                />
                <Content>
                    <Header
                        isPreviewVisible={isPreviewVisible}
                        isActiveUploadTab={hasFiles}
                        onClickPreview={this.setPreviewTabVisibility}
                        handleUpload={this.handleUpload}
                        handleUploadTab={this.handleUploadTab}
                        refUploadInput={this.uploadInput}
                        config={config}
                    />
                    {
                        isPreviewVisible ?
                            <PreviewContent
                                $visible={isPreviewVisible}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        postsUtil.formatPostText(
                                            this.getContentText() || phrases.Comment.AddComment_NoContent,
                                        ),
                                }}
                            />
                            :
                            <TextBox
                                $visible={!isPreviewVisible}
                                disabled={isDisabled}
                                type='text'
                                placeholder={phrases.Comment.AddComment_Placeholder}
                                $ref={this.textInput}
                                rows='3'
                                onKeyUp={this.onWrite}
                                defaultValue={this.getContentText()}
                            />
                    }
                    <UploadedImagesList
                        isActiveImgsContainer={hasFiles}
                        showDialogAddComment={showDialogAddComment}
                        hideDialogAddComment={hideDialogAddComment}
                        removeCommentImage={removeCommentImage}
                        previewFiles={previewFiles}
                        previewFormFiles={previewFormFiles}
                        visibileList={visibileList}
                    />
                </Content>
            </CommentContainer>
        );
    }
}

AddComment.defaultProps = {
    isUploading:      false,
    isLoading:        false,
    previewFiles:     [],
    previewFormFiles: [],
};

AddComment.propTypes = {
    CurrentUserImage:     PropTypes.string.isRequired,
    addComment:           PropTypes.func.isRequired,
    uploadCommentFiles:   PropTypes.func.isRequired,
    hideDialogAddComment: PropTypes.func.isRequired,
    showDialogAddComment: PropTypes.func.isRequired,
    removeCommentImage:   PropTypes.func.isRequired,
    isUploading:          PropTypes.bool,
    isLoading:            PropTypes.bool, /* eslint-disable-line react/no-unused-prop-types */
    isReal:               PropTypes.bool.isRequired,
    Limit:                PropTypes.number.isRequired,
    PostId:               PropTypes.number.isRequired,
    visibileList:         PropTypes.shape({}).isRequired,
    previewFiles:         PropTypes.arrayOf(PropTypes.shape({
        UploadedPath: PropTypes.string.isRequired,
        fileName:     PropTypes.string.isRequired,
        Id:           PropTypes.number.isRequired,
    })),
    previewFormFiles:     PropTypes.arrayOf(PropTypes.shape({})),
    config:               PropTypes.shape({}).isRequired,
};

export default AddComment;
