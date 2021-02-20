import Dedect from 'mobile-detect';

const mobileDect = new Dedect(window.navigator.userAgent);

export default {
    isTablet() {
        return mobileDect.tablet();
    },

    isPhone() {
        return mobileDect.mobile() || mobileDect.phone();
    },

    isTouch() {
        return mobileDect.mobile() || mobileDect.phone() || mobileDect.tablet();
    },

    isDesktop() {
        return !mobileDect.mobile() && !mobileDect.phone() && !mobileDect.tablet();
    },

    getAsString() {
        return this.isTouch() ? 'Mobile' : 'Desktop';
    },

    ifCurrent() {
        return mobileDect;
    },
};
