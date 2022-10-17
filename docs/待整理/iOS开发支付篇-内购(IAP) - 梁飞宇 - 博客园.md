# iOS开发支付篇-内购(IAP) - 梁飞宇 - 博客园
![image](images/logo.svg)

* [首页](https://www.cnblogs.com/)
* [新闻](https://news.cnblogs.com/)
* [博问](https://q.cnblogs.com/)
* [专区](https://brands.cnblogs.com/)
* [闪存](https://ing.cnblogs.com/)
* [班级](https://edu.cnblogs.com/)
*  

![image](images/search.svg)

* [注册](https://account.cnblogs.com/signup/) 登录

# [梁飞宇](https://www.cnblogs.com/lxlx1798/)
## [iOS开发支付篇-内购(IAP)](https://www.cnblogs.com/lxlx1798/p/10527741.html)
# **一，前言**
```Plain Text
　　经典文章参考： 1.http://yimouleng.com/2015/12/17/ios-AppStore/  内购流程
　　　　　　　　　 2.http://www.jianshu.com/p/b199a4672608   完成交易后和服务器交互
       　　      3.http://www.jianshu.com/p/1ef61a785508 沙盒账号测试
                4.https://www.jianshu.com/p/4f8a854ff427  审核前的配置及注意事项

```
     **思维导图**

![image](images/1115039-20190314010110926-1350088342.png)

     **重点总结：**

```Plain Text
1.获取内购列表（从App内读取或从自己服务器读取）
```
```Plain Text
2.App Store请求可用的内购列表
```
```Plain Text
3.向用户展示内购列表
```
```Plain Text
4.用户选择了内购列表，再发个购买请求，收到购买完成的回调（购买完成后会把钱打给申请内购的银行卡内）
```
```Plain Text
5.购买流程结束后, 向服务器发起验证凭证以及支付结果的请求
```
```Plain Text
6.自己的服务器将支付结果信息返回给前端并发放虚拟产品
```
```Plain Text
7.服务端的工作比较简单，分4步：
```
```Plain Text
　　7.1.接收ios端发过来的购买凭证。
```
```Plain Text
　　7.2.判断凭证是否已经存在或验证过，然后存储该凭证。
```
```Plain Text
　　7.3.将该凭证发送到苹果的服务器验证，并将验证结果返回给客户端。
```
   `7.4.如果需要，修改用户相应的会员权限。`

   `7.5.考虑到网络异常情况，服务器的验证应该是一个可恢复的队列，如果网络失败了，应该进行重试。`

```Plain Text
简单来说就是将该购买凭证用Base64编码，然后POST给苹果的验证服务器，苹果将验证结果以JSON形式返回。
```
**一、使用注意事项及遇到的坑**

　　**1.使用注意**

```Plain Text
1. 代码中的_currentProId所填写的是你的购买项目的的ID，这个和第二步创建的内购的productID要一致，产品id与_currentProId一致。
```
```Plain Text
2. 在监听购买结果后，一定要调用[[SKPaymentQueue defaultQueue] finishTransaction:tran];来允许你从支付队列中移除交易。 
```
```Plain Text
3. 真机测试的时候，一定要退出原来的账号(app store 登录的账号退出)，才能用沙盒测试账号。
```
```Plain Text
4. 请务必使用真机来测试，一切以真机为准。 
```
```Plain Text
5. 项目的Bundle identifier需要与您申请AppID时填写的bundleID一致，不然会无法请求到商品信息。 
```
```Plain Text
6. 沙盒环境测试appStore内购流程的时候，请使用没越狱的设备。 
```
```Plain Text
7. 二次验证，请注意区分宏， 测试用沙盒验证，App Store审核的时候也使用的是沙盒购买，所以验证购买凭证的时候需要判断返回Status Code决定是否去沙盒进行二次  
```
```Plain Text
   验证，为了线上用户的使用，验证的顺序肯定是先验证正式环境，此时若返回值为21007，就需要去沙盒二次验证，因为此购买的是在沙盒进行的。
```
```Plain Text
8.货币类型(Bank Account Currency) :填CNY(如果你的app在中国使用的话)。
```
　　**2.获取不到商品信息**

```Plain Text
1.确定配置环节正确。
```
```Plain Text
2.确定是真机测试且手机没有越狱。
```
```Plain Text
3.确定内购商品添加到了需要内购功能的App中。
```
```Plain Text
4.确定当前运行的App的Bundle ID和后台配置的App的Bundle ID是一致的。
```
```Plain Text
5.可以尝试先删除旧App，再重新编译生成新的，避免新App未覆盖错误。
```
```Plain Text
6.这里要提一点，沙盒的测试账号和你请求商品信息没有关系。请求商品信息的流程是，你在后台配置好了内购商品，并且将其添加到了需要集成内购功能的App中，然后你请求商品。请求到商品后的流程是这样的，苹果系统会自动弹出登录框让你登录账号。然后根据提示操作进行购买，这里的账号就是你配置的沙盒测试账号。
```
**二、为什么要使用内购？（why)和内购是什么？(what)**

　　`1.如果你购买的商品，是在本app中使用和消耗的，就一定要用内购，否则会被拒绝上线，例如：游戏币，在线书籍``app中使用的道具等。本例中，就是直播中你用来打赏用的金币，那东西可就属于消耗型的。`

　　`2.如果是直接购买商城之类的快递包邮的那些东东，那就直接调用支付宝，微信啦，之类的三方支付就好了，淘宝，京东都玩过哈！``比较坑的一点就是，内购的话，还要和苹果3/7分成，那就可以说，充值相同的钱，相对来说，iOS是比安卓亏的！`

**三、怎样使用内购？(how)**



```Plain Text
　　1.使用内购需要哪些资料　 1张visa银行卡，appid，1张银行卡与苹果三七分打钱用
```
```Plain Text
　　　　（1）协议、税务和银行业务
```
```Plain Text
　　　　　　 联系人信息：(appid账号人)姓名，邮箱，电话号码，地址（城市、具体街道分行写）
```
```Plain Text
　　　　　　 visa银行卡信息：开户行，开户行所在地址，开户行的邮政编码，开户行持有人卡号，开户行持有人姓名
```
```Plain Text
　　　　　　 税务信息：
　　　　　　　　　　1.会问你是不是美国居民选择NO. 
　　　　　　　　　　2. 有没有在美国从事商业性活动，选择NO.
　　　　　　　　　　3.之后填写个人或组织名称，所在国家，受益方式(独立开发者选择个人)，居住地址，邮寄地址，声明人，头衔
```
       `(2)内购产品id的配置 （开发人员配置）`

           `如果是金币或其它消耗品的产品的话用消耗性型项目，参考名称（内购项目，比如金币100),产品id,定价信息，使用内购的快照，显示名称，描述。`



```Plain Text
　　　　(3)用户职能
```
```Plain Text
　　　　　　测试员：添加水箱测试员及沙箱账号，水箱测试账号不能是正常使用的appid账号，直接使用一个没有注册过的邮箱账号即可。
```
```Plain Text
                 姓名，测试账号密码，appstore地区（必须填对）。
```
**四、操作流程图解与代码**

  **1.创建app后填写用户信息**

![image](images/1115039-20190314004726502-1483725224.png)

```Plain Text
功能简介 :
```
    `1.我的App主要用于管理自己的App应用，例如编辑资料，上架，下架等。`

    `2.销售和趋势主要是来查看App在各个平台的下载量,收入等方面数据，里面有曲线图等图文结合的方式给我们参考。`

    `3.付款和财务报告显示的是你的收入以及付款等相关信息。`

    `4.iAd主要是跟广告有关，开发者可以登录到Workbench，通过iAd对应用的广告进行控制。`

    `5.用户和职能用于生成相应账号，例如苹果沙盒测试账号。`

    `6.协议，税务和银行业务则是你银行相关账户的信息设置。`

```Plain Text
流程
```
    `1.注册app,填写协议、税务和银行业务`

      `注册app,需要设置Bundle identifier，此个步骤这里就不在写了`

      `填写协议、税务和银行业务`

　　

![image](images/1115039-20190314004913002-1943543856.png)

\*\*

```Plain Text
选择申请合同类型
```
\*\*

```Plain Text
* 页面内容：
```
```Plain Text
   Request Contracts(申请合同)
```
```Plain Text
   Contracts In Effect(已生效合同)。
```
```Plain Text
* 合同类型：
```
```Plain Text
   iOS Free Application(免费应用合同)
```
```Plain Text
   iOS Paid Application(付费应用合同)
```
```Plain Text
   iAd App NetNetwork(广告合同)
```
　　**1.申请iOS Paid Application合同**

![image](images/1115039-20190314005015019-238821808.png)

![image](images/1115039-20190314005110118-1814847459.png)

　**2. 设置协议税务、银行卡信息**

```Plain Text
当我们点击申请iOS Paid Application合同后，该合同的状态会变成如下的样子，我们可以看到其中Status为Contact， Bank, Pending Tax,
```
```Plain Text
意思是联系方式、银行和税务信息没有填写。
```
　

![image](images/1115039-20190314005206889-680786992.png)

 2.1设置联系人信息

```Plain Text
如果你没有添加过联系人，你需要通过Add New Contact按钮来添加一个新的联系人。然后指定联系人的职务，职务如下：
```
```Plain Text
 * Senior Management：高管
```
```Plain Text
 * Financial：财务
```
```Plain Text
 * Technical：技术支持
```
```Plain Text
 * Legal：法务
```
```Plain Text
 * Marketing：市场推广
```
```Plain Text
如果你是独立开发者，可以全部填你自己一个人。
```
  新增联系人

![image](images/1115039-20190314005231122-248352501.png)

  通过新增或之前增加的联系人设置高管等信息

　　

![image](images/1115039-20190314005251824-1715181839.png)











待完成后点击Done,返回后状态会变成Edit状态

 2.2设置银行卡信息(可以通过银行名称和地址直接上网查询CNAPS Code号，不要问我上那查)

 

![image](images/1115039-20190314005356712-633230673.png)



![image](images/1115039-20190314005405872-1693173533.png)

　　

确认银行卡信息

![image](images/1115039-20190314005415778-97556405.png)

![image](images/1115039-20190314005425648-512438926.png)

 2.3设置税务信息(1.是美国税务，只需要这个就行，后面的澳大利亚和日本的和我们没的关系)

![image](images/1115039-20190314005519381-224733357.png)

选择U.S Tax Forms，选择后会问你两个问题，第一个问题如下：询问你是否是美国居民，有没有美国伙伴关系或者美国公司，如果没有直接选择No。

![image](images/1115039-20190314005527512-769602247.png)

接下来第二个问题如下：询问你有没有在美国的商业性活动，没有也直接选No。

![image](images/1115039-20190314005538294-1301188213.png)

然后填写税务信息

```Plain Text
然后填写你的税务信息，包括以下几点：
```
```Plain Text
Individual or Organization Name：个人或者组织名称
```
```Plain Text
Country of incorporation： 所在国家
```
```Plain Text
Type of Beneficial Owner：受益方式，独立开发者选个人
```
```Plain Text
Permanent Residence：居住地址
```
```Plain Text
Mailing address：邮寄地址
```
`Name of Person Making` `this` `Declaration：声明人`

```Plain Text
Title：头衔


```
```Plain Text
当你填写完所有资料后，合同状态就会变成Processing，笔者凌晨1点左右提交，下午就通过了。
```
　　具体填写见下图（以下是确认税务信息图）

![image](images/1115039-20190314005647564-323716386.png)

　　**填写完成后效果**

![image](images/1115039-20190314005701846-1978513956.png)

 **3.配置内购产品ID**

```Plain Text
完成以上操作，并且苹果审核完毕之后，就可以配置内购产品了。
```
```Plain Text
登录 iTunesConnect -->我的App 模块找到需要内购的App，最后找到页面如下:
```
　　

![image](images/1115039-20190314005759793-833742629.png)

![image](images/1115039-20190314005809739-181080454.png)

![image](images/1115039-20190314005818801-2122434101.png)

![image](images/1115039-20190314005830423-1799661789.png)

```Plain Text
填写沙箱测试员和添加内购产品注意事项
```
```Plain Text
1、邮箱必须是没有注册或者说关联过appstore的邮箱。
```
```Plain Text
2、密码必须有一个是大写字母有一个是小写字母（苹果规定的,理解）。
```
```Plain Text
3、内购屏幕截图规格必须是312*290，且最低分辨率是72ppi。
```
```Plain Text
4、内购的价格是苹果规定的不能自定义(坑啊)。
```
**4.增加内购测试账号**

     **4.1 内购测试之前准备**

```Plain Text
1、什么是内购测试账号(what)及为什么使用内购测试账号(why)?
```
    `iOS应用里面用到了苹果应用内付费（IAP）功能，在项目上线前一定要进行功能测试。测试肯定是需要的，何况这个跟money有关。。。开发完成了之后，如何进行测试呢？难道我测试个内购功能要自己掏钱？就算是也是公司掏钱，但是苹果要吃掉3成的啊，想想如果是99刀的商品，点下购买的时候心里都有点发慌。。。`

```Plain Text
苹果当然没这么坑了，测试内购，苹果提供了沙盒账号（也叫沙箱账号）的方式。这个沙箱账号其实是虚拟的AppleID，在开发者账号后台的iTune Connect上配置了之后就能使用沙盒账号测试内购，有了沙盒账号，就能体验一把土豪的感觉了，游戏钻石什么的随便充，反正不用我的钱。
```
    `注意：你可以把沙盒账号看做是一个虚拟的AppleID，这个AppleID只有进行内购测试的功能。重要，重要，重要，这个虚拟的账号只能在自己的测试号中使用，如果在其它地方如appstore使用的话会提示账号无效之类的话。`    

```Plain Text
2、如何使用内购测试账号(how)？
```
    `2.1作用内购账号的前提`



```Plain Text
　　　　1）内购的商品ID，价格等相关信息已经录入到开发者后台了（不然那你买什么）
```
```Plain Text
　　　　2）开发者后台已经创建好沙盒测试账号了（下面我们会将如何创建）　　
```
```Plain Text
　　　　3）你要有一部真机（iPhone或iPad都行，别用模拟器就好。而且不能是越狱机）
```
```Plain Text
　　　　4）bundleID别搞错了，开发者账号、证书、bundleID要一致
```
```Plain Text
　　　　5）如果你是第一次在这个开发者账号上集成内购功能，
```
　　`请先将iTune Connect上的税务协议都填写好，否则内购时会发现商品ID无效。`重要，如果不添加税务协议会报错，找不到商品。

　　选择用户和职能就是在协议、税务和银行业务左侧

![image](images/1115039-20190314005934779-773673429.png)

![image](images/1115039-20190314005945725-236166677.png)

 　　**4.2内购测试开始**

```Plain Text
1.在iPhone上安装测试包（必须是打包签名证书或者develop签名证书打的包，不能是从App Store上下载的）
```
```Plain Text
2.退出iPhone的App Store账号（因为我们需要使用沙盒账号登录）。
```
```Plain Text
　　* 操作方法一：打开App Store应用首页滑到最下方--选中AppleID--注销
```
```Plain Text
　　* 操作方法二：设置--iTunes Store与App Store--选中AppleID--注销
```
```Plain Text
3.不能用沙盒测试帐号来登录appstore官网或去其它已上线平台去支付详见图4.21
```
```Plain Text
4.运行下面代码的demo,传入你创建的产品id(就是在app iTunes Connect ->我的app ->功能 ->app内购买项目添加的商品)，点击充值跳转开始购买详见图4.22
```
```Plain Text
5.再次购买时需要输入测试沙盒账号密码(在用户和职能->沙箱技术测试员创建的测试账号)详见图4.23
```
```Plain Text
6.购买成功反馈详见图4.24
```
　　4.21 图

![image](images/1115039-20190314005955035-314428682.png)

　　4.22 图

![image](images/1115039-20190314010008142-794420467.png)

　　4.23 图

![image](images/1115039-20190314010017652-315700343.png)

　　4.24 图

5.代码及业务逻辑

 　　业务逻辑

1. 获取内购列表（从App内读取或从自己服务器读取）
2. App Store请求可用的内购列表
3. 向用户展示内购列表
4. 用户选择了内购列表，再发个购买请求，收到购买完成的回调（购买完成后会把钱打给申请内购的银行卡内）
5. 购买流程结束后, 向服务器发起验证凭证以及支付结果的请求
6. 自己的服务器将支付结果信息返回给前端并发放虚拟产品
7. 服务端的工作比较简单，分4步：
8. 接收ios端发过来的购买凭证。
9. 判断凭证是否已经存在或验证过，然后存储该凭证。
10. 将该凭证发送到苹果的服务器验证，并将验证结果返回给客户端。
11. 如果需要，修改用户相应的会员权限。

考虑到网络异常情况，服务器的验证应该是一个可恢复的队列，如果网络失败了，应该进行重试。

简单来说就是将该购买凭证用Base64编码，然后POST给苹果的验证服务器，苹果将验证结果以JSON形式返回。

![image](images/1115039-20190314010035242-1115840249.png)



```Plain Text
　代码如下 ：
```
```Plain Text
/*注意事项：
```
```Plain Text
1.沙盒环境测试appStore内购流程的时候，请使用没越狱的设备。
```
```Plain Text
2.请务必使用真机来测试，一切以真机为准。
```
```Plain Text
3.项目的Bundle identifier需要与您申请AppID时填写的bundleID一致，不然会无法请求到商品信息。
```
```Plain Text
4.如果是你自己的设备上已经绑定了自己的AppleID账号请先注销掉,否则你哭爹喊娘都不知道是怎么回事。
```
```Plain Text
5.订单校验 苹果审核app时，仍然在沙盒环境下测试，所以需要先进行正式环境验证，如果发现是沙盒环境则转到沙盒验证。
```
```Plain Text
识别沙盒环境订单方法：
```
 `1.根据字段 environment = sandbox。`

 `2.根据验证接口返回的状态码,如果status=21007，则表示当前为沙盒环境。`

 `苹果反馈的状态码：`

 `21000App Store无法读取你提供的JSON数据`

 `21002 订单数据不符合格式`

 `21003 订单无法被验证`

 `21004 你提供的共享密钥和账户的共享密钥不一致`

 `21005 订单服务器当前不可用`

 `21006 订单是有效的，但订阅服务已经过期。当收到这个信息时，解码后的收据信息也包含在返回内容中`

 `21007 订单信息是测试用（sandbox），但却被发送到产品环境中验证`

 `21008 订单信息是产品环境中使用，但却被发送到测试环境中验证`

 `*/`

```Plain Text
#import <Foundation/Foundation.h>
```
`typedef` `enum` `{`

    `SIAPPurchSuccess = 0,`       `// 购买成功`

    `SIAPPurchFailed = 1,`        `// 购买失败`

    `SIAPPurchCancle = 2,`        `// 取消购买`

    `SIAPPurchVerFailed = 3,`     `// 订单校验失败`

    `SIAPPurchVerSuccess = 4,`    `// 订单校验成功`

    `SIAPPurchNotArrow = 5,`      `// 不允许内购`

```Plain Text
}SIAPPurchType;
```
`typedef` `void` `(^IAPCompletionHandle)(SIAPPurchType type,NSData *data);`

`@``interface` `STRIAPManager : NSObject`

```Plain Text
+ (instancetype)shareSIAPManager;
```
```Plain Text
//开始内购
```
`- (``void``)startPurchWithID:(NSString *)purchID completeHandle:(IAPCompletionHandle)handle;`

```Plain Text
@end
```
```Plain Text
.m
```
```Plain Text
#import "STRIAPManager.h"
```
```Plain Text
#import <StoreKit/StoreKit.h>
```
`@``interface` `STRIAPManager()<SKPaymentTransactionObserver,SKProductsRequestDelegate>{`

   `NSString           *_purchID;`

   `IAPCompletionHandle _handle;`

```Plain Text
}
```
```Plain Text
@end
```
```Plain Text
@implementation STRIAPManager
```
```Plain Text
#pragma mark - ♻️life cycle
```
```Plain Text
+ (instancetype)shareSIAPManager{
```
    `static` `STRIAPManager *IAPManager = nil;`

    `static` `dispatch_once_t onceToken;`

    `dispatch_once(&onceToken,^{`

        `IAPManager = [[STRIAPManager alloc] init];`

    `});`

    `return` `IAPManager;`

```Plain Text
}
```
```Plain Text
- (instancetype)init{
```
    `self = [super init];`

    `if` `(self) {`

        `// 购买监听写在程序入口,程序挂起时移除监听,这样如果有未完成的订单将会自动执行并回调 paymentQueue:updatedTransactions:方法`

        `[[SKPaymentQueue defaultQueue] addTransactionObserver:self];`

    `}`

    `return` `self;`

```Plain Text
}
```
`- (``void``)dealloc{`

    `[[SKPaymentQueue defaultQueue] removeTransactionObserver:self];`

```Plain Text
}
```
```Plain Text
#pragma mark - ����public
```
`- (``void``)startPurchWithID:(NSString *)purchID completeHandle:(IAPCompletionHandle)handle{`

    `if` `(purchID) {`

        `if` `([SKPaymentQueue canMakePayments]) {`

            `// 开始购买服务`

            `_purchID = purchID;`

            `_handle = handle;`

            `NSSet *nsset = [NSSet setWithArray:@[purchID]];`

            `SKProductsRequest *request = [[SKProductsRequest alloc] initWithProductIdentifiers:nsset];`

            `request.``delegate` `= self;`

            `[request start];`

        `}``else``{`

            `[self handleActionWithType:SIAPPurchNotArrow data:nil];`

        `}`

    `}`

```Plain Text
}
```
```Plain Text
#pragma mark - ����private
```
`- (``void``)handleActionWithType:(SIAPPurchType)type data:(NSData *)data{`

```Plain Text
#if DEBUG
```
    `switch` `(type) {`

        `case` `SIAPPurchSuccess:`

            `NSLog(``@"购买成功"``);`

            `break``;`

        `case` `SIAPPurchFailed:`

            `NSLog(``@"购买失败"``);`

            `break``;`

        `case` `SIAPPurchCancle:`

            `NSLog(``@"用户取消购买"``);`

            `break``;`

        `case` `SIAPPurchVerFailed:`

            `NSLog(``@"订单校验失败"``);`

            `break``;`

        `case` `SIAPPurchVerSuccess:`

            `NSLog(``@"订单校验成功"``);`

            `break``;`

        `case` `SIAPPurchNotArrow:`

            `NSLog(``@"不允许程序内付费"``);`

            `break``;`

        `default``:`

            `break``;`

    `}`

```Plain Text
#endif
```
    `if``(_handle){`

        `_handle(type,data);`

    `}`

```Plain Text
}
```
```Plain Text
#pragma mark - ����delegate
```
```Plain Text
// 交易结束
```
`- (``void``)completeTransaction:(SKPaymentTransaction *)transaction{`

  `// Your application should implement these two methods.`

    `NSString * productIdentifier = transaction.payment.productIdentifier;`

    `NSString * receipt = [transaction.transactionReceipt base64EncodedString];`

    `if` `([productIdentifier length] > 0) {`

        `// 向自己的服务器验证购买凭证`

    `}`

    `[self verifyPurchaseWithPaymentTransaction:transaction isTestServer:NO];`

```Plain Text
}
```
```Plain Text
// 交易失败
```
`- (``void``)failedTransaction:(SKPaymentTransaction *)transaction{`

    `if` `(transaction.error.code != SKErrorPaymentCancelled) {`

        `[self handleActionWithType:SIAPPurchFailed data:nil];`

    `}``else``{`

        `[self handleActionWithType:SIAPPurchCancle data:nil];`

    `}`

    `[[SKPaymentQueue defaultQueue] finishTransaction:transaction];`

```Plain Text
}
```
`- (``void``)verifyPurchaseWithPaymentTransaction:(SKPaymentTransaction *)transaction isTestServer:(BOOL)flag{`

    `//交易验证`

    `NSURL *recepitURL = [[NSBundle mainBundle] appStoreReceiptURL];`

    `NSData *receipt = [NSData dataWithContentsOfURL:recepitURL];`

    `if``(!receipt){`

        `// 交易凭证为空验证失败`

        `[self handleActionWithType:SIAPPurchVerFailed data:nil];`

        `return``;`

    `}`

    `// 购买成功将交易凭证发送给服务端进行再次校验`

    `[self handleActionWithType:SIAPPurchSuccess data:receipt];`

    `NSError *error;`

    `NSDictionary *requestContents = @{`

                                      `@"receipt-data"``: [receipt base64EncodedStringWithOptions:0]`

                                      `};`

    `NSData *requestData = [NSJSONSerialization dataWithJSONObject:requestContents`

                                                          `options:0`

                                                            `error:&error];`

    `if` `(!requestData) {` `// 交易凭证为空验证失败`

        `[self handleActionWithType:SIAPPurchVerFailed data:nil];`

        `return``;`

    `}`

    `//In the test environment, use https://sandbox.itunes.apple.com/verifyReceipt`

    `//In the real environment, use https://buy.itunes.apple.com/verifyReceipt`

    `NSString *serverString =` `@"https://buy.itunes.apple.com/verifyReceipt"``;`

    `if` `(flag) {`

        `serverString =` `@"https://sandbox.itunes.apple.com/verifyReceipt"``;`

    `}`

    `NSURL *storeURL = [NSURL URLWithString:serverString];`

    `NSMutableURLRequest *storeRequest = [NSMutableURLRequest requestWithURL:storeURL];`

    `[storeRequest setHTTPMethod:``@"POST"``];`

    `[storeRequest setHTTPBody:requestData];`

    `NSOperationQueue *queue = [[NSOperationQueue alloc] init];`

    `[NSURLConnection sendAsynchronousRequest:storeRequest queue:queue`

                           `completionHandler:^(NSURLResponse *response, NSData *data, NSError *connectionError) {`

                               `if` `(connectionError) {`

                                   `// 无法连接服务器,购买校验失败`

                                   `[self handleActionWithType:SIAPPurchVerFailed data:nil];`

                               `}` `else` `{`

                                   `NSError *error;`

                                   `NSDictionary *jsonResponse = [NSJSONSerialization JSONObjectWithData:data options:0 error:&error];`

                                   `if` `(!jsonResponse) {`

                                       `// 苹果服务器校验数据返回为空校验失败`

                                       `[self handleActionWithType:SIAPPurchVerFailed data:nil];`

                                   `}`

                                   `// 先验证正式服务器,如果正式服务器返回21007再去苹果测试服务器验证,沙盒测试环境苹果用的是测试服务器`

                                   `NSString *status = [NSString stringWithFormat:``@"%@"``,jsonResponse[``@"status"``]];`

                                   `if` `(status && [status isEqualToString:``@"21007"``]) {`

                                       `[self verifyPurchaseWithPaymentTransaction:transaction isTestServer:YES];`

                                   `}``else` `if``(status && [status isEqualToString:``@"0"``]){`

                                       `[self handleActionWithType:SIAPPurchVerSuccess data:nil];`

                                   `}`

```Plain Text
#if DEBUG
```
                                   `NSLog(``@"----验证结果 %@"``,jsonResponse);`

```Plain Text
#endif
```
                               `}`

                           `}];`

    `// 验证成功与否都注销交易,否则会出现虚假凭证信息一直验证不通过,每次进程序都得输入苹果账号`

    `[[SKPaymentQueue defaultQueue] finishTransaction:transaction];`

```Plain Text
}
```
```Plain Text
#pragma mark - SKProductsRequestDelegate
```
`- (``void``)productsRequest:(SKProductsRequest *)request didReceiveResponse:(SKProductsResponse *)response{`

    `NSArray *product = response.products;`

    `if``([product count] <= 0){`

```Plain Text
#if DEBUG
```
        `NSLog(``@"--------------没有商品------------------"``);`

```Plain Text
#endif
```
        `return``;`

    `}`

    `SKProduct *p = nil;`

    `for``(SKProduct *pro` `in` `product){`

        `if``([pro.productIdentifier isEqualToString:_purchID]){`

            `p = pro;`

            `break``;`

        `}`

    `}`

```Plain Text
#if DEBUG
```
    `NSLog(``@"productID:%@"``, response.invalidProductIdentifiers);`

    `NSLog(``@"产品付费数量:%lu"``,(unsigned` `long``)[product count]);`

    `NSLog(``@"%@"``,[p description]);`

    `NSLog(``@"%@"``,[p localizedTitle]);`

    `NSLog(``@"%@"``,[p localizedDescription]);`

    `NSLog(``@"%@"``,[p price]);`

    `NSLog(``@"%@"``,[p productIdentifier]);`

    `NSLog(``@"发送购买请求"``);`

```Plain Text
#endif
```
    `SKPayment *payment = [SKPayment paymentWithProduct:p];`

    `[[SKPaymentQueue defaultQueue] addPayment:payment];`

```Plain Text
}
```
```Plain Text
//请求失败
```
`- (``void``)request:(SKRequest *)request didFailWithError:(NSError *)error{`

```Plain Text
#if DEBUG
```
    `NSLog(``@"------------------错误-----------------:%@"``, error);`

```Plain Text
#endif
```
```Plain Text
}
```
`- (``void``)requestDidFinish:(SKRequest *)request{`

```Plain Text
#if DEBUG
```
    `NSLog(``@"------------反馈信息结束-----------------"``);`

```Plain Text
#endif
```
```Plain Text
}
```
```Plain Text
#pragma mark - SKPaymentTransactionObserver
```
`- (``void``)paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray<SKPaymentTransaction *> *)transactions{`

    `for` `(SKPaymentTransaction *tran` `in` `transactions) {`

        `switch` `(tran.transactionState) {`

            `case` `SKPaymentTransactionStatePurchased:`

                `[self completeTransaction:tran];`

                `break``;`

            `case` `SKPaymentTransactionStatePurchasing:`

```Plain Text
#if DEBUG
```
                `NSLog(``@"商品添加进列表"``);`

```Plain Text
#endif
```
                `break``;`

            `case` `SKPaymentTransactionStateRestored:`

```Plain Text
#if DEBUG
```
                `NSLog(``@"已经购买过商品"``);`

```Plain Text
#endif
```
                `// 消耗型不支持恢复购买`

                `[[SKPaymentQueue defaultQueue] finishTransaction:tran];`

                `break``;`

            `case` `SKPaymentTransactionStateFailed:`

                `[self failedTransaction:tran];`

                `break``;`

            `default``:`

                `break``;`

        `}`

    `}`

```Plain Text
}
```
```Plain Text
@end
```
```Plain Text
在控制器中调用，导入头文件
```
```Plain Text
调用方法
```
`- (``void``)purchaseAction{`

    `if` `(!_IAPManager) {`

        `_IAPManager = [STRIAPManager shareSIAPManager];`

    `}`

    `// iTunesConnect 苹果后台配置的产品ID`

    `[_IAPManager startPurchWithID:``@"com.bb.helper_advisory"` `completeHandle:^(SIAPPurchType type,NSData *data) {`



```Plain Text
    //请求事务回调类型，返回的数据
```
    `}];`

```Plain Text
}
```
分类: [Ios](https://www.cnblogs.com/lxlx1798/category/1008710.html)

好文要顶 关注我 收藏该文 

![image](images/icon_weibo_24.png)

 

![image](images/wechat.png)

![image](images/20170228143621.jpg)

[梁飞宇](https://home.cnblogs.com/u/lxlx1798/)
[关注 - 9](https://home.cnblogs.com/u/lxlx1798/followees/)
[粉丝 - 60](https://home.cnblogs.com/u/lxlx1798/followers/)

+加关注

0

0

[«](https://www.cnblogs.com/lxlx1798/p/10490087.html) 上一篇： [flutter学习之二Material Design设计规范](https://www.cnblogs.com/lxlx1798/p/10490087.html "发布于 2019-03-07 15:46")
[»](https://www.cnblogs.com/lxlx1798/p/10736564.html) 下一篇： [Xcode工程编译错误之iOS开发之The Xcode build system has crashed. Please close and reopen your workspace](https://www.cnblogs.com/lxlx1798/p/10736564.html "发布于 2019-04-19 16:09")

posted on 2019-03-14 01:02  [梁飞宇](https://www.cnblogs.com/lxlx1798/)  阅读(6532)  评论(0)  [编辑](https://i.cnblogs.com/EditPosts.aspx?postid=10527741)  收藏  举报

刷新评论[刷新页面](#)[返回顶部](#top)

登录后才能查看或发表评论，立即 登录 或者 [逛逛](https://www.cnblogs.com/) 博客园首页

[【推荐】博客园x阿里云联合征文活动：我修复的印象最深的一个bug](https://www.cnblogs.com/cmt/p/15564119.html)
[【推荐】跨平台组态\\工控\\仿真\\CAD 50万行C++源码全开放免费下载！](http://www.uccpsoft.com/index.htm)
[【推荐】博客园老会员送现金大礼包，VTH大屏助力研发企业协同数字化](https://shunshun.com/huodong/cnblogs202111)
[【推荐】报名参与华为 HarmonyOS 开发者创新大赛，一起创造无限可能](https://brands.cnblogs.com/huawei/p/2634)  

**编辑推荐：**
· [工作三年的一些感悟](https://www.cnblogs.com/originator/p/15588705.html)
· [.NET Core 中的鉴权授权正确方式(.NET5)](https://www.cnblogs.com/wei325/p/15575141.html)
· [高并发异步解耦利器：RocketMQ 究竟强在哪里？](https://www.cnblogs.com/arthinking/p/15590677.html)
· [理解ASP.NET Core - 错误处理(Handle Errors)](https://www.cnblogs.com/xiaoxiaotank/p/15586706.html)
· [一文分析 Android现状及发展前景](https://www.cnblogs.com/xiaxveliang/p/15568823.html)  

**最新新闻**：
· [曾经的王牌播放器 Winamp 官宣回归，或将切入音乐社交市场？（2021-11-26 18:00）](http://news.cnblogs.com/n/707845/)
· [科研属性的创业者该如何做？经纬创投张颖总结这9条建议，对你一定有用（2021-11-26 17:45）](http://news.cnblogs.com/n/707843/)
· [2021 年了，还有搜索引擎比 Google 更懂我？（2021-11-26 17:33）](http://news.cnblogs.com/n/707842/)
· [4680，谁的砒霜，谁的蜜糖？（2021-11-26 17:26）](http://news.cnblogs.com/n/707841/)
· [互联网广告大退潮，大厂集体失速（2021-11-26 17:17）](http://news.cnblogs.com/n/707840/)
» [更多新闻...](https://news.cnblogs.com/ "IT 新闻")

### 导航
* [博客园](https://www.cnblogs.com/)
* [首页](https://www.cnblogs.com/lxlx1798/)
* [联系](https://msg.cnblogs.com/send/梁飞宇)
* 订阅
* [管理](https://i.cnblogs.com/)

|<<br>2021年11月<br>\>| | | | | | |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
|日|一|二|三|四|五|六|
|31|1|2|3|4|5|6|
|7|8|9|10|11|12|13|
|14|15|16|17|[18](https://www.cnblogs.com/lxlx1798/archive/2021/11/18.html)|19|20|
|21|22|23|24|25|26|27|
|28|29|30|1|2|3|4|
|5|6|7|8|9|10|11|

### 公告
昵称： [梁飞宇](https://home.cnblogs.com/u/lxlx1798/)
园龄： [4年8个月](https://home.cnblogs.com/u/lxlx1798/ "入园时间：2017-02-28")
粉丝： [60](https://home.cnblogs.com/u/lxlx1798/followers/)
关注： [9](https://home.cnblogs.com/u/lxlx1798/followees/)

+加关注

### 统计
* 随笔 - 221
* 文章 - 164
* 评论 - 16
* 阅读 - 71万

### 搜索
### 常用链接
* [我的随笔](https://www.cnblogs.com/lxlx1798/p/ "我的博客的随笔列表")
* [我的评论](https://www.cnblogs.com/lxlx1798/MyComments.html "我的发表过的评论列表")
* [我的参与](https://www.cnblogs.com/lxlx1798/OtherPosts.html "我评论过的随笔列表")
* [最新评论](https://www.cnblogs.com/lxlx1798/RecentComments.html "我的博客的评论列表")
* [我的标签](https://www.cnblogs.com/lxlx1798/tag/ "我的博客的标签列表")

### 我的标签
* [面试(1)](https://www.cnblogs.com/lxlx1798/tag/面试/)

### 随笔分类
* [C++(1)](https://www.cnblogs.com/lxlx1798/category/1097550.html)
* [cocopods(6)](https://www.cnblogs.com/lxlx1798/category/1593155.html)
* [Dart(26)](https://www.cnblogs.com/lxlx1798/category/1480868.html)
* [Flutter(43)](https://www.cnblogs.com/lxlx1798/category/1408909.html)
* [Git(1)](https://www.cnblogs.com/lxlx1798/category/1375377.html)
* [HTML(2)](https://www.cnblogs.com/lxlx1798/category/1333708.html)
* [Ios(77)](https://www.cnblogs.com/lxlx1798/category/1008710.html)
* [iOS中的设计模式(8)](https://www.cnblogs.com/lxlx1798/category/1542313.html)
* [ItunesConnect错误(3)](https://www.cnblogs.com/lxlx1798/category/1000981.html)
* [Java(3)](https://www.cnblogs.com/lxlx1798/category/1006793.html)
* [JavaScript(2)](https://www.cnblogs.com/lxlx1798/category/1021448.html)
* [Mac常规操作(6)](https://www.cnblogs.com/lxlx1798/category/1418906.html)
* [RunTime(1)](https://www.cnblogs.com/lxlx1798/category/1539522.html)
* [SVN(1)](https://www.cnblogs.com/lxlx1798/category/1375378.html)
* [Xcode编辑器的基本使用(6)](https://www.cnblogs.com/lxlx1798/category/1262403.html)
* 更多

### 随笔档案
* [2021年11月(1)](https://www.cnblogs.com/lxlx1798/archive/2021/11.html)
* [2021年8月(1)](https://www.cnblogs.com/lxlx1798/archive/2021/08.html)
* [2021年3月(2)](https://www.cnblogs.com/lxlx1798/archive/2021/03.html)
* [2020年7月(3)](https://www.cnblogs.com/lxlx1798/archive/2020/07.html)
* [2020年6月(1)](https://www.cnblogs.com/lxlx1798/archive/2020/06.html)
* [2020年5月(1)](https://www.cnblogs.com/lxlx1798/archive/2020/05.html)
* [2020年3月(1)](https://www.cnblogs.com/lxlx1798/archive/2020/03.html)
* [2019年12月(1)](https://www.cnblogs.com/lxlx1798/archive/2019/12.html)
* [2019年11月(2)](https://www.cnblogs.com/lxlx1798/archive/2019/11.html)
* [2019年10月(2)](https://www.cnblogs.com/lxlx1798/archive/2019/10.html)
* [2019年9月(8)](https://www.cnblogs.com/lxlx1798/archive/2019/09.html)
* [2019年8月(10)](https://www.cnblogs.com/lxlx1798/archive/2019/08.html)
* [2019年7月(25)](https://www.cnblogs.com/lxlx1798/archive/2019/07.html)
* [2019年6月(33)](https://www.cnblogs.com/lxlx1798/archive/2019/06.html)
* [2019年5月(3)](https://www.cnblogs.com/lxlx1798/archive/2019/05.html)
* 更多

### 文章分类
* [C(3)](https://www.cnblogs.com/lxlx1798/category/1539520.html)
* [Flutter(11)](https://www.cnblogs.com/lxlx1798/category/1491701.html)
* [Flutter小技巧总结(19)](https://www.cnblogs.com/lxlx1798/category/1507923.html)
* [HTML(1)](https://www.cnblogs.com/lxlx1798/category/1491707.html)
* [IOS(33)](https://www.cnblogs.com/lxlx1798/category/1491703.html)
* [JavaScript(1)](https://www.cnblogs.com/lxlx1798/category/1491706.html)
* [Object-OC(11)](https://www.cnblogs.com/lxlx1798/category/1491704.html)
* [RunLoop(1)](https://www.cnblogs.com/lxlx1798/category/1539516.html)
* [RunTime(1)](https://www.cnblogs.com/lxlx1798/category/1539515.html)
* [SDK开发(2)](https://www.cnblogs.com/lxlx1798/category/1539519.html)
* [Sqlite(1)](https://www.cnblogs.com/lxlx1798/category/1502210.html)
* [Swift(70)](https://www.cnblogs.com/lxlx1798/category/1491705.html)
* [WebView(6)](https://www.cnblogs.com/lxlx1798/category/1539521.html)
* [Xcode(4)](https://www.cnblogs.com/lxlx1798/category/1491708.html)
* [工具(3)](https://www.cnblogs.com/lxlx1798/category/1502217.html)
* 更多

### 阅读排行榜
* [1\. Mac 下的 C++ 开发环境(39157)](https://www.cnblogs.com/lxlx1798/p/7679697.html)
* [2\. 【Dart学习】--Dart之字符串(String)的相关方法总结(36243)](https://www.cnblogs.com/lxlx1798/p/11280106.html)
* [3\. 【Dart学习】--Dart之数组(List)的相关方法总结(27422)](https://www.cnblogs.com/lxlx1798/p/11104618.html)
* [4\. 【Flutter学习】之DateTime日期转换(16321)](https://www.cnblogs.com/lxlx1798/p/11267411.html)
* [5\. mac终端下svn常用命令(14668)](https://www.cnblogs.com/lxlx1798/p/9509117.html)

### 评论排行榜
* [1\. 【dart学习】-- Dart之异步编程(3)](https://www.cnblogs.com/lxlx1798/p/11126564.html)
* [2\. 【Flutter学习】组件通信(父子、兄弟）(2)](https://www.cnblogs.com/lxlx1798/p/11172246.html)
* [3\. 【Dart学习】-- Dart之消息循环机制](https://www.cnblogs.com/lxlx1798/p/11047163.html)[翻译](2)
* [4\. Xcode 编辑器之Workspace，Project，Scheme，Target(2)](https://www.cnblogs.com/lxlx1798/p/9369537.html)
* [5\. 【Dart学习】--Dart之字符串(String)的相关方法总结(1)](https://www.cnblogs.com/lxlx1798/p/11280106.html)

### 推荐排行榜
* [1\. 【dart学习】-- Dart之异步编程(4)](https://www.cnblogs.com/lxlx1798/p/11126564.html)
* [2\. 关于代理服务器的原理及用法(2)](https://www.cnblogs.com/lxlx1798/p/10417676.html)
* [3\. Xcode 编辑器之Workspace，Project，Scheme，Target(2)](https://www.cnblogs.com/lxlx1798/p/9369537.html)
* [4\. Mac 下的 C++ 开发环境(2)](https://www.cnblogs.com/lxlx1798/p/7679697.html)
* [5\. 【Flutter学习】基本组件之弹窗和提示(SnackBar、BottomSheet、Dialog)(1)](https://www.cnblogs.com/lxlx1798/p/11371271.html)

### 最新评论
* [1\. Re:【Flutter学习】组件通信(父子、兄弟）](https://www.cnblogs.com/lxlx1798/p/11172246.html)
* ValueNotifier通信的完整代码： \`class ValueNotifierData extends ValueNotifier { ValueNotifierData(val...
* \--年少\_有为
* [2\. Re:HTML之web项目的目录结构](https://www.cnblogs.com/lxlx1798/p/10936794.html)
* 我在： 2021年 5月 27日 9:15:51 看过本篇博客！
* \--努力变胖-HWP
* [3\. Re:Xcode 编辑器之Workspace，Project，Scheme，Target](https://www.cnblogs.com/lxlx1798/p/9369537.html)
* @天外归云 可以看到呀...
* \--nancy\_yuan
* [4\. Re:Xcode 编辑器之Workspace，Project，Scheme，Target](https://www.cnblogs.com/lxlx1798/p/9369537.html)
* 比喻的不错，形象易懂。但是文章里的图片好像看不到了？
* \--天外归云
* [5\. Re:【Flutter学习】页面布局之宽高尺寸处理](https://www.cnblogs.com/lxlx1798/p/11090220.html)
* 感谢分享
* \--西瓜子额

Powered by:
[博客园](https://www.cnblogs.com/)
Copyright © 2021 梁飞宇
Powered by .NET 6 on Kubernetes