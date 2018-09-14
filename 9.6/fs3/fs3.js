var http=require("http");
var url=require("url");
var fs=require("fs");
var path=require("path");
http.createServer((req,res)=>{
    var pathname=url.parse(req.url).pathname;
    var extname=path.extname(pathname);
    var mime=getmime(extname);
    res.writeHead(200,{"Content-type":mime}+";'Access-Control-Allow-Origin':request.headers.origin");
    if(pathname=="/"){
           //读文件
        fs.readFile("./index.html",(err,data)=>{
            if(err){
                fs.readFile("./404.html",(err,data)=>{
                    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
                    res.end(data)
                })
            }else {
                res.end(data)
            }
        })
    }else {

    }
    function getmime(extname){
        switch (extname){
            case ".html":
                return "text/html"
            break;
            case ".css":
                return "text/css"
            break;
            case "/jpeg":
                return "image/jpeg"
            break
        }
    }
}).listen(3000,"127.0.0.1")