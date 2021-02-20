import React from 'react';
import { styled } from 'styletron-react';
import { theme, Config } from '~/Constants';
import { animationUtil } from '~/Utils';
import { NewsBox } from './';

const NewsConfig = Config.Components.News;

const defaultProps = {
    boxHeight: NewsConfig.boxWidth,
    boxWidth:  NewsConfig.boxHeight,
};

const StyleLoading = styled(`div`, {
    margin:        '2rem',
    height:        `${NewsConfig.boxHeight + 2}rem`,
    lineHeight:    `${NewsConfig.boxHeight + 2}rem`,
    verticalAlign: 'middle',
    fontSize:      `2.8rem`,
    color:         theme.color.WHITE,
});

const LoadingBox = (props) => (
    <NewsBox
        text=''
        date=''
        image=''
        icons={[]}

        {...defaultProps}
        {...props}
    />
);

const StyleLoadBox = styled(LoadingBox, {
    backgroundImage: theme.color.loadingWaves,
    opacity:         '0.5',
    ':after':        {
        content:         '""',
        width:           `calc(${NewsConfig.boxWidth} + 0.6rem)`,
        height:          `calc(${NewsConfig.boxHeight} + 0.7rem)`,
        position:        'absolute',
        zIndex:          '1',
        backgroundColor: theme.color.DARK_GRAY_13_9,
        border:          `1px solid ${theme.color.BLACK}`,
    },
    ...animationUtil.waves({ positionX: 10 }),
});

export default () => (
    <StyleLoading>
        {
            Object.keys(new Array(NewsConfig.MaxNews).fill()).map((id) => (
                <StyleLoadBox
                    key={id}
                />
            ))
        }
    </StyleLoading>
);
