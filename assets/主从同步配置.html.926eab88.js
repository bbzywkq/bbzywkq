import{_ as e,o as n,c as i,a as s}from"./app.234ff118.js";const a={},r=s(`<h1 id="\u4E3B\u4ECE\u540C\u6B65\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u4ECE\u540C\u6B65\u914D\u7F6E" aria-hidden="true">#</a> \u4E3B\u4ECE\u540C\u6B65\u914D\u7F6E</h1><h3 id="\u4E3B\u5E93\u914D\u7F6E\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u5E93\u914D\u7F6E\u4FEE\u6539" aria-hidden="true">#</a> \u4E3B\u5E93\u914D\u7F6E\u4FEE\u6539</h3><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>[mysqld]
server-id=111
log_bin=shouxin
\u6B65\u8FDB\u503Cauto_imcrement\u3002\u4E00\u822C\u6709n\u53F0\u4E3BMySQL\u5C31\u586Bn
auto_increment_increment=2
#\u8BBE\u5B9A\u6570\u636E\u5E93\u4E2D\u81EA\u52A8\u589E\u957F\u7684\u8D77\u70B9\uFF0C\u4E24\u53F0mysql\u7684\u8D77\u70B9\u5FC5\u987B\u4E0D\u540C\uFF0C\u8FD9\u6837\u624D\u80FD\u907F\u514D\u4E24\u53F0\u670D\u52A1\u5668\u540C\u6B65\u65F6\u51FA\u73B0\u4E3B\u952E\u51B2\u7A81
auto_increment_offset=1
#\u6307\u5B9A\u4E0D\u540C\u6B65\u7684\u6570\u636E\u5E93\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u6570\u636E\u5E93\u4E0D\u9700\u8981\u540C\u6B65\u53EF\u4EE5\u591A\u4E2A\u5206\u522B\u58F0\u660E
#binlog-ignore=mysql
#binlog-ignore=information_schema
#binlog-ignore=performance_schema
#\u8981\u540C\u6B65\u7684\u6570\u636E\u5E93\uFF0C\u5982\u679C\u9700\u8981\u5C31\u586B\uFF0C\u6307\u5B9A\u6570\u636E\u5E93\u7684\u540D\u79F0\u5373\u53EF\uFF0C\u9ED8\u8BA4\u4E3A\u6240\u6709\u5E93\uFF0C\u58F0\u660E\u4E86\u4E0D\u540C\u6B65\u5C31\u9ED8\u8BA4\u9664\u4E86\u4E0D\u540C\u6B65\u6570\u636E\u5E93\u610F\u5916\u7684\u6240\u6709\u5E93
#replicate-do-db=
#\u7EA7\u8054\u540C\u6B65\u914D\u7F6E
log-slave-updates
#\u6307\u5B9Autf8\u4E3A\u9ED8\u8BA4\u5B57\u7B26\u96C6
character_set_server=utf8
#\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0Bmysql\u4F1A\u963B\u6B62\u4E3B\u4ECE\u540C\u6B65\u7684\u6570\u636E\u5E93function\u7684\u521B\u5EFA,\u8FD9\u4F1A\u5BFC\u81F4\u6211\u4EEC\u5728\u5BFC\u5165sql\u6587\u4EF6\u65F6\u5982\u679C\u6709\u521B\u5EFAfunction\u6216\u8005\u4F7F\u7528function\u7684\u8BED\u53E5\u5C06\u4F1A\u62A5\u9519
log-bin-trust-function-creators=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4ECE\u5E93\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5E93\u6CE8\u518C" aria-hidden="true">#</a> \u4ECE\u5E93\u6CE8\u518C</h3><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>change master to master_host=&#39;172.17.0.2&#39;,master_port=3306,master_user=&#39;root&#39;,master_password=&#39;123456&#39;,master_log_file=&#39;shouxin.000002&#39;,master_log_pos= 421;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5907\u6CE8\uFF1A master_host\u5BF9\u5E94\u4E3B\u670D\u52A1\u5668\u7684IP\u5730\u5740\uFF0C master_port\u5BF9\u5E94\u4E3B\u670D\u52A1\u5668\u7684\u7AEF\u53E3\uFF0C master_log_file\u5BF9\u5E94show master status\u663E\u793A\u7684File\u5217\uFF1Amaster-bin.000001\uFF0C master_log_pos\u5BF9\u5E94Position\u5217\uFF1A2403\uFF0C \u5426\u5219\u6709\u53EF\u80FD\u51FA\u73B0\u540C\u6B65\u5931\u8D25\u3002</p>`,6),l=[r];function d(t,c){return n(),i("div",null,l)}const m=e(a,[["render",d],["__file","\u4E3B\u4ECE\u540C\u6B65\u914D\u7F6E.html.vue"]]);export{m as default};
