import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { Title, Subtitle, DownloadBtn } from './components';

export const StyleCoverPhoto = styled('header', ({ $image, $areaName }) => ({
    width:                '100%',
    height:               '30rem',
    backgroundImage:      `${theme.color.ZushinCover}, url('${$image}')`,
    backgroundPosition:   'center',
    backgroundSize:       'cover',
    backgroundRepeat:     'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundColor:      theme.color.DARK_GRAY_36_5,
    gridArea:             $areaName,
}));

const CoverPhoto = ({ title, image, areaName }) => (
    <StyleCoverPhoto
        $image={image}
        $areaName={areaName}
    >
        <Title
            title={title}
        />
        <Subtitle />
        <DownloadBtn />
    </StyleCoverPhoto>
);

CoverPhoto.defaultProps = {
    areaName: `game-cover`,
};

CoverPhoto.propTypes = {
    areaName: PropTypes.string,
    title:    PropTypes.string.isRequired,
    image:    PropTypes.string.isRequired,
};

export default CoverPhoto;
