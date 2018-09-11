/*
* 功能：根据对应的路由跳转页面
* 页面：首页  学生页  404页面
* */
exports.showIndex=showIndex;
exports.showStudent=showStudent;
exports.show404=show404;
//首页
function showIndex(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("首页")
}
//学生页
function showStudent(req,res){
    /*
    * 1. 取到id
    * */
    var id=req.url.substr(9,3);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("学生的id："+id)
}
//404页面
function show404(req,res){
    res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});
    res.end("404")
}