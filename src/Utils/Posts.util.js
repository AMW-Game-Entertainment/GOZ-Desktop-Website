import { Paths } from '~/Constants';
import { dateUtil } from '~/Utils';
import { link } from 'autolinker';

export default {
    cleanLink(currentLink) {
        // if google drive link lets clean it a bit
        // http://drive.google.com/uc?export=view&#38;id=0B1gPxpJpFGW5TmFLZ0RqbDhBM0E ->
        // http://drive.google.com/uc?export=view&id=0B1gPxpJpFGW5TmFLZ0RqbDhBM0E
        // More others can be applied here for future links
        return currentLink ? currentLink.replace('#38;', '') : '';
    },

    setPostImage(postData) {
        /* eslint-disable-next-line camelcase */
        const { Post: { ImageSrc }, Count: { isEvent, isNote }, Profile: { From_Image } } = postData;

        const { ProfileImage } = Paths.default;
        /* eslint-disable-next-line camelcase */
        const defaultImage = ImageSrc || From_Image || ProfileImage;

        if (isEvent) {
            return this.cleanLink(ImageSrc);
        } else if (isNote) {
            return this.cleanLink(ImageSrc);
        }
        return this.cleanLink(defaultImage);
    },

    refactorPosts(posts) {
        return posts.map((postData) => ({
            ...postData,
            Post:  {
                ...postData.Post,
                ImageSrc: this.setPostImage(postData),
                Created:  dateUtil.ConvertToFullDate(postData.Post.Created),
            },
            Event: {
                ...postData.Event,
                StartDate: dateUtil.ConvertToFullDate(postData.Event.StartDate),
                EndDate:   dateUtil.ConvertToFullDate(postData.Event.EndDate),
            },
        }));
    },

    formatPostText(text) {
        if (text.includes('http://') || text.includes('https://')) {
            return link(text, {
                className: 'isLink',
                truncate:  { length: 32, location: 'middle' },
            });
        }
        return text;
    },
};
