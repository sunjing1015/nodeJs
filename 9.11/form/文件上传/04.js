// 1.获取到路径
// 2.获取到扩展名
// 3.加上一个时间   
// 4.fs rename  修改名称
// 5.完成   上传文件

var http=require("http");  //加载http
var formidable=require("formidable");  //加载form表单处理插件
var path=require("path");  //加载path模块，从而取的路径
var sd=require("silly-datetime");   //加载时间插件
var fs=require('fs');  //加载fs模块，文件系统
//创建服务器
http.createServer((req,res)=>{
    //创建表单请求
    //前端发送的请求路径如果是/dopost请求的话，并且请求方式是post的话
    //req.method=post.toUppercase()=POST
    if(req.url == "/dopost" && req.method.toUpperCase()=="POST"){
        //实例form请求函数
        var form=new formidable.IncomingForm();
        //创建图片保存的路径
        form.uploadDir="./upload"  //目录，保存路径，路径不存在会报错
        //解析form请求数据，  err错误   filelds  文本域   files文件域
        form.parse(req,function(err,fields,files){
            //fields  文本域   输入框和radio的数据都在里面
            //files  文件域  
            // console.log(files)
            //获取扩展名
            var extname=path.extname(files.pic.name);
            //获取时间
            var tt=sd.format(new Date,"YYYYMMDDHHmm")
            //获取原始本地路径
            var oldpath=__dirname+"/"+files.pic.path;  //__dirname当前文件所在的目录的绝对路径
            //获取到新路径
            var newpath=__dirname+"/upload/"+tt+extname;
            //修改上传文件的名称
            fs.rename(oldpath,newpath,function(err){
                if(err){
                    throw err
                }else{
                    res.writeHead(200,{"Content-type":"text/plain;charset=utf-8"})
                    res.end("改名成功")
                }
            })
        })
    }
}).listen(3000,"127.0.0.1")