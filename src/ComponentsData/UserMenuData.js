import { phrases, Routes } from '~/Constants';

export default {
    Logged: [
        {
            Id:   1,
            Name: '{Username}',
            Icon: [
                'fal',
                'user-circle',
            ],
            Link: Routes.Pages.Profile,
        },
        // {
        //     Id:   2,
        //     Name: phrases.UserMenu.Messages,
        //     Icon: [
        //         'fal',
        //         'comments',
        //     ],
        //     Link: '/messages',
        // },
        // {
        //     Id:   3,
        //     Name: phrases.UserMenu.Notifications,
        //     Icon: [
        //         'fal',
        //         'bell',
        //     ],
        //     Link: '/notifications',
        // },
        {
            Id:   4,
            Name: phrases.UserMenu.Logout,
            Icon: [
                'fal',
                'sign-out',
            ],
            Link: Routes.Pages.Logout,
        },
    ],
    Guest:  [
        {
            Id:   1,
            Name: phrases.UserMenu.Login,
            Icon: [
                'fal',
                'sign-in',
            ],
            Link: Routes.Pages.Login,
        },
        {
            Id:   2,
            Name: phrases.UserMenu.Register,
            Icon: [
                'fal',
                'plus-circle',
            ],
            Link: Routes.Pages.Register,
        },
        {
            Id:   3,
            Name: phrases.UserMenu.Recovery,
            Icon: [
                'fal',
                'puzzle-piece',
            ],
            Link: Routes.Pages.Recovery,
        },
    ],
};
