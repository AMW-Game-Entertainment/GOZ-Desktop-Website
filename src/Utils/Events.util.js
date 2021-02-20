import { dateUtil } from '~/Utils';

export default {
    refactorEvents:    (events) => events.map((event) => ({
        id:         event.Id,
        postId:     event.PostId,
        title:      event.Title,
        image:      event.CoverPhoto,
        isSameDate: event.isSameDate,
        startDate:  dateUtil.ConvertToFullDate(event.StartDate),
        endDate:    dateUtil.ConvertToFullDate(event.EndDate),
        type:       event.Type,
        userId:     event.userId,
        created:    dateUtil.ConvertToReadable(event.Created),
    })),
};
