/**
 * Created by admin on 2017/1/14.
 */
"use strict";
$(function () {
    var $siteCate=$('.site-category');
    var cateItem=$siteCate.find('.cate-item');
    cateItem.on('mouseover',function () {
        $(this).find('.children').show();
    });
    cateItem.on('mouseout',function () {
        $(this).find('.children').hide();
    })
});