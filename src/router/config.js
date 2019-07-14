export default {
    menus: [
        { key: '/main/dashboard/index', title: '首页', icon: 'home', component: 'Dashboard' },
        {
            key: '/main/OverlayScrollbars',
            title: 'OverlayScrollbars',
            icon: 'bars',
            subs: [
                { key: '/main/OverlayScrollbars/basic', title: 'Basic', component: 'BasicScroll' },
            ],
        },
    ],
};
