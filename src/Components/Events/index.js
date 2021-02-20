import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { phrases, Config } from '~/Constants';
import { Slider } from '~/Components';
import { urlUtil, dateUtil } from '~/Utils';

const ConfigEvents = Config.Components.Events;

class Events extends Component {
    componentDidMount() {
        const { getEvents, userId } = this.props;
        getEvents(userId);
    }

    setSlideData = () => {
        const { events } = this.props;

        return events.map((event) => ({
            slideId:    event.id,
            ...event,
            date:       dateUtil.formatToEventDate(event.isSameDate, event.startDate, event.endDate),
            slideIndex: events.indexOf(event),
            sliderBtns: [
                {
                    Text: phrases.Event.EventVisit,
                    Link: urlUtil.createLink('PostLink').replace('{postId}', event.postId),
                    Icon: ['fal', 'eye'],
                },
                {
                    Text: phrases.Event.ViewEvents,
                    Link: urlUtil.createLink('AllEvents'),
                    Icon: ['fal', 'angle-right'],
                },
            ],
        }));
    };

    render() {
        const { areaName, loading, hasError }    = this.props;
        const { width, height, MaxSliderEvents } = ConfigEvents;
        return (
            <Slider
                areaName={areaName}
                width={width}
                height={height}

                loading={loading}
                hasError={hasError}

                maxSlides={MaxSliderEvents}
                slidesData={this.setSlideData()}
            />
        );
    }
}

Events.propTypes = {
    areaName:  PropTypes.string.isRequired,
    loading:   PropTypes.bool.isRequired,
    hasError:  PropTypes.bool.isRequired,
    events:    PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    userId:    PropTypes.number.isRequired,
    getEvents: PropTypes.func.isRequired,
};

export default Events;
