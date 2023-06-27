// sub.js

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

// 카테고리 선택 안됨

$('.selectCate li').click(function(){
    $(this).sibilings('.on').removeClass();
    $(this).addClass('.on');
    return false;
});


