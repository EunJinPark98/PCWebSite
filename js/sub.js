// sub.js

// 서브_베스트아이템
// 카테고리 열고 닫기
$('.selecCate').click(function(){
    var $ul = $(this).find('ul');
    
    if ($ul.height() === 190) {
        $ul.animate({
            height: '20px'
        });
        $(this).find('li:not(.on) a').css({
            display: 'none'
        });
    } else {
        $ul.animate({
            height: '190px'
        });
        $(this).find('li a').css({
            display: 'block'
        });
    }
    return false;
});

// 카테고리 선택
$('.selecCate li:not(.on) a').click(function() {
    $('.selecCate li.on').removeClass('on');
    $(this).parent('li').addClass('on');
});



// 서브_커뮤니티
// 자주 찾는 질문 클릭
$('.qnaTop5 li').click(function(){
    $(this).find('.ansFrame').slideToggle();
    // 답변 열렸을 때 이중 선 없애기
    let i = $(this).find('.ansFrame').css('display');
    if(i == 'block'){
        $(this).css({
            borderBottom : 'none'
        });
    };
    return false;
});



// 서브_우먼즈
// 배너 슬라이드

  

