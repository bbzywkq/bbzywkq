import{_ as e,o as i,c as n,a}from"./app.234ff118.js";const t={},l=a(`<h1 id="\u5168\u94FE\u8DEF\u7248\u672C\u6743\u91CD\u7070\u5EA6\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u5168\u94FE\u8DEF\u7248\u672C\u6743\u91CD\u7070\u5EA6\u53D1\u5E03" aria-hidden="true">#</a> \u5168\u94FE\u8DEF\u7248\u672C\u6743\u91CD\u7070\u5EA6\u53D1\u5E03</h1><h3 id="\u7EDF\u4E00\u7248\u672C\u6743\u91CD" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u7248\u672C\u6743\u91CD" aria-hidden="true">#</a> \u7EDF\u4E00\u7248\u672C\u6743\u91CD</h3><p>\u589E\u52A0Spring Cloud Gateway\u7684\u7248\u672C\u6743\u91CD\u7070\u5EA6\u53D1\u5E03\u7B56\u7565\uFF0CGroup\u4E3Adiscovery-guide-group\uFF0CData Id\u4E3Adiscovery-guide-gateway\uFF0C\u7B56\u7565\u5185\u5BB9\u5982\u4E0B\uFF0C\u5B9E\u73B0\u4ECESpring Cloud Gateway\u53D1\u8D77\u7684\u8C03\u7528\u5168\u94FE\u8DEF1.0\u7248\u672C\u6D41\u91CF\u6743\u91CD\u4E3A90%\uFF0C1.1\u7248\u672C\u6D41\u91CF\u6743\u91CD\u4E3A10%</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rule&gt;
    &lt;strategy&gt;
        &lt;version-weight&gt;1.0=90;1.1=10&lt;/version-weight&gt;
    &lt;/strategy&gt;
&lt;/rule&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u522B\u6307\u5B9A\u7248\u672C\u6743\u91CD" tabindex="-1"><a class="header-anchor" href="#\u5206\u522B\u6307\u5B9A\u7248\u672C\u6743\u91CD" aria-hidden="true">#</a> \u5206\u522B\u6307\u5B9A\u7248\u672C\u6743\u91CD</h3><p>\u6BCF\u4E2A\u670D\u52A1\u7684\u7248\u672C\u6743\u91CD\u5206\u522B\u6307\u5B9A\uFF0C\u90A3\u4E48\u7B56\u7565\u5185\u5BB9\u5982\u4E0B\uFF0C\u5B9E\u73B0\u4ECESpring Cloud Gateway\u53D1\u8D77\u7684\u8C03\u7528a\u670D\u52A11.0\u7248\u672C\u6D41\u91CF\u6743\u91CD\u4E3A90%\uFF0C1.1\u7248\u672C\u6D41\u91CF\u6743\u91CD\u4E3A10%\uFF0Cb\u670D\u52A11.0\u7248\u672C\u6D41\u91CF\u6743\u91CD\u4E3A80%\uFF0C1.1\u7248\u672C\u6D41\u91CF\u6743\u91CD\u4E3A20%</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rule&gt;
    &lt;strategy&gt;
        &lt;version-weight&gt;{&quot;discovery-guide-service-a&quot;:&quot;1.0=90;1.1=10&quot;, &quot;discovery-guide-service-b&quot;:&quot;1.0=80;1.1=20&quot;}&lt;/version-weight&gt;
    &lt;/strategy&gt;
&lt;/rule&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EDF\u4E00\u533A\u57DF\u6743\u91CD" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u533A\u57DF\u6743\u91CD" aria-hidden="true">#</a> \u7EDF\u4E00\u533A\u57DF\u6743\u91CD</h3><p>\u5168\u94FE\u8DEFdev\u533A\u57DF\u6D41\u91CF\u6743\u91CD\u4E3A85%\uFF0Cqa\u533A\u57DF\u6D41\u91CF\u6743\u91CD\u4E3A15%</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rule&gt;
    &lt;strategy&gt;
        &lt;region-weight&gt;dev=85;qa=15&lt;/region-weight&gt;
    &lt;/strategy&gt;
&lt;/rule&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u522B\u6307\u5B9A\u533A\u57DF\u6743\u91CD" tabindex="-1"><a class="header-anchor" href="#\u5206\u522B\u6307\u5B9A\u533A\u57DF\u6743\u91CD" aria-hidden="true">#</a> \u5206\u522B\u6307\u5B9A\u533A\u57DF\u6743\u91CD</h3><p>\u670D\u52A1\u7684\u533A\u57DF\u6743\u91CD\u5206\u522B\u6307\u5B9A\uFF0C\u90A3\u4E48\u7B56\u7565\u5185\u5BB9\u5982\u4E0B\uFF0C\u5B9E\u73B0\u4ECEZuul\u53D1\u8D77\u7684\u8C03\u7528a\u670D\u52A1dev\u533A\u57DF\u6D41\u91CF\u6743\u91CD\u4E3A85%\uFF0Cqa\u533A\u57DF\u6D41\u91CF\u6743\u91CD\u4E3A15%\uFF0Cb\u670D\u52A1dev\u533A\u57DF\u6D41\u91CF\u6743\u91CD\u4E3A75%\uFF0Cqa\u533A\u57DF\u6D41\u91CF\u6743\u91CD\u4E3A25%</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rule&gt;
    &lt;strategy&gt;
        &lt;region-weight&gt;{&quot;discovery-guide-service-a&quot;:&quot;dev=85;qa=15&quot;, &quot;discovery-guide-service-b&quot;:&quot;dev=75;qa=25&quot;}&lt;/region-weight&gt;
    &lt;/strategy&gt;
&lt;/rule&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d=[l];function s(r,u){return i(),n("div",null,d)}const o=e(t,[["render",s],["__file","\u5168\u94FE\u8DEF\u7248\u672C\u6743\u91CD\u7070\u5EA6\u53D1\u5E03.html.vue"]]);export{o as default};
