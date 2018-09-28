//加载express   作用：配置路由，编写接口
var express=require("express");
//作用：解析路径
var path=require("path");
//调用express方法
var app=express();
//链接数据库
var db=require("./model/db");
//后期保存信息
var session=require("express-session"); 
// 路由  接口的跳转
var router=require("express-router")     
var flash=require("connect-flash");
//执行接口文件
var index=require("./index");
var bodyparser=require("body-parser");
var cookie=require("cookie-parser");
app.use(cookie())
//处理post请求
// 处理json数据
app.use(bodyparser.json())
app.use(flash())
//处理字符窜
app.use(bodyparser.urlencoded({extended:true}))
//使用加载静态资源目录
app.use(express.static(path.join(__dirname,"static")))
//  Handler/AdminHandler
app.use("/Handler",index)
//使用session
app.use(session({
    secret:"fcht",    //链接sessionid
    name:"fcht",      //session名称
    "cookie":{maxAge:90000},    //最大存储数量
    resave:false,    //是否重新获取
    saveUninitialized:false    //是否自动保存为初始化的内容
}))
//node解决跨域问题
app.all('*', function(req, res, next) {
     //响应头 允许所有网段请求
    res.header("Access-Control-Allow-Origin", "*");
    //响应头的权限
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    //方式
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
     //版本
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
module.exports=app;
