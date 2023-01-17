const express = require("express");
const bodyParser = require("body-parser");
const bodyParserForm = bodyParser.urlencoded();
const app = express();
app.listen(3333);

app.get("/home",function(req,res){
    res.sendFile(__dirname+"/view/home.html");
})

app.post("/login",bodyParserForm,function(req,res){

    if( req.body.password.length < 8){
        res.send("login failed");
    }
    else
    res.send("welcome");

})