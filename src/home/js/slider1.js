/**
 * Created by admin on 2017/1/14.
 */
"use strict";
$(function () {
    var $slider1=$('.slider1');
    $slider1.each(function (index, ele) {
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
            if (flag == 'r' && $that.key < $list.find('.item').length - 1) {
                $that.key++;
            }
            else if (flag == 'l' && $that.key > 0) {
                $that.key--;
            }
            // console.log('key=' + $that.key + ' ;flag=' + flag);
            pageSwitch();
        }

        /*-----------pager点击*/
        function pagerClick() {
            var $pager = $that.find('.pager');
            $pager.on('click', function () {
                $that.key=$(this).index();
                pageSwitch();
            });
        }

        /*页面切换*/
        function pageSwitch() {
            var $list = $that.find('.list');
            $list.stop().animate({
                left: -$that.key * $slider1.width()
            }, 300);
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
    });
});