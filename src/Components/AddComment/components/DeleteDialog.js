import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { phrases } from '~/Constants';
import { Overlay, Dialog, DialogDeleteBox } from '~/Components';

class DeleteDialog extends Component {
    DialogStyle = () => ({
        width:  '40rem',
        height: '11rem',
    });

    DialogContent = (Id, fileName) => {
        const { hideDialogAddComment, removeCommentImage } = this.props;

        return (
            <DialogDeleteBox
                Title={phrases.Dialog.DeleteImageDescription}
                onConfirm={() => {
                    removeCommentImage([fileName]);
                    hideDialogAddComment(Id);
                }}
                onCancel={() => hideDialogAddComment(Id)}
            />
        );
    };

    DialogTitle = (Id) => phrases.Dialog.DeleteImageTitle.replace('{Id}', Id);

    render() {
        const { hideDialogAddComment, visibileList, Id, fileName } = this.props;
        const isDialogVisible                                      = visibileList[Id];
        return (
            <Fragment>
                <Overlay
                    isVisible={isDialogVisible}
                    onOverlayClick={() => hideDialogAddComment(Id)}
                />
                <Dialog
                    size={this.DialogStyle()}
                    Content={this.DialogContent(Id, fileName)}
                    Title={this.DialogTitle(Id)}
                    isOpen={isDialogVisible}
                    handleDialogVisibility={() => hideDialogAddComment(Id)}
                />
            </Fragment>
        );
    }
}

DeleteDialog.propTypes = {
    visibileList:         PropTypes.shape({}).isRequired,
    Id:                   PropTypes.number.isRequired,
    fileName:             PropTypes.string.isRequired,
    hideDialogAddComment: PropTypes.func.isRequired,
    removeCommentImage:   PropTypes.func.isRequired,
};

export default DeleteDialog;
