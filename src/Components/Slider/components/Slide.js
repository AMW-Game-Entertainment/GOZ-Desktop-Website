import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import { mathUtil } from '~/Utils';
import { SlideTitle as Title, SlideDate as Date, SlideBtn as Button, Paginition } from './';

export const StyleSlide = styled('div', ({ image, $onShow = false }) => ({
    width:              '-webkit-fill-available',
    height:             '-webkit-fill-available',
    padding:            '1rem',
    backgroundImage:    `linear-gradient(rgba(36, 36, 36, 0.94), rgba(36, 36, 36, 0.34)), url('${image}')`,
    backgroundSize:     'cover',
    backgroundPosition: 'center center',
    backgroundRepeat:   'no-repeat',
    display:            $onShow ? 'block' : 'none',
    position:           'relative',
    overflow:           'hidden',
}));

const StyleBottom = styled('div', {
    padding:   '0.2rem',
    textAlign: 'right',
    display:   'inline-flex',
    float:     'right',
});

const Slide = ({ slideId, title, image, date, sliderButtons, $onShow, showMainSlide, onClickSlide, totalSlides }) => (
    <StyleSlide
        $onShow={showMainSlide || $onShow}
        image={image}
    >
        <Date date={date} />
        <Title title={title} />
        <StyleBottom>
            {
                sliderButtons.map((btn) =>
                    (
                        <Button
                            text={btn.Text}
                            link={btn.Link}
                            icon={btn.Icon}
                            key={mathUtil.randomNum(slideId)}
                        />
                    ))
            }
            {
                Object.keys(new Array(totalSlides).fill()).map((pageNum) =>
                    (
                        <Paginition
                            onClickSlide={onClickSlide}
                            slideIndex={pageNum}
                            key={mathUtil.randomNum(slideId)}
                        />
                    ))
            }
        </StyleBottom>
    </StyleSlide>
);

Slide.defaultProps = {
    slideId:       0,
    sliderButtons: [],
    $onShow:       false,
    showMainSlide: false,
    totalSlides:   1,
};

Slide.propTypes = {
    slideId:       PropTypes.number,
    title:         PropTypes.string.isRequired,
    image:         PropTypes.string.isRequired,
    date:          PropTypes.string.isRequired,
    sliderButtons: PropTypes.arrayOf(PropTypes.shape()),
    $onShow:       PropTypes.bool,
    showMainSlide: PropTypes.bool,
    onClickSlide:  PropTypes.func.isRequired,
    totalSlides:   PropTypes.number,
};

export default Slide;
