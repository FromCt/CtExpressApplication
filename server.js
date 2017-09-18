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

//将public 目录下的文件 托管给 express 通过http://localhost:3000/fileName 可自己访问
app.use(express.static('public'));
app.use(express.static('valentine'));
app.listen(3000);