/**
 * Created by Administrator on 2017/9/14 0014.
 */

var listWrapper = document.querySelector(".list-wrapper");
var ul=document.querySelector(".content_ul");
var top_tip=document.querySelector(".top-tip");
var bottom_tip=document.querySelector(".bottom-tip");
var span_top=document.querySelector(".refresh");
var span_bottom=document.querySelector(".bottom-tip span");


var canBePull=false; // 下拉操作
var canBePush=false;// 上拉加载

function initScroll(){
    var scroll=new window.BScroll(listWrapper,{
        probeType:1
    });

    scroll.on('scroll',function(position){
        console.log("scroll=========" + position.y);

        canBePull=false;
        canBePush=false

        //滑动到底部 需要的距离
        var need_scroll_height=ul.offsetHeight+top_tip.offsetHeight+bottom_tip.offsetHeight-listWrapper.offsetHeight;
       // console.log(need_scroll_height);

        if(position.y>top_tip.offsetHeight){
            canBePull=true;
            span_top.innerHTML = "加载中...";


            return;
        }

        if(need_scroll_height-position.y>bottom_tip.offsetHeight+10){
            span_bottom.innerText = "加载中";
            canBePush=true;

            var html='<li> <aside> <img src="img/2.png" alt=""/> </aside> <div class="li_content"> <h3>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h3> <span>2016-11-23</span> </div> </li>  ';
            ul.innerHTML=ul.innerHTML+html;
            scroll.refresh();
        }

    });

    scroll.on('touchend', function (position) {

        if(canBePull){
            span_top.innerText="下拉加载";

        }else if(canBePush){
            span_bottom.innerText = "上拉加载";
        }
    });

}

initScroll();