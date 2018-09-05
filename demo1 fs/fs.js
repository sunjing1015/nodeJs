//引用http模块 require 加载
var http = require("http");
var fs = require("fs");

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    if (req.url == "/red"){
        fs.readFile("./yanse/red.html",(err,data)=>{
            res.end(data)
        });
    }else if(req.url == "/green") {
        fs.readFile("./yanse/green.html",(err,data)=> {
            res.end(data)
        });
    }else if (req.url == "/red.css"){
        fs.readFile("./yanse/red.css",(err,data)=> {
            res.writeHead(200,{"Content-type":"text/css"});
            res.end(data);
        });
    }else if (req.url == "/jm.jpg"){
        fs.readFile("./yanse/jm.jpg",(err,data)=> {
            res.writeHead(200,{"Content-type":"img/jpg"});
            res.end(data);
        });
    }else {
        res.end("错误");
    }
}).listen(3000,"localhost");