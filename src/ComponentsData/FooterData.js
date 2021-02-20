import { phrases, Routes } from '~/Constants';

export default {
    // frequently used
    ColumnA: {
        Name: phrases.Frequently,
        Icon: ['fal', 'clock'],
        List: [
            { Text: phrases.Menu.ChargeZP, Link: Routes.Pages.ChargeZP, isExternal: false },
            { Text: phrases.Menu.ExchangeZP, Link: Routes.Pages.ExchangeZP, isExternal: false },
            { Text: phrases.Menu.RedeemEventRewards, Link: Routes.Pages.RedeemEventRewards, isExternal: false },
            { Text: phrases.Menu.RedeemGift, Link: Routes.Pages.RedeemGift, isExternal: false },
        ],
    },
    // support
    ColumnB: {
        Name: phrases.Support,
        Icon: ['fal', 'phone'],
        List: [
            { Text: phrases.Menu.ContactUs, Link: Routes.Pages.ContactUs, isExternal: true },
            { Text: phrases.Menu.Guides, Link: Routes.Pages.Guides, isExternal: true },
        ],
    },
    // social
    ColumnC: {
        Name: phrases.Social,
        Icon: ['fal', 'share-square'],
        List: [
            { Text: phrases.Menu.Facebook, Link: Routes.Pages.Facebook, isExternal: true },
            { Text: phrases.Menu.Discord, Link: Routes.Pages.Discord, isExternal: true },
            { Text: phrases.Menu.YouTube, Link: Routes.Pages.YouTube, isExternal: true },
            { Text: phrases.Menu.Telegram, Link: Routes.Pages.Telegram, isExternal: true },
        ],
    },
    // More -
    ColumnD: {
        Name: phrases.Us,
        Icon: ['fal', 'question-square'],
        List: [
            { Text: phrases.Menu.AboutUs, Link: Routes.Pages.AboutUs, isExternal: true },
            { Text: phrases.Menu.TC, Link: Routes.Pages.TC, isExternal: true },
            { Text: phrases.Menu.Policy, Link: Routes.Pages.Policy, isExternal: true },
        ],
    },
};
