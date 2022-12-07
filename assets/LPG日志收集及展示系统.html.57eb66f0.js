import{_ as n,o as a,c as s,a as e}from"./app.234ff118.js";const l={},t=e(`<h1 id="lpg\u65E5\u5FD7\u6536\u96C6\u53CA\u5C55\u793A\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#lpg\u65E5\u5FD7\u6536\u96C6\u53CA\u5C55\u793A\u7CFB\u7EDF" aria-hidden="true">#</a> LPG\u65E5\u5FD7\u6536\u96C6\u53CA\u5C55\u793A\u7CFB\u7EDF</h1><h1 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h1><p>LPG\u65E5\u5FD7\u6536\u96C6\u65B9\u6848\u5185\u5B58\u5360\u7528\u5F88\u5C11\uFF0C\u7ECF\u6D4E\u4E14\u9AD8\u6548\uFF01\u5B83\u4E0D\u50CFELK\u65E5\u5FD7\u7CFB\u7EDF\u90A3\u6837\u4E3A\u65E5\u5FD7\u5EFA\u7ACB\u7D22\u5F15\uFF0C\u800C\u662F\u4E3A\u6BCF\u4E2A\u65E5\u5FD7\u6D41\u8BBE\u7F6E\u4E00\u7EC4\u6807\u7B7E\u3002\u4E0B\u9762\u5206\u522B\u4ECB\u7ECD\u4E0B\u5B83\u7684\u6838\u5FC3\u7EC4\u4EF6\uFF1A</p><ul><li>Promtail\uFF1A\u65E5\u5FD7\u6536\u96C6\u5668\uFF0C\u6709\u70B9\u50CFFilebeat\uFF0C\u53EF\u4EE5\u6536\u96C6\u65E5\u5FD7\u6587\u4EF6\u4E2D\u7684\u65E5\u5FD7\uFF0C\u5E76\u628A\u6536\u96C6\u5230\u7684\u6570\u636E\u63A8\u9001\u5230Loki\u4E2D\u53BB\u3002</li><li>Loki\uFF1A\u805A\u5408\u5E76\u5B58\u50A8\u65E5\u5FD7\u6570\u636E\uFF0C\u53EF\u4EE5\u4F5C\u4E3AGrafana\u7684\u6570\u636E\u6E90\uFF0C\u4E3AGrafana\u63D0\u4F9B\u53EF\u89C6\u5316\u6570\u636E\u3002</li><li>Grafana\uFF1A\u4ECELoki\u4E2D\u83B7\u53D6\u65E5\u5FD7\u4FE1\u606F\uFF0C\u8FDB\u884C\u53EF\u89C6\u5316\u5C55\u793A\u3002</li></ul><p><a href="sNK1L4WpLepUqFxHR1KWsO2RnW05cF0DXVefCqUPn_Y.svg">drawio</a></p><h1 id="\u5B89\u88C5-\u5355\u673Adocker\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-\u5355\u673Adocker\u73AF\u5883" aria-hidden="true">#</a> \u5B89\u88C5(\u5355\u673Adocker\u73AF\u5883)</h1><p>\u65B0\u5EFA\u5DE5\u4F5C\u76EE\u5F55/mydata/lpg</p><p>\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6\u5B58\u50A8\u76EE\u5F55\u548Cdocker-compsoe\u542F\u52A8\u6587\u4EF6</p><p><img src="https://file.bbzy.online/blog/6uPH8-DncQnSXicvx53Xzwjy2xAlg5SU0cDvy2-Ml84.png" alt="image"></p><p>\u5177\u4F53\u6587\u4EF6\u5982\u4E0B</p><h2 id="loki\u914D\u7F6E\u6587\u4EF6local-config-yaml" tabindex="-1"><a class="header-anchor" href="#loki\u914D\u7F6E\u6587\u4EF6local-config-yaml" aria-hidden="true">#</a> loki\u914D\u7F6E\u6587\u4EF6local-config.yaml</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">auth_enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">http_listen_port</span><span class="token punctuation">:</span> <span class="token number">3100</span>

<span class="token key atrule">common</span><span class="token punctuation">:</span>
  <span class="token key atrule">path_prefix</span><span class="token punctuation">:</span> /loki
  <span class="token key atrule">storage</span><span class="token punctuation">:</span>
    <span class="token key atrule">filesystem</span><span class="token punctuation">:</span>
      <span class="token key atrule">chunks_directory</span><span class="token punctuation">:</span> /loki/chunks
      <span class="token key atrule">rules_directory</span><span class="token punctuation">:</span> /loki/rules
  <span class="token key atrule">replication_factor</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">ring</span><span class="token punctuation">:</span>
    <span class="token key atrule">instance_addr</span><span class="token punctuation">:</span> 127.0.0.1
    <span class="token key atrule">kvstore</span><span class="token punctuation">:</span>
      <span class="token key atrule">store</span><span class="token punctuation">:</span> inmemory

<span class="token key atrule">schema_config</span><span class="token punctuation">:</span>
  <span class="token key atrule">configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">from</span><span class="token punctuation">:</span> <span class="token datetime number">2020-10-24</span>
      <span class="token key atrule">store</span><span class="token punctuation">:</span> boltdb<span class="token punctuation">-</span>shipper
      <span class="token key atrule">object_store</span><span class="token punctuation">:</span> filesystem
      <span class="token key atrule">schema</span><span class="token punctuation">:</span> v11
      <span class="token key atrule">index</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> index_
        <span class="token key atrule">period</span><span class="token punctuation">:</span> 24h

<span class="token key atrule">ruler</span><span class="token punctuation">:</span>
  <span class="token key atrule">alertmanager_url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">9093</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promtail\u914D\u7F6E\u6587\u4EF6promtail-yml" tabindex="-1"><a class="header-anchor" href="#promtail\u914D\u7F6E\u6587\u4EF6promtail-yml" aria-hidden="true">#</a> promtail\u914D\u7F6E\u6587\u4EF6promtail.yml</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">http_listen_port</span><span class="token punctuation">:</span> <span class="token number">9080</span>
  <span class="token key atrule">grpc_listen_port</span><span class="token punctuation">:</span> <span class="token number">0</span>

<span class="token key atrule">positions</span><span class="token punctuation">:</span>
  <span class="token key atrule">filename</span><span class="token punctuation">:</span> /tmp/positions.yaml
<span class="token comment">#docker\u5185\u90E8\u901A\u8FC7\u5BB9\u5668\u540D\u5B57\u52A0\u7AEF\u53E3\u8C03\u7528loki\u670D\u52A1</span>
<span class="token key atrule">clients</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//loki<span class="token punctuation">:</span>3100/loki/api/v1/push

<span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> system
  <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> localhost
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">job</span><span class="token punctuation">:</span> varlogs
      <span class="token key atrule">__path__</span><span class="token punctuation">:</span> /var/log/<span class="token important">*log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#docker-compose\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> docker-compose\u914D\u7F6E\u6587\u4EF6</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># \u65E5\u5FD7\u5B58\u50A8\u548C\u89E3\u6790</span>
  <span class="token key atrule">loki</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> grafana/loki
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> lpg<span class="token punctuation">-</span>loki
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /mydata/lpg/loki/<span class="token punctuation">:</span>/etc/loki/
    <span class="token comment"># \u4FEE\u6539loki\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>config.file=/etc/loki/local<span class="token punctuation">-</span>config.yaml
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3100<span class="token punctuation">:</span><span class="token number">3100</span>

  <span class="token comment"># \u65E5\u5FD7\u6536\u96C6\u5668</span>
  <span class="token key atrule">promtail</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> grafana/promtail
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> lpg<span class="token punctuation">-</span>promtail
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment"># \u5C06\u9700\u8981\u6536\u96C6\u7684\u65E5\u5FD7\u6240\u5728\u76EE\u5F55\u6302\u8F7D\u5230promtail\u5BB9\u5668\u4E2D</span>
      <span class="token punctuation">-</span> /var/log/nginx/<span class="token punctuation">:</span>/var/log/
      <span class="token punctuation">-</span> /mydata/lpg/promtail/<span class="token punctuation">:</span>/etc/promtail/
    <span class="token comment"># \u4FEE\u6539promtail\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>config.file=/etc/promtail/promtail.yml

  <span class="token comment"># \u65E5\u5FD7\u53EF\u89C6\u5316</span>
  <span class="token key atrule">grafana</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> grafana/grafana
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> lpg<span class="token punctuation">-</span>grafana
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E5\u5FD7\u7684\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u7684\u67E5\u770B" aria-hidden="true">#</a> \u65E5\u5FD7\u7684\u67E5\u770B</h2><p>\u767B\u5F55\u5730\u5740\uFF1A39.104.59.218:3000</p>`,18),i=[t];function p(c,o){return a(),s("div",null,i)}const r=n(l,[["render",p],["__file","LPG\u65E5\u5FD7\u6536\u96C6\u53CA\u5C55\u793A\u7CFB\u7EDF.html.vue"]]);export{r as default};
