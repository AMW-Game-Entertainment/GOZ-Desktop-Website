import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styletron-react';
import { theme } from '~/Constants';
import { FooterData } from '~/ComponentsData';
import { fontsUtil, mathUtil } from '~/Utils';

const { FA } = fontsUtil;

const StyleFA = styled(FA, {
    paddingRight: '0.5rem',
});

const StyleColumn  = styled('div', {
    width:         '13rem',
    display:       'flex',
    padding:       '0.9rem 0.8rem 3rem 0.8rem',
    flexDirection: 'column',
});
const StyleRows    = styled('div', {
    display: 'grid',
});
const StyleLinkRow = styled(Link, {
    padding:    '0.18rem',
    fontFamily: 'Manga Speak Two',
    fontSize:   '0.7rem',
    fontWeight: 'bold',
    color:      theme.color.LIGHT_DARK_GRAY_153,
    ':hover':   {
        opacity: '0.8',
    },
});
const StyleRow     = styled('a', {
    padding:    '0.18rem',
    fontFamily: 'Manga Speak Two',
    fontSize:   '0.7rem',
    fontWeight: 'bold',
    color:      theme.color.LIGHT_DARK_GRAY_153,
    ':hover':   {
        opacity: '0.8',
    },
});
const StyleHeader  = styled('div', {
    display:      'flex',
    fontFamily:   `Manga Temple`,
    textAlign:    'center',
    fontSize:     '1.1rem',
    margin:       '0 0 0.6rem 0',
    padding:      '0.4rem 0.6rem',
    borderBottom: `0.11rem solid ${theme.color.RED_236_58_0_9}`,
    color:        theme.color.RED_236_58_0_9,
});

const StyleNavigation = styled('div', {
    display:        'flex',
    flexWrap:       'nowrap',
    justifyContent: 'space-evenly',
    width:          '80rem',
});

export default () => (
    <StyleNavigation>
        {Object.keys(FooterData).map((key) => (
            <StyleColumn key={mathUtil.randomNum(key)}>
                <StyleHeader>
                    <StyleFA
                        icon={FooterData[key].Icon}
                        fixedWidth
                    />
                    {FooterData[key].Name}
                </StyleHeader>
                <StyleRows>
                    {FooterData[key].List.map((link) => link.isExternal
                        ? <StyleRow key={mathUtil.randomNum(link)} href={link.Link} target='_blank'>{link.Text}</StyleRow> /* eslint-disable-line max-len */
                        : <StyleLinkRow key={mathUtil.randomNum(link)} to={link.Link}>{link.Text}</StyleLinkRow>)}
                </StyleRows>
            </StyleColumn>
        ))}
    </StyleNavigation>
);
