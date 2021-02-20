export default {
    setCookie(cname, cvalue) {
        // const d = new Date();
        // d.setTime(Date.now() + (exdays * 24 * 60 * 60 * 1000));
        // const expires   = "expires=" + d.toUTCString();
        document.cookie = `${cname}=${cvalue}`;
    },
    getCookie(cname) {
        // noinspection JSCheckFunctionSignatures
        const Cookie = document.cookie
            .split(';')
            .find((item) => item.includes(cname)) || '';
        return Cookie.split('=').length > 0 && Cookie.split('=')[1] ? Cookie.split('=')[1].trim() : '';
    },
};
