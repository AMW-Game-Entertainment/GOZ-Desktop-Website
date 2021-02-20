import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleBoxContainer = styled(`div`, {
    width:         `100%`,
    height:        `100%`,
    display:       'flex',
    flexDirection: 'column',
});

const StyleTitle = styled('div', {
    color:      theme.color.WHITESMOKE,
    flex:       '1  20%',
    textAlign:  'center',
    lineHeight: '3rem',
});

const StyleConfirmBtn = styled('div', {
    color:      theme.color.LIGHT_DARK_GRAY_153,
    background: theme.color.DARKER_GRAY_4,
    margin:     '.5rem',
    padding:    '1rem',
    flex:       '1 40%',
    textAlign:  'center',
    ':hover':   {
        opacity: '.7',
    },
});

const StyleCancelBtn = styled('div', {
    color:      theme.color.GOLDENROD,
    background: theme.color.DARKER_GRAY_4,
    margin:     '.5rem',
    padding:    '1rem',
    flex:       '2 40%',
    textAlign:  'center',
    ':hover':   {
        opacity: '.7',
    },
});

const StyleControl = styled('div', {
    flex:          '2 15%',
    display:       'flex',
    flexDirection: 'row',
    marginBottom:  '4rem',
});

const DialogDeleteBox = ({ Title, onConfirm, onCancel }) => (
    <StyleBoxContainer>
        <StyleTitle>{Title}</StyleTitle>
        <StyleControl>
            <StyleConfirmBtn
                onClick={onConfirm}
            >
                <FA
                    icon={['fal', 'check']}
                    fixedWidth
                />
            </StyleConfirmBtn>
            <StyleCancelBtn
                onClick={onCancel}
            >
                <FA
                    icon={['fal', 'times']}
                    fixedWidth
                />
            </StyleCancelBtn>
        </StyleControl>
    </StyleBoxContainer>
);

DialogDeleteBox.propTypes = {
    Title:     PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel:  PropTypes.func.isRequired,
};

export default DialogDeleteBox;
