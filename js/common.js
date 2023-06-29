// common.js

// 전체메뉴 보기
$('.allMenuBtn').click(function(){
    $(this).toggleClass('on');
    $('.allMenu_bg').toggle();

    let i = $('.allMenu_bg').css('display');
    if(i === 'block'){
        $('.allMenuBtn .bar1').css({
            top : '8px',
            transform : 'rotate(45deg)',
            transition : '0.8s'
        });
        $('.allMenuBtn .bar2').css({
            transform : 'translateX(-50px)',
            transition : '1s',
            opacity : 0
        });
        $('.allMenuBtn .bar3').css({
            top : '8px',
            transform : 'rotate(-45deg)',
            transition : '0.8s'
        });
    } else {
        $('.allMenuBtn .bar1').css({
            top : '0px',
            transform : 'rotate(0)',
            transition : '0.8s'
        });
        $('.allMenuBtn .bar2').css({
            transform : 'translateX(0)',
            transition : '1s',
            opacity : 1
        });
        $('.allMenuBtn .bar3').css({
            top : '16px',
            transform : 'rotate(0)',
            transition : '0.8s'
        });
    }
    return false;
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


