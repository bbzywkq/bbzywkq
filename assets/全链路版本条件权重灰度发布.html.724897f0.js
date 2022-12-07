import{_ as t,o as e,c as i,a as n}from"./app.234ff118.js";const o={},s=n(`<h1 id="\u5168\u94FE\u8DEF\u7248\u672C\u6761\u4EF6\u6743\u91CD\u7070\u5EA6\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u5168\u94FE\u8DEF\u7248\u672C\u6761\u4EF6\u6743\u91CD\u7070\u5EA6\u53D1\u5E03" aria-hidden="true">#</a> \u5168\u94FE\u8DEF\u7248\u672C\u6761\u4EF6\u6743\u91CD\u7070\u5EA6\u53D1\u5E03</h1><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rule&gt;
    &lt;!-- \u5168\u5C40\u7F3A\u7701\u8DEF\u7531\uFF0C\u5F53\u515C\u5E95\u8DEF\u7531\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u5168\u5C40\u7F3A\u7701\u8DEF\u7531\u4E0D\u9700\u8981\u914D\u7F6E --&gt;
    &lt;!-- \u515C\u5E95\u8DEF\u7531\u5982\u679C\u628A\u5168\u5C40\u7F3A\u7701\u8DEF\u7531\u7684\u6D41\u91CF\u914D\u6BD4\u8BBE\u7F6E\u6210100%\uFF0C\u5176\u5B83\u6D41\u91CF\u914D\u6BD4\u8BBE\u7F6E\u62100%\uFF0C\u90A3\u4E48\u5B83\u7B49\u540C\u4E8E\u5982\u4E0B\u5168\u5C40\u7F3A\u7701\u8DEF\u7531 --&gt;
    &lt;!-- &lt;strategy&gt;
        &lt;version&gt;{&quot;discovery-guide-service-a&quot;:&quot;1.0&quot;, &quot;discovery-guide-service-b&quot;:&quot;1.0&quot;}&lt;/version&gt;
    &lt;/strategy&gt; --&gt;

    &lt;strategy-release&gt;
        &lt;conditions type=&quot;gray&quot;&gt;
            &lt;!-- \u7070\u5EA6\u8DEF\u75311\uFF0C\u6761\u4EF6expression\u9A71\u52A8 --&gt;
            &lt;!-- &lt;condition id=&quot;gray-condition-1&quot; expression=&quot;#H[&#39;a&#39;] == &#39;1&#39;&quot; version-id=&quot;gray-route=10;stable-route=90&quot;/&gt; --&gt;
            &lt;!-- \u7070\u5EA6\u8DEF\u75312\uFF0C\u6761\u4EF6expression\u9A71\u52A8 --&gt;
            &lt;!-- &lt;condition id=&quot;gray-condition-2&quot; expression=&quot;#H[&#39;a&#39;] == &#39;1&#39; and #H[&#39;b&#39;] == &#39;2&#39;&quot; version-id=&quot;gray-route=85;stable-route=15&quot;/&gt; --&gt;
            &lt;!-- \u515C\u5E95\u8DEF\u7531\uFF0C\u65E0\u6761\u4EF6expression\u9A71\u52A8 --&gt;
            &lt;condition id=&quot;basic-condition&quot; version-id=&quot;gray-route=0;stable-route=100&quot;/&gt;
        &lt;/conditions&gt;

        &lt;routes&gt;
            &lt;route id=&quot;gray-route&quot; type=&quot;version&quot;&gt;{&quot;discovery-guide-service-a&quot;:&quot;1.1&quot;, &quot;discovery-guide-service-b&quot;:&quot;1.1&quot;}&lt;/route&gt;
            &lt;route id=&quot;stable-route&quot; type=&quot;version&quot;&gt;{&quot;discovery-guide-service-a&quot;:&quot;1.0&quot;, &quot;discovery-guide-service-b&quot;:&quot;1.0&quot;}&lt;/route&gt;
        &lt;/routes&gt;
    &lt;/strategy-release&gt;
&lt;/rule&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=[s];function l(r,d){return e(),i("div",null,u)}const v=t(o,[["render",l],["__file","\u5168\u94FE\u8DEF\u7248\u672C\u6761\u4EF6\u6743\u91CD\u7070\u5EA6\u53D1\u5E03.html.vue"]]);export{v as default};
