import React, { Fragment } from 'react';
import { styled } from 'styletron-react';
import PropTypes from 'prop-types';
import { theme } from '~/Constants';
import { animationUtil, mathUtil } from '~/Utils';
import { DeleteDialog } from './';

const LoadingImage = styled('div', {
    width:           '4rem',
    height:          '4rem',
    margin:          '0 .05rem',
    opacity:         '0.5',
    backgroundImage: theme.color.loadingWaves,
    ...animationUtil.waves({ positionX: 3 }),
    ':after':        {
        content:         '""',
        position:        'absolute',
        zIndex:          '1',
        backgroundColor: theme.color.MINE_SHAFT_32,
        border:          `1px solid ${theme.color.BLACK}`,
    },
});

const UploadedImage = styled('div', ({ $image }) => ({
    width:            '4rem',
    height:           '4rem',
    margin:           '0 .05rem',
    backgroundImage:  `url(${$image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:   'cover',
    ':after':         {
        content:         '""',
        position:        'absolute',
        zIndex:          '1',
        backgroundColor: theme.color.MINE_SHAFT_32,
        border:          `1px solid ${theme.color.BLACK}`,
    },
}));

const UploadImagesContainer = styled('div', ({ $isVisible }) => ({
    flex:          '3 20%',
    minHeight:     '4rem',
    display:       $isVisible ? 'flex' : 'none',
    flexDirection: 'row',
}));

/* eslint-disable indent, react/jsx-indent */
const UploadedImagesList = ({
                                previewFormFiles,
                                previewFiles,
                                visibileList,
                                showDialogAddComment,
                                hideDialogAddComment,
                                removeCommentImage,
                                isActiveImgsContainer,
                            }) => (
    <UploadImagesContainer
        $isVisible={isActiveImgsContainer}
    >
        {
            /* eslint-enable indent, react/jsx-indent */
            previewFormFiles.map(() => (
                <LoadingImage
                    key={mathUtil.randomNum()}
                />
            ))
        }
        {
            previewFiles.map((file) => (
                <Fragment
                    key={mathUtil.randomNum()}
                >
                    {
                        visibileList[file.Id] &&
                        <DeleteDialog
                            Id={file.Id}
                            fileName={file.fileName}
                            removeCommentImage={removeCommentImage}
                            hideDialogAddComment={hideDialogAddComment}
                            visibileList={visibileList}
                        />
                    }
                    <UploadedImage
                        $image={file.UploadedPath}
                        onClick={() => showDialogAddComment(file.Id)}
                    />
                </Fragment>
            ))
        }
    </UploadImagesContainer>
);

UploadedImagesList.propTypes = {
    isActiveImgsContainer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]).isRequired,
    showDialogAddComment:  PropTypes.func.isRequired,
    hideDialogAddComment:  PropTypes.func.isRequired,
    removeCommentImage:    PropTypes.func.isRequired,
    visibileList:          PropTypes.shape({}).isRequired,
    previewFiles:          PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    previewFormFiles:      PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default UploadedImagesList;
