/**
 * Created by Administrator on 2017/9/11 0011.
 */


/*·â×°¹ö¶¯ */
function Swipe(element){
    this.elem=element;
    this.scrollTo=function(width,time){
        element.css({
            'transition':'transform '+time+"ms linear",
            'transform': 'translateX(-' + width+ 'px)'

        });
    }
}
