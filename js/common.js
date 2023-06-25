// common.js

// $('.allMenuBtn').click(function(){
//     $('.allMenu_bg').show();
//     return false;
// });

// 전체메뉴보기
$('.allMenuBtn').mouseover(function(){
    $('.allMenu_bg').show();
}).mouseout(function(){
    $('.allMenu_bg').mouseover(function(){
        $(this).show();
    }).mouseout(function(){
        $(this).hide();
    });
});
