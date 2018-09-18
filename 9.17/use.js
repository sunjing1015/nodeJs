var db=require("./db")
db.add("col",{"title":"sj"},function(err,data){
    console.log("插入成功")
})

// db.remove("col",{"title":"ssss"},function(err,data){
//     console.log("删除成功")
// })

//    db.update("col",{"title":"sj"},{$set:{"title":"cxk"}},function(err,data){
//         console.log("更新成功");
//     })

// db.find("col",{"title":"cxk"},function(err,data){
//     console.log(data)
        // console.log(data)
// })