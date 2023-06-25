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
    $('.allMenu_bg').hide();
});

// 서브메뉴 보기
$('.d1').mouseover(function(){
    $(this).find('div').show();
}).mouseout(function(){
    $(this).find('div').hide();
});