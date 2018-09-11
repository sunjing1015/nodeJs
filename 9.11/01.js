var http=require("http")
var fs=require("fs")
var route=require("./route.js")
http.createServer((req,res)=>{
    if(req.url == "/"){
        route.showIndex(req,res)
    }else if(req.url.substring(0,9)=="/student/"){
        route.showStudent(req,res)
    }else {
        route.show404(req,res)
    }
}).listen(3000,"127.0.0.1")