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

//��public Ŀ¼�µ��ļ� �йܸ� express ͨ��http://localhost:3000/fileName ���Լ�����
app.use(express.static('public'));
app.use(express.static('valentine'));
app.listen(3000);