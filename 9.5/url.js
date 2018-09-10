var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
    //url.parse()解析地址栏    json.parse()转换成对象     stringify()转换为字符串
    var pathname=url.parse(req.url).pathname;
    //pathname   /后面的
    //query   ？后面的
    var query=url.parse(req.url,true).query;
    //query时如果第二个参数为true  会转换为一个对象
    //console.log(pathname);
    console.log(query);
    res.end("hello word")
}).listen(3000,"127.0.0.1");