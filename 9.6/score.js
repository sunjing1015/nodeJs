var http=require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var url=req.url;
    /*
    * 1.根基地址栏信息  eg：/student/   显示学员信息   并且限制id长度，输出id
    *  1.1 req.url  获取地址栏信息
    *  1.2 通过正则匹配
    * 2.根据地址栏信息 eg：/tearcher/   显示老师信息   并且限制id长度，输出id
    * 3.如果匹配不到，显示无此人员
    *
    * substring 和 substr 的区别：
    *   substring：含头不含尾
    *   substr：第二个参数是长度
    * */
    if(req.url=="/favicon.ico"){
        return
    }
    if(url.substring(0,9)=="/student/"){
        var studentId=url.substr(9);  //从9开始往后截
        if((/^\d{9}$/).test(studentId)){   //此处9可以随便写
            console.log("学员id：" + studentId);
            res.end("学员id：" + studentId)
        }else {
            console.log("学员id不正确");
            res.end("学员id不正确")
        }
    }else {
        console.log("没有此学员");
    }
    //if(url.substring(0,9)=="/tearcher/"){
    //    var tearcherId=url.substr(9);
    //    if((/^\d{9}$/).test(tearcherId)){
    //        console.log("老师id：" + tearcherId);
    //    }else {
    //        console.log("老师id不正确");
    //    }
    //}else {
    //    console.log("没有此老师");
    //}

    res.end()
}).listen(3000,"127.0.0.1")