var http=require("http");  //http服务器
var until=require("until"); //实用工具
var formidable=require("formidable");  //处理form表单的请求数据
http.createServer((req,res)=>{
    if(req.url == "/dopost" && req.method.toUpperCase()=="POST"){
        var form=new formidable.IncomingForm();
        form.uploadDir="./upload"
        form.parse(req,function(err,fields,file){
            if(err){
                throw err
            }
            //fields  文本域
            console.log(fields)
            console.log(files)
            res.end("success")
        })

    }

}).listen(3000,"127.0.0.1")