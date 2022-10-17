//导航栏配置
const navbar=[
    // NavbarItem
    {
        text: '待归档文件',
        link: '待整理/',
    },
    // NavbarItem
    {
        text: '待归档信息',
        link: '/资源汇总.md',
    },
    // NavbarGroup
    {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
    },
    // 字符串 - 页面文件路径
    '/bar/README.md',
    // 嵌套 Group - 最大深度为 2
    {
        text: 'Group',
        children: [
            {
                text: 'SubGroup',
                children: ['/group/sub/foo.md', '/group/sub/bar.md'],
            },
        ],
    },
    // 控制元素何时被激活
    {
        text: 'Group 2',
        children: [
            {
                text: 'Always active',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
            },
            {
                text: 'Active on /foo/',
                link: '/not-foo/',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
            },
        ],
    },
]

export default navbar