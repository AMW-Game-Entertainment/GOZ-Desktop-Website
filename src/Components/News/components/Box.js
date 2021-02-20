import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import { NewsImage, NewsDate, NewsText, NewsBtn } from './';

const StyleBox = styled(`div`, ({ $width, $height }) => ({
    width:               `${$width}`,
    height:              `${$height}`,
    padding:             `0.4rem`,
    color:               `white`,
    display:             'inline-grid',
    gridTemplateColumns: `repeat(2, 1fr)`,
    gridTemplateRows:    `2fr 2fr 1.7rem 3.5rem 2rem`,
    gridTemplateAreas:   `
                    'icon icon'
                    'icon icon'
                    'date date'
                    'text text'
                    '.... btn-container'
                    `,
    backgroundColor:     `#0e0d0d59`,
}));

const StyleButtonsContainer = styled(`div`, {
    textAlign: `right`,
    gridArea:  'btn-container',
});

const Box = ({ text, date, image, boxHeight, boxWidth, icons = [], ...others }) => (
    <StyleBox
        $height={boxHeight}
        $width={boxWidth}
        {...others}
    >
        <NewsImage
            image={image}
        />
        <NewsDate date={date} />
        <NewsText text={text} />
        <StyleButtonsContainer>
            {
                icons.map((icon) =>
                    (<NewsBtn
                        href={icon.Link}
                        text={icon.Text}
                        icon={icon.Icon}
                        key={Object.keys(icons).indexOf(icon)}
                    />))
            }
        </StyleButtonsContainer>
    </StyleBox>
);

Box.propTypes = {
    text:         PropTypes.string.isRequired,
    date:         PropTypes.string.isRequired,
    image:        PropTypes.string.isRequired,
    boxWidth:     PropTypes.string.isRequired,
    boxHeight:    PropTypes.string.isRequired,
    icons:        PropTypes.arrayOf(PropTypes.shape({
        Link: PropTypes.string.isRequired,
        Text: PropTypes.string.isRequired,
        Icon: PropTypes.arrayOf(
            PropTypes.string.isRequired,
        ).isRequired,
    })).isRequired,
};

export default Box;
