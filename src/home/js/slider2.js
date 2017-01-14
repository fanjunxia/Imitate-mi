/**
 * Created by admin on 2017/1/14.
 */
"use strict";
$(function () {
    var $slider2 = $('.slider2');
    var $control2=$('.control2');
    var $list=$slider2.find('.list');
    var len=$slider2.find('.item').length/5;
    var left = $slider2.width();

    var index=0;
    $control2.find('.next').on('click',function () {
        btnClick('r');
    });
    $control2.find('.prev').on('click',function () {
        btnClick('l');
    });

    /*按钮点击*/
    function btnClick(flag) {
        if (flag == 'r' && index < len-1) {
            index++;
        }
        else if (flag == 'l' && index > 0) {
            index--;
        }
        pageSwitch();
    }

    /*页面切换*/
    function pageSwitch() {
        $list.stop().animate({
            left: -left*index
        }, 500);
    }
});
