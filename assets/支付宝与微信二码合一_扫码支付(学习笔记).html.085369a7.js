import{_ as d,r as t,o as r,c as a,b as e,d as i,e as l,a as s}from"./app.234ff118.js";const u={},v=s(`<h1 id="\u652F\u4ED8\u5B9D\u4E0E\u5FAE\u4FE1\u4E8C\u7801\u5408\u4E00-\u626B\u7801\u652F\u4ED8-\u5B66\u4E60\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8\u5B9D\u4E0E\u5FAE\u4FE1\u4E8C\u7801\u5408\u4E00-\u626B\u7801\u652F\u4ED8-\u5B66\u4E60\u7B14\u8BB0" aria-hidden="true">#</a> \u652F\u4ED8\u5B9D\u4E0E\u5FAE\u4FE1\u4E8C\u7801\u5408\u4E00,\u626B\u7801\u652F\u4ED8(\u5B66\u4E60\u7B14\u8BB0)</h1><h1 id="\u652F\u4ED8\u5B9D\u4E0E\u5FAE\u4FE1\u4E8C\u7801\u5408\u4E00-\u626B\u7801\u652F\u4ED8-\u5B66\u4E60\u7B14\u8BB0-1" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8\u5B9D\u4E0E\u5FAE\u4FE1\u4E8C\u7801\u5408\u4E00-\u626B\u7801\u652F\u4ED8-\u5B66\u4E60\u7B14\u8BB0-1" aria-hidden="true">#</a> <strong>\u652F\u4ED8\u5B9D\u4E0E\u5FAE\u4FE1\u4E8C\u7801\u5408\u4E00,\u626B\u7801\u652F\u4ED8(\u5B66\u4E60\u7B14\u8BB0)</strong></h1><h3 id="_1-\u9875\u9762\u751F\u6210\u7684\u4E8C\u7EF4\u7801" tabindex="-1"><a class="header-anchor" href="#_1-\u9875\u9762\u751F\u6210\u7684\u4E8C\u7EF4\u7801" aria-hidden="true">#</a> <strong>1:\u9875\u9762\u751F\u6210\u7684\u4E8C\u7EF4\u7801:</strong></h3><blockquote><p>(\u9875\u9762\u751F\u6210\u7684\u4E8C\u7EF4\u7801(<strong>\u626B\u63CF\u4E8C\u7EF4\u7801\u4F1A\u5411\u670D\u52A1\u7AEF\u7684\u5224\u65AD\u626B\u7801\u7C7B\u578B\u7684\u63A5\u53E3\u53D1\u9001\u5E26\u53C2\u6570\u8BF7\u6C42!</strong>)</p></blockquote><blockquote><p>( \u5E26\u4E0A\u8BA2\u5355\u53F7\u548C\u5546\u54C1\u56FE\u7247\u53C2\u6570 \u4F8B\u5982: \u751F\u6210\u4E8C\u7EF4\u7801\u53C2\u6570\u5730\u5740 <code>localhost:8080/common/qrcode?order=XX&amp;imgurl=xx</code>)</p></blockquote><h3 id="_2-\u540E\u7AEF\u63A5\u6536\u53C2\u6570\u5224\u65AD\u662F\u4EC0\u4E48\u53D1\u8D77\u7684\u652F\u4ED8\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u540E\u7AEF\u63A5\u6536\u53C2\u6570\u5224\u65AD\u662F\u4EC0\u4E48\u53D1\u8D77\u7684\u652F\u4ED8\u65B9\u5F0F" aria-hidden="true">#</a> <strong>2: \u540E\u7AEF\u63A5\u6536\u53C2\u6570\u5224\u65AD\u662F\u4EC0\u4E48\u53D1\u8D77\u7684\u652F\u4ED8\u65B9\u5F0F:</strong></h3><blockquote><ul><li><strong>\u5224\u65AD\u662F\u4EC0\u4E48\u53D1\u8D77\u8BF7\u6C42\u7684\u5DE5\u5177\u7C7B(AgentUtils.java):</strong></li></ul></blockquote><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;

import eu.bitwalker.useragentutils.Browser;
import eu.bitwalker.useragentutils.DeviceType;
import eu.bitwalker.useragentutils.OperatingSystem;
import eu.bitwalker.useragentutils.UserAgent;

/**
 * \u5BA2\u6237\u7AEF\u8BC6\u522B\u5DE5\u5177
 */
public class AgentUtils {
    /**
     * \u83B7\u53D6\u5BA2\u6237\u7AEF\u4E3A \u5FAE\u4FE1/\u652F\u4ED8\u5B9D
     */
    public static String getUserAgentWap(HttpServletRequest request) {
        String agent = ((HttpServletRequest) request).getHeader(&quot;user-agent&quot;);
        if (StringUtils.isNotBlank(agent)) {
            agent = agent.toLowerCase();
            if (agent.indexOf(&quot;micromessenger&quot;) &gt;= 0) {
                return &quot;weixin&quot;;
            } else if (agent.indexOf(&quot;alipayclient&quot;) &gt;= 0) {
                return &quot;alipay&quot;;
            } else {
                return &quot;other&quot;;
            }
        }
        return &quot;unknown&quot;;
    }
}
12345678910111213141516171819202122232425262728293031
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u63A7\u5236\u5C42:</strong></li></ul><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>/**
 * \u626B\u7801\u652F\u4ED8URL
 */
@Controller
@RequestMapping(&quot;/common&quot;)
public class CommonsController extends BaseController{
    @RequestMapping(value=&quot;/qrcode&quot;,method=RequestMethod.GET)
    public String scan(HttpServletRequest request,RedirectAttributes attr) {
        String order = request.getParameter(&quot;order&quot;);
        String imgurl = request.getParameter(&quot;imgurl&quot;);
        String agent = AgentUtils.getUserAgentWap(request);
        if (&quot;weixin&quot;.equals(agent)) {
            //\u91CD\u5B9A\u5411\u53D1\u9001\u5FAE\u4FE1\u670D\u52A1\u7AEF\u8BF7\u6C42
            return &quot;redirect:/weixin/getcode?imgurl=&quot; + imgurl + &quot;&amp;order=&quot; + order + &quot;&quot;;
        } else if (&quot;alipay&quot;.equals(agent)) {
            //\u91CD\u5B9A\u5411\u53D1\u8D77\u670D\u52A1\u7AEF\u652F\u4ED8\u5B9D(\u786E\u5B9A\u4E0B\u5355\u7684\u63A5\u53E3/pay/confirmpay)
            return &quot;redirect:/pay/confirmpay?imgurl=&quot; + imgurl + &quot;&amp;order=&quot; + order + &quot;&quot;;
        }
        return null;
    }
1234567891011121314151617181920
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c={id:"\u652F\u4ED8\u5B9D\u624B\u673A\u7F51\u7AD9\u652F\u4ED8\u65B9\u5F0F-\u5EFA\u8BAE\u5148\u770B\u4E00\u6B21\u5B98\u7F51\u6587\u6863",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#\u652F\u4ED8\u5B9D\u624B\u673A\u7F51\u7AD9\u652F\u4ED8\u65B9\u5F0F-\u5EFA\u8BAE\u5148\u770B\u4E00\u6B21\u5B98\u7F51\u6587\u6863","aria-hidden":"true"},"#",-1),m=e("strong",null,"\u652F\u4ED8\u5B9D\u624B\u673A\u7F51\u7AD9\u652F\u4ED8\u65B9\u5F0F**",-1),b={href:"https://docs.open.alipay.com/203/105288/",target:"_blank",rel:"noopener noreferrer"},p=s(`<blockquote><p>**\u8981\u5148\u53BB\u8FDB\u884C\u914D\u7F6E\u5E94\u7528\u83B7\u53D6****\u5E94\u7528App\u7684ID(APP_ID)****,<strong>\u5E94\u7528\u516C\u94A5(ALI_PUBLIC_KEY)</strong>,***<em><strong><strong>\u79C1\u94A5(APP_PRIVATE_KEY)\u548C\u652F\u4ED8\u5B9D\u516C\u94A5</strong></strong></em>***4\u4E2A\u53C2\u6570**</p></blockquote><h6 id="\u63A7\u5236\u5C42controller" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5C42controller" aria-hidden="true">#</a> \u63A7\u5236\u5C42<code>Controller</code></h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>@Controller
@RequestMapping(&quot;/pay&quot;)
public class PayController {

// \u670D\u52A1\u5668\u5F02\u6B65\u901A\u77E5\u9875\u9762api\u8DEF\u5F84 \u9700http://\u6216\u8005https://\u683C\u5F0F\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4E0D\u80FD\u52A0?id=123\u8FD9\u7C7B\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u5FC5\u987B\u5916\u7F51\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE
    public static String notify_url = &quot;http://\u5546\u6237\u7ED1\u5B9A\u57DF\u540D/alipay.wap.pay/notify_url&quot;;
    // \u8DF3\u8F6C\u9875\u9762\uFF0C\u4E70\u5BB6\u652F\u4ED8\u6210\u529F\u540E\u8DF3\u8F6C\u7684\u9875\u9762\uFF0C\u4EC5\u5F53\u4E70\u5BB6\u652F\u4ED8\u6210\u529F\u540E\u8DF3\u8F6C\u4E00\u6B21 \u9700http://\u6216\u8005https://\u683C\u5F0F\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4E0D\u80FD\u52A0?id=123\u8FD9\u7C7B\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u5FC5\u987B\u5916\u7F51\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE \u5546\u6237\u53EF\u4EE5\u81EA\u5B9A\u4E49\u540C\u6B65\u8DF3\u8F6C\u5730\u5740
    public static String return_url = &quot;http://\u5546\u6237\u7ED1\u5B9A\u57DF\u540D/alipay.wap.pay/return_url&quot;;

    /**
     * (\u91CD\u5B9A\u5411\u76EE\u6807\u63A5\u53E3,    \u4E8C\u9009\u4E00,\u53EF\u4EE5\u9009\u62E9\u76F4\u63A5\u8FDB\u884C\u8BF7\u6C42\u652F\u4ED8\u63A5\u53E3/orderpay\u8FDB\u884C\u652F\u4ED8)
     * \u5148\u8FDB\u5230\u5546\u54C1\u8BE6\u60C5\u9875\u9762,\u8BA9\u7528\u6237\u77E5\u9053\u4E70\u7684\u662F\u4EC0\u4E48,\u7531\u7528\u6237\u70B9\u786E\u5B9A\u53D1\u8D77\u8C03\u7528\u652F\u4ED8\u5B9D\u652F\u4ED8\u63A5\u53E3
     * \u786E\u8BA4\u652F\u4ED8\u754C\u9762 (\u4F7F\u7528\u7684\u662F\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C)
     */
    @RequestMapping(value = &quot;/confirmpay&quot;, method = RequestMethod.GET)
    public String ConfirmPay(HttpServletRequest req, HttpServletResponse res,Model model) {
        String imgurl = req.getParameter(&quot;imgurl&quot;);
        String order = req.getParameter(&quot;order&quot;);
        model.addAttribute(&quot;imgurl&quot;, imgurl);
        model.addAttribute(&quot;order&quot;, order);
        //\u8FD4\u56DEconfirmspays.jsp\u5546\u54C1\u9875\u9762
        return &quot;confirmspays&quot;;
    }
1234567891011121314151617181920212223
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u4E0B\u5355\u652F\u4ED8\u524D\u7684\u5546\u54C1\u8BE6\u60C5\u9875\u9762-jsp" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u5355\u652F\u4ED8\u524D\u7684\u5546\u54C1\u8BE6\u60C5\u9875\u9762-jsp" aria-hidden="true">#</a> <strong>\u4E0B\u5355\u652F\u4ED8\u524D\u7684\u5546\u54C1\u8BE6\u60C5\u9875\u9762**</strong>.jsp****:**</h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot;%&gt;
&lt;%@ include file=&quot;/WEB-INF/views/include/taglib.jsp&quot;%&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;zh-CN&quot;&gt;
&lt;head&gt;
    &lt;%--jQuery--%&gt;
&lt;script src=&quot;\${ctxStatic}/common/js/jquery-2.1.3.min.js&quot;&gt;&lt;/script&gt;
&lt;title&gt;\u652F\u4ED8\u786E\u8BA4&lt;/title&gt;
&lt;style type=&quot;text/css&quot;&gt;
body, html {
  height: 100%;
}
body{
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
}
.btn_style{
    width: 90%;
    margin-top: 50px;
    margin-left: 5%;
    height: 50px;
    background-color: #805f45;
    color: white;
    font-size: 16px;
}
&lt;/style&gt;
&lt;div id=&quot;tz&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    function submitData() {
        $.ajax({
            url : &quot;\${ctx}/pay/orderpay&quot;,
            data : {
                &quot;urlSmallPicture&quot;: $(&quot;#imgurl&quot;).val(),
                &quot;billNumber&quot;: $(&quot;#order&quot;).val()
            },
            type : &#39;post&#39;,
            dataType : &#39;json&#39;,
            success : function(data) {
                if(data.return_code == &#39;success&#39;){
                    //\u628A\u54CD\u5E94\u7684\u786E\u5B9A\u652F\u4ED8\u8868\u5355\u663E\u793A\u5230div\u4E2D
                    $(&quot;#tz&quot;).html(data.return_data);
                }
            },
            error : function() {
                console.log(&#39;request error!&#39;);
            }
        });
    }
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;imgurl&quot; id=&quot;imgurl&quot; value=&quot;\${imgurl}&quot;&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;order&quot; id=&quot;order&quot; value=&quot;\${order}&quot;&gt;
    &lt;div style=&quot;width: 100%;margin-top: 100px;text-align: center;&quot;&gt;
        &lt;img src=&quot;\${imgurl}&quot; style=&quot;width: 200px;&quot;&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;button class=&quot;btn btn_style&quot; id=&quot;btnSubmit&quot; \u03BFnclick=&quot;submitData();&quot;&gt;\u786E    \u8BA4&lt;/button&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u652F\u4ED8\u5B9D\u4E0B\u5355\u652F\u4ED8\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8\u5B9D\u4E0B\u5355\u652F\u4ED8\u63A5\u53E3" aria-hidden="true">#</a> <strong>\u652F\u4ED8\u5B9D\u4E0B\u5355\u652F\u4ED8\u63A5\u53E3:</strong></h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>    /**
     * \u8BA2\u5355\u7EDF\u4E00\u4E0B\u5355\u652F\u4ED8
     * @param req
     * @param resp
     * @return
     */
    @RequestMapping(value=&quot;/orderpay&quot;, method = RequestMethod.POST)
    @ResponseBody
    public Map&lt;String, Object&gt; orderpay(HttpServletRequest req, HttpServletResponse resp)  throws IOException, ParseException, AlipayApiException{
        Map&lt;String, Object&gt; map = new HashMap&lt;String, Object&gt;();
        String order = req.getParameter(&quot;order&quot;);
        //\u5224\u65AD\u5546\u6237\u662F\u5426\u5B58\u5728\u8BE5\u8BA2\u5355\u548C\u83B7\u53D6\u8BA2\u5355\u4EF7\u683C\u4EC0\u4E48\u7684(\u81EA\u884C\u64CD\u4F5C)
        IdmOrder idmOrder = (IdmOrder)\u7F13\u5B58Redis.getIdmOrderByBillNo(order);
        ......
        //\u521B\u5EFA\u963F\u91CC\u5BA2\u6237\u7AEF\u5BF9\u8C61
        AlipayClient alipayClient = new DefaultAlipayClient(&quot;https://openapi.alipay.com/gateway.do&quot;, &quot;App\u7684ID&quot;, &quot;\u5E94\u7528\u79C1\u94A5&quot;,&quot;json&quot;, &quot;\u5B57\u7B26\u96C6(UTF-8)&quot;, &quot;\u5E94\u7528\u516C\u94A5&quot;, &quot;(\u7B7E\u540D\u7C7B\u578B\u4F8B\u5982:RSA2)&quot;);
        //\u521B\u5EFA\u4EA4\u6613\u4FE1\u606F\u6A21\u578B\u5BF9\u8C61
        AlipayTradeWapPayModel precreateModel = new AlipayTradeWapPayModel();
        //\u5546\u6237\u8BA2\u5355\u53F7\uFF0C\u9700\u8981\u4FDD\u8BC1\u4E0D\u91CD\u590D
        precreateModel.setOutTradeNo(order);
        //\u8BA2\u5355\u91D1\u989D
        precreateModel.setTotalAmount(money);
        //\u4EA4\u6613\u4E3B\u9898
        precreateModel.setSubject(&quot;Ada&quot;);
        //\u5546\u54C1\u540D\u79F0
        precreateModel.setBody(&quot;\u8BA2\u5355\u5BF9\u8C61.get()&quot;);
        //\u5BF9\u4E00\u7B14\u4EA4\u6613\u7684\u5177\u4F53\u63CF\u8FF0\u4FE1\u606F\u3002\u5982\u679C\u662F\u591A\u79CD\u5546\u54C1\uFF0C\u8BF7\u5C06\u5546\u54C1\u63CF\u8FF0\u5B57\u7B26\u4E32\u7D2F\u52A0\u4F20\u7ED9body
        precreateModel.setSellerId(&quot;\u51FA\u552E\u5546\u54C1&quot;);
        //\u9500\u552E\u4EA7\u54C1\u7801\uFF0C\u5546\u5BB6\u548C\u652F\u4ED8\u5B9D\u7B7E\u7EA6\u7684\u4EA7\u54C1\u7801\uFF0C\u8BE5\u4EA7\u54C1\u8BF7\u586B\u5199\u56FA\u5B9A\u503C\uFF1AQUICK_WAP_WAY
        precreateModel.setProductCode(&quot;QUICK_WAP_WAY&quot;);
        //\u8BBE\u7F6E\u652F\u4ED8\u5B9D\u4EA4\u6613\u8D85\u65F6 \u53D6\u503C\u8303\u56F4\uFF1A1m\uFF5E15d\u3002m-\u5206\u949F\uFF0Ch-\u5C0F\u65F6\uFF0Cd-\u5929\uFF0C1c-\u5F53\u5929\uFF081c-\u5F53\u5929\u7684\u60C5\u51B5\u4E0B\uFF0C\u65E0\u8BBA\u4EA4\u6613\u4F55\u65F6\u521B\u5EFA\uFF0C\u90FD\u57280\u70B9\u5173\u95ED\uFF09 
         precreateModel.setTimeoutExpress(&quot;5m&quot;);
        //\u521B\u5EFA\u963F\u91CC\u8BF7\u6C42\u5BF9\u8C61
        AlipayTradeWapPayRequest alipayRequest = new AlipayTradeWapPayRequest();
        //\u4E1A\u52A1\u8BF7\u6C42\u53C2\u6570\u7684\u96C6\u5408
        alipayRequest.setBizModel(precreateModel);
        //\u8BBE\u7F6E\u540E\u53F0\u5F02\u6B65\u901A\u77E5\u7684\u5730\u5740\uFF0C\u5728\u624B\u673A\u7AEF\u652F\u4ED8\u540E\u652F\u4ED8\u5B9D\u4F1A\u901A\u77E5\u540E\u53F0(\u6210\u529F\u6216\u8005\u5931\u8D25)\uFF0C\u624B\u673A\u7AEF\u7684\u771F\u5B9E\u652F\u4ED8\u7ED3\u679C\u4F9D\u8D56\u4E8E\u6B64\u5730\u5740
        alipayRequest.setNotifyUrl(notify_url);
        //\u652F\u4ED8\u6210\u529F\u540E\u7684\u8DF3\u8F6C\u9875\u9762,\u7531\u4E8E\u524D\u53F0\u56DE\u8DF3\u7684\u4E0D\u53EF\u9760\u6027\uFF0C\u524D\u53F0\u56DE\u8DF3\u53EA\u80FD\u4F5C\u4E3A\u5546\u6237\u652F\u4ED8\u7ED3\u679C\u9875\u7684\u5165\u53E3\uFF0C\u6700\u7EC8\u652F\u4ED8\u7ED3\u679C\u5FC5\u987B\u4EE5\u5F02\u6B65\u901A\u77E5\u6216\u67E5\u8BE2\u63A5\u53E3\u8FD4\u56DE\u4E3A\u51C6\uFF0C\u4E0D\u80FD\u4F9D\u8D56\u524D\u53F0\u56DE\u8DF3
        alipayRequest.setReturnUrl(return_url);
        //\u8FD4\u56DE\u54CD\u5E94\u7684\u8F93\u5165\u5BC6\u7801\u5B8C\u6210\u652F\u4ED8\u7684\u8868\u5355\u7ED9\u5546\u54C1\u8BE6\u60C5\u9875\u9762
        map.put(&quot;return_code&quot;, &quot;success&quot;);
        map.put(&quot;return_data&quot;, alipayClient.pageExecute(request).getBody());
        return map;

    //\u4E0B\u9762\u662F\u76F4\u63A5\u62C9\u8D77\u652F\u4ED8\u9875\u9762 \u6CA1\u6709\u5230\u5546\u54C1\u8BE6\u60C5\u9875\u9762
//        String form=&quot;&quot;;
//        try {
//            //\u8FDB\u884C\u6267\u884C
//            form = alipayClient.pageExecute(alipayRequest).getBody(); //\u8C03\u7528SDK\u751F\u6210\u8868\u5355
//        } catch (AlipayApiException e) {
//            e.printStackTrace();
//        }
//        httpResponse.setContentType(&quot;text/html;charset=UTF-8&quot;);
//        httpResponse.getWriter().write(form);//\u76F4\u63A5\u5C06\u5B8C\u6574\u7684\u8868\u5355html\u8F93\u51FA\u5230\u9875\u9762
//        httpResponse.getWriter().flush();
//        httpResponse.getWriter().close();
    }
12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u652F\u4ED8\u5B9Dnotifyurl\u652F\u4ED8\u5F02\u6B65\u901A\u77E5\u548Creturnurl\u652F\u4ED8\u6210\u529F\u56DE\u8DF3" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8\u5B9Dnotifyurl\u652F\u4ED8\u5F02\u6B65\u901A\u77E5\u548Creturnurl\u652F\u4ED8\u6210\u529F\u56DE\u8DF3" aria-hidden="true">#</a> \u652F\u4ED8\u5B9D<code>NotifyUrl</code>\u652F\u4ED8\u5F02\u6B65\u901A\u77E5\u548C<code>ReturnUrl</code>\u652F\u4ED8\u6210\u529F\u56DE\u8DF3:</h6><p><strong>(\u53EA\u80FD\u56DE\u8C03\u516C\u53F8\u7ED1\u5B9A\u597D\u7684\u516C\u7F51\u80FD\u8BBF\u95EE\u7684\u57DF\u540D \u4F8B\u5982: https:www.baidu.com/pay/alipaynotify)</strong></p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>/**
     * \u652F\u4ED8\u5B9D\u652F\u4ED8\u72B6\u6001\u7ED3\u679C\u5F02\u6B65\u901A\u77E5()
     * @param req
     * @param resp
     * @return (\u5E76\u8FD4\u56DE\u6210\u529F\u6216\u8005\u5931\u8D25\u7ED9\u652F\u4ED8\u5B9D\u901A\u77E5\u63A5\u53E3,\u4E0D\u7136\u652F\u4ED8\u5B9D\u4F1A\u4E00\u76F4\u5F02\u6B65\u901A\u77E5)
     */
    @RequestMapping(value = &quot;/alipaynotify&quot;, method = RequestMethod.POST)
    @ResponseBody
    public String AlipayNotify(HttpServletRequest req, HttpServletResponse resp) throws IOException, AlipayApiException {
        //\u5C06\u5F02\u6B65\u901A\u77E5\u4E2D\u6240\u6709\u53C2\u6570\u90FD\u7ECF\u8FC7\u5DE5\u5177\u7C7B\u5904\u7406\u540E\u5B58\u653E\u5230map\u4E2D
        Map&lt;String, String&gt; params = PayUtil.parseParams(req.getParameterMap());
        // \u9A8C\u8BC1\u901A\u77E5\u5408\u6CD5\u6027
        boolean verify_result = AlipaySignature.rsaCheckV1(paramsMap, &quot;\u5E94\u7528\u516C\u5319&quot;, &quot;\u5B57\u7B26\u96C6(UTF-8)&quot;, &quot;(\u7B7E\u540D\u7C7B\u578B\u4F8B\u5982:RSA2)&quot;);
        // \u9A8C\u8BC1\u7B7E\u540D
        if(! verify_result){
            logger.warn(&quot;---\u652F\u4ED8\u5B9D\u5F02\u6B65\u901A\u77E5-&gt;\u7B7E\u540D\u9A8C\u8BC1\u5931\u8D25&quot;);
            return PayUtil.generatePayErrorReplyParams();
        }
        //\u67E5\u770B\u72B6\u6001\u662F\u5426\u662F\u4EA4\u6613\u6210\u529F\u72B6\u6001
        if (&quot;TRADE_SUCCESS&quot;.equals(params.get(&quot;trade_status&quot;).toString())) { 
            //\u67E5\u8BE2\u8BE5\u8BA2\u5355\u662F\u5426\u5B58\u5728.....
            IdmOrder idmOrder = (IdmOrder)\u7F13\u5B58Redis.getIdmOrderByBillNo(order);
            if (order != null) {
                //1\u3001\u5546\u6237\u9700\u8981\u9A8C\u8BC1\u8BE5\u901A\u77E5\u6570\u636E\u4E2D\u7684out_trade_no\u662F\u5426\u4E3A\u5546\u6237\u7CFB\u7EDF\u4E2D\u521B\u5EFA\u7684\u8BA2\u5355\u53F7\uFF0C
                if ( ! &quot;\u652F\u4ED8\u63A5\u53E3\u8FD4\u56DE\u8BA2\u5355\u53F7&quot;.equals(\u6570\u636E\u5E93\u8BA2\u5355\u53F7)) {
                    logger.info(&quot;\u652F\u4ED8\u5B9D\u5F02\u6B65\u901A\u77E5-&gt;\u8BA2\u5355\u53F7\u4E0E\u5546\u6237\u53F7\u8BA2\u5355\u4E0D\u4E00\u81F4\uFF01&quot; + out_trade_no);
                    return PayUtil.generatePayErrorReplyParams();
                }
                //2\u3001\u6821\u9A8C\u8FD4\u56DE\u7684\u8BA2\u5355\u91D1\u989D\u662F\u5426\u4E0E\u5546\u6237\u4FA7\u7684\u8BA2\u5355\u91D1\u989D\u4E00\u81F4(\u67E5\u8BE2\u5546\u6237\u540E\u53F0\u7684\u8BA2\u5355\u91D1\u989D\u8FDB\u884C\u6BD4\u8F83)
                if (order.getOrderAmount() != Double.parseDouble(total_amount)) {
     logger.info(&quot;\u652F\u4ED8\u5B9D\u5F02\u6B65\u901A\u77E5-&gt;\u8BA2\u5355\u4E2D\u7684\u4EA4\u6613\u91D1\u989D\u548C\u8FD4\u56DE\u7684\u91D1\u989D\u4E0D\u4E00\u81F4\uFF01&quot; + order.getOrderAmount());
                    return PayUtil.generatePayErrorReplyParams();
                }
    //3\u3001\u6821\u9A8C\u901A\u77E5\u4E2D\u7684seller_id\uFF08\u6216\u8005seller_email) \u662F\u5426\u4E3Aout_trade_no\u8FD9\u7B14\u5355\u636E\u7684\u5BF9\u5E94\u7684\u64CD\u4F5C\u65B9
                if (!xxxx.seller_id.equals(seller_id)) {
                    logger.info(&quot;\u652F\u4ED8\u5B9D\u5F02\u6B65\u901A\u77E5-&gt;\u6536\u6B3E\u652F\u4ED8\u5B9D\u8D26\u6237\u53F7\u4E0D\u4E00\u81F4\uFF01&quot; + seller_id);
                    return PayUtil.generatePayErrorReplyParams();
                }
                //    4\u3001\u9A8C\u8BC1app_id\u662F\u5426\u4E3A\u8BE5\u5546\u6237\u672C\u8EAB
                if (!app_id.equals(XXXX.ALI_APP_ID)) {
                    logger.info(&quot;---\u652F\u4ED8\u5B9D\u5F02\u6B65\u901A\u77E5-&gt;\u5546\u6237\u53F7\u4E0D\u4E00\u81F4\uFF01&quot; + app_id);
                    return PayUtil.generatePayErrorReplyParams();
                }
                //\u66F4\u6539\u5546\u54C1\u8BA2\u5355\u72B6\u6001....
                //\u628A\u5546\u54C1\u8BA2\u5355\u5B58\u50A8\u8FDB\u6570\u636E\u5E93 (\u7136\u540E\u5220\u9664\u7F13\u5B58\u7684\u6570\u636E)
                //\u67E5\u5546\u54C1\u5E93\u5B58.........
                //\u51CF\u5546\u54C1\u5E93\u5B58........
                //\u6781\u5149\u901A\u77E5App\u5BA2\u6237\u7AEF(\u652F\u4ED8\u7ED3\u679C\u901A\u77E5)
        JpushService.pullMessages(\u522B\u540D,&quot;PAY_RESULT&quot;,&quot;success&quot;,&quot;\u652F\u4ED8\u7ED3\u679C\u901A\u77E5&quot;); 
                //\u8FD4\u56DE\u6210\u529F\u72B6\u6001\u7801\u7ED9\u652F\u4ED8\u5B9D\u63A5\u53E3
                return PayUtil.generatePaySuccessReplyParams();
        }
        logger.info(&quot;\u652F\u4ED8\u5B9D\u5F02\u6B65\u901A\u77E5-&gt;\u652F\u4ED8\u7ED3\u679C\u8FD4\u56DE\u7684\u4E0D\u662F\u6210\u529F\u7684\u72B6\u6001\u7801\uFF0C\u8BF7\u8BE6\u67E5\uFF01&quot;);
        return PayUtil.generatePayErrorReplyParams();
    }


    /**
     * \u652F\u4ED8\u5B9D\u6210\u529F\u652F\u4ED8\u540E\u9875\u9762\u8DF3\u8F6C ReturnUrl
     */
    @RequestMapping(value = &quot;/AlipaySuccess&quot;, method = RequestMethod.GET)
    public String AlipaySuccess(HttpServletRequest req, HttpServletResponse res) {
        //\u83B7\u53D6\u652F\u4ED8\u5B9DGET\u8FC7\u6765\u53CD\u9988\u4FE1\u606F
        Map&lt;String, String&gt; params = PayUtil.parseParams(req.getParameterMap());
        if (PayUtil.checkedParams(params)) {
            //\u9A8C\u8BC1\u6210\u529F\u8FD4\u56DE\u6210\u529F\u9875\u9762,\u6216\u8005\u6210\u529F\u72B6\u6001\u7ED9\u524D\u7AEF\u6765\u5904\u7406
            return &quot;paySuccess&quot;;
        }
        return &quot;&quot;;
    }

  //--------------------------\u4EA4\u6613\u67E5\u8BE2\u63A5\u53E3\u5982\u679C\u9700\u8981\u5728\u5B98\u7F51\u81EA\u884C\u67E5\u8BE2-----------------------------------
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),g={id:"\u5FAE\u4FE1\u65B9\u5F0F-\u5EFA\u8BAE\u5148\u770B\u4E00\u6B21\u5B98\u7F51\u6587\u6863-jsapi-\u516C\u4F17\u53F7-\u65B9\u5F0F-\u535A\u5BA2\u6559\u6750",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#\u5FAE\u4FE1\u65B9\u5F0F-\u5EFA\u8BAE\u5148\u770B\u4E00\u6B21\u5B98\u7F51\u6587\u6863-jsapi-\u516C\u4F17\u53F7-\u65B9\u5F0F-\u535A\u5BA2\u6559\u6750","aria-hidden":"true"},"#",-1),h=e("code",null,"\u5FAE\u4FE1\u65B9\u5F0F",-1),y={href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_1",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"JSAPI(\u516C\u4F17\u53F7)\u65B9\u5F0F",-1),f={href:"https://blog.csdn.net/javaYouCome/article/details/79473743",target:"_blank",rel:"noopener noreferrer"},_=s(`<p><strong>\u8981\u5148\u53BB\u8FDB\u884C\u914D\u7F6E\u5E94\u7528\u83B7\u53D6\u5E94\u7528App\u7684ID(appid), \u5E94\u7528\u79D8\u94A5(appsecret), \u5546\u6237ID(mch_id) \u548CAPI\u5BC6\u94A5(Key) 4\u4E2A\u53C2\u6570</strong></p><h6 id="\u63A7\u5236\u5C42\u7528\u6237\u6388\u6743\u83B7\u53D6code" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5C42\u7528\u6237\u6388\u6743\u83B7\u53D6code" aria-hidden="true">#</a> \u63A7\u5236\u5C42\u7528\u6237\u6388\u6743\u83B7\u53D6<code>code</code></h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>/**
 * \u5FAE\u4FE1\u652F\u4ED8
 */
@Controller
@RequestMapping(&quot;/weixin&quot;)
public class WeiXinsPayController {

    //\u516C\u7F51\u80FD\u8BBF\u95EE\u7684\u516C\u53F8\u57DF\u540D\u52A0\u4E0A\u9879\u76EE\u652F\u4ED8\u63A5\u53E3\u5730\u5740
    private static String WX_REDIRECT_URL =&quot;https://******.com/weixin&quot;

    /**
     *\u5FAE\u4FE1\u7F51\u9875\u6388\u6743-\u7528\u6237\u6388\u6743\u83B7\u53D6code
     *openid\u662F\u5FAE\u4FE1\u7528\u6237\u5728\u516C\u4F17\u53F7appid\u4E0B\u7684\u552F\u4E00\u7528\u6237\u6807\u8BC6\uFF08appid\u4E0D\u540C\uFF0C\u5219\u83B7\u53D6\u5230\u7684openid\u5C31\u4E0D\u540C\uFF09\uFF0C\u53EF\u7528\u4E8E\u6C38\u4E45\u6807\u8BB0\u4E00\u4E2A\u7528\u6237\uFF0C\u540C\u65F6\u4E5F\u662F\u5FAE\u4FE1JSAPI\u652F\u4ED8\u7684\u5FC5\u4F20\u53C2\u6570
     */
    @RequestMapping(value=&quot;/getcode&quot;)
    public String getcode(Model model,HttpServletRequest req){
        //\u8D2D\u4E70\u5546\u54C1\u751F\u6210\u7684\u8BA2\u5355\u53F7\u65B9\u4FBF\u540E\u9762\u8C03\u7528\u987A\u4FBF\u4F20\u9012
        String order = req.getParameter(&quot;order&quot;);
        //\u62FC\u63A5\u83B7\u53D6code\u7684\u94FE\u63A5 ---redirect_uri\u53C2\u6570\uFF1A\u6388\u6743\u540E\u91CD\u5B9A\u5411\u7684\u56DE\u8C03\u94FE\u63A5\u5730\u5740 (state\u662F\u91CD\u5B9A\u5411\u4F1A\u5E26\u4E0A\u7684\u53C2\u6570) \u6700\u597D\u4F7F\u7528restful\u98CE\u683C\u4F20\u9012\u53C2\u6570 (\u53C2\u6570\u662F\u7F51\u7AD9\u94FE\u63A5\u8981\u4F7F\u7528state\u4F20\u9012)
String url = &quot;https://open.weixin.qq.com/connect/oauth2/authorize?appid=&quot;+AppID()+
                &quot;&amp;redirect_uri=&quot;+WX_REDIRECT_URL+&quot;/getopenid/&quot; + order +&quot;&amp;response_type=code&amp;scope=snsapi_base&amp;state=&quot;+urlSmallPicture+&quot;#wechat_redirect&quot;;
        model.addAttribute(&quot;authorize&quot;, url);
        //\u8FD4\u56DE\u7F51\u7AD9\u94FE\u63A5\u6570\u636E\u4F7F\u7528\u8DF3\u677F\u9875,\u8FDB\u884C\u8BBF\u95EE
        return &quot;authorize&quot;;
    }
}    
1234567891011121314151617181920212223242526
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u8DF3\u677F\u9875-jsp\u8DF3\u8F6Curl" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u677F\u9875-jsp\u8DF3\u8F6Curl" aria-hidden="true">#</a> <strong>\u8DF3\u677F\u9875**</strong>.jsp<strong>\u8DF3\u8F6C</strong>url****:**</h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot;%&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
&lt;!DOCTYPE html
&lt;html lang=&quot;zh-CN&quot;&gt;
&lt;head&gt;
&lt;title&gt;&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot;&gt;
        window.location.href = &quot;\${authorize}&quot;;
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
12345678910111213
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u63A7\u5236\u5C42\u83B7\u53D6-openid" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5C42\u83B7\u53D6-openid" aria-hidden="true">#</a> <strong>\u63A7\u5236\u5C42\u83B7\u53D6**openid</strong>:**</h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>   /** 
     * \u83B7\u53D6openid\u5C31\u591F\u4E86
     * @param req
     * @param model
     * @param order \u91CD\u5B9A\u5411\u94FE\u63A5\u5E26\u7684\u53C2\u6570\u4F7F\u7528restful\u98CE\u683C\u63A5\u6536
     * @param code \u54CD\u5E94\u53C2\u6570
     * @param state \u54CD\u5E94\u53C2\u6570
     * @return
     */
    @RequestMapping(&quot;/getopenid/{order}&quot;)
    public String wx(HttpServletRequest req, Model model, @PathVariable(&quot;order&quot;) String order, @RequestParam(&quot;state&quot;) String state, @RequestParam(&quot;code&quot;)String code ){
        Map&lt;String, Object&gt; params = new HashMap&lt;String, Object&gt;();
        params.put(&quot;appid&quot;, AppID);
        params.put(&quot;secret&quot;,&quot;\u5E94\u7528\u5BC6\u5319&quot;);
        //\u586B\u5199\u7B2C\u4E00\u6B65\u83B7\u53D6\u7684code\u53C2\u6570
        params.put(&quot;code&quot;, code);
        //\u56FA\u5B9A\u5199\u6CD5
        params.put(&quot;grant_type&quot;, &quot;authorization_code&quot;);
        //\u4F7F\u7528\u53D1\u9001http\u8BF7\u6C42\u7684\u5DE5\u5177\u7C7B\u53D1\u9001http. get() \u65B9\u5F0F\u7684\u8BF7\u6C42\u83B7\u53D6\u54CD\u5E94\u53C2\u6570
        String openidJson = HttpUtil.get(&quot;https://api.weixin.qq.com/sns/oauth2/access_token&quot;, params);
        //\u8F6C\u6362\u6210map\u7C7B\u578B K-V
        Map&lt;String, Object&gt; parseObject = JSON.parseObject(openidJson);
        //\u83B7\u5F97openid:
        String openId = parseObject.get(&quot;openid&quot;).toString();
        model.addAttribute(&quot;openid&quot;, openId);
        //\u5546\u54C1\u8BA2\u5355
        model.addAttribute(&quot;order&quot;, order);
        //\u8BA2\u5355\u53F7\u56FE\u7247\u5730\u5740
        model.addAttribute(&quot;imgurl&quot;, state);
        //\u5C01\u88C5\u6570\u636E\u8FD4\u56DE\u9875\u9762\u663E\u793A
        return &quot;confirmspay&quot;;
    }
1234567891011121314151617181920212223242526272829303132
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u5546\u54C1\u8BE6\u60C5\u9875\u9762\u548C\u8C03\u8D77\u5FAE\u4FE1\u524D\u7AEF\u811A\u672C\u53D1\u8D77\u4E0B\u5355\u652F\u4ED8-jsp\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5546\u54C1\u8BE6\u60C5\u9875\u9762\u548C\u8C03\u8D77\u5FAE\u4FE1\u524D\u7AEF\u811A\u672C\u53D1\u8D77\u4E0B\u5355\u652F\u4ED8-jsp\u9875\u9762" aria-hidden="true">#</a> <strong>\u5546\u54C1\u8BE6\u60C5\u9875\u9762\u548C\u8C03\u8D77\u5FAE\u4FE1\u524D\u7AEF\u811A\u672C\u53D1\u8D77\u4E0B\u5355\u652F\u4ED8 .jsp\u9875\u9762:</strong></h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; %&gt;
&lt;%@ include file=&quot;/WEB-INF/views/include/taglib.jsp&quot; %&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;zh-CN&quot;&gt;
&lt;head&gt;
    &lt;%--jQuery--%&gt;
    &lt;script src=&quot;\${ctxStatic}/common/js/jquery-2.1.3.min.js&quot;&gt;&lt;/script&gt;
    &lt;%--\u5FAE\u4FE1\u652F\u4ED8\u811A\u672C--%&gt;
    &lt;script src=&quot;http://res.wx.qq.com/open/js/jweixin-1.0.0.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
    &lt;title&gt;\u652F\u4ED8\u786E\u8BA4&lt;/title&gt;
    &lt;style type=&quot;text/css&quot;&gt;
        body, html {
            height: 100%;
        }

        body {
            padding: 0;
            margin: 0;
            font-size: 1.2rem;
        }

        .btn_style {
            width: 90%;
            margin-top: 50px;
            margin-left: 5%;
            height: 50px;
            background-color: #805f45;
            color: white;
            font-size: 16px;
        }
    &lt;/style&gt;
    &lt;script type=&quot;text/javascript&quot;&gt;
        function submitData() {
            //\u786E\u5B9A\u652F\u4ED8\u8C03\u7528\u7EDF\u4E00\u4E0B\u5355\u63A5\u53E3
            $.ajax({
                    url: &quot;/weixin/paying&quot;,
                    data: {
                        &quot;openid&quot;: $(&quot;#openid&quot;).val(),
                        &quot;billNumber&quot;: $(&quot;#order&quot;).val()
                    },
                    type: &#39;post&#39;,
                    dataType: &#39;json&#39;,
                    success: function (data) {
                          if (data.return_code == &#39;success&#39;) {
                                var appId = data.appId;
                                var timeStamp = data.timeStamp;
                                var nonceStr = data.nonceStr;
                                var package = data.package;
                                var signType = data.signType;
                                var paySign = data.paySign;
                                WeixinJSBridge
                                    .invoke(
                                        &#39;getBrandWCPayRequest&#39;,
                                        {
                                            &quot;appId&quot;: appId, //\u516C\u4F17\u53F7\u540D\u79F0\uFF0C\u7531\u5546\u6237\u4F20\u5165     obj.appid
                                            &quot;timeStamp&quot;: timeStamp, //\u65F6\u95F4\u6233\uFF0C\u81EA1970\u5E74\u4EE5\u6765\u7684\u79D2\u6570
                                            &quot;nonceStr&quot;: nonceStr, //\u968F\u673A\u4E32    obj.nonce_str
                                            &quot;package&quot;: package, //\u8BA2\u5355\u8BE6\u60C5\u6269\u5C55\u5B57\u7B26\u4E32
                                            &quot;signType&quot;: signType, //\u5FAE\u4FE1\u7B7E\u540D\u65B9\u5F0F\uFF1A
                                            &quot;paySign&quot;: paySign //\u5FAE\u4FE1\u7B7E\u540D
                                        },
                                        function (res) {
                                            if (res.err_msg == &#39;get_brand_wcpay_request:ok&#39;) {
                                      //\u652F\u4ED8\u6210\u529F\uFF0C\u53EF\u4EE5\u505A\u8DF3\u8F6C\u5230\u652F\u4ED8\u6210\u529F\u7684\u63D0\u793A\u9875\u9762(\u6216\u8005\u8BF7\u6C42\u540E\u7AEF)
              window.location.href = &quot;\${pageContext.request.contextPath}/weixin/payingSuccess&quot;;
                                        // alert(JSON.stringify(res));
                                    } else if (res.err_msg == &#39;get_brand_wcpay_request:cancel&#39;) {
                                        //\u652F\u4ED8\u53D6\u6D88
                                        alert(&quot;\u652F\u4ED8\u53D6\u6D88&quot;);
                                    } else if (res.err_msg == &#39;get_brand_wcpay_request:fail&#39;) {
                                        //\u652F\u4ED8\u5931\u8D25
                                        alert(&quot;\u652F\u4ED8\u5931\u8D25&quot;);
                                        // alert(JSON.stringify(res));
                                    }
                                });
                        if (typeof WeixinJSBridge == &quot;undefined&quot;) {
                            if (document.addEventListener) {
                                document.addEventListener(&#39;WeixinJSBridgeReady&#39;, onBridgeReady, false);
                            } else if (document.attachEvent) {
                                document.attachEvent(&#39;WeixinJSBridgeReady&#39;, onBridgeReady);
                                document.attachEvent(&#39;onWeixinJSBridgeReady&#39;, onBridgeReady);
                            }
                        }
                    } else if (data.return_code == &#39;fail&#39;) {
                        //\u63D0\u793A\u8BA2\u5355\u5DF2\u7ECF\u652F\u4ED8
                        alert(data.return_data);
                    }
                },
                error: function () {
                    console.log(&#39;request error!&#39;);
                }
            });
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%--\u9690\u85CF\u57DF\u63D0\u4EA4\u6570\u636E\u7528--%&gt;
&lt;input type=&quot;hidden&quot; name=&quot;order&quot; id=&quot;order&quot; value=&quot;\${order}&quot;&gt;
&lt;input type=&quot;hidden&quot; name=&quot;openid&quot; id=&quot;openid&quot; value=&quot;\${openid}&quot;&gt;
&lt;div style=&quot;width: 100%; margin-top: 100px; text-align: center;&quot;&gt;
    &lt;img src=&quot;\${imgurl}&quot; style=&quot;width: 200px;&quot;&gt;
&lt;/div&gt;
&lt;div&gt;
    &lt;button class=&quot;btn btn_style&quot; id=&quot;btnSubmit&quot; \u03BFnclick=&quot;submitData();&quot;&gt;\u786E
        \u8BA4
    &lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u63A7\u5236\u5C42-\u5FAE\u4FE1\u7EDF\u4E00\u4E0B\u5355" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5C42-\u5FAE\u4FE1\u7EDF\u4E00\u4E0B\u5355" aria-hidden="true">#</a> \u63A7\u5236\u5C42:\u5FAE\u4FE1\u7EDF\u4E00\u4E0B\u5355:</h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>    /**
     * \u7EDF\u4E00\u4E0B\u5355
     * @param req
     * @return
     * @throws Exception 
     */
    @RequestMapping(value=&quot;/paying&quot;,method=RequestMethod.POST)
    @ResponseBody
    public Map&lt;String, Object&gt; paying(HttpServletRequest req) throws Exception{
        //\u83B7\u53D6\u8BA2\u5355\u53F7\u548Copenid\u53C2\u6570
        String order = req.getParameter(&quot;order&quot;);
        String openid = req.getParameter(&quot;openid&quot;);
        //\u521B\u5EFA\u7EBF\u7A0B\u5B89\u5168\u7684Map
        Map&lt;String, Object&gt; maps = new ConcurrentHashMap&lt;&gt;();
        //\u6839\u636E\u8BA2\u5355\u5224\u65AD\u5546\u6237\u662F\u5426\u5B58\u5728\u8BE5\u8BA2\u5355
        IdmOrder idmOrder = (IdmOrder)\u7F13\u5B58Redis.getIdmOrderByBillNo(order);
        if (idmOrder == null) {
            logger.info(&quot;\u5546\u6237\u7AEF-&gt;\u8BE5\u8BA2\u5355\u4E0D\u5B58\u5728\uFF01&quot;);
            maps.put(&quot;result_Msg&quot;, \u9519\u8BEF\u4FE1\u606F);
            return maps;
        }......
        Map&lt;String, String&gt; reqData = new HashMap&lt;&gt;();
        //\u968F\u673A\u5B57\u7B26\u4E32 \u5FC5\u586B-\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8981\u662F\u65B0\u7684\u968F\u673A\u5B57\u7B26\u4E32
        reqData.put(&quot;nonce_str&quot;, WXPayUtil.generateNonceStr());//WXPayUtil.generateNonceStr()
        //\u5546\u54C1\u63CF\u8FF0 \u5FC5\u586B
        reqData.put(&quot;body&quot;, ##);//&quot;Ada&quot;
        //\u5546\u6237\u53F7 \u5FC5\u586B
        reqData.put(&quot;mch_id&quot;, \u5546\u6237ID(mch_id));
        //\u5546\u54C1\u8BA2\u5355\u53F7 \u5FC5\u586B
        reqData.put(&quot;out_trade_no&quot;, order);
        //\u652F\u4ED8\u91D1\u989D(\u5C06\u5143\u8F6C\u6362\u4E3A\u5206) \u5FC5\u586B
        reqData.put(&quot;total_fee&quot;, PayUtil.changeY2F(###));
        //\u7EC8\u7AEFIP \u4E0D\u77E5\u9053\u600E\u4E48\u5199\u53EF\u4EE5\u5199\u672C\u5730127.0.1 \u5FC5\u586B
        reqData.put(&quot;spbill_create_ip&quot;, &quot;127.0.1&quot;);//\u5BA2\u6237\u7AEF\u4E3B\u673A
        //\u5F02\u6B65\u56DE\u8C03\u901A\u77E5\u5730\u5740\u901A\u77E5url\u5FC5\u987B\u4E3A\u5916\u7F51\u53EF\u8BBF\u95EE\u7684url\uFF0C\u4E0D\u80FD\u643A\u5E26\u53C2\u6570   \u5FC5\u586B
        reqData.put(&quot;notify_url&quot;, ###);  //&quot;https://*****.com/wxpay/notifying&quot;
        //\u4EA4\u6613\u7C7B\u578BJSAPI \u5FC5\u586B
        reqData.put(&quot;trade_type&quot;, &quot;JSAPI&quot;);
        //\u4E4B\u524D\u83B7\u53D6\u7684openid \u5FC5\u586B
        reqData.put(&quot;openid&quot;, openid);
        //\u5546\u54C1id  
        reqData.put(&quot;product_id&quot;, \u6309\u9700);
        //\u521B\u5EFA\u5FAE\u4FE1\u4E0B\u5355\u5BF9\u8C61 (\u6CE8\u5165\u5FAE\u4FE1\u4E0B\u5355\u914D\u7F6E\u7C7B)
        WXPay wxpay = new WXPay(new MyWXPayConfig());
        //\u6267\u884C\u4E0B\u5355 \u7EDF\u4E00\u4E0B\u5355\u63A5\u53E3unifiedOrder
        Map&lt;String, String&gt; responseparams = wxpay.unifiedOrder(reqData);
            //\u9884\u652F\u4ED8id
            String prepay_id = &quot;prepay_id=; 
            if (&quot;SUCCESS&quot;.equals(responseparams.return_code)) {  
                String packages= prepay_id + (String) responseparams.get(&quot;prepay_id&quot;); 
                //App\u7684ID
                maps.put(&quot;appId&quot;, ##);
                //\u65F6\u95F4\u6233
                maps.put(&quot;timeStamp&quot;, timeStamp);
                //\u968F\u673A\u5B57\u7B26\u4E32
                maps.put(&quot;nonceStr&quot;, #);
                //\u8BA2\u5355\u8BE6\u60C5\u6269\u5C55\u5B57\u7B26\u4E32package\u662F\u5173\u952E\u5B57\u52A0\u4E2AS\u5904\u7406
                maps.put(&quot;package&quot;, packages);
                //\u7B7E\u540D\u65B9\u5F0F \u9ED8\u8BA4\u4E3AMD5\uFF0C\u652F\u6301HMAC-SHA256\u548CMD5\u3002\u6CE8\u610F\u6B64\u5904\u9700\u4E0E\u7EDF\u4E00\u4E0B\u5355\u7684\u7B7E\u540D\u7C7B\u578B\u4E00\u81F4
                maps.put(&quot;signType&quot;, #); 
 //\u6CE8\uFF1A\u8FD9\u91CC\u91C7\u7528 HMACSHA256\u8FDB\u884C\u7B7E\u540D,\u56E0\u4E3A\u9884\u4E0B\u5355\u652F\u4ED8\u90A3\u91CC\u9ED8\u8BA4\u91C7\u7528HMACSHA256,\u8981\u4FDD\u6301\u4E00\u81F4
String paySign = WXPayUtil.generateSignature(maps,&quot;API\u5BC6\u94A5(Key)&quot;,SignType.HMACSHA256); 
            maps.put(&quot;return_code&quot;, &quot;success&quot;);
            maps.put(&quot;paySign&quot;, paySign);
            }

        }else {
            maps.put(&quot;return_code&quot;, &quot;error&quot;);
            maps.put(&quot;return_data&quot;, &quot;null&quot;);
        }
        return maps;

    }
12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u63A7\u5236\u5C42-\u5FAE\u4FE1\u5F02\u6B65\u901A\u77E5\u56DE\u8C03notify-url" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5C42-\u5FAE\u4FE1\u5F02\u6B65\u901A\u77E5\u56DE\u8C03notify-url" aria-hidden="true">#</a> \u63A7\u5236\u5C42:\u5FAE\u4FE1\u5F02\u6B65\u901A\u77E5\u56DE\u8C03<code>notify_url</code>:</h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>    /**
     * \u5F02\u6B65\u56DE\u8C03\u901A\u77E5\u63A5\u53E3 (\u5E76\u8FD4\u56DE\u6210\u529F\u6216\u8005\u5931\u8D25\u7ED9\u5FAE\u4FE1\u901A\u77E5\u63A5\u53E3,\u4E0D\u7136\u5FAE\u4FE1\u4F1A\u4E00\u76F4\u5F02\u6B65\u901A\u77E5)
     * @param request
     */
    @ResponseBody
    @RequestMapping(&quot;/notifying&quot;)
    public String notifying(HttpServletRequest request, HttpServletResponse response) throws Exception{
        // \u83B7\u53D6\u8BF7\u6C42\u6570\u636E,\u5C06\u8BF7\u6C42\u8F6C\u6210xml
        String xmlData = null;
        try {
            xmlData = PayUtil.copyToString(request.getInputStream(), Charset.forName(&quot;utf-8&quot;));
        } catch (IOException e) {
            logger.info(&quot;\u5FAE\u4FE1\u516C\u4F17\u53F7\u652F\u4ED8\u5F02\u6B65\u901A\u77E5&gt;&gt;\u6570\u636E\u65E0\u6CD5\u8F6C\u6210xml\u5F02\u5E38\uFF01&quot;);
            //\u8FD4\u56DE\u652F\u4ED8\u5931\u8D25\u72B6\u6001\u7ED9\u5FAE\u4FE1
            return PayUtil.generatePayErrorReplyXML();
        }
        // \u5C06\u5F97\u5230xml\u8F6C\u4E3Amap,\u9A8C\u8BC1\u7B7E\u540D\u662F\u5426\u6210\u529F
        Map&lt;String, String&gt; xmlToMapData = WXPayUtil.xmlToMap(xmlData);
        logger.info(&quot;\u5F97\u5230\u7684xmlToMapData:&quot;+xmlToMapData);
        //\u83B7\u53D6\u7B7E\u540Dsign
        String sign = xmlToMapData.get(&quot;sign&quot;);
        //\u91CD\u65B0\u751F\u6210\u65B0sign
        String newsign = WXPayUtil.generateSignature(xmlToMapData, API\u5BC6\u94A5(Key),SignType.HMACSHA256);
        // \u9A8C\u8BC1\u7B7E\u540D\u9A8C\u8BC1\u662F\u5426\u6210\u529F
        if(! sign.equals(newsign)) {
            logger.info(&quot;\u5FAE\u4FE1\u516C\u4F17\u53F7\u652F\u4ED8\u5F02\u6B65\u901A\u77E5&gt;&gt;\u9A8C\u8BC1\u7B7E\u540D\u5931\u8D25\uFF01&quot;);
            return PayUtil.generatePayErrorReplyXML();
        }
        //\u67E5\u8BE2return_code\u662F\u5426\u662F\u652F\u4ED8\u6210\u529F\u4E86success
        if (xmlToMapData.get(&quot;return_code&quot;).equals(&quot;SUCCESS&quot;)) {
            //\u652F\u4ED8\u6210\u529F\u4E4B\u540E\u7684\u903B\u8F91
            // \u5546\u6237\u8BA2\u5355\u53F7
            String out_trade_no = xmlToMapData.get(&quot;out_trade_no&quot;).toString();
            // \u5FAE\u4FE1\u652F\u4ED8\u8BA2\u5355\u53F7
            String thrid_trade_no = xmlToMapData.get(&quot;transaction_id&quot;).toString();
            // \u8BA2\u5355\u91D1\u989D
            String total_fee = xmlToMapData.get(&quot;total_fee&quot;).toString();
            //\u67E5\u8BE2\u8BE5\u8BA2\u5355\u662F\u5426\u5B58\u5728
            IdmOrder order = (IdmOrder)\u7F13\u5B58Redis.getIdmOrderByBillNo(out_trade_no);
            if (order != null) {
                //    1\u3001\u5546\u6237\u9700\u8981\u9A8C\u8BC1\u8BE5\u901A\u77E5\u6570\u636E\u4E2D\u7684out_trade_no\u662F\u5426\u4E3A\u5546\u6237\u7CFB\u7EDF\u4E2D\u521B\u5EFA\u7684\u8BA2\u5355\u53F7\uFF0C
                if (!out_trade_no.equals(order.getBillNo())) {
                    logger.info(&quot;\u5FAE\u4FE1\u516C\u4F17\u53F7\u652F\u4ED8\u5F02\u6B65\u901A\u77E5-&gt;\u8BA2\u5355\u53F7\u4E0E\u5546\u6237\u53F7\u8BA2\u5355\u4E0D\u4E00\u81F4\uFF01&quot; + out_trade_no);
                    return PayUtil.generatePayErrorReplyXML();
                }
                //2\u3001\u6821\u9A8C\u8FD4\u56DE\u7684\u8BA2\u5355\u91D1\u989D\u662F\u5426\u4E0E\u5546\u6237\u4FA7\u7684\u8BA2\u5355\u91D1\u989D\u4E00\u81F4(\u67E5\u8BE2\u5546\u6237\u540E\u53F0\u7684\u8BA2\u5355\u91D1\u989D\u8FDB\u884C\u6BD4\u8F83)
                if (Integer.parseInt(PayUtil.changeY2F(order.getOrderAmount().toString())) != Integer.parseInt(total_fee)) {
                    logger.info(&quot;\u5FAE\u4FE1\u516C\u4F17\u53F7\u652F\u4ED8\u5F02\u6B65\u901A\u77E5-&gt;\u8BA2\u5355\u4E2D\u7684\u4EA4\u6613\u91D1\u989D\u548C\u8FD4\u56DE\u7684\u91D1\u989D\u4E0D\u4E00\u81F4\uFF01&quot; + order.getOrderAmount());
                    return PayUtil.generatePayErrorReplyXML();
                }
                //\u66F4\u6539\u5546\u54C1\u8BA2\u5355\u72B6\u6001...\u81EA\u884C\u64CD\u4F5C
                 //\u628A\u5546\u54C1\u8BA2\u5355\u5B58\u50A8\u8FDB\u6570\u636E\u5E93 (\u7136\u540E\u5220\u9664\u7F13\u5B58\u7684\u6570\u636E)
                //\u67E5\u5546\u54C1\u5E93\u5B58...\u81EA\u884C\u64CD\u4F5C
                //\u51CF\u5546\u54C1\u5E93\u5B58...\u81EA\u884C\u64CD\u4F5C    
                //\u901A\u77E5\u5BA2\u6237\u7AEFAPP(\u652F\u4ED8\u7ED3\u679C\u901A\u77E5)
    JpushService.pullMessages(idmItem.getSn(),&quot;PAY_RESULT&quot;,&quot;success&quot;,&quot;\u652F\u4ED8\u7ED3\u679C\u901A\u77E5&quot;); //\u522B\u540D
            }
            //\u8FD4\u56DE\u6210\u529F\u72B6\u6001\u7801\u7ED9\u5FAE\u4FE1\u7AEF
            return PayUtil.generatePaySuccessReplyXML();
        }
        logger.info(&quot;\u5FAE\u4FE1\u516C\u4F17\u53F7\u652F\u4ED8\u5F02\u6B65\u901A\u77E5-&gt;\u652F\u4ED8\u7ED3\u679C\u8FD4\u56DE\u7684\u4E0D\u662F\u6210\u529F\u7684\u72B6\u6001\u7801\uFF0C\u8BF7\u8BE6\u67E5\uFF01&quot;);
        return PayUtil.generatePayErrorReplyXML();
    }
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u5FAE\u4FE1\u4E0B\u5355\u914D\u7F6E\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u4E0B\u5355\u914D\u7F6E\u7C7B" aria-hidden="true">#</a> <strong>\u5FAE\u4FE1\u4E0B\u5355\u914D\u7F6E\u7C7B:</strong></h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>import java.io.ByteArrayInputStream;
import java.io.InputStream;

/**
 * \u626B\u7801\u652F\u4ED8\u53C2\u6570\u914D\u7F6E\uFF0C\u53EF\u7528\u4E8E\u652F\u4ED8\u548C\u9000\u6B3E\u7684\u53C2\u6570
 */
public class MyWXPayConfig extends WXPayConfig {

    private byte[] certData;

    @Override
    public String getAppID() {
        return &quot;\u5E94\u7528App\u7684ID&quot;;
    }

    public String getAPIKey(){
        return &quot;API\u5BC6\u94A5Key&quot;;
    }

    @Override
    public String getMchID() {
        return &quot;\u5546\u6237ID&quot;;
    }

    @Override
    public String getKey() {
        return &quot;\u5E94\u7528\u79D8\u94A5(appsecret)&quot;;
    }

    @Override
    public InputStream getCertStream() {
        ByteArrayInputStream certBis = new ByteArrayInputStream(this.certData);
        return certBis;
    }

    @Override
    public int getHttpConnectTimeoutMs() {
        // TODO Auto-generated method stub
        return 10*1000;
    }

    @Override
    public int getHttpReadTimeoutMs() {
        // TODO Auto-generated method stub
        return 20*1000;
    }

    @Override
    public IWXPayDomain getWXPayDomain() { 
        return new MyWXPayDomain();
    }

}

123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u652F\u4ED8\u5B9D\u548C\u5FAE\u4FE1\u5C01\u88C5\u7684\u54CD\u5E94\u72B6\u6001\u548C\u89E3\u6790\u652F\u4ED8\u63A5\u53E3\u8FD4\u56DE\u7684\u54CD\u5E94\u53C2\u6570\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8\u5B9D\u548C\u5FAE\u4FE1\u5C01\u88C5\u7684\u54CD\u5E94\u72B6\u6001\u548C\u89E3\u6790\u652F\u4ED8\u63A5\u53E3\u8FD4\u56DE\u7684\u54CD\u5E94\u53C2\u6570\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> <strong>\u652F\u4ED8\u5B9D\u548C\u5FAE\u4FE1\u5C01\u88C5\u7684\u54CD\u5E94\u72B6\u6001\u548C\u89E3\u6790\u652F\u4ED8\u63A5\u53E3\u8FD4\u56DE\u7684\u54CD\u5E94\u53C2\u6570\u5DE5\u5177\u7C7B:</strong></h3><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.internal.util.AlipaySignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class PayUtil {

    protected static Logger logger = LoggerFactory.getLogger(PayUtil.class);
    public static final int BUFFER_SIZE = 4096;

    /**
     * \u5C06\u5143\u4E3A\u5355\u4F4D\u7684\u8F6C\u6362\u4E3A\u5206 \u66FF\u6362\u5C0F\u6570\u70B9\uFF0C\u652F\u6301\u4EE5\u9017\u53F7\u533A\u5206\u7684\u91D1\u989D
     * @param amount
     * @return
     */
    public static String changeY2F(String amount) {
        String currency = amount.replaceAll(&quot;\\\\$|\\\\\uFFE5|\\\\,&quot;, &quot;&quot;); // \u5904\u7406\u5305\u542B, \uFFE5
        // \u6216\u8005$\u7684\u91D1\u989D
        int index = currency.indexOf(&quot;.&quot;);
        int length = currency.length();
        Long amLong = 0l;
        if (index == -1) {
            amLong = Long.valueOf(currency + &quot;00&quot;);
        } else if (length - index &gt;= 3) {
            amLong = Long.valueOf((currency.substring(0, index + 3)).replace(&quot;.&quot;, &quot;&quot;));
        } else if (length - index == 2) {
            amLong = Long.valueOf((currency.substring(0, index + 2)).replace(&quot;.&quot;, &quot;&quot;) + 0);
        } else {
            amLong = Long.valueOf((currency.substring(0, index + 1)).replace(&quot;.&quot;, &quot;&quot;) + &quot;00&quot;);
        }
        return amLong.toString();
    }

    /**
     * \u652F\u4ED8\u7ED3\u679C\u6210\u529F\u65F6\uFF0C\u53D1\u7ED9\u5FAE\u4FE1\u652F\u4ED8\u7684\u53C2\u6570
     * @return
     */
    public static String generatePaySuccessReplyXML() {
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append(&quot;&lt;xml&gt;&quot;).append(&quot;&lt;return_code&gt;&lt;![CDATA[SUCCESS]]&gt;&lt;/return_code&gt;&quot;)
        .append(&quot;&lt;return_msg&gt;&lt;![CDATA[OK]]&gt;&lt;/return_msg&gt;&quot;).append(&quot;&lt;/xml&gt;&quot;);
        return stringBuffer.toString();
    }

    /**
     * \u652F\u4ED8\u7ED3\u679C\u5931\u8D25\u65F6\uFF0C\u53D1\u7ED9\u5FAE\u4FE1\u652F\u4ED8\u7684\u53C2\u6570
     * @return
     */
    public static String generatePayErrorReplyXML() {
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append(&quot;&lt;xml&gt;&quot;).append(&quot;&lt;return_code&gt;&lt;![CDATA[FAIL]]&gt;&lt;/return_code&gt;&quot;)
        .append(&quot;&lt;return_msg&gt;&lt;![CDATA[ERROR]]&gt;&lt;/return_msg&gt;&quot;).append(&quot;&lt;/xml&gt;&quot;);
        return stringBuffer.toString();
    }

    /**
     * \u652F\u4ED8\u5B9D\u7ED3\u679C\u6210\u529F\u65F6\uFF0C\u53D1\u7ED9\u652F\u4ED8\u5B9D\u7684\u53C2\u6570
     * @return
     */
    public static String generatePaySuccessReplyParams() {
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append(&quot;success&quot;);
        return stringBuffer.toString();
    }
    /**
     * \u652F\u4ED8\u5B9D\u7ED3\u679C\u5931\u8D25\u65F6\uFF0C\u53D1\u7ED9\u652F\u4ED8\u5B9D\u7684\u53C2\u6570
     * @return
     */
    public static String generatePayErrorReplyParams() {
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append(&quot;failure&quot;);
        return stringBuffer.toString();
    }

    /**
     * \u89E3\u6790alipay\u5F02\u6B65\u901A\u77E5\u7684\u53C2\u6570
     * @param requestParams \u6837\u4F8B\uFF1A
     * {
     *    &quot;gmt_create&quot;: [&quot;2017-07-14 14:38:54&quot;],
     *    &quot;charset&quot;: [&quot;utf-8&quot;]
     *    ...
     *    }
     */
    public static Map&lt;String, String&gt; parseParams(Map&lt;?, ?&gt; requestParams){
        Map&lt;String,String&gt; params = new HashMap&lt;String,String&gt;();
        for (Iterator&lt;?&gt; iter = requestParams.keySet().iterator(); iter.hasNext();) {
            String name = (String) iter.next();
            String[] values = (String[]) requestParams.get(name);
            String valueStr = &quot;&quot;;
            for (int i = 0; i &lt; values.length; i++) {
                valueStr = (i == values.length - 1) ? valueStr + values[i] : valueStr + values[i] + &quot;,&quot;;
            }
            params.put(name, valueStr);
        }
        return params;
    }

    /**
     * \u9A8C\u8BC1\u652F\u4ED8\u5B9D\u53C2\u6570\u5408\u6CD5\u6027
     * \u4F7F\u7528\u652F\u4ED8\u5B9D2.0SDK\u81EA\u5E26\u7684\u9A8C\u8BC1\u65B9\u6CD5\u8FDB\u884C\u9A8C\u8BC1 AlipaySignature.rsaCheckV1
     * @param params
     * @return
     */
    public static boolean checkedParams(Map&lt;String, String&gt; params){
        try {
            //\u5207\u8BB0alipaypublickey\u662F\u652F\u4ED8\u5B9D\u7684\u516C\u94A5\uFF0C\u8BF7\u53BBopen.alipay.com\u5BF9\u5E94\u5E94\u7528\u4E0B\u67E5\u770B\u3002
            return AlipaySignature.rsaCheckV1(params, AliPayConfig.ALI_PUBLIC_KEY, AliPayConfig.ALI_CHARSET, AliPayConfig.ALI_SIGN_TYPE);
        } catch (AlipayApiException e) {
            // TODO Auto-generated catch block
            logger.error(&quot;---\u652F\u4ED8\u5B9DAPI\u5F02\u5E38&gt;&gt;&quot;);
            e.printStackTrace();
        }
        return false;
    }

    /**
     * \u6839\u636E\u652F\u4ED8\u5B9D\u5BF9\u5E94\u8D39\u7387\uFF0C\u8BA1\u7B97\u7528\u6237\u63D0\u73B0\u8D39\u7528
     * \u652F\u4ED8\u5B9D\u8D39\u73870.15%\uFF0C\u8D39\u7528\u533A\u95F4\uFF1A2-25\uFF0C\u5373\u4E0D\u4F4E\u4E8E2\u5143\uFF0C\u4E0A\u523025\u5C01\u9876
     * @param amount
     * @return
     */
    public static double cunWithdrawCost(double amount){
        double coust = BigDecimalUtil.mul(amount, 0.0015);
        if(coust &lt;= 2 ){
            return 2;
        }
        if(coust &gt;= 25){
            return 25;
        }
        return coust;
    }

    public static String getAtt(HttpServletRequest request, String key){
        return (String)request.getSession().getAttribute(key);
    }

    /**
     * \u5C06\u5143\u4E3A\u5355\u4F4D\u7684\u8F6C\u6362\u4E3A\u5206 \uFF08\u4E58100\uFF09
     * 
     * @param amount
     * @return
     */
    public static String changeY2F(Long amount) {
        return BigDecimal.valueOf(amount).multiply(new BigDecimal(100)).toString();
    }


    /**
     *  \u5C06\u6D41\u8F6C\u6362\u4E3Axml 
     * @param in
     * @param charset
     * @throws IOException
     */
    public static String copyToString(InputStream in, Charset charset) throws IOException {
        StringBuilder out = new StringBuilder();
        InputStreamReader reader = new InputStreamReader(in, charset);
        char[] buffer = new char[BUFFER_SIZE];
        int bytesRead = -1;
        while ((bytesRead = reader.read(buffer)) != -1) {
            out.append(buffer, 0, bytesRead);
        }
        return out.toString();
    }
}
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121122123124125126127128129130131132133134135136137138139140141142143144145146147148149150151152153154155156157158159160161162163164165166167168169170171172173174175176
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u652F\u4ED8-\u652F\u4ED8\u5B9D\u6216\u8005\u5FAE\u4FE1-\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8-\u652F\u4ED8\u5B9D\u6216\u8005\u5FAE\u4FE1-\u4F9D\u8D56" aria-hidden="true">#</a> <strong>\u652F\u4ED8(\u652F\u4ED8\u5B9D\u6216\u8005\u5FAE\u4FE1)\u4F9D\u8D56:</strong></h3><h6 id="\u6269\u5C55-\u5FAE\u4FE1\u4E0B\u5355\u8C03\u7528http\u5DE5\u5177\u7C7B\u53D1\u9001\u4E0B\u5355\u63A5\u53E3\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-\u5FAE\u4FE1\u4E0B\u5355\u8C03\u7528http\u5DE5\u5177\u7C7B\u53D1\u9001\u4E0B\u5355\u63A5\u53E3\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u6269\u5C55: \u5FAE\u4FE1\u4E0B\u5355\u8C03\u7528<code>http</code>\u5DE5\u5177\u7C7B\u53D1\u9001\u4E0B\u5355\u63A5\u53E3\u7684\u65B9\u5F0F</h6><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>/**
     * \u5FAE\u4FE1\u4E0B\u5355
     * @param req
     * @return
     * @throws Exception
     */
    @RequestMapping(value=&quot;/paying&quot;,method=RequestMethod.POST)
    @ResponseBody
    public Map&lt;String, String&gt; paying(HttpServletRequest req) throws Exception{
        String billNumber = req.getParameter(&quot;billNumber&quot;);
        String openid = req.getParameter(&quot;openid&quot;);
        //\u5224\u65AD\u5546\u6237\u662F\u5426\u5B58\u5728\u8BE5\u8BA2\u5355..............
        Map&lt;String, String&gt; reqData = new HashMap&lt;&gt;();
        //\u5546\u6237APPid
        reqData.put(&quot;appid&quot;, &quot;\u5546\u6237Appid&quot;);
        //\u968F\u673A\u5B57\u7B26\u4E32 \u5FC5\u586B-\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8981\u662F\u65B0\u7684\u968F\u673A\u5B57\u7B26\u4E32
        reqData.put(&quot;nonce_str&quot;, WXPayUtil.generateNonceStr());//WXPayUtil.generateNonceStr()
        //\u5546\u54C1\u63CF\u8FF0 \u5FC5\u586B
        reqData.put(&quot;body&quot;, ##);//&quot;\u5496\u5561&quot;
        //\u5546\u6237\u53F7 \u5FC5\u586B
        reqData.put(&quot;mch_id&quot;, \u5546\u6237ID(mch_id));
        //\u5546\u54C1\u8BA2\u5355\u53F7 \u5FC5\u586B
        reqData.put(&quot;out_trade_no&quot;, order);
        //\u652F\u4ED8\u91D1\u989D(\u5C06\u5143\u8F6C\u6362\u4E3A\u5206) \u5FC5\u586B
        reqData.put(&quot;total_fee&quot;, PayUtil.changeY2F(###));
        //\u7EC8\u7AEFIP \u4E0D\u77E5\u9053\u600E\u4E48\u5199\u53EF\u4EE5\u5199\u672C\u5730127.0.1 \u5FC5\u586B
        reqData.put(&quot;spbill_create_ip&quot;, &quot;127.0.0.1&quot;);//\u5BA2\u6237\u7AEF\u4E3B\u673A
        //\u5F02\u6B65\u56DE\u8C03\u901A\u77E5\u5730\u5740\u901A\u77E5url\u5FC5\u987B\u4E3A\u5916\u7F51\u53EF\u8BBF\u95EE\u7684url\uFF0C\u4E0D\u80FD\u643A\u5E26\u53C2\u6570   \u5FC5\u586B
        reqData.put(&quot;notify_url&quot;, ###);  //&quot;https://www.baidu.com/wxpay/notifying&quot;
        //\u4EA4\u6613\u7C7B\u578BJSAPI \u5FC5\u586B
        reqData.put(&quot;trade_type&quot;, &quot;JSAPI&quot;);
        //\u4E4B\u524D\u83B7\u53D6\u7684openid \u5FC5\u586B
        reqData.put(&quot;openid&quot;, openid);
        //\u5546\u54C1id  
        reqData.put(&quot;product_id&quot;, \u6309\u9700);
        //\u7B7E\u540D\u52A0\u5BC6\u65B9\u5F0F,\u5982\u679C\u4E0D\u662F\u4F7F\u7528\u9ED8\u8BA4MD5\u5C31\u9700\u8981\u6307\u5B9A
        reqData.put(&quot;sign_type&quot;, &quot;HMAC-SHA256&quot;);
        //\u751F\u6210HMAC-SHA256\u52A0\u5BC6\u65B9\u5F0F\u7B7E\u540D\u7684Xml\uFF0C\u901A\u8FC7httpClient\u53D1\u9001\u8BF7\u6C42\u5F97\u5230\u6570\u636E
String xmlParam = WXPayUtil.generateSignedXml(reqData, &quot;API\u5BC6\u94A5(paternerKey)&quot;,SignType.HMACSHA256);
        //\u4F7F\u7528http\u5DE5\u5177\u7C7B\u53D1\u9001post\u8BF7\u6C42,\u5DE5\u5177\u7C7B\u81EA\u884C\u627E!
        HttpClient httpClient=new HttpClient(&quot;https://api.mch.weixin.qq.com/pay/unifiedorder&quot;);
        httpClient.setHttps(true);
        httpClient.setXmlParam(xmlParam);
        httpClient.post();
        //\u83B7\u53D6\u5185\u5BB9
        String content = httpClient.getContent();
        //\u8F6C\u6362\u5185\u5BB9\u4E3Amap
        Map&lt;String, String&gt; refund = WXPayUtil.xmlToMap(content);
        Map&lt;String,String&gt; maps=new HashMap&lt;&gt;();
        //\u6210\u529F\u4E0B\u5355\u7684\u8BDD \u5305\u88C5\u524D\u7AEF\u652F\u4ED8\u9700\u8981\u7684\u53C2\u6570
        if (&quot;SUCCESS&quot;.equals(refund.get(&quot;return_code&quot;).toString())
                ) {
            String timeStamp=String.valueOf(WXPayUtil.getCurrentTimestamp());
            String appIds=myWXPayConfig.getAppID();
            String nonceStrs=UUID.randomUUID().toString().replaceAll(&quot;-&quot;, &quot;&quot;).toUpperCase();
            String prepay_id=refund.get(&quot;prepay_id&quot;).toString();
            String packages=&quot;prepay_id=&quot;+prepay_id;
            String signType=SignType.MD5.toString();
               //App\u7684ID
                maps.put(&quot;appId&quot;, ##);
                //\u65F6\u95F4\u6233
                maps.put(&quot;timeStamp&quot;, timeStamp);
                //\u968F\u673A\u5B57\u7B26\u4E32
                maps.put(&quot;nonceStr&quot;, #);
                //\u8BA2\u5355\u8BE6\u60C5\u6269\u5C55\u5B57\u7B26\u4E32package\u662F\u5173\u952E\u5B57\u52A0\u4E2AS\u5904\u7406
                maps.put(&quot;package&quot;, packages);
                //\u7B7E\u540D\u65B9\u5F0F \u9ED8\u8BA4\u4E3AMD5\uFF0C\u652F\u6301HMAC-SHA256\u548CMD5\u3002\u6CE8\u610F\u6B64\u5904\u9700\u4E0E\u7EDF\u4E00\u4E0B\u5355\u7684\u7B7E\u540D\u7C7B\u578B\u4E00\u81F4
                maps.put(&quot;signType&quot;, #); 
            /**
             * \u6CE8\uFF1A\u8FD9\u91CC\u91C7\u7528 HMACSHA256\u8FDB\u884C\u7B7E\u540D,
             * \u56E0\u4E3A\u9884\u4E0B\u5355\u652F\u4ED8\u90A3\u91CC\u9ED8\u8BA4\u91C7\u7528HMACSHA256,\u8981\u4FDD\u6301\u4E00\u81F4
             */
            String paySign = WXPayUtil.generateSignature(maps,&quot;API\u5BC6\u94A5(Key)&quot;,SignType.HMACSHA256);
            logger.info(&quot;paySign:&quot;+paySign);
            maps.put(&quot;return_code&quot;, &quot;success&quot;);
            maps.put(&quot;paySign&quot;, paySign);
             return maps;
1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768697071727374757677
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function P(x,A){const n=t("ExternalLinkIcon");return r(),a("div",null,[v,e("h3",c,[o,i(),m,i(":** (\u5EFA\u8BAE\u5148\u770B\u4E00\u6B21"),e("a",b,[i("\u5B98\u7F51\u6587\u6863"),l(n)]),i(")")]),p,e("h3",g,[q,i(),h,i(": (\u5EFA\u8BAE\u5148\u770B\u4E00\u6B21"),e("a",y,[i("\u5B98\u7F51\u6587\u6863"),l(n)]),i(") -"),S,i(),e("a",f,[i("\u535A\u5BA2\u6559\u6750"),l(n)])]),_])}const M=d(u,[["render",P],["__file","\u652F\u4ED8\u5B9D\u4E0E\u5FAE\u4FE1\u4E8C\u7801\u5408\u4E00,\u626B\u7801\u652F\u4ED8(\u5B66\u4E60\u7B14\u8BB0).html.vue"]]);export{M as default};
