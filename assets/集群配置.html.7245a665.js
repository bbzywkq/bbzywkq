import{_ as n,o as e,c as i,a as s}from"./app.234ff118.js";const d={},l=s(`<h1 id="\u96C6\u7FA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u914D\u7F6E" aria-hidden="true">#</a> \u96C6\u7FA4\u914D\u7F6E</h1><h3 id="\u96C6\u7FA4\u914D\u7F6E\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u914D\u7F6E\u5907\u4EFD" aria-hidden="true">#</a> \u96C6\u7FA4\u914D\u7F6E\u5907\u4EFD</h3><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>#=======================================\u4E3B\u8282\u70B9\u914D\u7F6E
#\u96C6\u7FA4\u540D\u79F0
cluster.name: shouxin-cluster
#\u8282\u70B9\u540D\u79F0
node.name: node-1
# \u662F\u5426\u53EF\u4EE5\u6210\u4E3Amaster\u8282\u70B9
node.master: true
# \u662F\u5426\u5141\u8BB8\u8BE5\u8282\u70B9\u5B58\u50A8\u6570\u636E,\u9ED8\u8BA4\u5F00\u542F
node.data: true
#\u53EF\u8BBF\u95EEip
http.host: 0.0.0.0
#\u5730\u5740
network.host: 0.0.0.0
# \u8BBE\u7F6E\u8282\u70B9\u95F4\u4EA4\u4E92\u7684tcp\u7AEF\u53E3,\u9ED8\u8BA4\u662F9300
transport.tcp.port: 9301
#\u7AEF\u53E3
http.port: 9401
#\u5185\u5B58\u914D\u7F6E
#http.max_content_length: 100mb 
#bootstrap.memory_lock: true 
#\u5199\u5165\u5019\u9009\u4E3B\u8282\u70B9\u7684\u8BBE\u5907\u5730\u5740\uFF0C\u5728\u5F00\u542F\u670D\u52A1\u540E\u53EF\u4EE5\u88AB\u9009\u4E3A\u4E3B\u8282\u70B9
#discovery.seed_hosts: [&quot;127.0.0.1:9401&quot;, &quot;127.0.0.1:9402&quot;,&quot;127.0.0.1:9403&quot;]
# \u624B\u52A8\u6307\u5B9A\u53EF\u4EE5\u6210\u4E3A mater \u7684\u6240\u6709\u8282\u70B9\u7684 name \u6216\u8005 ip\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u5C06\u4F1A\u5728\u7B2C\u4E00\u6B21\u9009\u4E3E\u4E2D\u8FDB\u884C\u8BA1\u7B97
cluster.initial_master_nodes: [&quot;47.100.105.191&quot;]
# \u652F\u6301\u8DE8\u57DF\u8BBF\u95EE
http.cors.enabled: true
http.cors.allow-origin: &quot;*&quot;

#=======================================\u5B50\u8282\u70B9\u914D\u7F6E
#\u96C6\u7FA4\u540D\u79F0
cluster.name: shouxin-cluster
#\u8282\u70B9\u540D\u79F0
node.name: node-2
# \u662F\u5426\u53EF\u4EE5\u6210\u4E3Amaster\u8282\u70B9
node.master: false
# \u662F\u5426\u5141\u8BB8\u8BE5\u8282\u70B9\u5B58\u50A8\u6570\u636E,\u9ED8\u8BA4\u5F00\u542F
node.data: true
#\u53EF\u8BBF\u95EEip
http.host: 0.0.0.0
#\u5730\u5740
network.host: 0.0.0.0
# \u8BBE\u7F6E\u8282\u70B9\u95F4\u4EA4\u4E92\u7684tcp\u7AEF\u53E3,\u9ED8\u8BA4\u662F9300
transport.tcp.port: 9302
#\u7AEF\u53E3
http.port: 9402
#\u5185\u5B58\u914D\u7F6E
#http.max_content_length: 100mb 
#bootstrap.memory_lock: true 
# \u96C6\u7FA4\u53D1\u73B0
discovery.seed_hosts: [&quot;47.100.105.191:9301&quot;]
# \u624B\u52A8\u6307\u5B9A\u53EF\u4EE5\u6210\u4E3A mater \u7684\u6240\u6709\u8282\u70B9\u7684 name \u6216\u8005 ip\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u5C06\u4F1A\u5728\u7B2C\u4E00\u6B21\u9009\u4E3E\u4E2D\u8FDB\u884C\u8BA1\u7B97
#cluster.initial_master_nodes: [&quot;47.100.105.191:9301&quot;]
# \u652F\u6301\u8DE8\u57DF\u8BBF\u95EE
http.cors.enabled: true
http.cors.allow-origin: &quot;*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[l];function r(v,t){return e(),i("div",null,a)}const u=n(d,[["render",r],["__file","\u96C6\u7FA4\u914D\u7F6E.html.vue"]]);export{u as default};
