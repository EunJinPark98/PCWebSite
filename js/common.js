// common.js

// 전체메뉴 보기
$('.allMenuBtn').mouseover(function(){
    $('.allMenu_bg').show();
}).mouseout(function(){
    $('.allMenu_bg').mouseover(function(){
        $(this).show();
    }).mouseout(function(){
        $(this).hide();
    });
});

// 서브메뉴 보기
$('.d1').mouseover(function(){
    $(this).find('.sub').show();
}).mouseout(function(){
    $(this).find('.sub').hide();
});