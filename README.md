# CtExpressApplication
express application

1、express.static 中间件
    app.use(express.static('public'));
    访问方式：  http://localhost:3000/images/kitten.jpg
    //public 文件托管给express.static 中间件
   //多个文件托管可写多个。
    app.use('/static', express.static('public'));//托管给虚拟文件 static
    访问方式：http://localhost:3000/static/images/kitten.jpg
