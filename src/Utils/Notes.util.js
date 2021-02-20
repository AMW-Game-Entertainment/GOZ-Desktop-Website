import { dateUtil } from '~/Utils';

export default {
    refactorNotes: (notes) => notes.map((note) => ({
        id:      note.Id,
        postId:  note.PostId,
        title:   note.Title,
        image:   note.Image,
        type:    note.Type,
        userId:  note.UserId,
        albumId: note.AlbumId,
        created: dateUtil.ConvertToReadable(note.Created),
    })),
};

