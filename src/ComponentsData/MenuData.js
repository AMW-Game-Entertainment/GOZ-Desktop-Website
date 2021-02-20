import { phrases, theme, Routes } from '~/Constants';

export default {
    Logged: [
        {
            Id:          1,
            Name:        phrases.Menu.ChargeZP,
            Icon:        [
                'fas',
                'credit-card',
            ],
            Link:        Routes.Pages.ChargeZP,
            IsExternal:  false,
            HoverColor:  theme.color.GOLDENROD,
            SubMenuList: [],
        },
        {
            Id:          2,
            Name:        phrases.Menu.Shop,
            Icon:        [
                'fal',
                'shopping-bag',
            ],
            Link:        '',
            IsExternal:  false,
            HoverColor:  theme.color.RED_266_65_24,
            SubMenuList: [
                {
                    Id:         1,
                    Name:       phrases.Menu.ShopAndPackages,
                    Icon:       [
                        'fal',
                        'box-heart',
                    ],
                    Link:       Routes.Pages.Shop,
                    IsExternal: false,
                },
                {
                    Id:         2,
                    Name:       phrases.Menu.BuildCharacter,
                    Icon:       [
                        'fal',
                        'bolt',
                    ],
                    Link:       Routes.Pages.BuildCharacter,
                    IsExternal: false,
                },
            ],
        },
        {
            Id:          3,
            Name:        phrases.Menu.Exchange,
            Icon:        [
                'fal',
                'exchange',
            ],
            Link:        '',
            IsExternal:  false,
            HoverColor:  theme.color.ORANGE_244_146_65,
            SubMenuList: [
                {
                    Id:         1,
                    Name:       phrases.Menu.ExchangeZP,
                    Icon:       [
                        'fal',
                        'exchange-alt',
                    ],
                    Link:       Routes.Pages.ExchangeZP,
                    IsExternal: false,
                },
                {
                    Id:         2,
                    Name:       phrases.Menu.ExchangeTransactions,
                    Icon:       [
                        'fal',
                        'hands-usd',
                    ],
                    Link:       Routes.Pages.ExchangeTransactions,
                    IsExternal: false,
                },
            ],
        },
        {
            Id:          4,
            HoverColor:  theme.color.GREEN_41_154_11,
            Name:        phrases.Menu.Redeem,
            Icon:        [
                'fal',
                'box-full',
            ],
            Link:        '',
            IsExternal:  false,
            SubMenuList: [
                {
                    Id:         1,
                    Name:       phrases.Menu.RedeemGift,
                    Icon:       [
                        'fal',
                        'gift',
                    ],
                    Link:       Routes.Pages.RedeemGift,
                    IsExternal: false,
                },
                {
                    Id:         2,
                    Name:       phrases.Menu.RedeemEventRewards,
                    Icon:       [
                        'fal',
                        'trophy-alt',
                    ],
                    Link:       Routes.Pages.RedeemEventRewards,
                    IsExternal: false,
                },
            ],
        },
        {
            Id:          5,
            Name:        phrases.Menu.Community,
            Icon:        [
                'fal',
                'comment-alt-smile',
            ],
            Link:        '',
            IsExternal:  false,
            HoverColor:  theme.color.PURPLE,
            SubMenuList: [
                {
                    Id:         1,
                    Name:       phrases.Menu.Forum,
                    Icon:       [
                        'fal',
                        'comment-smile',
                    ],
                    Link:       Routes.Pages.Forum,
                    IsExternal: false,
                },
                {
                    Id:         2,
                    Name:       phrases.Menu.Feed,
                    Icon:       [
                        'fal',
                        'bookmark',
                    ],
                    Link:       Routes.Pages.Feed,
                    IsExternal: false,
                },
                {
                    Id:         3,
                    Name:       phrases.Menu.Discord,
                    Icon:       [
                        'fab',
                        'discord',
                    ],
                    Link:       Routes.Pages.Discord,
                    IsExternal: true,
                },
                {
                    Id:         4,
                    Name:       phrases.Menu.Telegram,
                    Icon:       [
                        'fab',
                        'telegram-plane',
                    ],
                    Link:       Routes.Pages.Telegram,
                    IsExternal: true,
                },
            ],
        },
        {
            Id:          6,
            Name:        '',
            Icon:        [
                'fal',
                'bars',
            ],
            Link:        '',
            IsExternal:  false,
            HoverColor:  theme.color.BLUE_66_134_244,
            SubMenuList: [
                {
                    Id:         1,
                    Name:       phrases.Menu.Home,
                    Icon:       [
                        'fal',
                        'home',
                    ],
                    Link:       Routes.Pages.Home,
                    IsExternal: false,
                },
            ],
        },
    ],
    Guest:  [
        {
            Id:          1,
            Name:        phrases.Menu.ChargeZP,
            Icon:        [
                'fas',
                'credit-card',
            ],
            Link:        Routes.Pages.ChargeZP,
            IsExternal:  false,
            HoverColor:  theme.color.GOLDENROD,
            SubMenuList: [],
        },
        {
            Id:          2,
            Name:        phrases.Menu.Shop,
            Icon:        [
                'fal',
                'shopping-bag',
            ],
            Link:        '',
            IsExternal:  false,
            HoverColor:  theme.color.RED_266_65_24,
            SubMenuList: [
                {
                    Id:         1,
                    Name:       phrases.Menu.ShopAndPackages,
                    Icon:       [
                        'fal',
                        'box-heart',
                    ],
                    Link:       Routes.Pages.Shop,
                    IsExternal: false,
                },
                {
                    Id:         2,
                    Name:       phrases.Menu.BuildCharacter,
                    Icon:       [
                        'fal',
                        'bolt',
                    ],
                    Link:       Routes.Pages.BuildCharacter,
                    IsExternal: false,
                },
            ],
        },
        {
            Id:          3,
            Name:        phrases.Menu.Community,
            Icon:        [
                'fal',
                'comment-alt-smile',
            ],
            Link:        '',
            IsExternal:  false,
            HoverColor:  theme.color.PURPLE,
            SubMenuList: [
                {
                    Id:         3,
                    Name:       phrases.Menu.Discord,
                    Icon:       [
                        'fab',
                        'discord',
                    ],
                    Link:       Routes.Pages.Discord,
                    IsExternal: true,
                },
                {
                    Id:         4,
                    Name:       phrases.Menu.Telegram,
                    Icon:       [
                        'fab',
                        'telegram-plane',
                    ],
                    Link:       Routes.Pages.Telegram,
                    IsExternal: true,
                },
            ],
        },
        {
            Id:          4,
            Name:        '',
            Icon:        [
                'fal',
                'bars',
            ],
            Link:        '',
            IsExternal:  false,
            HoverColor:  theme.color.BLUE_66_134_244,
            SubMenuList: [
                {
                    Id:         1,
                    Name:       phrases.Menu.Home,
                    Icon:       [
                        'fal',
                        'home',
                    ],
                    Link:       Routes.Pages.Home,
                    IsExternal: false,
                },
            ],
        },
    ],
};
