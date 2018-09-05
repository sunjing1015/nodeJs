var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
    var query=url.parse(req.url,true).query;
    console.log(query);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    console.log("姓名" + query.username);
    console.log("密码" + query.password);
    res.end("姓名" + query.username+"密码" + query.password);
}).listen(3000,"127.0.0.1")