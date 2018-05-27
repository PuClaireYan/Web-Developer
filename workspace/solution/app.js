var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welcome"); 
});

app.get("/speak/:animal", function(req,res){
   var sounds ={
       pig : "Oink",
       cow : "Moo",
       cat : "Miao",
       dog : "Wang"
   }   
    var animal = req.params.animal.toLowCase();
    var sound = sounds[animal];

   res.send("The " + animal + " says '" + sound + "'"); 
});


app.get("/repeat/:message/:times",function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for(var i = 0; i < times; i++){
        result += message +" ";
    }
    res.send(result);
})

app.get("*",function(req, res) {
    res.send("Sorry, page not found!")
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});