import 检索 from "./检索"
import 前端 from "./前端"
import java from "./java"
import python from "./python"
import learning from "./learning"
import 技术站点 from "./技术站点"
import 工具 from "./工具"
import 平台 from "./平台"
import 文档 from "./文档"
import 博客_建站 from "./博客_建站"

//导航栏配置
const navbar = [
    检索,
    前端,
    java,
    python,
    learning,
    技术站点,
    工具,
    平台,
    文档,
    博客_建站,
    
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