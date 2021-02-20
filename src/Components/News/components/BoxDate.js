import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleDate = styled(`span`, {
    padding: `0 0 0 .4rem`,
});

const StyleContainer = styled(`div`, {
    textAlign:  `right`,
    fontSize:   `0.7rem`,
    lineHeight: `0.7rem`,
    fontFamily: `Manga Speak Two`,
    padding:    `.5rem`,
    gridArea:   'date',
});

const BoxDate = ({ date }) => (
    <StyleContainer>
        <FA
            icon={['fal', 'clock']}
        />
        <StyleDate>{date}</StyleDate>
    </StyleContainer>
);

BoxDate.propTypes = {
    date: PropTypes.string.isRequired,
};

export default BoxDate;
