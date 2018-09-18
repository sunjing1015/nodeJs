//加载mongodb模块
var mongodb=require("mongodb").MongoClient;
var assert = require('assert');
//链接数据库
var url="mongodb://localhost:27017";
mongodb.connect(url,function(err,db){
    //链接集合  查询数据
    var dbBase=db.db("test");
    // dbBase.collection("col").insert({"title":"java"},function(err,data){
    //     console.log("插入成功")
    //     db.close();  //关闭数据库集合
    // })
    

    // dbBase.collection("col").remove({"title":"java"},function(err,data){
    //     console.log("删除成功")
    //     db.close();
    // })


    // dbBase.collection("col").update({"likes":200},{$set:{"likes":2000}},function(err,data){
    //     console.log("更新成功");
    //     db.close();
    // })


    dbBase.collection("col").find().toArray(function(err,data){
        console.log(data)
        db.close()
    })
})
