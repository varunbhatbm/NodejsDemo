var express = require('express');
var app=express();


app.get('/',function(req,res){
    res.send('Hello World Boys!!');
});


var server=app.listen(3000,function(){
    var host = server.address().address;
    var post = server.address().port;
    
    console.log('Received request from %s.%s',host,port);
});