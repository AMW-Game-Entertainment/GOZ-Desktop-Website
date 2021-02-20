import { filter, merge, size } from 'lodash';
import { ModelType, Config } from '~/Constants';
import { dateUtil } from '~/Utils';

const { Limits } = Config;

export default {
    refactorComments:        (comments, PostId, Type, prevComments, isPaginition) => {
        const newList  = {};
        const prevList = prevComments;
        if (prevList && prevList[PostId] && prevList[PostId][Type] && !isPaginition) {
            prevList[PostId][Type] = [];
        }

        if (!comments.length) {
            if (!newList[PostId]) {
                newList[PostId] = {};
            }
            if (!newList[PostId][Type]) {
                newList[PostId][Type] = [];
            }

            return merge(prevList, newList);
        }

        comments.map((comment) => {
            if (!newList[comment.PostId]) {
                newList[comment.PostId] = {};

                if (!newList[comment.PostId][comment.PostType]) {
                    newList[comment.PostId][comment.PostType] = [];
                }
            }
            newList[comment.PostId][comment.PostType].push({
                ...comment,
                Created: dateUtil.ConvertToFullDate(comment.Created),
            });
            return undefined;
        });
        if (prevList && prevList[PostId] && prevList[PostId][Type] && isPaginition) {
            const Ids             = newList[PostId][Type].map((comment) => comment.Id);
            newList[PostId][Type] = [
                ...filter(prevList[PostId][Type], (comment) => !Ids.includes(comment.Id)),
                ...newList[PostId][Type],
            ];
        }
        const resultList = merge(prevList, newList);
        resultList[PostId][Type]
            .sort(
                (
                    { Id: idA },
                    { Id: idB },
                ) => (idA - idB),
            ).concat().reverse();
        return resultList;
    },
    refactorCommentsId:      (lastCommentsIds, lastCommentId, PostId, PostType) => {
        const list = lastCommentsIds;
        if (!list[PostId]) {
            list[PostId] = {};
        }
        if (!list[PostId][PostType]) {
            list[PostId][PostType] = lastCommentId;

            return list;
        }
        list[PostId][PostType] = lastCommentId;
        return list;
    },
    getLimit(comments) {
        return (this.getTotalComments(comments) + 1) || Limits.Comments;
    },
    getTotalComments:        (comments = []) => size(comments),
    isCommented:             (comments = []) => size(comments) > 0,
    getPaginitionId:         (comments = []) => comments.length ? comments[0].Id : 0 || 0,
    getDeleteCurrentFirstId: (comments = []) => comments.length
        ? comments[0].Id > 0
            ? (comments[0].Id - Math.round((Limits.Comment / 2)))
            : 0
        : 0 || 0,
    removeComment:           (comments = {}, PostId, CommentId, Type) => ({
        ...comments,
        [PostId]: {
            ...comments[PostId],
            [Type]: filter(comments[PostId][Type], ({ Id }) => Id !== CommentId),
        },
    }),
    addComment:              (CommentsList, Comment, PostId, Type) => ({
        ...CommentsList,
        [PostId]: {
            ...CommentsList[PostId],
            [Type]: [
                ...CommentsList[PostId][Type],
                ...[Comment],
            ],
        },
    }),
    // eslint-disable-next-line camelcase
    constructComment:        ({ PostId, Text, Images, PostType, Char_Name, Cover_Image, Profile_Image, UserId }) => ({
        Id:      0,
        PostType,
        Type:    Images.length > 0 ? ModelType.Comment.Image : ModelType.Comment.Normal,
        PostId,
        Text,
        Images,
        Profile: {
            Char_Name,
            Profile_Image,
            Cover_Image,
            UserId,
        },
        Created: dateUtil.ConvertToFullDate(Date.now()),
    }),
};
