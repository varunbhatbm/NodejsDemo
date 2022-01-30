var express = require('express');
var app= express();
var mysql =  require("mysql");
var con = mysql.createConnection({ host: process.env.MYSQL_HOST, user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, database: process.env.MYSQL_DATABASE});

console.log('Host [%s] user [%s] password [%s] databsae [%s]',process.env.MYSQL_HOST,process.env.MYSQL_USER,
                            process.env.MYSQL_PASSWORD,process.env.MYSQL_DATABASE)

con.connect(function(err) {
    if(err){
        console.log('Error connecting to DB: ',err);
        return;
    }

    console.log('Connection to DB established');
    con.query('CREATE TABLE IF NOT EXISTS visits (id NOT NULL PRIMARY_KEY AUTO_INCREMENT,  ts BIGINT)',function(err){
        if(err)
            throw err;
    });
    
});


app.get('/', function(req, res){
    con.query(' INSERT INTO visits (ts) values(?)',Date.now(),function(err, daRes){
        if(err) throw error;

        res.send(' Hello world! You are visitor Number! '+daRes.insertId);
    });
});


var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example App listening on http://%s:%s',host,port);
})