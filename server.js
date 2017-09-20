/**
 * Created by Administrator on 2017/9/10 0010.
 */

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.get('/getData',function(req,res){
    res.send('this is get data');
});

//express http://localhost:3000/fileName
app.use(express.static('public'));
app.use(express.static('valentine'));
try{
    app.listen(3300);
}catch(e){
    console.log(e);
}
