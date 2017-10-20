// import html from './html.ejs';
// import index from './index.ejs';
let html=require('./html.ejs');
let index=require('./index.ejs');

/***
 * 语法说明：
 * 1 webpack html-webpack-plugin 插件讲本文输出的 对象index 转换为html代码，及html.js转换为 index.html
 * 2 专业页面是index.ejs 可以添加多个魔板文件例如 html.ejs ，添加到index()参数对象中去，格式（模板文件：模板方法/在主页面名称+（参数）
 *   如果没有参数可传递 直接写模板名称：在主页面名称
 * 3 模板中获取的参数： 在index.ejs中引入其他末班直接输入<%=模板名字%> 。如果没有参数传入需要加入();因为此时已经是方法
 */

module.exports=index({
    html:html({name:'ejs+node success!',arr:['a','b','c']})
});