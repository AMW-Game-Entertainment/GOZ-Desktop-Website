import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styled } from 'styletron-react';
import { mathUtil } from '~/Utils';

import { Slide, Loading, Error, Contentless } from './components';

const StyleSlider = styled('div', ({ $width, $height, $areaName }) => ({
    width:    `${$width}`,
    height:   `${$height}`,
    position: `relative`,
    display:  `inline-flex`,
    zIndex:   `2`,
    gridArea: $areaName,
}));

class Slider extends Component {
    state = {
        slidesSate:    [],
        showMainSlide: true,
    };

    toggleNextSlide = (slideId) => {
        const newList = Object.keys(new Array(this.state.slidesSate.length)).fill();

        newList[slideId] = true;

        this.setState({
            slidesSate:    newList,
            showMainSlide: false,
        });
    };

    SliderContent() {
        const { slidesData, maxSlides, startFrom, loading, hasError } = this.props;

        if (loading) {
            return (<Loading />);
        } else if (hasError) {
            return (<Error />);
        } else if (!slidesData.length) {
            return (<Contentless />);
        }
        return slidesData
            .slice(0, maxSlides)
            .map((slideData) => (
                <Slide
                    slideId={slideData.slideId}
                    PostId={slideData.postId}
                    title={slideData.title}
                    description={slideData.description}
                    image={slideData.image}
                    date={slideData.date}

                    sliderButtons={slideData.sliderBtns}
                    showMainSlide={slideData.slideIndex === startFrom ? this.state.showMainSlide : false}
                    $onShow={this.state.slidesSate[slidesData.indexOf(slideData)]}
                    onClickSlide={this.toggleNextSlide}
                    totalSlides={maxSlides}

                    key={mathUtil.randomNum(slideData.slideId)}
                />
            ));
    }

    render() {
        const { width, height, areaName } = this.props;

        return (
            <StyleSlider
                $width={width}
                $height={height}
                $areaName={areaName}
            >
                {this.SliderContent()}
            </StyleSlider>
        );
    }
}

Slider.defaultProps = {
    startFrom: 0,
    maxSlides: 1,
    areaName:  `slider`,
};

Slider.propTypes = {
    width:      PropTypes.string.isRequired,
    height:     PropTypes.string.isRequired,
    slidesData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    hasError:   PropTypes.bool.isRequired,
    loading:    PropTypes.bool.isRequired,
    startFrom:  PropTypes.number,
    maxSlides:  PropTypes.number,
    areaName:   PropTypes.string,
};

export default Slider;
