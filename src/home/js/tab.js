/**
 * Created by admin on 2017/1/14.
 */
"use strict";

$(function () {
    var tabHdItem=$('.tab-list').find('.item');
    tabHdItem.eq(0).addClass('active');
    $('.tab-con').hide().eq(0).show();

    tabHdItem.on('mouseover',function () {
        var index=$(this).index();
        tabHdItem.removeClass('active');
        $(this).addClass('active');
        $('.tab-con').hide().eq(index).show();
    })
});