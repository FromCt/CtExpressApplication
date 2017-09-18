/**
 * Created by Administrator on 2017/9/12 0012.
 */

function Boy(){

    var ul = $(".content ul");

    //������ 0.52
    function goRight(time,pers){
        var dtd= $.Deferred();

        $('.boy').transition({
            "left":pers+"px"
        },time,'linear',function(){
            dtd.resolve();
        });
        return dtd;
    }

    //����
    function goUp(left,top,time){
        var dtd = $.Deferred();
        $('.boy').css({
            'left': ''+left+"px",
            'top':''+top+"px",
            'transition':'all 2s'
        });
        setTimeout(function(){
            dtd.resolve();
        },time);
        return dtd;
    }

    //�����������ڶ�ҳ
    function backgroundToLeft(width,time){
        var ded=$.Deferred();
        var swipe = new Swipe(ul);
        swipe.scrollTo(width,time);
        setTimeout(function () {
            ded.resolve();
        }, time);

        return ded;
    }

    //ֹͣ����
    function stopWalk(){
        var ded=$.Deferred();
        $('.boy').addClass("pauseWalk");
        return ded;
    }

    //������·
    function continueWalk(){
        var ded=$.Deferred();
        $('.boy').removeClass("pauseWalk");
        return ded;
    }

    //�߽�����
    function goToStore(){
        var ded=$.Deferred();
        $('.boy').css({
            'opacity': '0',
            'transform': 'scale(0.6)',
            'transition':'all 2s'
        });

        setTimeout(function(){
            ded.resolve();
        },2000);

        return ded;
    }

    //�߳�����
    function outStore(){

        var ded = $.Deferred();

        $('.boy').css({
            'animation':'boy_move2 0.5s infinite',
            'animation-timing-function':'steps(2)',
            'opacity': '1',
            'transform': 'scale(1)',
            'transition':'all 2s'
        });
        setTimeout(function(){
            ded.resolve();
        },2000);

        return ded;

    }

    return{

        //������3s 0.52����
        goRight:function(width_per,time){
            return goRight(time,width_per);
        },
        // �����ƶ�
        backgroundGo:function(width,time){
            return backgroundToLeft(width,time);
        },
        //
        goToStore:function(){
            return goToStore();
        },
        goUp:function(left,top,time){
         return goUp(left,top,time);
        },
        outStore:function(){
          return outStore();
        },
        stopWalk:function(){
            return stopWalk();
        },
        continueWalk:function(){
            return continueWalk();
        }
    }
}