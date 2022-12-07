import{_ as a,r as l,o as d,c as r,b as i,d as n,e as v,a as e}from"./app.234ff118.js";const c={},u=e(`<h1 id="python\u5FAA\u73AF\u7ED3\u6784\u7528\u6CD5-\u9A8F\u9A6C\u91D1\u9F99-\u535A\u5BA2\u56ED" tabindex="-1"><a class="header-anchor" href="#python\u5FAA\u73AF\u7ED3\u6784\u7528\u6CD5-\u9A8F\u9A6C\u91D1\u9F99-\u535A\u5BA2\u56ED" aria-hidden="true">#</a> Python\u5FAA\u73AF\u7ED3\u6784\u7528\u6CD5 - \u9A8F\u9A6C\u91D1\u9F99 - \u535A\u5BA2\u56ED</h1><p>\u672C\u6587\u4ECB\u7ECDpython\u4E2D\u7684while\u5FAA\u73AF\u3001for\u5FAA\u73AF\u3002\u5728python\u4E2Dfor\u53EF\u4EE5\u7528\u4E8E\u5FAA\u73AF\uFF0C\u4E5F\u53EF\u7528\u4E8E\u53E6\u4E00\u79CD\u8FD1\u4EB2\u7684\u5217\u8868\u89E3\u6790\uFF0C\u5217\u8868\u89E3\u6790\u662Fpython\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u7279\u6027\uFF0C\u8BE6\u7EC6\u5185\u5BB9\u89C1\u540E\u9762\u7684\u6587\u7AE0\u3002</p><p>\u4E00\u822C\u6765\u8BF4\uFF0Cpython\u5199for\u5FAA\u73AF\u6BD4\u5199while\u66F4\u5BB9\u6613\u3001\u65B9\u4FBF\uFF0C\u800C\u4E14python\u4E2D\u7684for\u6BD4while\u6548\u7387\u8981\u66F4\u9AD8\uFF0C\u5982\u679C\u53EF\u4EE5\uFF0C\u7528for\u800C\u4E0D\u662Fwhile\u3002</p><h2 id="while\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#while\u5FAA\u73AF" aria-hidden="true">#</a> while\u5FAA\u73AF</h2><p>python\u4E2D\u7684while/for\u5FAA\u73AF\u548C\u5176\u5B83\u8BED\u8A00\u7684while\u5FAA\u73AF\u6709\u4E9B\u4E0D\u4E00\u6837\uFF0C\u5B83\u652F\u6301else\u5206\u652F\u3002\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">while</span> <span class="token operator">&lt;</span>CONDITION<span class="token operator">&gt;</span><span class="token punctuation">:</span>
    CODE
<span class="token keyword">else</span><span class="token punctuation">:</span>
    CODE_ELSE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0Ccondition\u90E8\u5206\u53EA\u80FD\u662F\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u80FD\u662F\u8BED\u53E5\uFF0C\u6240\u4EE5condition\u4E2D\u4E0D\u80FD\u5305\u542B\u8D4B\u503C\u8BED\u53E5\uFF0C\u5982<code>while a = x:</code>\u662F\u9519\u8BEF\u7684\u3002</p><p>while\u548Cfor\u7684else\u5206\u652F\u8868\u793A\u5F53\u6B63\u5E38\u9000\u51FAwhile/for\u5FAA\u73AF\u7684\u65F6\u5019\u6240\u6267\u884C\u7684\u4EE3\u7801\u5206\u652F\u3002\u6240\u8C13\u6B63\u5E38\u9000\u51FA\uFF0C\u662F\u6307\u4E0D\u662F\u901A\u8FC7break\u8DF3\u51FA\u7684\u60C5\u51B5\uFF0C\u4E5F\u5C31\u662F\u6B63\u5E38\u628A\u6240\u6709\u5FAA\u73AF\u6761\u4EF6\u8F6E\u5B8C\u7684\u60C5\u51B5\u3002<strong>\u8FD9\u5BF9\u4E8E\u90A3\u4E9B\u9700\u8981\u901A\u8FC7\u8BBE\u7F6E\u6807\u5FD7\u4F4D\u6765\u5224\u65AD\u7684\u60C5\u51B5\u6765\u8BF4\u975E\u5E38\u65B9\u4FBF</strong>\uFF0C\u800C\u6807\u5FD7\u4F4D\u901A\u5E38\u662F\u7528\u4E8E\u79BB\u5F00\u5FAA\u73AF\u7684\u65F6\u5019\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u989D\u5916\u7684\u6807\u8BB0\u3001\u901A\u77E5\u529F\u80FD\uFF0C\u6BD4\u5982\u9000\u51FA\u5FAA\u73AF\u65F6\u60F3\u627E\u7684\u6570\u636E\u662F\u5426\u627E\u5230\u3002</p><p>\u4F8B\u5982\u641C\u7D22\u4E00\u4E2A\u5217\u8868\uFF0C\u5E76\u5728\u9000\u51FA\u65F6\u544A\u77E5\u662F\u5426\u627E\u5230\u3002\u5982\u679C\u4F7F\u7528\u6807\u5FD7\u4F4D\u6765\u5B9E\u73B0\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>found <span class="token operator">=</span> <span class="token boolean">False</span>

<span class="token keyword">while</span> x <span class="token keyword">and</span> <span class="token keyword">not</span> found<span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">match</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;found it&quot;</span><span class="token punctuation">)</span>
        found <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

<span class="token keyword">if</span> <span class="token keyword">not</span> found<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;not found&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u901A\u8FC7else\uFF0C\u5219\u903B\u8F91\u66F4\u6E05\u6670\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">while</span> x<span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">match</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;found it&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    x <span class="token operator">=</span> x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;not found&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u4F8B\u5982\uFF0C\u5224\u65AD\u4E00\u4E2A\u6570(\u5982\u4E0B\u9762\u7684y)\u662F\u5426\u662F\u8D28\u6570\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>y = 21

x = y // 2
while x &gt; 1:
    if y % x == 0:
        print( y, &quot;has a factor: &quot;, x)
        break
    x -= 1
else:
    print(&quot;y is a prime&quot;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60F3\u8C61\u4E00\u4E0B\u5982\u679C\u4E0D\u4F7F\u7528while\u7684else\uFF0C\u4E0A\u9762\u7684\u529F\u80FD\u8BE5\u5982\u4F55\u5B9E\u73B0\u3002</p><h2 id="pass\u3001break\u3001continue\u3001else" tabindex="-1"><a class="header-anchor" href="#pass\u3001break\u3001continue\u3001else" aria-hidden="true">#</a> pass\u3001break\u3001continue\u3001else</h2><p>\u8FD9\u51E0\u4E2A\u5173\u952E\u5B57\u90FD\u80FD\u7528\u5728while/for\u4E2D\u3002</p><ul><li>break\uFF1A\u9000\u51FA\u6574\u4E2A\u5FAA\u73AF(while/for)\uFF0C\u5982\u679C\u5D4C\u5957\u4E86\u5FAA\u73AF\uFF0C\u5219\u9000\u51FAbreak\u6240\u5728\u7684\u90A3\u4E2A\u5C42\u6B21</li><li>continue\uFF1A\u76F4\u63A5\u8DF3\u5230\u4E0B\u4E00\u6B21\u5FAA\u73AF</li><li>else\uFF1A\u5728\u5FAA\u73AF\u6B63\u5E38\u9000\u51FA(\u4E0D\u662Fbreak\u4E2D\u65AD\u7684\u5FAA\u73AF)\u65F6\u6267\u884C\u7684\u6240\u6267\u884C\u7684\u9ED8\u8BA4\u4EE3\u7801\u5757</li><li>pass\uFF1A\u5728python\u4E2D\u4F5C\u4E3A\u7A7A\u7684\u5360\u4F4D\u7B26\uFF0C\u8868\u793A\u4EC0\u4E48\u4E5F\u4E0D\u505A\u3002\u6BD4\u5982:</li><li>if x:pass</li><li>while x:pass</li><li>def x():pass</li><li>class x:pass</li></ul><p>\u5728python 3.x\u4E2D\uFF0Cpass\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F<code>...</code>\uFF0C\u5B83\u4E5F\u8868\u793A\u4EC0\u4E48\u4E5F\u4E0D\u505A\u7684\u5360\u4F4D\u7B26\u3002</p><h2 id="for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#for\u5FAA\u73AF" aria-hidden="true">#</a> for\u5FAA\u73AF</h2><p>python\u4E2D\u7684for\u662F\u4E00\u4E2A\u901A\u7528\u7684\u5E8F\u5217\u8FED\u4EE3\u5668\uFF0C\u548Cbash\u7684for\u8BED\u6CD5\u7C7B\u4F3C\u3002python\u4E2D\u6CA1\u6709<code>for(i=0;i&lt;N;i++)</code>\u7684\u8BED\u6CD5\uFF0C\u4F46for\u7ED3\u5408range\u53EF\u4EE5\u5B9E\u73B0\u4E00\u6837\u7684\u529F\u80FD\uFF0C\u540E\u6587\u4ECB\u7ECD\u3002</p><p>for\u8BED\u6CD5\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for i in &lt;Sequence&gt;:
    CODE
else:
    CODE_ELSE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u6B21\u8FED\u4EE3\u65F6\uFF0Cfor\u4ECE\u5E8F\u5217\u4E2D\u53D6\u4E00\u4E2A\u5143\u7D20\u8D4B\u503C\u7ED9\u63A7\u5236\u53D8\u91CFi\uFF0C\u4E0B\u4E00\u8F6E\u8FED\u4EE3\u53D6\u4E0B\u4E00\u4E2A\u5143\u7D20\u518D\u8D4B\u503C\u7ED9i\u3002\u548C\u5176\u5B83\u8BED\u8A00\u4E0D\u592A\u4E00\u6837\uFF0Cfor\u4E2D\u7684\u63A7\u5236\u53D8\u91CF<strong>\u4E0D\u4F1A\u5728for\u5FAA\u73AF\u5B8C\u540E\u6D88\u5931\uFF0C\u5B83\u4F1A\u4FDD\u6301\u6700\u540E\u4E00\u4E2A\u88AB\u8FED\u4EE3\u7684\u5143\u7D20\u503C</strong>\u3002\u4E4B\u6240\u4EE5\u4F1A\u8FD9\u6837\uFF0C\u662F\u56E0\u4E3A\u5176\u5B83\u8BED\u8A00\u4E2Dfor\u662F\u4E00\u4E2A\u4EE3\u7801\u5757\uFF0C\u800Cpython\u4E2Dfor\u4E0D\u7B97\u662F\u4EE3\u7801\u5757\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6CA1\u6709\u81EA\u5DF1\u7684\u540D\u79F0\u7A7A\u95F4\u3002</p><p>\u5B9E\u9645\u4E0A\u4E0D\u6B62\u5E8F\u5217\uFF0C\u53EA\u8981\u662F\u53EF\u8FED\u4EE3\u7684\u5BF9\u8C61\uFF0C\u90FD\u80FD\u7528for\u8FDB\u884C\u904D\u5386\u3002\u5173\u4E8E\u4EC0\u4E48\u662F\u53EF\u8FED\u4EE3\u7684\uFF0C\u5C06\u4E13\u95E8\u5728\u8FED\u4EE3\u5668\u76F8\u5173\u7684\u6587\u7AE0\u4E2D\u89E3\u91CA\u3002</p><p>\u4F8B\u5982\uFF0C\u904D\u5386\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u56E0\u4E3A\u5B83\u662F\u5E8F\u5217\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for i in &#39;xiaofang&#39;:
    print(i)

print(&quot;var i after: &quot;,i)   # \u8F93\u51FAg

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u904D\u5386\u4E00\u4E2A\u5217\u8868\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [&quot;aa&quot;,&quot;bb&quot;,&quot;cc&quot;]
for i in L:
    print(i)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5D4C\u5957\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [&quot;aa&quot;,&quot;bb&quot;,&quot;cc&quot;]
for i in L:
    for j in i:
        print(j)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BA1\u7B97\u5E8F\u5217\u4E2D\u6240\u6709\u6570\u503C\u7684\u548C\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [1,2,3,4,5]
sum = 0
for i in L:
    sum += i

print(sum)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for\u8FED\u4EE3\u5B57\u5178" tabindex="-1"><a class="header-anchor" href="#for\u8FED\u4EE3\u5B57\u5178" aria-hidden="true">#</a> for\u8FED\u4EE3\u5B57\u5178</h3><p><strong>for\u8FED\u4EE3\u5B57\u5178\u65F6\uFF0C\u8FED\u4EE3\u7684\u662Fkey</strong>\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>D = {&#39;a&#39;: 1,
     &#39;b&#39;: 2,
     &#39;c&#39;: 3}

for key in D:
    print(key, &quot;=&gt;&quot;, D[key])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B83\u8FED\u4EE3\u5B57\u5178\u7684\u51E0\u79CD\u65B9\u5F0F\uFF1A</p><p>1.\u901A\u8FC7keys()\u8FED\u4EE3\u5B57\u5178</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for k in D.keys():
    print(key, &quot;=&gt;&quot;, D[key])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u76F4\u63A5\u8FED\u4EE3\u5B57\u5178\u7684value</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for v in D.values():
    print(v)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u540C\u65F6\u8FED\u4EE3key\u548Cvalue</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for k, v in D.items():
    print(k, v)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for\u4E2D\u7684\u8D4B\u503C\u548C\u5E8F\u5217\u89E3\u5305" tabindex="-1"><a class="header-anchor" href="#for\u4E2D\u7684\u8D4B\u503C\u548C\u5E8F\u5217\u89E3\u5305" aria-hidden="true">#</a> for\u4E2D\u7684\u8D4B\u503C\u548C\u5E8F\u5217\u89E3\u5305</h3><p>for\u8FED\u4EE3\u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u4ECE\u53EF\u8FED\u4EE3\u5BF9\u8C61\u4E2D\u53D6\u5143\u7D20\u5E76\u8FDB\u884C\u8D4B\u503C\u7684\u8FC7\u7A0B\uFF0Cpython\u4E2D\u5404\u79CD\u53D8\u91CF\u8D4B\u503C\u7684\u65B9\u5F0F\u5728for\u4E2D\u90FD\u652F\u6301\u3002\u800C\u4E14\uFF0C<strong>python\u4E2D\u53D8\u91CF\u8D4B\u503C\u662F\u6309\u5F15\u7528\u8D4B\u503C\u7684\uFF0C\u6240\u4EE5\u6BCF\u6B21\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u8D4B\u503C\u7ED9\u63A7\u5236\u53D8\u91CF\u7684\u662F\u90A3\u4E2A\u5143\u7D20\u7684\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u62F7\u8D1D\u8FD9\u4E2A\u5143\u7D20\u5E76\u8D4B\u503C\u7ED9\u63A7\u5236\u53D8\u91CF</strong>\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u8D4B\u503C\u7ED9\u63A7\u5236\u53D8\u91CF\u7684\u662F\u53EF\u53D8\u5BF9\u8C61\u65F6\uFF0C\u4FEE\u6539\u63A7\u5236\u53D8\u91CF\u4F1A\u76F4\u63A5\u4FEE\u6539\u539F\u59CB\u6570\u636E\u3002</p><p>\u4F8B\u5982:</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>T = [(1, 2), (3, 4), (5, 6)]
for i in T:
     print(i)

for (a, b) in T:
    print(a, b)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>(1, 2)
(3, 4)
(5, 6)
1 2
3 4
5 6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),o={href:"https://www.cnblogs.com/f-ck-need-u/p/10122962.html#blog1544969684",target:"_blank",rel:"noopener noreferrer"},t=e(`<p>\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for (a, *b, c) in [(1, 2, 3, 4), (5, 6, 7, 8)]:
    print(a, b, c)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>1 [2, 3] 4
5 [6, 7] 8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3Apython\u662F\u6309\u5F15\u7528\u8D4B\u503C\u7684\uFF0C\u6240\u4EE5\u63A7\u5236\u53D8\u91CF\u90FD\u662F\u76F4\u63A5\u6307\u5411\u8FED\u4EE3\u5143\u7D20\u7684\uFF0C\u800C\u4E0D\u662F\u62F7\u8D1D\u526F\u672C\u540E\u8FDB\u884C\u8D4B\u503C\u3002\u770B\u4E0B\u9762\u7684\u7ED3\u679C\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [1111, 2222]
print(id(L[0]))
print(id(L[1]))

print(&quot;-&quot; * 15)

for i in L:
    print(id(i))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>46990096
46990128
---------------
46990096
46990128

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C1\uFF0C\u53D8\u91CFi\u548C\u5217\u8868\u4E2D\u5143\u7D20\u7684\u5185\u5B58\u5730\u5740\u662F\u4E00\u81F4\u7684\u3002</p><p>\u6B63\u56E0\u4E3A\u662F\u6309\u5F15\u7528\u8D4B\u503C\uFF0C\u6240\u4EE5\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u4FEE\u6539\u8D4B\u503C\u7ED9\u63A7\u5236\u53D8\u91CFi\u7684\u4E0D\u53EF\u53D8\u5BF9\u8C61\u65F6\u4F1A\u521B\u5EFA\u65B0\u5BF9\u8C61\uFF0C\u4ECE\u800C\u4E0D\u4F1A\u5F71\u54CD\u539F\u59CB\u6570\u636E\uFF0C\u4F46\u5982\u679C\u8D4B\u503C\u7ED9i\u7684\u662F\u53EF\u53D8\u5BF9\u8C61\uFF0C\u5219\u4FEE\u6539i\u4F1A\u5F71\u54CD\u539F\u59CB\u6570\u636E\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [1111, 2222]

for i in L:
    i += 1

print(L)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5217\u8868L\u4E0D\u4F1A\u6539\u53D8\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>[1111, 2222]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u4E0B\u9762\u4FEE\u6539\u63A7\u5236\u53D8\u91CFi\u4F1A\u6539\u53D8\u539F\u59CB\u5BF9\u8C61\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [[1],[1,2],[1,2,3],[1,2,3,4]]

for i in L:
    i.append(0)

print(L)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>[[1, 0], [1, 2, 0], [1, 2, 3, 0], [1, 2, 3, 4, 0]]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-range" tabindex="-1"><a class="header-anchor" href="#for-range" aria-hidden="true">#</a> for + range</h2><p>python\u4E2D\u5E76\u6CA1\u6709\u76F4\u63A5\u652F\u6301<code>for i=0;i&lt;N;i++</code>\u7684for\u8BED\u6CD5\uFF0C\u4F46\u662F\uFF0C\u901A\u8FC7for + range()\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7C7B\u4F3C\u7684\u529F\u80FD\u3002</p><p>\u5148\u4ECB\u7ECD\u4E00\u4E0Brange()\u3002\u5B83\u50CFLinux\u4E0B\u7684seq\u547D\u4EE4\u529F\u80FD\u4E00\u6837\uFF0C\u7528\u6765\u8FD4\u56DE\u4E00\u4E9B\u5E8F\u5217\u6570\u503C\u3002range()\u8FD4\u56DE\u4E00\u4E2A\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u76EE\u524D\u65E0\u9700\u77E5\u9053\u53EF\u8FED\u4EE3\u5BF9\u8C61\u662F\u4EC0\u4E48\uFF0C\u53EA\u9700\u77E5\u9053\u5B83\u53EF\u4EE5\u8F6C\u6362\u6210list\u3001tuple\u3001Set\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u901A\u7528\u8FED\u4EE3\u5668for\u4E2D\u8FDB\u884C\u8FED\u4EE3\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&gt;&gt;&gt; range(3)
range(0, 3)

&gt;&gt;&gt; list(range(3)),set(range(3)),tuple(range(3))
([0, 1, 2], {0, 1, 2}, (0, 1, 2))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C1\uFF0Crange()\u8FD4\u56DE\u7684\u5E8F\u5217\u503C\u662F\u524D\u95ED\u540E\u5F00\u7684\u3002</p><p>\u8FD8\u53EF\u4EE5\u6307\u5B9A\u8D77\u59CB\u503C\uFF0C\u6B65\u8FDB(\u6BCF\u9694\u51E0\u4E2A\u6570)\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&gt;&gt;&gt; list(range(1,5))
[1, 2, 3, 4]

&gt;&gt;&gt; list(range(-1,5))
[-1, 0, 1, 2, 3, 4]

&gt;&gt;&gt; list(range(-1,5,2))
[-1, 1, 3]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B65\u8FDB\u503C\u6307\u5B9A\u4E3A\u8D1F\u6570\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u751F\u6210\u964D\u5E8F\u7684\u5E8F\u5217\u503C\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&gt;&gt;&gt; list(range(10,5,-1))
[10, 9, 8, 7, 6]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>range()\u8FD4\u56DE\u4E86\u751F\u6210\u5E8F\u5217\u503C\u7684\u8FED\u4EE3\u5668\u540E\uFF0C\u53EF\u4EE5\u7528for\u6765\u8FDB\u884C\u8FED\u4EE3\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for i in range(3):
    print(i)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>range()\u8FD8\u7ECF\u5E38\u7528\u4E8Efor\u4E2D\u4F5C\u4E3A\u5E8F\u5217\u7684\u7D22\u5F15\u4F4D\u3002\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;]
for i in range(3):
    print(L[i])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u6790for-range\u8FED\u4EE3\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790for-range\u8FED\u4EE3\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> \u5206\u6790for + range\u8FED\u4EE3\u7684\u8FC7\u7A0B</h3><p>\u4E0B\u9762\u4E24\u4E2A\u4F8B\u5B50\uFF0C\u5728\u7ED3\u679C\u4E0A\u662F\u7B49\u4EF7\u7684\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for i in range(3):
    print(i)

for i in [0,1,2]:
    print(i)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u9664\u4E86\u7ED3\u679C\u4E0A\uFF0C\u8FC7\u7A0B\u5E76\u4E0D\u4E00\u6837\u3002range()\u65E2\u7136\u8FD4\u56DE\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u8BF4\u660E\u5E8F\u5217\u6570\u503C\u662F\u9700\u8981\u8FED\u4EE3\u4E00\u4E2A\u4E34\u65F6\u751F\u6210\u4E00\u4E2A\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4range()\u4ECE\u59CB\u81F3\u7EC8\u5728\u5185\u5B58\u4E2D\u90FD\u53EA\u5360\u7528\u4E00\u4E2A\u6570\u503C\u7684\u5185\u5B58\u7A7A\u95F4\u3002\u800C<code>[0,1,2]</code>\u5219\u662F\u5728\u5185\u5B58\u4E2D\u5360\u7528\u4E00\u4E2A\u5305\u542B3\u6570\u503C\u5143\u7D20\u7684\u5217\u8868\uFF0C\u7136\u540Efor\u4ECE\u8FD9\u4E2A\u5217\u8868\u5BF9\u8C61\u4E2D\u6309\u7167\u7D22\u5F15\u8FDB\u884C\u8FED\u4EE3\u3002</p><p>\u518D\u901A\u4FD7\u5730\u89E3\u91CA\u4E0B\uFF0C<code>for i in range(3)</code>\u5F00\u59CB\u8FED\u4EE3\u7684\u65F6\u5019\uFF0C\u751F\u6210\u4E00\u4E2A\u6570\u503C0\uFF0C\u7B2C\u4E8C\u6B21\u8FED\u4EE3\u518D\u751F\u6210\u6570\u503C1\uFF0C\u7B2C\u4E09\u6B21\u8FED\u4EE3\u518D\u751F\u6210\u6570\u503C2\uFF0C\u5728\u7B2C\u4E00\u6B21\u8FED\u4EE3\u7684\u65F6\u5019\uFF0C1\u548C2\u90FD\u662F\u4E0D\u5B58\u5728\u7684\u3002\u800C<code>[0,1,2]</code>\u5219\u662F\u65E9\u5C31\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D\uFF0Cfor\u901A\u8FC7list\u7C7B\u578B\u7F16\u5199\u597D\u7684\u8FED\u4EE3\u5668\u8FDB\u884C\u8FED\u4EE3\uFF0C\u6BCF\u6B21\u8FED\u4EE3\u4ECE\u5DF2\u5B58\u5728\u7684\u6570\u503C\u4E2D\u53D6\u4E00\u4E2A\u5143\u7D20\u3002</p><p>\u6240\u4EE5\uFF0C<strong>\u5728\u6548\u7387\u4E0A\uFF0C\u4F7F\u7528range()\u8981\u6BD4\u76F4\u63A5\u89E3\u6790\u5217\u8868\u8981\u6162\u4E00\u70B9\uFF0C\u4F46\u662F\u5728\u5185\u5B58\u5E94\u7528\u4E0A\uFF0Crange()\u7684\u65B9\u5F0F\u8981\u6BD4\u76F4\u63A5\u89E3\u6790\u5DF2\u5B58\u5728\u7684\u5217\u8868\u8981\u597D\uFF0C\u7279\u522B\u662F\u5217\u8868\u8F83\u5927\u7684\u65F6\u5019</strong>\u3002\u4E00\u822C\u6765\u8BF4\uFF0Cpython\u4E2D\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u603B\u662F\u6700\u597D\u7684\u3001\u6548\u7387\u5F88\u5927\u53EF\u80FD\u4E0A\u4E5F\u662F\u6700\u9AD8\u7684\uFF0C\u6240\u4EE5\u80FD\u76F4\u63A5\u89E3\u6790\u7684\u65F6\u5019\uFF0C\u4E0D\u4F7F\u7528range\u7684\u6548\u7387\u603B\u4F1A\u66F4\u9AD8\u4E00\u4E9B\u3002</p><p>\u8FD9\u79CD\u6548\u7387\u7684\u533A\u522B\uFF0C\u4E5F\u53EF\u4EE5\u5E94\u7528\u4E8E\u5176\u5B83\u8FED\u4EE3\u65B9\u5F0F\u7684\u5206\u6790\u4E0A\u3002\u4F8B\u5982\uFF0C\u6309\u884C\u8BFB\u53D6\u6587\u4EF6\u7684\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for i in open(&quot;filename&quot;):
    print(i)

for i in open(&quot;filename&quot;).readlines():
    print(i)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF0Copen()\u8FD4\u56DE\u4E00\u4E2A\u6587\u4EF6\u8FED\u4EE3\u5668\uFF0C\u6BCF\u6B21\u9700\u8981\u8FED\u4EE3\u7684\u65F6\u5019\u624D\u4F1A\u53BB\u8BFB\u9700\u8981\u7684\u90A3\u4E00\u884C\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4ECE\u59CB\u81F3\u7EC8\u5728\u5185\u5B58\u4E2D\u90FD\u53EA\u5360\u7528\u4E00\u884C\u6570\u636E\u7684\u7A7A\u95F4\u3002\u800C\u7B2C\u4E8C\u79CD\u901A\u8FC7readlines()\u8BFB\u53D6\u65F6\uFF0C\u5B83\u4F1A\u4E00\u6B21\u6027\u5C06\u6587\u4EF6\u4E2D\u6240\u6709\u884C\u90FD\u8BFB\u53D6\u5230\u4E00\u4E2A\u5217\u8868\u4E2D\uFF0C\u7136\u540Efor\u53BB\u8FED\u4EE3\u8FD9\u4E2A\u5217\u8868\u3002\u5982\u679C\u6587\u4EF6\u6BD4\u8F83\u5927\uFF0C\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u53EF\u80FD\u4F1A\u5360\u7528\u6BD4\u8F83\u5927\u7684\u5185\u5B58\uFF0C\u751A\u81F3\u53EF\u80FD\u6BD4\u539F\u6587\u4EF6\u5927\u5C0F\u8FD8\u8981\u5927\uFF0C\u56E0\u4E3A\u5F88\u53EF\u80FD\u4F1A\u4E00\u6B21\u6027\u4E3A400M\u7684\u6587\u4EF6\u5206\u914D500M\u5185\u5B58\uFF0C\u4EE5\u514D\u540E\u7EED\u4E0D\u65AD\u7684\u5185\u5B58\u5206\u914D\u3002</p><h3 id="for-range\u7684\u6B65\u8FDB\u4EE5\u53CA\u5206\u7247" tabindex="-1"><a class="header-anchor" href="#for-range\u7684\u6B65\u8FDB\u4EE5\u53CA\u5206\u7247" aria-hidden="true">#</a> for + range\u7684\u6B65\u8FDB\u4EE5\u53CA\u5206\u7247</h3><p>\u65E0\u8BBA\u662Frange()\uFF0C\u8FD8\u662F\u5E8F\u5217\u7684\u5206\u7247\u8BA1\u6570\uFF0C\u90FD\u652F\u6301\u6B65\u8FDB\u3002\u4F8B\u5982\u6B65\u8FDB\u4E3A2\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&gt;&gt;&gt; list(range(1,6,2))
[1, 3, 5]

&gt;&gt;&gt; L = [1,2,3,4,5]
&gt;&gt;&gt; L[::2]
[1, 3, 5]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u4EEC\u90FD\u80FD\u7528\u4E8Efor\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for i in range(1,6,2):
    print(i)

L = [1,2,3,4,5]
for i in L[::2]:
    print(i)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u4EEC\u7684\u7ED3\u679C\u662F\u4E00\u6837\u7684\u3002\u4F46\u662F\u548C\u524D\u9762\u5206\u6790\u7684\u4E00\u6837\uFF0Crange\u9664\u4E86\u5728\u5185\u5B58\u5E94\u7528\u4E0A\u6BD4\u8F83\u6709\u4F18\u52BF\uFF0C\u5728\u6548\u7387\u4E0A\u662F\u4E0D\u53CA\u76F4\u63A5\u5217\u8868\u89E3\u6790\u7684\uFF0C\u5305\u62EC\u8FD9\u91CC\u5206\u7247\u6B65\u8FDB\u3002</p><h3 id="for\u4FEE\u6539\u5217\u8868\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#for\u4FEE\u6539\u5217\u8868\u5143\u7D20" aria-hidden="true">#</a> for\u4FEE\u6539\u5217\u8868\u5143\u7D20</h3><p>\u6709\u4E00\u4E2A\u5217\u8868\uFF0C\u60F3\u8981\u4E3A\u5217\u8868\u4E2D\u7684\u503C\u90FD\u52A01\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [1,2,3,4]
for i in L:
    i += 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u65E0\u6548\u7684\uFF0C\u867D\u7136python\u4E2D\u662F\u6309\u7167\u5F15\u7528\u8FDB\u884C\u8D4B\u503C\u7684\uFF0C\u4F46\u6570\u503C\u7C7B\u578B\u662F\u4E0D\u53EF\u53D8\u7C7B\u578B\uFF0C\u6240\u4EE5\u6BCF\u6B21\u4FEE\u6539i\u5B9E\u9645\u4E0A\u90FD\u4F1A\u521B\u5EFA\u65B0\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u5E76\u4E0D\u4F1A\u76F4\u63A5\u5F71\u54CDL\u4E2D\u7684\u5143\u7D20\u3002\u8FD9\u4E9B\u524D\u6587\u5DF2\u7ECF\u89E3\u91CA\u8FC7\u4E86\u3002</p><p>\u5982\u679C\u60F3\u8981\u4FEE\u6539L\u672C\u8EAB\uFF0C\u76F4\u63A5\u8FED\u4EE3L\u662F\u6CA1\u6CD5\u5B9E\u73B0\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FED\u4EE3\u5B83\u7684\u7D22\u5F15\uFF0C\u7136\u540E\u901A\u8FC7\u7D22\u5F15\u7684\u65B9\u5F0F\u6765\u4FEE\u6539L\u7684\u5143\u7D20\u503C\u3002\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [1,2,3,4]
for i in range(len(L)):
    L[i] += 1
print(L)       # \u8F93\u51FA\uFF1A[2,3,4,5]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7while\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u3002\u4F46\u66F4\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u540E\u9762\u7684\u6587\u7AE0\u8981\u8BE6\u7EC6\u89E3\u91CA\u7684&quot;\u5217\u8868\u89E3\u6790&quot;\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [1,2,3,4]

L = [x + 1 for x in L]

print(L)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-zip\u5E76\u884C\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#for-zip\u5E76\u884C\u8FED\u4EE3" aria-hidden="true">#</a> for + zip\u5E76\u884C\u8FED\u4EE3</h2><p>zip()\u51FD\u6570\u53EF\u4EE5\u5C06\u591A\u4E2A\u5E8F\u5217(\u5B9E\u9645\u4E0A\u662F\u66F4\u901A\u7528\u7684\u53EF\u8FED\u4EE3\u5BF9\u8C61)\u4E2D\u7684\u503C\u4E00\u4E00\u5BF9\u5E94\u5730\u53D6\u51FA\u6765\uFF0C\u7136\u540E\u653E\u8FDB\u4E00\u4E2A\u5143\u7EC4\u4E2D\u3002\u5B83\u4E5F\u8FD4\u56DE\u4E00\u4E2A\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7list/set\u7B49\u51FD\u6570\u5C06\u5B83\u4EEC\u7684\u5185\u5BB9\u4E00\u6B21\u6027\u5C55\u73B0\u51FA\u6765\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [1,2,3,4]
S = {&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;}

&gt;&gt;&gt; zip(S,L)
&lt;zip object at 0x03684148&gt;
&gt;&gt;&gt; list(zip(S,L))
[(&#39;d&#39;, 1), (&#39;a&#39;, 2), (&#39;b&#39;, 3), (&#39;c&#39;, 4)]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u96C6\u5408\u662F\u65E0\u5E8F\u7684\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4ECES\u4E2D\u53BB\u7684\u5143\u7D20\u662F\u968F\u673A\u987A\u5E8F\u7684\u3002\u4F46\u65E0\u8BBA\u5982\u4F55\uFF0C\u5DF2\u7ECF\u53EF\u4EE5\u770B\u51FAzip()\u7684\u529F\u80FD\u4E86\uFF1A\u4ECE\u5BB9\u56681\u548C\u5BB9\u56682(\u53EF\u662F\u66F4\u591A\u4E2A\u5BB9\u5668)\u4E2D\u540C\u65F6\u53D6\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u7EC4\u6210\u5143\u7EC4\u8FD4\u56DE\uFF0C\u518D\u53D6\u7B2C\u4E8C\u4E2A\u5143\u7D20\u8FD4\u56DE\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&gt;&gt;&gt; list(zip(L,L))
[(1, 1), (2, 2), (3, 3), (4, 4)]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5BB9\u5668\u4E2D\u5143\u7D20\u6570\u91CF\u4E0D\u7B49\uFF0C\u5219\u4EE5\u957F\u5EA6\u6700\u77ED\u7684\u4E3A\u57FA\u51C6\u8FDB\u884C\u622A\u65AD\u3002\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L1 = [1,2,3,4,5]
L2 = [11,22,33,44,55,66]
L3 = [111,222,333]

&gt;&gt;&gt; list(zip(L1,L2,L3))
[(1, 11, 111), (2, 22, 222), (3, 33, 333)]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>zip()\u8FD8\u5E38\u7528\u4E8E\u6784\u9020dict\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>keys = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]
values = [1, 3, 5, 7]
D = dict(zip(keys, values))

&gt;&gt;&gt; D
{&#39;a&#39;: 1, &#39;b&#39;: 3, &#39;c&#39;: 5, &#39;d&#39;: 7}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E86\u89E3\u4E86zip()\uFF0C\u5C31\u53EF\u4EE5\u5C06\u5B83\u7ED3\u5408for\u6765\u8FDB\u884C\u5E76\u884C\u8FED\u4EE3\uFF1A\u4ECE\u6BCF\u4E2Azip()\u8FD4\u56DE\u7684\u5143\u7EC4\u4E2D\u53D6\u6765\u81EA\u5404\u4E2A\u5BB9\u5668\u4E2D\u7684\u5143\u7D20\u3002</p><p>\u4F8B\u5982:</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L1 = [1,2,3,4,5]
L2 = [11,22,33,44,55,66]
L3 = [111,222,333]

for (x, y, z) in zip(L1,L2,L3):
    print(&quot;%d + %d + %d = %d&quot; % (x, y, z, x + y + z))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>1 + 11 + 111 = 123
2 + 22 + 222 = 246
3 + 33 + 333 = 369

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enumerate-\u53D6\u5F97\u7D22\u5F15\u4F4D\u548C\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#enumerate-\u53D6\u5F97\u7D22\u5F15\u4F4D\u548C\u5143\u7D20" aria-hidden="true">#</a> enumerate()\u53D6\u5F97\u7D22\u5F15\u4F4D\u548C\u5143\u7D20</h2><p>\u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u6709\u4E13\u95E8\u7684\u5DE5\u5177\u5728\u8FED\u4EE3\u6BCF\u4E00\u4E2A\u5E8F\u5217\u5143\u7D20\u65F6\u540C\u65F6\u53D6\u5F97\u8FD9\u4E2A\u5143\u7D20\u7684\u7D22\u5F15\u4F4D\u548C\u5143\u7D20\u503C\u3002python\u4E2D\u53EF\u4EE5\u901A\u8FC7enumerate()\u6765\u5B9E\u73B0\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&gt;&gt;&gt; L =  [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]

&gt;&gt;&gt; list(enumerate(L))
[(0, &#39;a&#39;), (1, &#39;b&#39;), (2, &#39;c&#39;), (3, &#39;d&#39;)]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8E\u662F\uFF0C\u53EF\u4EE5\u901A\u8FC7for\u8FED\u4EE3\u5668\u6765\u8FED\u4EE3enumerate()\u751F\u6210\u7684<code>(index, value)</code>\u5143\u7D20\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>for (k, v) in enumerate(L):
    print(k,v)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>enumerate()\u8FD8\u53EF\u4EE5\u7528\u5B83\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6307\u5B9A\u4ECE\u54EA\u4E2A\u7D22\u5F15\u503C\u5F00\u59CB\u6807\u8BB0\u7D22\u5F15\u3002\u4F8B\u5982:</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&gt;&gt;&gt; list(enumerate(L, 2))
[(2, &#39;a&#39;), (3, &#39;b&#39;), (4, &#39;c&#39;), (5, &#39;d&#39;)]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u50CFdict\u8FD9\u6837\u7684\u7C7B\u578B\u4E0D\u5E94\u8BE5\u53BB\u7528enumerate()\u53BB\u53D6\u7D22\u5F15\u548C\u503C\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5C06dict\u7684key\u4F5C\u4E3A\u5143\u7D20\u503C\uFF0C\u5E76\u81EA\u5DF1\u751F\u6210\u6570\u503C\u7D22\u5F15\uFF0C\u4E5F\u5C31\u662F\u8BF4dict\u7684value\u88AB\u4E22\u5F03\u4E86\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>&gt;&gt;&gt; D
{&#39;a&#39;: 1, &#39;b&#39;: 3, &#39;c&#39;: 5, &#39;d&#39;: 7}

&gt;&gt;&gt; list(enumerate(D))
[(0, &#39;a&#39;), (1, &#39;b&#39;), (2, &#39;c&#39;), (3, &#39;d&#39;)]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for\u8FED\u4EE3\u7684\u9677\u9631" tabindex="-1"><a class="header-anchor" href="#for\u8FED\u4EE3\u7684\u9677\u9631" aria-hidden="true">#</a> for\u8FED\u4EE3\u7684\u9677\u9631</h2><p>for\u662F\u4E00\u4E2A\u901A\u7528\u7684\u8FED\u4EE3\u5668\uFF0C\u5B83\u6309\u7167next\u7684\u65B9\u5F0F\u4E00\u6B21\u53D6\u4E00\u4E2A\u5143\u7D20\uFF0C\u4E0B\u4E00\u8F6E\u8FED\u4EE3\u53D6\u4E0B\u4E00\u4E2A\u5143\u7D20\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u5728for\u5185\u90E8\u4FEE\u6539\u4E86\u6B63\u5728\u8FED\u4EE3\u7684\u5E8F\u5217(\u6240\u4EE5\u8FD9\u91CC\u662F\u8BF4\u53EF\u53D8\u5E8F\u5217\uFF0C\u4E14\u7279\u6307\u5217\u8868\u7C7B\u578B)\uFF0C\u53EF\u80FD\u4F1A\u5F15\u8D77\u4E00\u4E9B\u5947\u602A\u73B0\u8C61\u3002</p><p>\u8FD9\u662Ffor\u7684\u4E00\u4E2A\u9677\u9631\uFF0C\u6216\u8005\u8BF4\u662F\u8FED\u4EE3\u5668\u7684\u4E00\u4E2A\u9677\u9631\uFF1A\u8FED\u4EE3\u7684\u5BF9\u8C61\u5728\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u88AB\u4FEE\u6539\u4E86\u3002</p><h3 id="\u9677\u9631\u4E00" tabindex="-1"><a class="header-anchor" href="#\u9677\u9631\u4E00" aria-hidden="true">#</a> \u9677\u9631\u4E00</h3><p><strong>\u8FED\u4EE3\u64CD\u4F5C\u662F\u9012\u5F52\u5230\u6570\u636E\u5BF9\u8C61\u4E2D\u53BB\u7684\uFF0C\u800C\u4E0D\u662F\u6839\u636E\u53D8\u91CF\u540D\u8FDB\u884C\u8FED\u4EE3\u7684</strong>\u3002\u4E5F\u5C31\u662F\u8BF4\u8FED\u4EE3\u7684\u5BF9\u8C61\u662F\u5185\u5B58\u4E2D\u7684\u6570\u636E\u5BF9\u8C61\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [1,2,3,4]
for i in L:
    ...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2Afor\u8FED\u4EE3\u5668\u5728\u8FED\u4EE3\u521A\u5F00\u59CB\u7684\u65F6\u5019\uFF0C\u5148\u627E\u5230L\u6240\u6307\u5411\u7684\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u5373\u5185\u5B58\u4E2D\u7684<code>[1,2,3,4]</code>\u3002\u5982\u679C\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u5982\u679CL\u53D8\u6210\u4E86\u4E00\u4E2A\u96C6\u5408\uFF0C\u6216\u53E6\u4E00\u4E2A\u5217\u8868\u5BF9\u8C61\uFF0Cfor\u7684\u8FED\u4EE3\u5E76\u4E0D\u4F1A\u6536\u5230\u5F71\u54CD\u3002\u4F46\u5982\u679C\u662F\u5728\u539F\u5904\u4FEE\u6539\u8FD9\u4E2A\u5217\u8868\uFF0C\u90A3\u4E48\u8FED\u4EE3\u5C06\u4F1A\u6536\u5230\u5F71\u54CD\uFF0C\u4F8B\u5982\u65B0\u589E\u5143\u7D20\u4E5F\u4F1A\u88AB\u8FED\u4EE3\u5230\u3002</p><p>\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;]

## \u539F\u5904\u4FEE\u6539\u5217\u8868\uFF0C\u65B0\u5143\u7D20f\u3001g\u4E5F\u4F1A\u88AB\u8FED\u4EE3
for i in L:
    if i in &quot;de&quot;:
        L += [&quot;f&quot;, &quot;g&quot;]
    print(i)

## \u521B\u5EFA\u65B0\u5217\u8868\uFF0C\u65B0\u5143\u7D20f\u3001g\u4E0D\u4F1A\u88AB\u8FED\u4EE3
for i in L:
    if i in &quot;de&quot;:
        L = L + [&quot;f&quot;, &quot;g&quot;]
    print(i)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9677\u9631\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u9677\u9631\u4E8C" aria-hidden="true">#</a> \u9677\u9631\u4E8C</h3><p>\u4F8B\u5982\uFF0C<strong>\u8FED\u4EE3\u4E00\u4E2A\u5217\u8868</strong>\uFF0C\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u5220\u9664\u4E00\u4E2A\u5217\u8868\u5143\u7D20\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>L = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;]
for i in L:
    if i in &quot;bc&quot;:
        L.remove(i)
        print(i)

print(L)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7684\u7ED3\u679C\u5C06\u662F\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>b
[&#39;a&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2Afor\u5FAA\u73AF\u7684\u672C\u610F\u662F\u60F3\u5220\u9664b\u3001c\u5143\u7D20\uFF0C\u4F46\u7ED3\u679C\u5374\u53EA\u5220\u9664\u4E86b\u3002\u901A\u8FC7\u7ED3\u679C\u53EF\u4EE5\u53D1\u73B0\uFF0Cc\u6839\u672C\u5C31\u6CA1\u6709\u88ABfor\u8FED\u4EE3\u3002\u4E4B\u6240\u4EE5\u4F1A\u8FD9\u6837\uFF0C\u662F\u56E0\u4E3A\u8FED\u4EE3\u5230b\u7684\u65F6\u5019\uFF0C\u6EE1\u8DB3if\u6761\u4EF6\uFF0C\u7136\u540E\u5220\u9664\u4E86\u5217\u8868\u4E2D\u7684b\u5143\u7D20\u3002\u6B63\u56E0\u4E3A\u5220\u9664\u64CD\u4F5C\uFF0C\u4F7F\u5F97\u5217\u8868\u4E2Db\u540E\u9762\u7684\u5143\u7D20\u6574\u4F53\u524D\u79FB\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u4E5F\u5C31\u662Fc\u5143\u7D20\u7684\u7D22\u5F15\u4F4D\u7F6E\u53D8\u6210\u4E86index=1\uFF0C\u800Cindex=1\u7684\u5143\u7D20\u5DF2\u7ECF\u88ABfor\u8FED\u4EE3\u8FC7(\u5373\u5143\u7D20b)\uFF0C\u4F7F\u5F97c\u5E78\u8FD0\u5730\u9003\u8FC7\u4E86for\u7684\u8FED\u4EE3\u3002</p><p><strong>\u5982\u679C\u8FED\u4EE3\u5E76\u4FEE\u6539\u7684\u662F\u96C6\u5408\u6216\u5B57\u5178</strong>\u5462\uFF1F\u5C06\u4F1A\u62A5\u9519\u3002\u867D\u7136\u5B83\u4EEC\u662F\u53EF\u53D8\u5E8F\u5217\uFF0C\u4F46\u662F<strong>\u5B83\u4EEC\u662F\u4EE5hash key\u4F5C\u4E3A\u8FED\u4EE3\u4F9D\u636E\u7684\uFF0C\u53EA\u8981\u589E\u3001\u5220\u5143\u7D20\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6574\u4E2A\u5BF9\u8C61\u7684\u987A\u5E8Fhash key\u53D1\u751F\u6539\u53D8\uFF0C\u8FD9\u663E\u7136\u662F\u7F16\u5199\u8FD9\u4E24\u79CD\u7C7B\u578B\u7684\u8FED\u4EE3\u5668\u65F6\u6240\u9700\u8981\u907F\u514D\u7684\u95EE\u9898</strong>\u3002\u5982\u4E0B\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>D = {&#39;a&#39;:1,
     &#39;b&#39;:2,
     &#39;c&#39;:3,
     &#39;d&#39;:4,
     &#39;e&#39;:5}

for i in D:
    if i in &quot;bc&quot;:
        del D[i]
        print(i)

print(D)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62A5\u9519\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>b
Traceback (most recent call last):
  File &quot;g:/pycode/lists.py&quot;, line 12, in &lt;module&gt;
    for i in D:
RuntimeError: dictionary changed size during iteration

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>S = {&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;}

for i in S:
    if i in &quot;bc&quot;:
        S.remove(i)
        print(i)

print(S)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62A5\u9519\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>b
Traceback (most recent call last):
  File &quot;g:/pycode/lists.py&quot;, line 4, in &lt;module&gt;
    for i in L:
RuntimeError: Set changed size during iteration

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FED\u4EE3\u5E76\u4FEE\u6539\u96C6\u5408\u3001\u5B57\u5178\u662F\u975E\u5E38\u5E38\u89C1\u7684\u9700\u6C42\uFF0C\u4F46\u5F88\u591A\u7B2C\u4E09\u65B9\u6A21\u5757\u5728\u8FED\u4EE3\u5E76\u4FEE\u6539\u5B83\u4EEC\u7684\u65F6\u5019\u90FD\u9690\u9690\u5FFD\u7565\u4E86\u8FD9\u79CD\u95EE\u9898\u3002\u90A3\u4E48\u5982\u4F55\u5B9E\u73B0\u8FD9\u79CD\u9700\u6C42\u4E14\u4E0D\u4F1A\u51FA\u9519\uFF1F\u53EF\u4EE5\u8003\u8651<strong>\u8FED\u4EE3\u5B83\u4EEC\u7684\u526F\u672C\uFF0C\u5E76\u4FEE\u6539\u5B83\u4EEC\u81EA\u8EAB</strong>\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>D = {&#39;a&#39;:1,&#39;b&#39;:2,&#39;c&#39;:3,&#39;d&#39;:4,&#39;e&#39;:5}

for i in D.copy():
    if i in &quot;bc&quot;:
        D.pop(i)
        print(i)
print(D)


S = {&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;}

for i in S.copy():
    if i in &quot;bc&quot;:
        S.remove(i)
        print(i)
print(S)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>b
c
{&#39;a&#39;: 1, &#39;d&#39;: 4, &#39;e&#39;: 5}
c
b
{&#39;e&#39;, &#39;d&#39;, &#39;a&#39;}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u522B\u4F7F\u7528dict\u7684keys()\u51FD\u6570\uFF0C\u5728python 2.x\u662F\u53EF\u4EE5\u7684\uFF0C\u56E0\u4E3A\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5217\u8868\uFF0C\u4F46\u662F\u5728python 3.x\u4E2D\uFF0C\u5B83\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u8FED\u4EE3\u5668\u3002</p><p>\u9664\u4E86\u4F7F\u7528copy()\uFF0C\u4F7F\u7528\u5176\u5B83\u7684\u65B9\u5F0F\u4E5F\u53EF\u4EE5\uFF0C\u53EA\u8981\u4FDD\u8BC1\u8FED\u4EE3\u7684\u5BF9\u8C61\u548C\u4FEE\u6539\u7684\u5BF9\u8C61\u4E0D\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u5373\u53EF\u3002\u4F8B\u5982\uFF0Clist()\u65B9\u6CD5\u8F6C\u6362Set/Dict\uFF0C\u5728\u8F6C\u6362\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u521B\u5EFA\u65B0\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u6240\u4EE5\u8FED\u4EE3\u548C\u4FEE\u6539\u64CD\u4F5C\u662F\u4E92\u4E0D\u5F71\u54CD\u7684\u3002</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>D = {&#39;a&#39;:1,&#39;b&#39;:2,&#39;c&#39;:3,&#39;d&#39;:4,&#39;e&#39;:5}

for i in list(D):
    if i in &quot;bc&quot;:
        D.pop(i)
        print(i)

print(D)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\uFF1A****https://www.cnblogs.com/f-ck-need-u/p/10129317.html</strong></p>`,111);function p(m,b){const s=l("ExternalLinkIcon");return d(),r("div",null,[u,i("p",null,[n("for\u8FD8\u652F\u6301"),i("a",o,[n("\u5E8F\u5217\u89E3\u5305"),v(s)]),n("\u7684\u8D4B\u503C\u5F62\u5F0F\u3002")]),t])}const h=a(c,[["render",p],["__file","Python\u5FAA\u73AF\u7ED3\u6784\u7528\u6CD5 - \u9A8F\u9A6C\u91D1\u9F99 - \u535A\u5BA2\u56ED.html.vue"]]);export{h as default};
