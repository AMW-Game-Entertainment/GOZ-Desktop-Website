import _ from 'lodash';

export default {
    refactorLikes: (likes, PostId, Type, prevLikes) => {
        const newList  = {};
        const prevList = prevLikes;
        if (prevList && prevList[PostId] && prevList[PostId][Type]) {
            prevList[PostId][Type] = [];
        }

        if (!likes.length) {
            if (!newList[PostId]) {
                newList[PostId] = {};
            }
            if (!newList[PostId][Type]) {
                newList[PostId][Type] = [];
            }

            return _.merge(prevList, newList);
        }

        likes.map((like) => {
            if (!newList[like.PostId]) {
                newList[like.PostId] = {};

                if (!newList[like.PostId][like.Type]) {
                    newList[like.PostId][like.Type] = [];
                }
            }
            newList[like.PostId][like.Type].push(like);
            return undefined;
        });
        const resultList = _.merge(prevList, newList);
        resultList[PostId][Type].reverse();
        return resultList;
    },
    getTotalLikes: (likes = []) => _.size(likes),
    isLiked:       (likes = [], userId) => {
        const getLike = likes.find((like) =>
            like.Profile.UserId === userId) || [];
        return _.size(getLike) > 0;
    },
    getLikeId:     (likes = [], userId) => likes
        .find(({ Profile: { UserId: LikeUserId } }) => LikeUserId === userId).Id || 0,
    removeLike:    (likes = {}, PostId, userId, Type) => ({
        ...likes,
        [PostId]: {
            ...likes[PostId],
            [Type]: _.filter(likes[PostId][Type], ({ Profile: { UserId: LikeUserId } }) =>
                LikeUserId !== userId),
        },
    }),
    addLike:       (LikesList, Like, PostId, Type) => ({
        ...LikesList,
        [PostId]: {
            ...LikesList[PostId],
            [Type]: [
                ...LikesList[PostId][Type],
                ...[Like],
            ],
        },
    }),
    /* eslint-disable-next-line camelcase */
    constructLike: ({ PostId, Type, Char_Name, Cover_Image, Profile_Image, UserId }) => ({
        PostId,
        Type,
        Profile: {
            Char_Name, /* eslint-disable-line camelcase */
            Profile_Image, /* eslint-disable-line camelcase */
            Cover_Image, /* eslint-disable-line camelcase */
            UserId,
        },
        Created: Date.now(),
    }),
};
