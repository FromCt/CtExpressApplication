# CtExpressApplication
express application

1��express.static �м��
    app.use(express.static('public'));
    ���ʷ�ʽ��  http://localhost:3000/images/kitten.jpg
    //public �ļ��йܸ�express.static �м��
   //����ļ��йܿ�д�����
    app.use('/static', express.static('public'));//�йܸ������ļ� static
    ���ʷ�ʽ��http://localhost:3000/static/images/kitten.jpg
