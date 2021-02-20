import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slider } from '~/Components';
import { phrases, Config } from '~/Constants';
import { urlUtil } from '~/Utils';

const ConfigNotes = Config.Components.Notes;

class Notes extends Component {
    componentDidMount() {
        const { getNotes, userId } = this.props;
        getNotes(userId);
    }

    setSliderData = () => {
        const { notes } = this.props;

        return notes.map((note) => ({
            slideId:    note.id,
            ...note,
            date:       note.created,
            slideIndex: notes.indexOf(note),
            sliderBtns: [
                {
                    Text: phrases.Note.NoteVisit,
                    Link: urlUtil.createLink('PostLink').replace('{postId}', note.postId),
                    Icon: ['fal', 'info'],
                },
                {
                    Text: phrases.Note.ViewNotes,
                    Link: urlUtil.createLink('AllNotes'),
                    Icon: ['fal', 'angle-right'],
                },
            ],
        }));
    };

    render() {
        const { areaName, loading, hasError }   = this.props;
        const { width, height, MaxSliderNotes } = ConfigNotes;
        return (
            <Slider
                areaName={areaName}
                width={width}
                height={height}

                loading={loading}
                hasError={hasError}

                maxSlides={MaxSliderNotes}
                slidesData={this.setSliderData()}
            />
        );
    }
}

Notes.propTypes = {
    areaName: PropTypes.string.isRequired,
    loading:  PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    notes:    PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    userId:   PropTypes.number.isRequired,
    getNotes: PropTypes.func.isRequired,
};

export default Notes;
