var mongodb = require("mongodb").MongoClient;
var setting = require("./setting")
function connectDB(callback) {
    var url = setting.url;
    mongodb.connect(url, function (err, db) {
        if (err) {
            callback(err, null)
        }
        callback(err, db)
    })
}


/**
 * insert
 * insert({},function(){})
 * 
 */

//增
exports.add = function (collection, json, callback) {
    connectDB(function (err, db) {
        var dbBase = db.db("test");
        dbBase.collection(collection).insertOne(json, function (err, data) {
            callback(err,data)
            db.close();
        })
    })
}

//删
exports.remove = function (collection, json, callback) {
    connectDB(function (err, db) {
        var dbBase = db.db("test");
        dbBase.collection(collection).remove(json, function (err, data) {
            callback(err,data)
            db.close();
        })
    })
}

exports.del = function (collection, json, callback) {
    connectDB(function (err, db) {
        var dbBase = db.db("test");
        dbBase.collection(collection).deleteMany(json, function (err, data) {
            callback(err,data)
            db.close();
        })
    })
}

//改
exports.update = function (collection, json, json1, callback) {
    connectDB(function (err, db) {
        var dbBase = db.db("test");
        dbBase.collection(collection).update(json, json1, function (err, data) {
            callback(err,data)
            db.close();
        })
    })
}

//查
exports.find = function (collection, json, callback) {
    connectDB(function (err, db) {
        var dbBase = db.db("test");
        dbBase.collection(collection).find(json).toArray(function (err, data) {
            callback(err,data)
            db.close();
        })
    })
}