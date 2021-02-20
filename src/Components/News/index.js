import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { phrases, Config } from '~/Constants';
import { dateUtil, urlUtil, routeUtil } from '~/Utils';
import { ListHeader, NewsBox, Paginition, Loading, Contentless } from './components';

const NewsConfig = Config.Components.News;

const StyleNewsList = styled(`div`, ({ $width, $height, $areaName }) => ({
    width:     `${$width}`,
    minHeight: $height,
    margin:    `auto auto 2rem auto`,
    gridArea:  $areaName,
}));

class News extends Component {
    componentDidMount() {
        const { getPosts, userId } = this.props;
        getPosts(userId);
    }

    setupHeaderLinks = () => [
        {
            Text: phrases.NewsFeed.ViewAllNews,
            Href: urlUtil.createLink('AllNewsLink'),
            Icon: ['fal', 'eye'],
        },
    ];

    setupThumbIcons = (postID, types) => [
        {
            Text: phrases.NewsFeed.ViewNews,
            Link: routeUtil.toPostLink(postID, types),
            Icon: ['fal', 'eye'],
        },
    ];

    handlePost(post) {
        const { Count: { isEvent, isNote, isAlbum, isAdvert }, Note, Post, Event, Album, Advert } = post;

        // noinspection JSSuspiciousNameCombination
        const defaultProps = {
            boxHeight: NewsConfig.boxWidth,
            boxWidth:  NewsConfig.boxHeight,
            key:       Post.Id,
        };

        if (isEvent) {
            return (
                <NewsBox
                    text={Event.Title}
                    date={dateUtil.formatToEventDate(Event.isSameDate, Event.StartDate, Event.EndDate)}
                    image={Post.ImageSrc}
                    icons={this.setupThumbIcons(Event.Id, { isEvent, isNote, isAlbum, isAdvert })}

                    {...defaultProps}
                />
            );
        } else if (isAlbum) {
            return (
                <NewsBox
                    text={Album.Title}
                    date={Post.Created}
                    image={Post.ImageSrc}
                    icons={this.setupThumbIcons(Album.Id, { isEvent, isNote, isAlbum, isAdvert })}

                    {...defaultProps}
                />
            );
        } else if (isAdvert) {
            return (
                <NewsBox
                    text={Advert.Title}
                    date={Post.Created}
                    image={Post.ImageSrc}
                    icons={this.setupThumbIcons(Advert.Id, { isEvent, isNote, isAlbum, isAdvert })}

                    {...defaultProps}
                />
            );
        } else if (isNote) {
            return (
                <NewsBox
                    text={Note.Title}
                    date={Post.Created}
                    image={Post.ImageSrc}
                    icons={this.setupThumbIcons(Note.Id, { isEvent, isNote, isAlbum, isAdvert })}

                    {...defaultProps}
                />
            );
        }

        return (
            <NewsBox
                text={Post.Text}
                date={Post.Created}
                image={Post.ImageSrc}
                icons={this.setupThumbIcons(Post.Id, { isEvent, isNote, isAlbum, isAdvert })}

                {...defaultProps}
            />
        );
    }

    handleContent() {
        const { isLoading, newsFeed, loadMorePost, userId, lastPostId } = this.props;

        if (!newsFeed.length) {
            return (<Contentless />);
        }

        return (
            <Fragment>
                {
                    newsFeed.map((news) => this.handlePost(news))
                }
                {
                    isLoading
                        ? <Loading />
                        : <Paginition
                            handleLoadPosts={() => loadMorePost(lastPostId, userId)}
                        />
                }
            </Fragment>
        );
    }

    render() {
        const { areaName } = this.props;

        return (
            <StyleNewsList
                $width={NewsConfig.mainWidth}
                $height={NewsConfig.mainHeight}
                $areaName={areaName}
            >
                <ListHeader links={this.setupHeaderLinks()} />
                {
                    this.handleContent()
                }
            </StyleNewsList>
        );
    }
}

News.defaultProps = {
    areaName: 'news',
};

News.propTypes = {
    newsFeed:     PropTypes.arrayOf(PropTypes.shape()).isRequired,
    loadMorePost: PropTypes.func.isRequired,
    userId:       PropTypes.number.isRequired,
    lastPostId:   PropTypes.number.isRequired,
    isLoading:    PropTypes.bool.isRequired,
    areaName:     PropTypes.string,
    getPosts:     PropTypes.func.isRequired,
};

export default News;
