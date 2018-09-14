var express=require("express");
var app=express();

app.use(express.static("public"))
app.use(express.static('files'));



// app.use("/static",express.static("../myapp/public"))

app.listen(3000)