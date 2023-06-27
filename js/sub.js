// sub.js

// 카테고리 선택
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
