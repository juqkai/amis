amis.define('docs/zh-CN/concepts/expression.md', function(require, exports, module, define) {

  module.exports = {
    "title": "表达式",
    "description": null,
    "type": 0,
    "group": "💡 概念",
    "menuName": "表达式",
    "icon": null,
    "order": 13,
    "html": "<div class=\"markdown-body\"><p>一般来说，属性名类似于<code>xxxOn</code> 或者 <code>className</code> 的配置项，都可以使用表达式进行配置，表达式具有如下的语法：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"tpl\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"tpl\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"当前作用域中变量 show 是 1 的时候才可以看得到我哦~\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"visibleOn\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"this.show === 1\"</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>其中：<code>this.show === 1</code> 就是表达式。</p>\n<h2><a class=\"anchor\" name=\"%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%AF%AD%E6%B3%95\" href=\"#%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%AF%AD%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>表达式语法</h2><blockquote>\n<p>表达式语法实际上是 JavaScript 代码，更多 JavaScript 知识查看 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript\">这里</a>。</p>\n<p>表达式中不要使用<code>${xxx}</code>语法，这个是数据映射的语法规则，不要搞混淆了！</p>\n</blockquote>\n<p>在 amis 的实现过程中，当正则匹配到某个组件存在<code>xxxOn</code>语法的属性名时，会尝试进行下面步骤（以上面配置为例）：</p>\n<ol>\n<li>提取<code>visibleOn</code>配置项配置的 JavaScript 语句<code>this.show === 1</code>，并以当前组件的数据域为这段代码的数据作用域，执行这段 js 代码；</li>\n<li>之后将执行结果赋值给<code>visible</code>并添加到组件属性中</li>\n<li>执行渲染。当前示例中：<code>visible</code>代表着是否显示当前组件；</li>\n</ol>\n<p>组件不同的配置项会有不同的效果，请大家在组件文档中多留意。</p>\n<blockquote>\n<p>表达式的执行结果预期应该是<code>boolean</code>类型值，如果不是，amis 会根据 JavaScript 的规则将结果视作<code>boolean</code>类型进行判断</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E6%96%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%AF%AD%E6%B3%95\" href=\"#%E6%96%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%AF%AD%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>新表达式语法</h2><blockquote>\n<p>1.5.0 及以上版本</p>\n</blockquote>\n<p>原来的表达式用的就是原生 js，灵活性虽大，但是安全性不佳，为了与后端公式保持统一，故引入了新的规则，如：<code>${这里是表达式}</code>，也就是说如果开始字符是 <code>${</code> 且 <code>}</code> 结尾则认为是新版本的表达式。这个规则与模板中的语法保持一致。</p>\n<ul>\n<li><code>${a == 1}</code> 变量 a 是否和 1 相等</li>\n<li><code>${a % 2}</code> 变量 a 是否为偶数。</li>\n</ul>\n<p>表达式中的语法与默认模板中的语法保持一致，所以以下示例直接用模板来方便呈现结果。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"a\": 1,\n    \"key\": \"y\",\n    \"obj\": {\n      \"x\": 2,\n      \"y\": 3\n    }\n  },\n  \"body\": [\n    \"a is ${a} <br />\",\n    \"a + 1 is ${a + 1} <br />\",\n    \"obj.x is ${obj.x} <br />\",\n    \"obj['x'] is ${obj['x']} <br />\",\n    \"obj[key] is ${obj[key]} <br />\"\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E5%85%AC%E5%BC%8F\" href=\"#%E5%85%AC%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>公式</h3><p>除了支持简单表达式外，还集成了很多公式(函数)如：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"a\": \"\"\n  },\n  \"body\": \"1, 2, 3, 4 的平均数位 ${ AVG(1, 2, 3, 4)}\"\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%80%BB%E8%BE%91%E5%87%BD%E6%95%B0\" href=\"#%E9%80%BB%E8%BE%91%E5%87%BD%E6%95%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>逻辑函数</h2><p>可以通过条件函数，也可以直接用三元表达式如：<code>${ 语文成绩 &gt; 80 ? &quot;优秀&quot; : &quot;继续努力&quot; }</code></p>\n<h3><a class=\"anchor\" name=\"if\" href=\"#if\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>IF</h3><p>判断函数，语法：IF(判断条件, 符合条件时返回值, 不符合条件时返回值)</p>\n<p><code>IF(语文成绩 &gt; 80, &quot;优秀&quot;, &quot;继续努力&quot;)</code> 如果语文成绩大于 80，则返回优秀，否则返回继续努力`</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"语文成绩\": 81\n  },\n  \"body\": \"当前成绩：${IF(语文成绩 > 80, '优秀', '继续努力')}\"\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"and\" href=\"#and\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>AND</h3><p>条件全部符合，返回 true，否则返回 false</p>\n<p>如：AND(条件 1, 条件 2)</p>\n<p><code>AND(语文成绩&gt;80, 数学成绩&gt;80)</code> 语文成绩和数学成绩都大于 80，则返回 true，否则返回 false</p>\n<h3><a class=\"anchor\" name=\"or\" href=\"#or\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>OR</h3><p>条件符合其中一个，返回 true，如果条件全部都不符合，则返回 false</p>\n<p><code>OR(语文成绩&gt;80, 数学成绩&gt;80)</code> 语文成绩或者数学成绩有一门大于 80，则返回 true，如果两门都小于 80，则返回 false</p>\n<h3><a class=\"anchor\" name=\"xor\" href=\"#xor\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>XOR</h3><p>异或处理，如果两个条件相同，则返回 false，否则返回 true</p>\n<p><code>XOR(语文成绩&gt;80, 数学成绩&gt;80)</code> 语文成绩与数学成绩都大于 80 或者都小于 80，则返回 false，否则返回 true</p>\n<h3><a class=\"anchor\" name=\"ifs\" href=\"#ifs\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>IFS</h3><p>判断函数集合，相当于多个 else if 合并成一个</p>\n<p><code>IFS(语文成绩 &gt; 80, &quot;优秀&quot;, 语文成绩 &gt; 60, &quot;良&quot;, &quot;继续努力&quot;)</code> 如果语文成绩大于 80，则返回优秀，否则判断大于 60 分，则返回良，否则返回继续努力。</p>\n<h2><a class=\"anchor\" name=\"%E6%95%B0%E5%AD%A6%E5%87%BD%E6%95%B0\" href=\"#%E6%95%B0%E5%AD%A6%E5%87%BD%E6%95%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>数学函数</h2><h3><a class=\"anchor\" name=\"abs\" href=\"#abs\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ABS</h3><p>返回数字 number 的绝对值</p>\n<p><code>ABS(-8)</code>结果为 8， <code>ABS(40)</code>结果为 40。</p>\n<h3><a class=\"anchor\" name=\"max\" href=\"#max\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>MAX</h3><p>获取最大值</p>\n<p><code>MAX(语文成绩, 数学成绩)</code> 那个分数高返回哪个。</p>\n<h3><a class=\"anchor\" name=\"min\" href=\"#min\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>MIN</h3><p>获取最小值</p>\n<p><code>MIN(数值1, 数值2, 数值3)</code></p>\n<h3><a class=\"anchor\" name=\"sum\" href=\"#sum\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>SUM</h3><p>求和</p>\n<p><code>SUM(数值1, 数值2, 数值3)</code></p>\n<h3><a class=\"anchor\" name=\"int\" href=\"#int\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>INT</h3><p>将数字(number)向下取整为最接近的整数</p>\n<p><code>INT(number)</code></p>\n<h3><a class=\"anchor\" name=\"mod\" href=\"#mod\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>MOD</h3><p>返回两数相除的余数，参数 number 是被除数，divisor 是除数</p>\n<p><code>MOD(number,divisor)</code></p>\n<h3><a class=\"anchor\" name=\"pi\" href=\"#pi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>PI</h3><p>圆周率 3.1415...</p>\n<p><code>PI()</code></p>\n<h3><a class=\"anchor\" name=\"round\" href=\"#round\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ROUND</h3><p>将数字四舍五入到指定的位数，number 为要处理的数字，num_digits 为指定小数位数</p>\n<p><code>ROUND(number, num_digits)</code></p>\n<h3><a class=\"anchor\" name=\"sqrt\" href=\"#sqrt\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>SQRT</h3><p>开平方，参数 number 为非负数</p>\n<p><code>SQRT(number)</code></p>\n<h3><a class=\"anchor\" name=\"avg\" href=\"#avg\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>AVG</h3><p>返回所有参数的平均值，参数 v 是子表的某一个数字控件</p>\n<p><code>AVG(数值1, 数字2)</code></p>\n<h3><a class=\"anchor\" name=\"uppermoney\" href=\"#uppermoney\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>UPPERMONEY</h3><p>将数值转为中文大写金额</p>\n<p><code>UPPERMONEY(数值)</code></p>\n<h3><a class=\"anchor\" name=\"rand\" href=\"#rand\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>RAND</h3><p>返回大于等于 0 且小于 1 的均匀分布随机实数。每一次触发计算都会变化。</p>\n<p><code>RAND()*100</code> 返回 0-100 之间的随机数</p>\n<h2><a class=\"anchor\" name=\"%E6%96%87%E6%9C%AC%E5%87%BD%E6%95%B0\" href=\"#%E6%96%87%E6%9C%AC%E5%87%BD%E6%95%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>文本函数</h2><h3><a class=\"anchor\" name=\"left\" href=\"#left\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>LEFT</h3><p>返回文本中第一个字符到指定个数的字符</p>\n<p><code>LEFT(文本, 长度)</code></p>\n<h3><a class=\"anchor\" name=\"right\" href=\"#right\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>RIGHT</h3><p>从文本右侧获取指定个数的字符文本</p>\n<p><code>RIGHT(文本, 长度)</code></p>\n<h3><a class=\"anchor\" name=\"len\" href=\"#len\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>LEN</h3><p>计算文本的长度</p>\n<p><code>LEN(文本)</code></p>\n<h3><a class=\"anchor\" name=\"isempty\" href=\"#isempty\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ISEMPTY</h3><p>判断值是否为空字符串、空对象或者空数组。</p>\n<p><code>ISEMPTY(变量)</code></p>\n<h3><a class=\"anchor\" name=\"concatenate\" href=\"#concatenate\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>CONCATENATE</h3><p>将多个文本字符串合并成一个文本字符串。建议直接用 `` 字符模板</p>\n<p><code>CONCATENATE(A,B,C)</code></p>\n<h3><a class=\"anchor\" name=\"char\" href=\"#char\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>CHAR</h3><p>返回计算机字符集的数字代码所对应的字符。</p>\n<p><code>CHAR(10)</code></p>\n<h3><a class=\"anchor\" name=\"lower\" href=\"#lower\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>LOWER</h3><p>将一个文本字符串中的所有大写字母转换为小写字母。</p>\n<p><code>LOWER(&quot;ABC&quot;)</code></p>\n<h3><a class=\"anchor\" name=\"upper\" href=\"#upper\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>UPPER</h3><p>将一个文本字符串中的所有小写字母转换为大写字母。</p>\n<p><code>LOWER(&quot;abc&quot;)</code>，返回 ABC</p>\n<h3><a class=\"anchor\" name=\"split\" href=\"#split\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>SPLIT</h3><p>将文本按指定字符串分割成数组。</p>\n<p><code>SPLIT(&quot;a,b,c&quot;, &quot;,&quot;)</code> 返回 <code>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code></p>\n<h3><a class=\"anchor\" name=\"trim\" href=\"#trim\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>TRIM</h3><p>删除字符串首尾的空格</p>\n<p><code>TRIM(&quot; ab c &quot;)</code> 返回 <code>&quot;ab c&quot;</code></p>\n<h3><a class=\"anchor\" name=\"startswith\" href=\"#startswith\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>STARTSWITH</h3><p>判断字符串(text)是否以特定字符串(startString)开始，是则返回 True，否则返回 False</p>\n<p><code>STARTSWITH(text, &quot;abc&quot;)</code> 当 text 是“abc”开头时，返回为“true”，否则返回“false”</p>\n<h3><a class=\"anchor\" name=\"contains\" href=\"#contains\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>CONTAINS</h3><p>判断参数 1 中的文本是否包含参数 2 中的文本。</p>\n<p><code>CONTAINS(&quot;abcdefg&quot;, &quot;ab&quot;)</code></p>\n<h3><a class=\"anchor\" name=\"replace\" href=\"#replace\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>REPLACE</h3><p>使用其他文本字符串并根据所指定的字符数替换某文本字符串中的部分文本，old_text 为某文本字符串，start_num 为要替换的起始位置编号，num_chars 为要替换的字符个数，new_text 为替换后的字符串</p>\n<p><code>REPLACE(old_text,start_num,num_chars,new_text)</code></p>\n<h3><a class=\"anchor\" name=\"search\" href=\"#search\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>SEARCH</h3><p>返回文本字符串 find_text 在指定字符串 within_text 中出现的起始位置编号，未找到则返回-1（忽略大小写），其中 start_num 为在 within_text 中第几个位置开始查找</p>\n<p><code>SEARCH(find,text,start)</code></p>\n<h3><a class=\"anchor\" name=\"mid\" href=\"#mid\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>MID</h3><p>返回文本字符串中从指定位置开始的特定数目的字符，text 为文本字符串，start_num 为指定开始位置，num_chars 为特定数目</p>\n<p><code>MID(text,start_num,num_chars)</code></p>\n<h2><a class=\"anchor\" name=\"%E6%97%A5%E6%9C%9F%E5%87%BD%E6%95%B0\" href=\"#%E6%97%A5%E6%9C%9F%E5%87%BD%E6%95%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>日期函数</h2><h3><a class=\"anchor\" name=\"date\" href=\"#date\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>DATE</h3><p>返回日期对象</p>\n<p><code>DATE(year,month,day,[hour,minute,second])</code></p>\n<h3><a class=\"anchor\" name=\"strtodate\" href=\"#strtodate\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>STRTODATE</h3><p>字符文本转成日期对象</p>\n<p><code>STRTODATE(&quot;2021-11-29&quot;, &quot;YYYY-MM-DD&quot;)</code></p>\n<h3><a class=\"anchor\" name=\"datetostr\" href=\"#datetostr\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>DATETOSTR</h3><p>将日期对象按格式转成日期字符</p>\n<p><code>DATETOSTR(date, &quot;YYYY-MM-DD&quot;)</code></p>\n<h3><a class=\"anchor\" name=\"timestamp\" href=\"#timestamp\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>TIMESTAMP</h3><p>返回时间的时间戳</p>\n<p><code>TIMESTAMP(date)</code></p>\n<h3><a class=\"anchor\" name=\"today\" href=\"#today\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>TODAY</h3><p>返回今天。</p>\n<p><code>TODAY()</code></p>\n<h3><a class=\"anchor\" name=\"now\" href=\"#now\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>NOW</h3><p>返回现在。</p>\n<p><code>NOW()</code></p>\n<h3><a class=\"anchor\" name=\"startof\" href=\"#startof\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>STARTOF</h3><p>返回日期的指定范围的开端</p>\n<p><code>STARTOF(date, &quot;day&quot;)</code> 返回日期的开头 00:00:00</p>\n<h3><a class=\"anchor\" name=\"endof\" href=\"#endof\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ENDOF</h3><p>返回日期的指定范围的结尾</p>\n<p><code>ENDOF(TODAY(), &quot;day&quot;)</code> 返回今天的的结尾 23:59:59</p>\n<h3><a class=\"anchor\" name=\"year\" href=\"#year\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>YEAR</h3><p>返回某日期的年份。</p>\n<p><code>YEAR(date)</code></p>\n<h3><a class=\"anchor\" name=\"month\" href=\"#month\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>MONTH</h3><p>返回某日期的月份。 月份是介于 1 到 12 之间的整数。</p>\n<p><code>MONTH(date)</code></p>\n<h3><a class=\"anchor\" name=\"day\" href=\"#day\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>DAY</h3><p>返回某日期的天数。 天数是介于 1 到 31 之间的整数。</p>\n<p><code>DAY(date)</code></p>\n<h3><a class=\"anchor\" name=\"hour\" href=\"#hour\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>HOUR</h3><p>返回某日期的小时数。</p>\n<p><code>HOUR(date)</code></p>\n<h3><a class=\"anchor\" name=\"minute\" href=\"#minute\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>MINUTE</h3><p>返回某日期的分钟数。</p>\n<p><code>MINUTE(date)</code></p>\n<h3><a class=\"anchor\" name=\"second\" href=\"#second\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>SECOND</h3><p>返回某日期的秒数。</p>\n<p><code>SECOND(date)</code></p>\n<h3><a class=\"anchor\" name=\"years\" href=\"#years\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>YEARS</h3><p>返回两个日期之间的年数差值</p>\n<p><code>YEARS(endDate, startDate)</code></p>\n<h3><a class=\"anchor\" name=\"minutes\" href=\"#minutes\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>MINUTES</h3><p>返回两个时间之间的分钟数。</p>\n<p><code>MINUTES(endDate,startDate)</code></p>\n<h3><a class=\"anchor\" name=\"days\" href=\"#days\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>DAYS</h3><p>返回两个日期之间的天数。</p>\n<p><code>DAYS(endDate, startDate)</code></p>\n<h3><a class=\"anchor\" name=\"workdays\" href=\"#workdays\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>WORKDAYS</h3><p>返回两个日期之间的工作日天数。</p>\n<p><code>WORKDAYS(endDate, startDate)</code></p>\n<h3><a class=\"anchor\" name=\"hours\" href=\"#hours\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>HOURS</h3><p>返回两个日期之间的小时数。</p>\n<p><code>DAYS(endDate, startDate)</code></p>\n<h3><a class=\"anchor\" name=\"datemodify\" href=\"#datemodify\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>DATEMODIFY</h3><p>修改日期</p>\n<p><code>DATEMODIFY(date, 2, &quot;days&quot;)</code> 在已有变量的基础上加 2 天，第三个参数支持各种单位。</p>\n<h3><a class=\"anchor\" name=\"isbefore\" href=\"#isbefore\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ISBEFORE</h3><p>日期比较</p>\n<p><code>ISBEFORE(a, b)</code> 比较第一个日期是否在第二个日期前面</p>\n<h3><a class=\"anchor\" name=\"issameorbefore\" href=\"#issameorbefore\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ISSAMEORBEFORE</h3><p>日期比较</p>\n<p><code>ISSAMEORBEFORE(a, b)</code> 比较第一个日期是否在第二个日期前面，或者相同</p>\n<h3><a class=\"anchor\" name=\"isafter\" href=\"#isafter\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ISAFTER</h3><p>日期比较</p>\n<p><code>ISAFTER(a, b)</code> 比较第一个日期是否在第二个日期后面</p>\n<h3><a class=\"anchor\" name=\"issameorafter\" href=\"#issameorafter\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ISSAMEORAFTER</h3><p>日期比较</p>\n<p><code>ISSAMEORAFTER(a, b)</code> 比较第一个日期是否在第二个日期后面，或者相同</p>\n<h2><a class=\"anchor\" name=\"%E5%85%B6%E4%BB%96\" href=\"#%E5%85%B6%E4%BB%96\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>其他</h2><h3><a class=\"anchor\" name=\"count\" href=\"#count\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>COUNT</h3><p>返回数组长度</p>\n<p><code>COUNT(value)</code></p>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "表达式语法",
          "fragment": "%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%AF%AD%E6%B3%95",
          "fullPath": "#%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%AF%AD%E6%B3%95",
          "level": 2
        },
        {
          "label": "新表达式语法",
          "fragment": "%E6%96%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%AF%AD%E6%B3%95",
          "fullPath": "#%E6%96%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%AF%AD%E6%B3%95",
          "level": 2,
          "children": [
            {
              "label": "公式",
              "fragment": "%E5%85%AC%E5%BC%8F",
              "fullPath": "#%E5%85%AC%E5%BC%8F",
              "level": 3
            }
          ]
        },
        {
          "label": "逻辑函数",
          "fragment": "%E9%80%BB%E8%BE%91%E5%87%BD%E6%95%B0",
          "fullPath": "#%E9%80%BB%E8%BE%91%E5%87%BD%E6%95%B0",
          "level": 2,
          "children": [
            {
              "label": "IF",
              "fragment": "if",
              "fullPath": "#if",
              "level": 3
            },
            {
              "label": "AND",
              "fragment": "and",
              "fullPath": "#and",
              "level": 3
            },
            {
              "label": "OR",
              "fragment": "or",
              "fullPath": "#or",
              "level": 3
            },
            {
              "label": "XOR",
              "fragment": "xor",
              "fullPath": "#xor",
              "level": 3
            },
            {
              "label": "IFS",
              "fragment": "ifs",
              "fullPath": "#ifs",
              "level": 3
            }
          ]
        },
        {
          "label": "数学函数",
          "fragment": "%E6%95%B0%E5%AD%A6%E5%87%BD%E6%95%B0",
          "fullPath": "#%E6%95%B0%E5%AD%A6%E5%87%BD%E6%95%B0",
          "level": 2,
          "children": [
            {
              "label": "ABS",
              "fragment": "abs",
              "fullPath": "#abs",
              "level": 3
            },
            {
              "label": "MAX",
              "fragment": "max",
              "fullPath": "#max",
              "level": 3
            },
            {
              "label": "MIN",
              "fragment": "min",
              "fullPath": "#min",
              "level": 3
            },
            {
              "label": "SUM",
              "fragment": "sum",
              "fullPath": "#sum",
              "level": 3
            },
            {
              "label": "INT",
              "fragment": "int",
              "fullPath": "#int",
              "level": 3
            },
            {
              "label": "MOD",
              "fragment": "mod",
              "fullPath": "#mod",
              "level": 3
            },
            {
              "label": "PI",
              "fragment": "pi",
              "fullPath": "#pi",
              "level": 3
            },
            {
              "label": "ROUND",
              "fragment": "round",
              "fullPath": "#round",
              "level": 3
            },
            {
              "label": "SQRT",
              "fragment": "sqrt",
              "fullPath": "#sqrt",
              "level": 3
            },
            {
              "label": "AVG",
              "fragment": "avg",
              "fullPath": "#avg",
              "level": 3
            },
            {
              "label": "UPPERMONEY",
              "fragment": "uppermoney",
              "fullPath": "#uppermoney",
              "level": 3
            },
            {
              "label": "RAND",
              "fragment": "rand",
              "fullPath": "#rand",
              "level": 3
            }
          ]
        },
        {
          "label": "文本函数",
          "fragment": "%E6%96%87%E6%9C%AC%E5%87%BD%E6%95%B0",
          "fullPath": "#%E6%96%87%E6%9C%AC%E5%87%BD%E6%95%B0",
          "level": 2,
          "children": [
            {
              "label": "LEFT",
              "fragment": "left",
              "fullPath": "#left",
              "level": 3
            },
            {
              "label": "RIGHT",
              "fragment": "right",
              "fullPath": "#right",
              "level": 3
            },
            {
              "label": "LEN",
              "fragment": "len",
              "fullPath": "#len",
              "level": 3
            },
            {
              "label": "ISEMPTY",
              "fragment": "isempty",
              "fullPath": "#isempty",
              "level": 3
            },
            {
              "label": "CONCATENATE",
              "fragment": "concatenate",
              "fullPath": "#concatenate",
              "level": 3
            },
            {
              "label": "CHAR",
              "fragment": "char",
              "fullPath": "#char",
              "level": 3
            },
            {
              "label": "LOWER",
              "fragment": "lower",
              "fullPath": "#lower",
              "level": 3
            },
            {
              "label": "UPPER",
              "fragment": "upper",
              "fullPath": "#upper",
              "level": 3
            },
            {
              "label": "SPLIT",
              "fragment": "split",
              "fullPath": "#split",
              "level": 3
            },
            {
              "label": "TRIM",
              "fragment": "trim",
              "fullPath": "#trim",
              "level": 3
            },
            {
              "label": "STARTSWITH",
              "fragment": "startswith",
              "fullPath": "#startswith",
              "level": 3
            },
            {
              "label": "CONTAINS",
              "fragment": "contains",
              "fullPath": "#contains",
              "level": 3
            },
            {
              "label": "REPLACE",
              "fragment": "replace",
              "fullPath": "#replace",
              "level": 3
            },
            {
              "label": "SEARCH",
              "fragment": "search",
              "fullPath": "#search",
              "level": 3
            },
            {
              "label": "MID",
              "fragment": "mid",
              "fullPath": "#mid",
              "level": 3
            }
          ]
        },
        {
          "label": "日期函数",
          "fragment": "%E6%97%A5%E6%9C%9F%E5%87%BD%E6%95%B0",
          "fullPath": "#%E6%97%A5%E6%9C%9F%E5%87%BD%E6%95%B0",
          "level": 2,
          "children": [
            {
              "label": "DATE",
              "fragment": "date",
              "fullPath": "#date",
              "level": 3
            },
            {
              "label": "STRTODATE",
              "fragment": "strtodate",
              "fullPath": "#strtodate",
              "level": 3
            },
            {
              "label": "DATETOSTR",
              "fragment": "datetostr",
              "fullPath": "#datetostr",
              "level": 3
            },
            {
              "label": "TIMESTAMP",
              "fragment": "timestamp",
              "fullPath": "#timestamp",
              "level": 3
            },
            {
              "label": "TODAY",
              "fragment": "today",
              "fullPath": "#today",
              "level": 3
            },
            {
              "label": "NOW",
              "fragment": "now",
              "fullPath": "#now",
              "level": 3
            },
            {
              "label": "STARTOF",
              "fragment": "startof",
              "fullPath": "#startof",
              "level": 3
            },
            {
              "label": "ENDOF",
              "fragment": "endof",
              "fullPath": "#endof",
              "level": 3
            },
            {
              "label": "YEAR",
              "fragment": "year",
              "fullPath": "#year",
              "level": 3
            },
            {
              "label": "MONTH",
              "fragment": "month",
              "fullPath": "#month",
              "level": 3
            },
            {
              "label": "DAY",
              "fragment": "day",
              "fullPath": "#day",
              "level": 3
            },
            {
              "label": "HOUR",
              "fragment": "hour",
              "fullPath": "#hour",
              "level": 3
            },
            {
              "label": "MINUTE",
              "fragment": "minute",
              "fullPath": "#minute",
              "level": 3
            },
            {
              "label": "SECOND",
              "fragment": "second",
              "fullPath": "#second",
              "level": 3
            },
            {
              "label": "YEARS",
              "fragment": "years",
              "fullPath": "#years",
              "level": 3
            },
            {
              "label": "MINUTES",
              "fragment": "minutes",
              "fullPath": "#minutes",
              "level": 3
            },
            {
              "label": "DAYS",
              "fragment": "days",
              "fullPath": "#days",
              "level": 3
            },
            {
              "label": "WORKDAYS",
              "fragment": "workdays",
              "fullPath": "#workdays",
              "level": 3
            },
            {
              "label": "HOURS",
              "fragment": "hours",
              "fullPath": "#hours",
              "level": 3
            },
            {
              "label": "DATEMODIFY",
              "fragment": "datemodify",
              "fullPath": "#datemodify",
              "level": 3
            },
            {
              "label": "ISBEFORE",
              "fragment": "isbefore",
              "fullPath": "#isbefore",
              "level": 3
            },
            {
              "label": "ISSAMEORBEFORE",
              "fragment": "issameorbefore",
              "fullPath": "#issameorbefore",
              "level": 3
            },
            {
              "label": "ISAFTER",
              "fragment": "isafter",
              "fullPath": "#isafter",
              "level": 3
            },
            {
              "label": "ISSAMEORAFTER",
              "fragment": "issameorafter",
              "fullPath": "#issameorafter",
              "level": 3
            }
          ]
        },
        {
          "label": "其他",
          "fragment": "%E5%85%B6%E4%BB%96",
          "fullPath": "#%E5%85%B6%E4%BB%96",
          "level": 2,
          "children": [
            {
              "label": "COUNT",
              "fragment": "count",
              "fullPath": "#count",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
