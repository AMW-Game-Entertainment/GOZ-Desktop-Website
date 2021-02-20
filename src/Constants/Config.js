/* global process */
export default {
    API:        {
        MainSite:       'http://animemixedworld.net',
        endPoint:       'http://api.animemixedworld.net',
        nodeJsEndPoint: `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_ENDPOINT_PORT}`,
        wsEndPoint:     `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_ENDPOINT_SOCKET_PORT}`,
        DownloadGOZ:    'http://api.animemixedworld.net',
    },
    Socket:     {
        Namespace: {
            GOZ: '/GOZ',
        },
    },
    Copyrights: 'Copyrights © 2017 AMW - Game & Entertainment',
    Components: {
        Notes:  {
            MaxSliderNotes: 5,
            width:          '50%',
            height:         '10rem',
        },
        Events: {
            MaxSliderEvents: 5,
            width:           '50%',
            height:          '10rem',
        },
        News:   {
            MaxNews:    5,
            mainWidth:  '94%',
            mainHeight: '10rem',
            boxWidth:   '16rem',
            boxHeight:  '16rem',
        },
    },
    Limits:     {
        News:          10,
        NewsPagintion: 5,
        Events:        5,
        Notes:         5,
        Comments:      2,
    },
};
