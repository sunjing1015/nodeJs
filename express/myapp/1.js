var express=require("express");
var app=express();

//对网站首页的访问返回“hello world”字样
// app.get("/",(req,res)=>{
//     res.send("Hello World!")
// })

//网站首页接收 POST 请求
// app.post("/",(req,res)=>{
//     res.send("Got a POST request")
// })

// app.use((req,res,next)=>{
//     // console.log(err.stack);
//     res.status(404).send("Sorry cant find that!")
// })

//  /user 节点接受 PUT 请求
// app.put("/user",(req,res)=>{
//     res.send("Got a POST request at /user")
// })






//  /user 节点接受DELETE 请求
// app.delete("/user",(req,res)=>{
//     res.send("Got a POST request at /user")
// })

// app.get("/about",(req,res)=>{
//     res.send("about");  //about
// })

// app.get("/random.text",(req,res)=>{
//     res.send("random.text");  //random.text
// })









// 匹配 abcd、abbcd、abbbcd等
// app.get("/ab+cd",(req,res)=>{
//     res.send("ab+cd")
// })

// 匹配 acd 和 abcd
// app.get("/ab?cd",(req,res)=>{
//     res.send("ab?cd")
// })

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
// app.get("/ab*cd",(req,res)=>{
//     res.send("ab*cd")  //ab*cd
// })

// 匹配 /abe 和 /abcde
// app.get("/ab(cd)?e",(req,res)=>{
//     res.send("ab(cd)?e");
// })


// 匹配任何路径中含有 a 的路径：
// app.get(/a/,(req,res)=>{
//     res.send("/a/")
// })

// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
// app.get(/.*fly$/,(req,res)=>{
//     res.send("/.*fly$/")
// })






// app.get("/example/a",(req,res)=>{
//     res.send("Hello from A!")  //Hello from A!
// })

// app.get("/example/b",(req,res,next)=>{
//     console.log('response will be sent by the next function ...');
//     next();
// },(req,res)=>{
//     res.send('Hello from B!');
// })







// 使用回调函数数组处理路由：
// var cb0 = (req,res,next)=>{
//     console.log("CB0")
//     next()
// }
// var cb1 = (req,res,next)=>{
//     console.log("CB1");
//     next()
// }
// var cb2 = (req,res)=>{
//     res.send("Hello from C!")
// }
// app.get("/example/c",[cb0,cb1,cb2])







// 混合使用函数和函数数组处理路由：
// var cb0 = (req,res,next)=>{
//     console.log("CB0");
//     next();
// }
// var cb1 = (req,res,next)=>{
//     console.log("CB1");
//     next()
// }
// app.get("/example/d",[cb0,cb1],(req,res,next)=>{
//     console.log('response will be sent by the next function ...');
//     next();
// },(req,res)=>{
//     res.send("Hello from D!")
// })







// app.route("/book")
// .get((req,res)=>{
//     res.send("Get a random book");
// })
// .post((req,res)=>{
//     res.send("Add a book")
// })
// .put((req,res)=>{
//     res.send("Update the book")
// })







// app.set('view engine', 'jade');
// app.get('/', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!'});
// });








// 定义错误处理中间件和定义其他中间件一样，除了需要 4 个参数，而不是 3 个，其格式如下 (err, req, res, next)。例如：
// app.use(function(err,req,res,next){
//     console.error(err.stack);
//     res.status(500).send("Something broke!")
// })







// var bodyParser = require("body-parser");
// var methodOverride=require("method-override");
// app.use(bodyParser());
// app.use(methodOverride());
// app.use(function(err,req,res,next){
//     //业务逻辑
// })







// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
// app.use(bodyParser());
// app.use(methodOverride());
// app.use(logErrors);
// app.use(clientErrorHandler);
// app.use(errorHandler);
// // logErrors 将请求和错误信息写入标准错误输出、日志或类似服务：
// function logErrors(err,req,res,next){
//     console.log(err.stack);
//     next(err);
// }
// // clientErrorHandler 的定义如下（注意这里将错误直接传给了 next）：
// function clientErrorHandler(err,req,res,next){
//     if(req.xhr){
//         res.status(500).send({error:"Something blew up!"})
//     }else{
//         next(err)
//     }
// }
// // errorHandler 能捕获所有错误，其定义如下：
// function errorHandler(err,req,res,next){
//     res.status(500);
//     res.render("error",{error: err});
// }

// app.get("/a_route_behind_paywall",
//     function checkIfPaidSubscriber(req,res,next){
//         if(!req.user.hasPaid){
//             //继续处理该请求
//             next("route");
//         }
//     },function getPaidContent(req,res,next){
//         getPaidContent.find(function(err, doc){
//             if(err) return next(err);
//             res.json(doc);
//         })
//     }
// )

// function errorHandler(err,req,res,next){
//     if(res.headersSent){
//         return next(err);
//     }
//     res.status(500);
//     res.render("error",{error:err});
// }





// app.set("trust proxy","loopback")  //指定唯一子网
// app.set("trust proxy","loopback,123.123.123.123") //指定子网和IP地址
// app.set("trust proxy","loopback,linklocal,uniquelocal") //指定多个子网
// app.set("trust proxy",["loopback","linklocal","uniquelocal"]) //使用数组指定多个子网，




// Express 4 

// app.use("/book/:id",function(req,res,next){
//     console.log("ID",req.params.id)
//     next()
// })






// app.route("/book")
// .get(function(req,res){
//     res.send("Get a random book");
// })
// .post(function(req,res){
//     res.send("Add a book")
// })
// .put(function(req,res){
//     res.send("Update the book")
// })





// var express=require("express");
// var route=express.Router();
// //特针对该路由的中间件
// route.use(function timeLog(req,res,next){
//     console.log("Time",Date.now());
//     next();
// })
// //定义网站主页的路由
// route.get("/",function(req,res){
//     res.send("Birds home page")
// })
// //定义about页面的路由
// route.get(".about",function(req,res){
//     res.send("About birds")
// })
// module.exports = router;
// var birds = require("./birds");
// app.use("/birds",birds);






//旧的
// var express = require('express');
// var routes = require('./routes');
// var user = require('./routes/user');
// var http = require('http');
// var path = require('path');
// var app = express();
// // 适用开发和生产环境
// app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.methodOverride());
// app.use(express.session({ secret: 'your secret here' }));
// app.use(express.bodyParser());
// app.use(app.router);
// app.use(express.static(path.join(__dirname, 'public')));
// // 只针对开发环境
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }
// app.get('/', routes.index);
// app.get('/users', user.list);
// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });







//新的var http = require('http');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();

// 适用开发和生产环境
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/users', user.list);

// 错误处理中间件应当在路由加载之后才能加载
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});



app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});














app.listen(3000)