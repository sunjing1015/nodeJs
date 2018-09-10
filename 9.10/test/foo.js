var username="tom";
var obj={
    username:"jack",
    age:20
};
//用ob接受然后抛出去
exports.ob=obj;                //{ ob: { username: 'jack', age: 20 } }
//直接抛出
//module.exports=obj;