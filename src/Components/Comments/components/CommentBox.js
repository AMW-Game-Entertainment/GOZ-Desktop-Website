import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { postsUtil, mathUtil } from '~/Utils';
import { PhotoBox } from './';

const StyleComment = styled('div', {
    flex:          '2 100%',
    color:         theme.color.WHITE,
    fontSize:      '.8rem',
    padding:       '1rem .5rem',
    background:    theme.color.MINE_SHAFT_32,
    display:       'flex',
    flexDirection: 'column',
});

const StyleText = styled('div', {
    flex:       '1 100%',
    margin:     '.5rem',
    textAlign:  'left',
    wordBreak:  `break-word`,
    whiteSpace: `pre-wrap`,
});

const StylePhotoBoxContainer = styled('div', {
    flex:      '1 100%',
    display:   'flex',
    minHeight: '5.5rem',
    maxWidth:  '54.4rem',
    marginTop: '.5rem',
});

const CommentBox = ({ isReal, Images, Text, showDialogComment }) => (
    <StyleComment>
        <StyleText
            dangerouslySetInnerHTML={{ __html: postsUtil.formatPostText(Text) }}
        />
        {
            Images.length > 0 &&
            <StylePhotoBoxContainer>
                {
                    // index as ImageId
                    Images.map((Image, ImageId) => (
                        <PhotoBox
                            key={mathUtil.randomNum()}
                            isReal={isReal}
                            Image={Image}
                            ImageId={ImageId}
                            onImageClick={showDialogComment}
                        />
                    ))
                }
            </StylePhotoBoxContainer>
        }
    </StyleComment>
);

CommentBox.defaultProps = {
    Images: [],
};

CommentBox.propTypes = {
    isReal:            PropTypes.bool.isRequired,
    Images:            PropTypes.arrayOf(PropTypes.string),
    Text:              PropTypes.string.isRequired,
    showDialogComment: PropTypes.func.isRequired,
};

export default CommentBox;
