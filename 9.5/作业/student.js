var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var pathname=url.parse(req.url).pathname;
    var query=url.parse(req.url,true).query;
    if(pathname == "/student"&&((query.id).length)==4){
        res.end("这学生id为"+query.id)
    }else if(pathname == "/teacher"&&((query.id).length)==4){
        res.end("这老师id为"+query.id)
    }else {
        res.end("无此id")
    }
}).listen(3000,"127.0.0.1")