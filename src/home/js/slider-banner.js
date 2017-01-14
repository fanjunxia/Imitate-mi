/**
 * Created by admin on 2017/1/14.
 */
"use strict";
$(function () {
    var $sliderBanner = $('.slider-banner');
    var $items= $sliderBanner.find('.item');
    $items.eq(0).css('z-index',10);
    $sliderBanner.each(function (index, ele) {
        var $that = $(this);
        pagersWrapper();
        pagerClick();
        $that.key = 0;
        $that.find('.prev').on('click', function () {
            btnClick('l');
        });
        $that.find('.next').on('click', function () {
            btnClick('r');
        });

        $that.timer=null;
        loop();
        $sliderBanner.find('.list,.pagers-wrapper,.control').on('mouseover',function () {
           clearInterval($that.timer);
        });
        $sliderBanner.find('.list,.pagers-wrapper,.control').on('mouseout',function () {
            loop();
        });



        /*-----------设置pager的内容及位置*/
        function pagersWrapper() {
            var $pagerWraper = $that.find('.pagers-wrapper');
            $pagerWraper.html('');

            var len = $that.find('.item').length;
            var str = '';
            for (var i = 0; i < len; i++) {
                str += '<li class="pager"><span></span></li>';
            }
            $pagerWraper.html(str).find('li:first').addClass('active');
            $pagerWraper.css('marginLeft', -$pagerWraper.width() / 2);
        }

        /*-----------control点击*/
        function btnClick(flag) {
            var $list = $that.find('.list');
            if (flag == 'r' && $that.key < $items.length - 1) {
                $that.key++;
                pageSwitch();
            }
            else if (flag == 'l' && $that.key > 0) {
                $that.key--;
                pageSwitch();
            }
        }

        /*-----------pager点击*/
        function pagerClick() {
            var $pager = $that.find('.pager');
            $pager.on('click', function () {
                $that.key = $(this).index();
                pageSwitch();
            });
        }
        /*页面切换*/
        function pageSwitch() {
            // $items.css('opacity',0);
            $items.stop().css({
                opacity:0.7,
                zIndex:-1
            });
            $items.eq($that.key).css({
                zIndex:10
            }).stop().animate({
                opacity:1
            }, 500);
            pagerActive($that.key);
        }

        /*pagerAcive*/
        function pagerActive(index) {
            var $pager = $that.find('.pager');
            $pager.each(function () {
                $(this).removeClass('active');
            });
            $pager.eq(index).addClass('active');
        }

        /*无限循环*/
        function loop() {
            $that.timer=setInterval(function() {
                $that.key++;
                if($that.key > $items.length - 1){
                    $that.key=0;
                }
                pageSwitch();
            },3000);
        }
    });
});