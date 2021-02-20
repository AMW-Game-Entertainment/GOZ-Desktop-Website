import { phrases, Notifications } from '~/Constants';
import { textUtil } from '~/Utils';

export default {
    refactorError: (errorCode, SearchList) => {
        const fatalErrors = [];

        const isFatal = fatalErrors.includes(errorCode);
        return {
            isFatal,
            type: isFatal ? Notifications.types.ERROR : Notifications.types.WARN,
            text: textUtil.buildPhraseFromObj(SearchList, phrases.ErroCodes[errorCode]),
        };
    },
};
