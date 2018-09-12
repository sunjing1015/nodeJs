// 安装   $ npm install ejs --save

//加载ejs模板引擎
var ejs=require("ejs");

/*
    <%=%>  输出数据
    <%#%>  注释
    <%_%>  删除首位空格
    <%-%>  非转义字符
*/ 

var string="吴亦凡<%= a %> <%# regvf%>"
var data={
    a:"帅"
}
//render  渲染   首个参数是html  第二个参数是渲染数据
var html=ejs.render(string,data)
console.log(html);