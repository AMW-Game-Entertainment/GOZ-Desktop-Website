import { Routes } from '~/Constants';

const { Post, Event, Album, Advert, Note, Profile } = Routes.Pages;

export default {
    toPostLink(Id, types) {
        const { isEvent, isNote, isAlbum, isAdvert } = types;
        if (isEvent) {
            return `${Event}?EventId=${Id}`;
        } else if (isNote) {
            return `${Note}?NoteId=${Id}`;
        } else if (isAlbum) {
            return `${Album}?AlumbId=${Id}`;
        } else if (isAdvert) {
            return `${Advert}?AdvertId=${Id}`;
        }
        return `${Post}?Id=${Id}`;
    },
    toProfileLink(ProfileId) {
        return `${Profile}?ProfileId=${ProfileId}`;
    },
};
