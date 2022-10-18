//导航栏配置
const navbar = [
    // NavbarItem
    // {
    //     text: '前端',
    //     link: '/待整理/',
    // },
    //搜索
    {
        text: '检索',
        children:[
            {
                text:'google',
                link:'https://www.google.com'
            },
            {
                text:'yandex',
                link:'https://yandex.com/'
            },
        ]
    },
    //前端
    {
        text: '前端',
        children: [
            {
                text: '编程语言',
                children: [
                    {
                        text: 'html/css/js',
                        link: 'https://www.w3schools.com/html/default.asp'
                    },
                    {
                        text: 'sassscss',
                        link: 'https://www.sasscss.com'
                    },
                    {
                        text: 'typtscrpit',
                        link: 'https://www.tslang.cn/index.html'
                    },
                    // {
                    //     text: '',
                    //     link: ''
                    // },
                ]
            },
            {
                text: '组件&动画库',
                children: [
                    {
                        text: 'Animae',
                        link: 'https://animate.style'
                    },
                    {
                        text: 'Animejs',
                        link: 'https://animejs.com'
                    },
                    {
                        text: 'Minimamente',
                        link: 'https://www.minimamente.com/project/magic/'
                    },
                    {
                        text: 'element',
                        link: 'https://element-plus.org/zh-CN/'
                    },
                    {
                        text: 'iview',
                        link: 'https://iview.github.io/docs/guide/introduce'
                    },
                    {
                        text: 'uview',
                        link: 'https://www.uviewui.com/components/intro.html'
                    },
                    {
                        text: 'vant',
                        link: 'https://vant-contrib.gitee.io/vant/##/zh-CN/'
                    },
                    {
                        text: 'swipe',
                        link: 'https://www.swiper.com.cn/'
                    },
                    {
                        text: 'echarts',
                        link: 'https://echarts.apache.org/zh/index.html'
                    },
                    {
                        text: 'mui',
                        link: 'https://dev.dcloud.net.cn/mui/'
                    },
                    {
                        text: 'h5player',
                        link: 'https://v2.h5player.bytedance.com'
                    }
                ]
            },
            {
                text: 'javascript框架',
                children: [
                    {
                        text: 'nuxtjs',
                        link: 'https://www.nuxtjs.cn/'
                    },
                    {
                        text: 'requirejs',
                        link: 'https://www.requirejs-cn.cn/'
                    },
                    {
                        text: 'jqueryjs',
                        link: 'https://www.jquery123.com/'
                    },
                    {
                        text: 'axios',
                        link: 'http://axios-js.com/zh-cn/docs/index.html'
                    },
                    {
                        text: 'angular',
                        link: 'https://angular.cn'
                    },
                    {
                        text: 'vue-loader',
                        link: 'https://vue-loader.vuejs.org/zh/'
                    },
                    {
                        text: 'vuex',
                        link: 'https://vuex.vuejs.org/zh/'
                    },
                    {
                        text: 'vue-router',
                        link: 'https://router.vuejs.org/zh/'
                    },
                    {
                        text: 'pinia',
                        link: 'https://pinia.vuejs.org'
                    },
                    {
                        text: 'webpack',
                        link: 'https://webpack.docschina.org/'
                    },
                    {
                        text: 'vite',
                        link: 'https://cn.vitejs.dev/guide/'
                    },
                    {
                        text: 'reactjs',
                        link: 'https://zh-hans.reactjs.org/'
                    },
                    {
                        text: 'vue',
                        link: 'https://cn.vuejs.org/'
                    },
                    {
                        text: 'next',
                        link: 'https://www.nextjs.cn/'
                    },
                ]
            },
            {
                text: '前端框架和环境',
                children: [
                    {
                        text: 'flutter',
                        link: 'https://flutterchina.club/'
                    },
                    {
                        text: 'uniapp',
                        link: 'https://uniapp.dcloud.net.cn/'
                    },
                    {
                        text: 'electron',
                        link: 'https://www.electronjs.org'
                    },
                    {
                        text: 'apicloud',
                        link: 'https://www.apicloud.com/'
                    },
                    {
                        text: 'nodejs运行时',
                        link: 'http://nodejs.cn/'
                    },
                    // {
                    //     text: '',
                    //     link: ''
                    // },
                ]
            },
            {
                text: '工具',
                children: [
                    {
                        text: 'nvm',
                        link: 'https://github.com/nvm-sh/nvm'
                    },
                    {
                        text: 'npm',
                        link: 'https://www.npmjs.com/'
                    },
                    {
                        text: 'yarn',
                        link: 'https://www.yarnpkg.cn/'
                    },
                    {
                        text: 'npx',
                        link: 'https://github.com/npm/npx'
                    },
                    // {
                    //     text: '',
                    //     link: ''
                    // },
                ]
            },
        ]
    },
    // NavbarItem
    {
        text: 'java',
        children: [
            {
                text: '语言基础',
                children: [
                    {
                        text:'面向对象',
                        link:''
                    },
                    {
                        text:'语法概念基础',
                        link:''
                    },
                    {
                        text:'泛型机制',
                        link:''
                    },
                    {
                        text:'注解机制',
                        link:''
                    },
                    {
                        text:'异常机制',
                        link:''
                    },
                    {
                        text:'反射机制',
                        link:''
                    },
                    {
                        text:'SPI机制',
                        link:''
                    },
                ]
            },
            {
                text: '框架生态',
                children: [
                    {
                        text:'spring',
                        link:''
                    },
                    {
                        text:'spring boot',
                        link:''
                    },
                    {
                        text:'spring cloud',
                        link:''
                    },
                    {
                        text:'light4',
                        link:'https://www.networknt.com/getting-started'
                    },
                ]
            },
            {
                text: '功能组件',
                children: [
                    {
                        text:'flowalbe流程引擎',
                        link:'https://www.flowable.com'
                    },
                    {
                        text:'liteflow规则引擎',
                        link:'https://liteflow.yomahub.com'
                    },
                    {
                        text:'ijpay支付',
                        link:'https://javen205.gitee.io/ijpay'
                    },
                    {
                        text:'sa-token鉴权',
                        link:'https://sa-token.dev33.cn'
                    },
                    {
                        text:'easy-es',
                        link:'https://www.easy-es.cn'
                    },
                    {
                        text:'mybatis',
                        link:'https://mybatis.org/mybatis-3/zh/index.html'
                    },
                    {
                        text:'mybatisplus',
                        link:'https://baomidou.com/'
                    },
                    {
                        text:'hutool',
                        link:'https://hutool.cn/'
                    },
                    {
                        text:'lombok',
                        link:'https://projectlombok.org/'
                    },
                ]
            },
            {
                text: '工具',
                children: [
                    {
                        text:'smart-doc',
                        link:'https://smart-doc-group.github.io/##/zh-cn/'
                    },
                    {
                        text:'toran',
                        link:'http://torna.cn/'
                    },
                    {
                        text:'maven',
                        link:''
                    },
                    {
                        text:'gradle',
                        link:''
                    },
                    {
                        text:'jabba',
                        link:'https://github.com/shyiko/jabba'
                    },
                ]
            },
        ]
    },
    {
        text: 'python',
        children: [
            {
                text: '基础',
                children: [
                    {
                        text:'语言基础',
                        link:'https://docs.python.org/zh-cn/3/tutorial/index.html'
                    }
                ]
            },
            {
                text:'框架生态',
                children:[
                    {
                        text:'django',
                        link:'https://docs.djangoproject.com/zh-hans/4.1/'
                    }
                ]
            },
            {
                text: '模块和库',
                children: [
                    {
                        text:'python-falsk',
                        link:'http://docs.jinkan.org/docs/flask/installation.html##installation'
                    },
                ]
            },
            {
                text: '工具',
                children: [
                    {
                        text:'anaconda',
                        link:'https://www.anaconda.com/'
                    },
                ]
            },
        ]
    },
    //learning
    {
        text: 'learning',
        children: [
            {
                text: 'C语言',
                link: 'https://www.dotcpp.com'
            },
            {
                text: '中国大学MOOC',
                link: 'https://www.icourse163.org'
            },
            {
                text: '牛客网',
                link: 'https://www.nowcoder.com'
            },
            {
                text: '力扣网',
                link: 'https://leetcode.cn'
            },
            {
                text: '炼码网',
                link: 'https://www.lintcode.com'
            },
            {
                text: 'golong语言中文网',
                link: 'https://studygolang.com'
            },
            {
                text: 'web开发',
                link: 'https://developer.mozilla.org/zh-CN/docs/Learn'
            },
            {
                text: '正则',
                link: 'https://regexlearn.com/zh-cn'
            },
            {
                text: '慕课',
                link: 'https://www.imooc.com'
            },
            {
                text: '极客学院',
                link: 'https://www.jikexueyuan.com'
            },
            // {
            //     text: '',
            //     link: ''
            // },

        ]
    },
    //技术站点
    {
        text: '技术站点',
        children: [
            {
                text: 'stackoverflow',
                link: 'https://stackoverflow.com'
            },
            {
                text: 'lintcode',
                link: 'https://www.lintcode.com'
            },
            {
                text: 'freecodecamp',
                link: 'https://www.freecodecamp.org'
            },
            {
                text: 'codecademy',
                link: 'https://www.codecademy.com'
            },
            {
                text: 'ideone',
                link: 'https://ideone.com'
            },
            {
                text: 'it-ebooks',
                link: 'https://it-ebooks.info'
            },
            {
                text: 'oschina',
                link: 'https://www.oschina.net'
            },
            {
                text: 'cnblogs',
                link: 'https://www.cnblogs.com'
            },
            {
                text: 'segmentfault',
                link: 'https://segmentfault.com'
            },
            {
                text: 'zhihu',
                link: 'https://www.zhihu.com'
            },
            {
                text: 'runoob',
                link: 'https://www.runoob.com'
            },
            {
                text: 'infoq',
                link: 'https://www.infoq.cn'
            },
            {
                text: 'juejin',
                link: 'https://juejin.cn'
            },
            {
                text: 'v2ex',
                link: 'https://www.v2ex.com'
            },
            {
                text: '牛客',
                link: 'https://www.nowcoder.com'
            },
            {
                text: '程序员客栈',
                link: 'https://www.proginn.com'
            },

        ]
    },
    //工具
    {
        text: '工具',
        children: [
            {
                text: '图表',
                children: [
                    {
                        text: 'processon',
                        link: 'https://www.processon.com'
                    },
                    {
                        text: 'shields',
                        link: 'https://shields.io'
                    },
                ]
            },
            {
                text: '图标',
                children: [
                    {
                        text: 'iconfinder',
                        link: 'https://www.iconfinder.com'
                    },
                    {
                        text: 'feathericons',
                        link: 'https://feathericons.com'
                    },
                    {
                        text: 'iconfont',
                        link: 'https://www.iconfont.cn'
                    },
                ]
            },
            {
                text: '图片素材',
                children: [
                    {
                        text: '图片pixabay',
                        link: 'https://pixabay.com/zh/'
                    },
                    {
                        text: '图片unsplash',
                        link: 'https://unsplash.com'
                    },
                    {
                        text: '摄影pexels',
                        link: 'https://www.pexels.com/zh-cn/'
                    },
                    {
                        text: 'png素材',
                        link: 'https://pluspng.com'
                    },
                    {
                        text: 'logo设计',
                        link: 'https://www.uugai.com'
                    },
                    {
                        text: 'logo素材',
                        link: 'https://www.logosc.cn/logo'
                    },
                    {
                        text: '壁纸',
                        link: 'https://bz.zzzmh.cn/index'
                    },
                    // {
                    //     text: '',
                    //     link: ''
                    // },
                ]
            },
            {
                text: 'webide',
                children: [
                    {
                        text: 'stackblitz',
                        link: 'https://stackblitz.com'
                    },
                    {
                        text: 'codesandbox',
                        link: 'https://codesandbox.io/dashboard/recent'
                    },
                    {
                        text: 'gitpod',
                        link: 'https://gitpod.io/workspaces'
                    },
                    {
                        text: 'coder',
                        link: 'https://coder.com'
                    },
                    {
                        text: 'theia-idea',
                        link: 'https://theia-ide.org'
                    },
                    // {
                    //     text: '',
                    //     link: ''
                    // },
                ]
            },
            {
                text: '网络工具',
                children: [
                    {
                        text: '163jsq',
                        link: 'https://163jsq.top/login'
                    },
                    {
                        text: 'gacloudltd',
                        link: 'https://case.gacloudltd.org/login'
                    },
                    {
                        text: '短链接',
                        link: 'https://urlify.cn'
                    },
                ]
            },


        ]
    },
    //平台类
    {
        text:'平台类',
        children:[
            {
                text:'技术类',
                children:[
                    {
                        text:'dcloud',
                        link:'https://dcloud.io/index.html'
                    },
                    {
                        text:'freessl',
                        link:'https://freessl.cn/'
                    },
                    {
                        text:'aliyun-maven',
                        link:'https://developer.aliyun.com/mvn/search'
                    },
                    {
                        text:'npmjs',
                        link:'https://www.npmjs.com/'
                    },
                ]
            },
            {
                text:'厂商',
                children:[
                    {
                        text:'支付宝登陆',
                        link:'https://auth.alipay.com/login/ant_sso_index.htm'
                    },
                    {
                        text:'支付宝商户平台',
                        link:'https://b.alipay.com/index2.htm'
                    },
                    {
                        text:'微信商户平台',
                        link:'https://pay.weixin.qq.com/index.php/core/home/login'
                    },
                    {
                        text:'微信红包开放平台',
                        link:'https://cover.weixin.qq.com/cgi-bin/mmcover-bin/readtemplate?t=page/index##/login'
                    },
                    // {
                    //     text:'',
                    //     link:''
                    // },
                    // {
                    //     text:'',
                    //     link:''
                    // },
                    // {
                    //     text:'',
                    //     link:''
                    // },
                ]
            },
            {
                text:'云服务商',
                children:[
                    {
                        text:'阿里云',
                        link:'https://account.aliyun.com/login/login.htm'
                    },
                    {
                        text:'青云',
                        link:'https://www.qingcloud.com'
                    },
                    {
                        text:'腾讯云',
                        link:'https://cloud.tencent.com/'
                    },
                    {
                        text:'华为云',
                        link:'https://www.huaweicloud.com/intl/zh-cn/'
                    },
                    {
                        text:'创蓝云志-短信服务商',
                        link:'https://www.chuanglan.com/control/login'
                    },
                ]
            },
            {
                text:'应用分发',
                children:[

                    {
                        text:'apple开发者平台',
                        link:'https://developer.apple.com/cn/'
                    },
                    {
                        text:'华为开发者平台',
                        link:'https://id1.cloud.huawei.com/CAS/portal/loginAuth.html'
                    },
                    {
                        text:'腾讯应用平台',
                        link:'https://app.open.qq.com/p/login'
                    },
                    {
                        text:'小米开发者平台',
                        link:'https://account.xiaomi.com/fe/service/login/password?_locale=zh'
                    },
                    {
                        text:'oppo开发者平台',
                        link:'https://id.oppomobile.com/index.html'
                    },
                    {
                        text:'vivo开发者平台',
                        link:'https://id.vivo.com.cn'
                    },
                    {
                        text:'蒲公英',
                        link:'https://www.pgyer.com/'
                    },
                    {
                        text:'香蕉云编-ios',
                        link:'https://www.yunedit.com/ipadetail'
                    },
                    {
                        text:'applicationloader-ios',
                        link:'http://blog.applicationloader.net'
                    },
                ]
            },
            {
                text:'云盘',
                children:[

                    {
                        text:'百度网盘]',
                        link:'https://pan.baidu.com'
                    },
                ]
            },
            
        ]
    },

    //文档类
    {
        text: '文档',
        children: [
            {
                text: 'git中文文档',
                link: 'https://git-scm.com/book/zh/v2'
            },
            {
                text: 'jquery中文文档',
                link: 'https://jquery.cuishifeng.cn'
            },
            {
                text: 'nginx中文文档',
                link: 'https://blog.redis.com.cn/doc/index.html'
            },
            {
                text: 'kafka中文文档',
                link: 'https://kafka.apachecn.org'
            },
            {
                text: 'mybatis中文文档',
                link: 'https://mybatis.org/mybatis-3/zh/index.html'
            },
            {
                text: 'dubbo中文文档',
                link: 'https://dubbo.apache.org/zh/docs'
            },
            {
                text: 'netty文档',
                link: 'https://netty.io/wiki/index.html'
            },
            {
                text: '微信生态文档',
                link: 'https://developers.weixin.qq.com/doc/'
            },
            {
                text: '支付宝生态文档',
                link: 'https://opendocs.alipay.com/open/270/105899'
            },
            {
                text: 'jenkins中文文档',
                link: 'https://www.jenkins.io/zh/doc/'
            },
            {
                text: 'TypeScript中文文档',
                link: 'https://www.tslang.cn/docs/home.html'
            },
            {
                text: 'eslint中文文档',
                link: 'https://cn.eslint.org/'
            },
            {
                text: 'viet官方中文文档',
                link: 'https://cn.vitejs.dev/'
            },
            {
                text: 'sass中文文档',
                link: 'https://www.sass.hk/docs/'
            },
            // {
            //     text: '',
            //     link: ''
            // },
        ],
    },
    //博主&建站
    {
        text:'博主&建站',
        children:[
            {
                text:'博主',
                children:[
                    {
                        text:'Jitwxs',
                        link:'https://jitwxs.cn'
                    },
                    {
                        text:'架构师',
                        link:'https://www.mobaijun.com'
                    },
                    {
                        text:'友人c',
                        link:'https://www.ihewro.com'
                    },
                    {
                        text:'哈喽',
                        link:'https://www.cnblogs.com/hahaha111122222'
                    },
                    {
                        text:'日拱一兵',
                        link:'https://dayarch.top/'
                    },
                    {
                        text:'ArcherGu',
                        link:'https://archergu.me/posts'
                    },
                    {
                        text:'阿虚同学',
                        link:'https://axutongxue.com/'
                    },
                    {
                        text:'骏马金龙',
                        link:'https://www.junmajinlong.com'
                    },
                    {
                        text:'小弋の生活馆',
                        link:'https://lovelijunyi.gitee.io/'
                    },
                    {
                        text:'java全栈知识体系',
                        link:'https://pdai.tech'
                    },
                    // {
                    //     text:'',
                    //     link:''
                    // },
                ]
            },
            {
                text:'建站',
                children:[
                    {
                        text:'hexo',
                        link:'https://hexo.io/zh-cn/index.html'
                    },
                    {
                        text:'vuepress',
                        link:'https://v2.vuepress.vuejs.org/zh/'
                    },
                    {
                        text:'halo',
                        link:'https://halo.run'
                    },
                    {
                        text:'astro',
                        link:'https://docs.astro.build/zh-cn/getting-started/'
                    },
                ]
            }
        ]
    }
    // NavbarGroup
    // {
    //     text: '文档',
    //     children: ['/group/foo.md', '/group/bar.md'],
    // },
    // 字符串 - 页面文件路径
    //'/bar/README.md',
    // 嵌套 Group - 最大深度为 2
    // {
    //     text: 'Group',
    //     children: [
    //         {
    //             text: 'SubGroup1',
    //             children: ['/group/sub/foo.md', '/group/sub/bar.md'],
    //         },
    //         {
    //             text: 'SubGroup2',
    //             children: ['/group/sub/foo.md', '/group/sub/bar.md'],
    //         },
    //     ],
    // },
    // 控制元素何时被激活
    // {
    //     text: 'Group 2',
    //     children: [
    //         {
    //             text: 'Always active',
    //             link: '/',
    //             // 该元素将一直处于激活状态
    //             activeMatch: '/',
    //         },
    //         {
    //             text: 'Active on /foo/',
    //             link: '/not-foo/',
    //             // 该元素在当前路由路径是 /foo/ 开头时激活
    //             // 支持正则表达式
    //             activeMatch: '^/foo/',
    //         },
    //     ],
    // },
]

export default navbar