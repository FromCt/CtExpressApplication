/**
 * Created by Administrator on 2017/9/12 0012.
 */

function Boy(){

    var ul = $(".content ul");

    //向右走 0.52
    function goRight(time,pers){
        var dtd= $.Deferred();

        $('.boy').transition({
            "left":pers+"px"
        },time,'linear',function(){
            dtd.resolve();
        });
        return dtd;
    }

    //上桥
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

    //背景滚动到第二页
    function backgroundToLeft(width,time){
        var ded=$.Deferred();
        var swipe = new Swipe(ul);
        swipe.scrollTo(width,time);
        setTimeout(function () {
            ded.resolve();
        }, time);

        return ded;
    }

    //停止动画
    function stopWalk(){
        var ded=$.Deferred();
        $('.boy').addClass("pauseWalk");
        return ded;
    }

    //继续走路
    function continueWalk(){
        var ded=$.Deferred();
        $('.boy').removeClass("pauseWalk");
        return ded;
    }

    //走进花店
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

    //走出花店
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

        //向右走3s 0.52距离
        goRight:function(width_per,time){
            return goRight(time,width_per);
        },
        // 背景移动
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