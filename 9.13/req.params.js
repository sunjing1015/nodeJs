var express = require("express");
var app=express();
app.get(/^\/student\/([\d]{3})$/,(req,res)=>{
    res.send("学生id为："+req.params[0])  
    //req.params[0]  只有数字能够用中括号[0]
    console.log(req.params)
})

/**
 * req.params
    翻译：包含映射到指定的路线“参数”属性的对象。
    例如，如果你有route/user/：name，那么“name”属性可作为req.params.name。
    该对象默认为{}。
 */

app.get("/teacher/:id",(req,res)=>{
    res.send("老师id为："+req.params.id)
    console.log("老师id为："+req.params.id)
})


app.listen(3000); 