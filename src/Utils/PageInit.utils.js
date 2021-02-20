/* global Buffer */
import { cookieUtil, urlUtil } from '~/Utils';

export default {
    MainPageParams() {
        return {
            CurrentUserId: Buffer.from(cookieUtil.getCookie('uid'), 'base64').toString('ascii') || 63,
            ProfileUserId: 63,
        };
    },
    PostPageParams() {
        return {
            CurrentUserId: Buffer.from(cookieUtil.getCookie('uid'), 'base64').toString('ascii') || 63,
            PostId:        parseInt(urlUtil.getParam('Id'), 10),
        };
    },
};
