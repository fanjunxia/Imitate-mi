/**
 * Created by admin on 2017/1/14.
 */
"use strict";
$(function () {
    var data = [
        [
            {
                name: '哈利·波特与被诅咒的孩子',
                desc: '“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！',
                price: '29.37元',
                imgSrc: 'home/images/content/1.png'
            },
            {
                name: '好吗好的',
                desc: '畅销作家大冰2016年新书！讲给你听，好吗好的！ ',
                price: '17.99元',
                imgSrc: 'home/images/content/2.png'
            }
        ],
        [
            {
                name: '好吗好的',
                desc: '畅销作家大冰2016年新书！讲给你听，好吗好的！ ',
                price: '17.99元',
                imgSrc: 'home/images/content/2.png'
            },
            {
                name: '哈利·波特与被诅咒的孩子',
                desc: '“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！',
                price: '29.37元',
                imgSrc: 'home/images/content/1.png'
            },
            {
                name: '好吗好的',
                desc: '畅销作家大冰2016年新书！讲给你听，好吗好的！ ',
                price: '17.99元',
                imgSrc: 'home/images/content/2.png'
            }
        ],
        [
            {
                name: '哈利·波特与被诅咒的孩子',
                desc: '“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！',
                price: '29.37元',
                imgSrc: 'home/images/content/1.png'
            },
            {
                name: '好吗好的',
                desc: '畅销作家大冰2016年新书！讲给你听，好吗好的！ ',
                price: '17.99元',
                imgSrc: 'home/images/content/2.png'
            },
            {
                name: '哈利·波特与被诅咒的孩子',
                desc: '“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！',
                price: '29.37元',
                imgSrc: 'home/images/content/1.png'
            },
        ],
        [
            {
                name: '好吗好的',
                desc: '畅销作家大冰2016年新书！讲给你听，好吗好的！ ',
                price: '17.99元',
                imgSrc: 'home/images/content/2.png'
            },
            {
                name: '哈利·波特与被诅咒的孩子',
                desc: '“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！',
                price: '29.37元',
                imgSrc: 'home/images/content/1.png'
            }
        ]
    ];
    var $content = $('#content');
    var $col4 = $content.find('.col-4');
    $col4.each(function (index, ele) {
        var $that = $(this);
        contentList(index);

        /*------------循环列出col4的内容*/
        function contentList(index) {
            /*移除原有内容*/
            $that.find('.item').not('.moreItem').remove();
            var str = '';
            for (var j = 0; j < data[index].length; j++) {
                var item = data[index][j];
                str += '<li class="item">';
                str += '<h4 class="name"><a href="#">' + item.name + '</a></h4>';
                str += '<p class="desc"><a href="#">' + item.desc + '</a></p>';
                str += '<p class="price">' + item.price + '</p>';
                str += '<div class="fig-img"><a href="#"><img src="' + item.imgSrc + '" alt=""></a></div>';
                str += '</li>';
            }
            $that.find('.list').prepend(str);
        }
    });
});