import{_ as e,o as i,c as a,a as n}from"./app.234ff118.js";const s={},l=n(`<h1 id="mysql\u8D26\u6237\u6743\u9650\u4E22\u5931\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#mysql\u8D26\u6237\u6743\u9650\u4E22\u5931\u95EE\u9898" aria-hidden="true">#</a> mysql\u8D26\u6237\u6743\u9650\u4E22\u5931\u95EE\u9898</h1><h3 id="mysql-root\u6743\u9650\u4E22\u5931\u53EA\u80FD\u770B\u5230information-schema\u6570\u636E\u5E93\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#mysql-root\u6743\u9650\u4E22\u5931\u53EA\u80FD\u770B\u5230information-schema\u6570\u636E\u5E93\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> mysql root\u6743\u9650\u4E22\u5931\u53EA\u80FD\u770B\u5230information_schema\u6570\u636E\u5E93\u89E3\u51B3\u529E\u6CD5</h3><h4 id="\u6B64\u95EE\u9898\u53D1\u751F\u5728\u79FB\u52A8\u4E86-\u6570\u636E\u5E93\u78C1\u76D8\u6587\u4EF6\u540E" tabindex="-1"><a class="header-anchor" href="#\u6B64\u95EE\u9898\u53D1\u751F\u5728\u79FB\u52A8\u4E86-\u6570\u636E\u5E93\u78C1\u76D8\u6587\u4EF6\u540E" aria-hidden="true">#</a> \u6B64\u95EE\u9898\u53D1\u751F\u5728\u79FB\u52A8\u4E86 \u6570\u636E\u5E93\u78C1\u76D8\u6587\u4EF6\u540E</h4><h3 id="\u6388\u6743\u5F52\u5C5E" tabindex="-1"><a class="header-anchor" href="#\u6388\u6743\u5F52\u5C5E" aria-hidden="true">#</a> \u6388\u6743\u5F52\u5C5E</h3><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>chown -R mysql:mysql /data/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>vi /etc/my.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6587\u4EF6\u6700\u540E\u4E00\u884C\u6DFB\u52A0</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>--\u5173\u95ED\u6574\u4E2A\u5E93\u7684\u6743\u9650\u9A8C\u8BC1
skip-grant-tables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u540E\uFF0Croot\u6743\u9650\u767B\u5F55\uFF0C\u8FD0\u884C service mysqld restart \u91CD\u542Fmysql \u767B\u5F55</p><p>\u5728\u7EC8\u7AEF\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>mysql&gt; use mysql
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed
mysql&gt; use mysql;
Database changed
mysql&gt; flush privileges;
Query OK, 0 rows affected (0.01 sec)
mysql&gt; grant all privileges on *.* to root@localhost identified by &#39;wkqdmm&#39;;
Query OK, 0 rows affected, 1 warning (0.01 sec)
mysql&gt; flush privileges;
Query OK, 0 rows affected (0.01 sec)
mysql&gt; exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>\u91CD\u65B0\u542F\u52A8\uFF1A
service mysqld restart
\u67E5\u770B\u5386\u53F2\u6743\u9650/\u5982\u5386\u53F2\u6743\u9650\u65E0\u6548\u5219\u91CD\u65B0\u6388\u6743
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[l];function r(c,t){return i(),a("div",null,d)}const o=e(s,[["render",r],["__file","mysql\u8D26\u6237\u6743\u9650\u4E22\u5931\u95EE\u9898.html.vue"]]);export{o as default};
