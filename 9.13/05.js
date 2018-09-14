/**
 * 此案例讲解app.use及默认路径
 * 
 */

var express = require("express");
var app=express();
//如果路径里面没有任何东西时，那么默认的路径为“/”    next() 执行函数
app.use((req,res,next)=>{
    console.log(new Date())
    next()
})

app.get("/admin",(req,res)=>{
    // http://localhost:3000/admin?aaa&&jjj
    console.log(req.originalUrl)  //输出斜杠后面所有的
    console.log(req.baseUrl);  //空
    console.log(req.path)  //只读取斜杠后面第一位
    res.end("data")
})

app.listen(3000)