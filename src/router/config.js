export default {
    menus: [
        { key: '/main/dashboard/index', title: 'Home', icon: 'home', component: 'DashBoard' },
        {
            key: '/main/OverlayScrollbars',
            title: 'OverlayScrollbars',
            icon: 'bars',
            subs: [
                { key: '/main/OverlayScrollbars/basic', title: 'Basic', component: 'BasicScroll' },
            ],
        },
        {
            key: '/main/ReactHooks',
            title: 'ReactHooks',
            icon: 'bars',
            subs: [
                { key: '/main/ReactHooks/index', title: 'ReactHooks', component: 'ReactHooks' },
                { key: '/main/ReactHooks/InputTimeOut', title: 'InputTimeOut', component: 'InputTimeOut' },
            ],
        },
        {
            key: '/main/Redux',
            title: 'Redux',
            icon: 'bars',
            subs: [
                { key: '/main/Redux/UserWages', title: 'UserWages', component: 'UserWages' },
                { key: '/main/Redux/UserWagesReducer', title: 'UserWagesReducer', component: 'UserWagesReducer' },
                { key: '/main/Redux/TextInputReducer', title: 'TextInputReducer', component: 'TextInputReducer' },
            ],
        },
    ],
};
