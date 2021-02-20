import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { animationUtil } from '~/Utils';
import { Header } from './components';

const StyleDialog = styled('div', ({ $isVisible, $Size }) => ({
    width:           $Size.width,
    height:          $Size.height,
    margin:          `auto`,
    position:        'fixed',
    bottom:          0,
    left:            0,
    right:           0,
    backgroundColor: theme.color.DARK_GRAY_37,
    ...animationUtil.slideDownWaterfall($isVisible),
}));

const DefaultMenu = () => (<span />);

const Dialog = ({ size, Content, Menu, Title, isOpen, handleDialogVisibility }) => (
    <StyleDialog
        $isVisible={isOpen}
        $Size={size}
    >
        <Header
            Title={Title}
            Menu={Menu}
            handleDialogVisibility={handleDialogVisibility}
        />
        {Content}
    </StyleDialog>
);

Dialog.defaultProps = {
    isOpen: false,
    Menu:   DefaultMenu,
};

Dialog.propTypes = {
    size:                   PropTypes.shape({
        height: PropTypes.string,
        width:  PropTypes.string,
    }).isRequired,
    Content:                PropTypes.element.isRequired,
    Menu:                   PropTypes.func,
    Title:                  PropTypes.string.isRequired,
    handleDialogVisibility: PropTypes.func.isRequired,
    isOpen:                 PropTypes.bool,
};

export default Dialog;
