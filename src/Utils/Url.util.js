import qs from 'qs';
import { Routes, Config } from '~/Constants';

export default {
    expand(url, expandObj) {
        return Object
            .keys(expandObj)
            .reduce((expandedUrl, key) => {
                const urlQs = expandedUrl.includes('?') ? '&' : '?';
                return `${expandedUrl}${urlQs}${key}=${expandObj[key]}`;
            }, url);
    },
    setPath(url, path) {
        const origin = this.extractOrigin(url);

        return origin + path;
    },
    extractOrigin(url) {
        const regExp = new RegExp('.*\\.[\\w|\\d]*'); // match origin

        return regExp.exec(url)[0];
    },
    setQuerystring(url, queryObject) {
        return `${url}?${qs.stringify(queryObject)}`;
    },
    // Add / Update a key-value pair in the URL query parameters
    // https://gist.github.com/niyazpk/f8ac616f181f6042d1e0
    updateUrlParameter(uriParam, key, newValue) {
        // remove the hash part before operating on the uri
        const hashIndex = uriParam.indexOf('#');
        const hash      = hashIndex === -1 ? '' : uriParam.substr(hashIndex);
        let uri         = hashIndex === -1 ? uriParam : uriParam.substr(0, hashIndex);

        const regex     = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
        const separator = uri.indexOf('?') !== -1 ? '&' : '?';
        if (uri.match(regex)) {
            uri = uri.replace(regex, `$1${key}=${newValue}$2`);
        } else {
            uri = `${uri + separator + key}=${newValue}`;
        }

        // finally append the hash as well
        return uri + hash;
    },
    getParam(paramKey) {
        return new URLSearchParams(window.location.search).get(paramKey);
    },
    createLink(key) {
        return `${Config.API.MainSite}/${Routes.Pages[key]}`;
    },
    getCurrentRoute() {
        return window.location.pathname.replace(/\/$/, '') || '/main';
    },
    getYouTubeId(url) {
        const getUrl = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return getUrl[2] ? getUrl[2].split(/[^0-9a-z-_/\\]/i)[0] : url;
    },
};
