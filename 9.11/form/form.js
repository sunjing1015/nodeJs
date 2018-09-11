var http=require("http");
var queryString=require("querystring");
http.createServer((req,res)=>{
    /*
    * 1. 路径  url  方式   post/get
    * 2.接收
    * 3.存储
    * */
    if(req.url == "/dopost" && req.method.toUpperCase()=="POST"){
        var allData="";
        //开始接受的阶段
        /*
        * 传输数据时分片段取传输防止数据量过大，卡奔进程
        *
        * */
        req.addListener("data",function(chunk){
            allData+=chunk
        })
        //接收完毕
        req.addListener("end",function(){
            res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
            var dataObj=allData.toString();
            var obj=queryString.parse(dataObj);
            console.log(obj);
            // console.log(obj.name);
            var name=obj.name;
            var sex=obj.sex;
            var pic=obj.pic;
            // console.log(obj.sex);
            res.end("姓名："+name+"；性别："+sex+"；pic："+pic)
        })
    }

    /*
    * 1.entype   里面传递的东西
    * 2.接收数据
    *
    * */
    
}).listen(3000,"127.0.0.1")