import * as moment from 'moment-timezone';

export default {
    ConvertToReadable: (date) => moment(new Date(date)).calendar(),
    ConvertToFullDate: (date) => moment(new Date(date)).fromNow(),
    formatToEventDate: (isSameDate, startDate, endDate) => isSameDate ? endDate : `${startDate} - ${endDate}`,
};
