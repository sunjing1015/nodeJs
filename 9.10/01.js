/*
* 1.响应头案例   知识点  js   indexof
*   node没有web容器的概念
* 2.模块  exports  module.export   node_modules
* 3.模块引擎  ejs  jade  art-template
* */

var http=require("http");
var fs=require("fs");
var url=require("url");
var path=require("path");
http.createServer((req,res)=>{
    //url.parse  解析地址栏
    var pathname=url.parse(req.url).pathname;
    //判断在地址栏里面输入的是文件地址还是文件夹地址
    if(pathname.indexOf(".")==-1){
        pathname+="index.html"
    }
    //取到文件的路径   logo.png
    var fileurl="./"+path.normalize("./static"+pathname);
    var extname=path.extname(pathname);
    fs.readFile(fileurl,(err,data)=>{
        if(err){
            res.end("404 页面未找到")
        }else {
            getmime(extname,(mime)=>{
                res.writeHead(200,{"Content-type":mime})
                res.end(data)
            })
        }
    })
}).listen(3000,"127.0.0.1")
//callback  回调函数
function getmime(extname,callback){
    fs.readFile("../mime.json",(err,data)=>{
        var mimeJson=JSON.parse(data);
        console.log(mimeJson);
        var mime=mimeJson[extname] || "text/plain"
        callback(mime)
    })
}