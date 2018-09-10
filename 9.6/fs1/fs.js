var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    //读文件
    //fs.readFile("./score.js",(err,data)=>{
    //    res.end(data);
    //})
    //写文件
    //fs.writeFile("./score.txt","cdivhdm",(err,data)=>{
    //    if(err){
    //        console.log("err");
    //    }else {
    //        console.log("写入成功");
    //    }
    //    res.end();
    //})

    fs.stat("./score.txt",(err,data)=>{
        if(err){
            console.log(err);
        }else {
            //是否是文件
            //console.log("isFile" + data.isFile());
            //是否是目录
            //console.log("isDirectory" + data.isDirectory());
            //是否是块设备
            //console.log("isBlockDevice" + data.isBlockDevice());
            //字符设备
            //console.log("isCharacterDevice" + data.isCharacterDevice());
            //文件系统目录
            //console.log("isDirectory" + data.isDirectory());
            //表示一个先进先出（FIFO）管道
            //console.log("isFIFO" + data.isFIFO());
            //普通文件
            //console.log("isFile" + data.isFile());
            //表示一个 socket
            //console.log("isSocket" + data.isSocket());
            //表示一个符号链接
            //console.log("isSymbolicLink" + data.isSymbolicLink());
        }
        res.end();
    })
}).listen(3000,"127.0.0.1");