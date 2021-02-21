var express = require("express")

var app = express()
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

app.get("/",function(req,res){
    res.render("ColorGame")
})

app.listen(port)