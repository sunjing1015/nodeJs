/**
 * 静态资源目录   static   public
 * 
 */

 var express=require("express");
 var app=express();
 app.use("/",express.static("./public"))  //默认是index页
//  express.static 是 Express 内置的唯一一个中间件。是基于 serve-static 开发的，负责托管 Express 应用内的静态资源。
 app.listen(3000)