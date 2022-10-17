import { defineUserConfig, defaultTheme } from 'vuepress'
import navbar from './conf/navbar-conf'
import { searchPlugin } from '@vuepress/plugin-search'



export default defineUserConfig({
    //基本配置
    base: '/',//部署站点的基础路径
    head: [['link', { rel: 'icon', href: 'clxbx6O5YYXPaOb.png' }]],
    lang: 'zh-CN',
    title: '你好, bbzywkq !',
    description: '这是我的第一个 VuePress 站点',
    //主题配置
    theme: defaultTheme({
        colorModeSwitch: true,//是否启动主题颜色切换
        //colorMode: 'light',//默认的主题颜色
        home: '/',//首页路径
        navbar,
        logo: 'logo/logo.png',//日间模式logo
        logoDark: 'logo/logo-dark.png',//夜间模式logo
        repo: 'bbzywkq/bbzywkq.github.io/tree/main/docs',//仓库地址信息
        //docsRepo: 'https://github.com/bbzywkq/bbzywkq.github.io/tree/main/docs',
        //repoLabel:'我就想不通了'
        docsRepo: 'https://github.com/bbzywkq/bbzywkq.github.io',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        sidebar: 'auto',//侧边栏配置
        sidebarDepth: 2,
        editLink: true,//是否启用编辑此页面
        //editLinkText: '帮我修改下此页面吧',
        lastUpdated: true,//是否启用最近编辑时间
        //lastUpdatedText: '最近编辑时间',
        contributors: true,//是否启用贡献者列表
        //contributorsText: '贡献者列表',
    }),
    //插件项配置
    plugins: [
        searchPlugin({
            // 搜索排除项函数
            isSearchable: (page) => page.path !== '/',

        }),
    ],
})