/**
 * 讲解res的属性   还有地址栏的规定
 * 
 */

 var express=require("express");
 var app=express()
 //在地址栏里无视大小写

 app.get("/Ab",(req,res)=>{
     res.send("data")
 })
 
 app.get("/student/:id",(req,res)=>{
     var id=req.params.id;
     var reg=/^\d{5}/.test(id);
     if(reg){
         res.send("学员id"+id)
     }else{
         res.send("格式不正确")
     }
 })

 app.get("/:username/:uid",(req,res)=>{
     var username=req.params["username"];
     var uid=req.params["uid"]
     res.write(username)
    //如果写成send会报错  Can't set headers after they are sent
     res.end(uid)
 })

 app.listen(3000)