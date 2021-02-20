import React, { createRef } from 'react';
import { styled } from 'styletron-react';
import PropTypes from 'prop-types';
import { theme } from '~/Constants';
import { fontsUtil, fileUtil } from '~/Utils';

const { FA } = fontsUtil;

const Tab = styled('div', ({ $isActive }) => ({
    flex:       '1 5%%',
    fontSize:   '.9rem',
    textAlign:  'center',
    width:      '3rem',
    maxWidth:   '3rem',
    height:     '1.65rem',
    lineHeight: '1.65rem',
    background: $isActive ? theme.color.GOLDENROD : theme.color.MINE_SHAFT_32,
    color:      $isActive ? theme.color.WHITESMOKE : theme.color.GOLDENROD,
    ':hover':   {
        opacity: $isActive ? 1 : '.8',
    },
}));

const UploadInput = styled('input', {
    display: 'none',
});

const Header = styled('div', {
    display:       'flex',
    flex:          '1 20%',
    flexDirection: 'row',
    textAlign:     'right',
    direction:     'rtl',
    padding:       '.4rem',
    background:    theme.color.COD_GRAY_30,
});

/* eslint-disable indent */
const HeaderTab = ({
                       isPreviewVisible,
                       isActiveUploadTab,
                       onClickPreview,
                       handleUpload,
                       handleUploadTab,
                       refUploadInput,
                       config,
                   }) =>
    /* eslint-enable indent */
    (
        <Header>
            <Tab
                $isActive={isActiveUploadTab}
                onClick={handleUploadTab}
            >
                <FA
                    icon={['fal', 'camera']}
                    fixedWidth
                />
                <UploadInput
                    type='file'
                    id='uploadInput'
                    accept={fileUtil.toFullExtensionsNamesString(config.ext)}
                    $ref={refUploadInput}
                    onChange={handleUpload}
                    multiple
                />
            </Tab>
            <Tab
                onClick={() => onClickPreview()}
                $isActive={isPreviewVisible}
            >
                <FA
                    icon={['fal', 'eye']}
                    fixedWidth
                />
            </Tab>
        </Header>
    );

HeaderTab.propTypes = {
    isPreviewVisible:  PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]).isRequired,
    isActiveUploadTab: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]).isRequired,
    onClickPreview:    PropTypes.func.isRequired,
    handleUpload:      PropTypes.func.isRequired,
    handleUploadTab:   PropTypes.func.isRequired,
    refUploadInput:    PropTypes.instanceOf(createRef()).isRequired,
    config:            PropTypes.shape({}).isRequired,
};

export default HeaderTab;
