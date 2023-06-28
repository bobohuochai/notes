
### XSS (Cross Site Script) 跨站脚本攻击

1. 输入过滤  增加一些格式验证
1. 纯静态渲染 SAP 
2. 服务器输出html 进行转义 escapeHTML
3. javascript语法本身不严谨， DOM 中的内联事件监听器 onerror, onclick 第三方库 xss, sanitize-url,vue v-html 
4. httponly cookie
5. csp 白名单 禁止加载外域代码，防止复杂的攻击逻辑
   

### CSRF（Cross Site Request Forgery) 跨站请求伪造
1. 验证码 关键业务点设置验证码
2. HTTP Referer check



### 参考
* https://blog.csdn.net/a401461843/article/details/77622299
* https://juejin.cn/post/6844903685122703367
