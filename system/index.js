//接口文件
var express = require("express");
var router = express.Router();
var db = require("./model/db")
var crypto = require("crypto")
var objectId = require("mongodb").ObjectID;
router.get("/AdminHandler", function (req, res) {
    var actions = req.query.action;
    switch (actions) {
        //获取验证码
        case "veri":
            /**
            * 获取验证码
            * 1.生成随机数   Math.random()   封装函数
            * http://127.0.0.1:3000/Handler/AdminHandler?action=veri
            * http://127.0.0.1:3000/Handler/AdminHandler?action=checkveri&veri=KIR6
            * 
            */
            var randomNum = function (min, max) {
                return Math.ceil(Math.random() * (max - min)) + min;
            }
            var str = "QWERTYUIOPLKJHGFDSAZXCVBNM0123456789";
            var returntxt = "";
            for (var i = 0; i < 4; i++) {
                var txt = str[randomNum(0, str.length - 1)]
                returntxt += txt;
            }
            req.flash.veri = returntxt;
            res.send({ "success": returntxt })
            break;
        case "checkveri":
            //验证验证码
            // console.log(req.query)
            // console.log(req.query.veri)
            // console.log(req.flash.veri)
            if (req.query.veri == req.flash.veri) {
                res.send({ "success": "成功" })
            } else {
                res.send({ "success": "失败" })
            }
            break;
        //返回用户信息
        case "returninfo":
            var sessionId = new objectId(req.flash.user._id)
            db.find("login", { "_id": sessionId }, function (err, data) {
                res.send({ "success": "获取成功", "data": data[0] })
            })
            break;
        //退出登录
        case "quit":
            console.log(req.flash.user)
            if (req.flash.user) {
                req.flash.user = {}
                res.send({ "success": "退出成功" });
            }
            break;
    }
})

router.post("/AdminLogin", function (req, res) {
    var actions = req.query.action;
    switch (actions) {
        //用户登录
        case "login":
            db.find("login", { "username": req.body.username }, function (err, doc) {
                if (doc.length == 0) {
                    res.send({ "err": "没有此用户" })
                } else {
                    var md5 = crypto.createHash("md5");
                    if (doc[0].password == md5.update(req.body.password).digest("base64")) {

                        res.send({ "success": "登录成功" })
                        var user = doc[0]
                        req.flash.user = user;

                    } else {
                        res.send({ "err": "密码错误" })
                    }
                }
            })
            break;


        //注册
        case "add":
            /**
             * 
             * 用户名username  
             * 姓名name   
             * 手机phone   
             * 密码password   
             * 邮箱    
             * 权限 系统管理员 课程管理员    
             * 权限编码 0 1
             * 注意事项：
             *      1.注册时查看数据库当前用户是否注册
             *      2.判断是否注册后
             *          2.1如果未注册，添加数据
             *          2.2如果注册，提示用户已注册
             * 
             */


            db.find("login", { "username": req.body.username }, function (err, data) {
                if (data.length == 0) {
                    db.find("login", null, function (err, arr) {
                        if (err) {
                            console.log("系统用户不存在")
                        } else {
                            var md5 = crypto.createHash("md5")
                            var obj = {
                                "username": req.body.username,
                                "password": md5.update(req.body.password).digest("base64"),  //base64加密格式
                                "email": req.body.email,
                                "phone": req.body.phone,
                                "power": req.body.powerCode == 0 ? "系统管理员" : "课程管理员",
                                "powerCode": req.body.powerCode,
                                "createAt": new Date(),
                                "upDateAt": new Date(),
                                "tokenId": arr.length + 1
                            }
                            db.add("login", obj, function (err, data) {
                                if (err) {
                                    res.send({ "err": "注册失败" })
                                }
                                res.send({ "success": "注册成功" })
                            })
                        }
                    })
                } else {
                    console.log("该用户已注册")
                }
            })
            break;


        //密码修改
        case "updatepass":
            var md5 = crypto.createHash("md5");
            var oldpwd = md5.update(req.body.oldpass).digest("base64");
            if (req.flash.user.password !== oldpwd) {
                res.send({ "error": "密码错误" })
            } else {
                var md56 = crypto.createHash("md5");
                var newpwd = md56.update(req.body.newpass).digest("base64")

                db.update("login", { "username": req.flash.user.username }, { $set: { "password": newpwd, "updateAt": new Date() } }, function (err, data) {
                    if (err) {
                        res.send({ "error": "密码修改失败" })
                    }
                    res.send({ "success": "密码修改成功" })
                })
            }
            break;
        //退出登录
        case "":
            break;
    }
})

router.get("/HandlerAdmin", function (req, res) {
    var actions = req.query.action;
    switch (actions) {
        //获取用户信息列表
        case "getAdminList":
            db.find("login", null, function (err, data) {
                //页数 pageStart   条数   总条数   eg   data.length=9      parseInt=1
                var selector = !req.query.searchText ? {
                    "tokenId": {
                        $gt: data.length - (parseInt(req.query.pageStart) * 3 - 3) - 3,
                        $lte: data.length - (parseInt(req.query.pageStart) * 3 - 3)
                    }
                } : req.query.searchText
                db.find("login", selector, function (err, data) {
                    if (data.length == 0) {
                        res.send({ "error": "没有此用户" })
                    } else {
                        var result = {
                            "success": "成功",
                            data: {
                                pageSize: 3,  //每页条数
                                count: data.length,   //查询出数据总长度
                                list: data
                            }
                        }
                        res.send(result)
                    }
                })
            })
            break;
    }
})

module.exports = router;