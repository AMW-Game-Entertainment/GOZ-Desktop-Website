import React from 'react';
import { styled } from 'styletron-react';
import { theme, phrases } from '~/Constants';
import { fontsUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleSearchContainer = styled('div', {
    width:     '25rem',
    height:    '3.5rem',
    position:  'absolute',
    right:     '8rem',
    top:       '1rem',
    textAlign: 'center',
    display:   'flex',
});

const StyleSearchInput = styled('input', {
    width:           '25rem',
    height:          '2.7rem',
    position:        'absolute',
    left:            '3rem',
    top:             '1.5rem',
    textAlign:       'center',
    verticalAlign:   'middle',
    float:           'left',
    color:           theme.color.GOLDENROD,
    padding:         '0.5rem',
    margin:          '0.4rem 0 0 0',
    fontFamily:      'Manga Speak Two',
    fontSize:        '0.8rem',
    border:          `0px solid ${theme.color.DARK_GRAY}`,
    backgroundColor: theme.color.DARK_GRAY,
    textTransform:   'capitalize',
    transition:      'all 0.4s ease',
    ':focus':        {
        outline:         'none',
        fontWeight:      'bold',
        border:          `0px solid ${theme.color.DARKER_GRAY}`,
        backgroundColor: theme.color.DARKER_GRAY_8,
        fontFamily:      'Manga Temple',
        fontSize:        '0.9rem',
    },
});

const StyleSearchIcon = styled('div', {
    width:           '3rem',
    height:          '1.5rem',
    lineHeight:      '1.5rem',
    fontSize:        '1.5rem',
    position:        'absolute',
    color:           theme.color.GOLDENROD,
    right:           '-3rem',
    top:             '1.6rem',
    padding:         '0.5rem',
    margin:          '0.4rem 0 0 0',
    textAlign:       'center',
    verticalAlign:   'middle',
    backgroundColor: theme.color.DARKER_GRAY_4,
    zIndex:          '2',
});

const SearchConfig = {
    autoComplete: 'true',
    spellCheck:   'false',
    type:         'search',
    placeholder:  phrases.SearchChar,
};

const Search = () => (
    <StyleSearchContainer className='sgSearch'>
        <StyleSearchIcon>
            <FA icon={['fab', 'searchengin']} fixedWidth />
        </StyleSearchIcon>
        <StyleSearchInput
            {...SearchConfig}
        />
    </StyleSearchContainer>
);

export default Search;
