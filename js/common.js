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

// gnb 서브메뉴 보기
$('.d1').mouseover(function(){
    $(this).find('div').show();
}).mouseout(function(){
    $(this).find('div').hide();
});

// 로그인 서브메뉴 보기
$('.login').mouseover(function(){
    $(this).find('.login_sub').show();
}).mouseout(function(){
    $(this).find('.login_sub').hide();
});

// gotop버튼
$('.goTop').click(function(){
    $('html, body').stop().animate({
        scrollTop : 0
    });
});
$('.goBottom').click(function(){
    $('html, body').stop().animate({
        scrollTop : $(document).height()
    });
});


