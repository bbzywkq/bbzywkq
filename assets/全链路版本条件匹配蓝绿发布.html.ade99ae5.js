import{_ as e,o as t,c as i,a as n}from"./app.234ff118.js";const o={},u=n(`<h1 id="\u5168\u94FE\u8DEF\u7248\u672C\u6761\u4EF6\u5339\u914D\u84DD\u7EFF\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u5168\u94FE\u8DEF\u7248\u672C\u6761\u4EF6\u5339\u914D\u84DD\u7EFF\u53D1\u5E03" aria-hidden="true">#</a> \u5168\u94FE\u8DEF\u7248\u672C\u6761\u4EF6\u5339\u914D\u84DD\u7EFF\u53D1\u5E03</h1><h2 id="\u7F51\u5173\u7B56\u7565\u6587\u4EF6\u914D\u7F6E\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u7F51\u5173\u7B56\u7565\u6587\u4EF6\u914D\u7F6E\u89C4\u5219" aria-hidden="true">#</a> \u7F51\u5173\u7B56\u7565\u6587\u4EF6\u914D\u7F6E\u89C4\u5219</h2><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>Data Id: \u670D\u52A1\u540D
group\uFF1A\u7F51\u5173\u914D\u7F6E\u5143\u6570\u636E \u7EC4\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rule&gt;
    &lt;!-- \u5168\u5C40\u7F3A\u7701\u8DEF\u7531\uFF0C\u5F53\u515C\u5E95\u8DEF\u7531\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u5168\u5C40\u7F3A\u7701\u8DEF\u7531\u4E0D\u9700\u8981\u914D\u7F6E --&gt;
    &lt;!-- &lt;strategy&gt;
        &lt;version&gt;{&quot;discovery-guide-service-a&quot;:&quot;1.0&quot;, &quot;discovery-guide-service-b&quot;:&quot;1.0&quot;}&lt;/version&gt;
    &lt;/strategy&gt; --&gt;

    &lt;strategy-release&gt;
        &lt;conditions type=&quot;blue-green&quot;&gt;
            &lt;!-- \u84DD\u8DEF\u7531\uFF0C\u6761\u4EF6expression\u9A71\u52A8 --&gt;    
            &lt;condition id=&quot;blue-condition&quot; expression=&quot;#H[&#39;a&#39;] == &#39;1&#39;&quot; version-id=&quot;blue-route&quot;/&gt;
            &lt;!-- \u7EFF\u8DEF\u7531\uFF0C\u6761\u4EF6expression\u9A71\u52A8 --&gt;
            &lt;condition id=&quot;green-condition&quot; expression=&quot;#H[&#39;a&#39;] == &#39;1&#39; and #H[&#39;b&#39;] == &#39;2&#39;&quot; version-id=&quot;green-route&quot;/&gt;
            &lt;!-- \u515C\u5E95\u8DEF\u7531\uFF0C\u65E0\u6761\u4EF6expression\u9A71\u52A8 --&gt;
            &lt;condition id=&quot;basic-condition&quot; version-id=&quot;basic-route&quot;/&gt;
        &lt;/conditions&gt;

        &lt;routes&gt;
            &lt;route id=&quot;blue-route&quot; type=&quot;version&quot;&gt;{&quot;discovery-guide-service-a&quot;:&quot;1.1&quot;, &quot;discovery-guide-service-b&quot;:&quot;1.1&quot;}&lt;/route&gt;    
            &lt;route id=&quot;green-route&quot; type=&quot;version&quot;&gt;{&quot;discovery-guide-service-a&quot;:&quot;1.0&quot;, &quot;discovery-guide-service-b&quot;:&quot;1.0&quot;}&lt;/route&gt;
            &lt;route id=&quot;basic-route&quot; type=&quot;version&quot;&gt;{&quot;discovery-guide-service-a&quot;:&quot;1.0&quot;, &quot;discovery-guide-service-b&quot;:&quot;1.0&quot;}&lt;/route&gt;
        &lt;/routes&gt;
    &lt;/strategy-release&gt;
&lt;/rule&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u652F\u6301\u7B56\u7565\u4E0B\u5185\u7F6EHeader\u6765\u51B3\u7B56\u84DD\u7EFF\u53D1\u5E03\uFF0C\u53EF\u4EE5\u4EE3\u66FF\u5916\u90E8\u4F20\u5165Header/Parameter/Cookies\uFF0C\u53C2\u8003\u5982\u4E0B\u914D\u7F6E</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;header&gt;{&quot;a&quot;:&quot;1&quot;, &quot;b&quot;:&quot;2&quot;, &quot;c&quot;:&quot;3&quot;}&lt;/header&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),s=[u];function d(l,r){return t(),i("div",null,s)}const v=e(o,[["render",d],["__file","\u5168\u94FE\u8DEF\u7248\u672C\u6761\u4EF6\u5339\u914D\u84DD\u7EFF\u53D1\u5E03.html.vue"]]);export{v as default};
