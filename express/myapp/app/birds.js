var express=require("express");
var router = express.Router();
var app = express();
router.use(function timeLog(req,res,next){
    console.log('Time: ', Date.now());
    next()
});
router.get("/",function(req,res){
    res.send("Birds home page")
})
router.get("/about",function(req,res){
    res.send("About birds")
})
module.exports = router;
var birds = require("./birds")
app.use("/birds",birds)

app.listen(3000)