import{_ as e,o as n,c as s,a as i}from"./app.234ff118.js";const l={},c=i(`<h1 id="\u8BC1\u4E66\u6587\u4EF6\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u8BC1\u4E66\u6587\u4EF6\u5904\u7406" aria-hidden="true">#</a> \u8BC1\u4E66\u6587\u4EF6\u5904\u7406</h1><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>#\u751F\u6210ca\u79C1\u94A5
openssl genrsa 2048 &gt; ca.key
 
#\u4F7F\u7528ca\u79C1\u94A5\u5EFA\u7ACBca\u8BC1\u4E66
openssl req -new -x509 -nodes -key ca.key -subj /CN=elkCA\\ CA/OU=Development\\ group/O=HomeIT\\ SIA/DC=elk/DC=com &gt; ca.crt
 
#\u751F\u6210\u670D\u52A1\u5668csr\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6
openssl req -newkey rsa:2048 -nodes -keyout server.key -subj /CN=logstash.server.com/OU=Development\\ group/O=Home\\ SIA/DC=elk/DC=com &gt; server.csr
 
#\u4F7F\u7528ca\u8BC1\u4E66\u4E0E\u79C1\u94A5\u7B7E\u53D1\u670D\u52A1\u5668\u8BC1\u4E66
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 &gt; server.crt
 
#\u751F\u6210\u5BA2\u6237\u7AEFcsr\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6
openssl req -newkey rsa:2048 -nodes -keyout client.key -subj /CN=filebeat.client.com/OU=Development\\ group/O=Home\\ SIA/DC=elk/DC=com &gt; client.csr
 
#\u4F7F\u7528ca\u8BC1\u4E66\u4E0E\u79C1\u94A5\u7B7E\u53D1\u5BA2\u6237\u7AEF\u8BC1\u4E66
openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -set_serial 01 &gt; client.crt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[c];function a(d,v){return n(),s("div",null,r)}const o=e(l,[["render",a],["__file","\u8BC1\u4E66\u6587\u4EF6\u5904\u7406.html.vue"]]);export{o as default};
