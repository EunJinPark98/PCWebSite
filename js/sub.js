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
// main1 이미지 슬라이드
$('.slideList').slick({
    dots : true,
    appendDots : '.ms_pager',
    customPaging : function(slider, i){
      return i+1 + '/' + slider.slideCount;
    },
    autoplay : true,
    atoplaySpeed : 500,
    speed : 1000,
    slidesToShow : 3,
    centerMode : true
  })
  // 메인1 슬라이드 텍스트
  $('.slideText .on').fadeIn(1000);
  
  $('.slideList').on('afterChange', function(event, slick, currentSlide) {
    $('.slideText .on').removeClass('on').hide();
    $('.slideText div').eq(currentSlide).addClass('on').fadeIn(1000);
  });
  // 메인1 슬라이드 재생버튼
  $('.m1_play').click(function(){
    $('.slideList').slick('slickPlay');
    $(this).hide();
    $('.m1_pause').show();
  });
  // 메인1 슬라이드 멈춤버튼
  $('.m1_pause').click(function(){
    $('.slideList').slick('slickPause');
    $(this).hide();
    $('.m1_play').show();
  });
  

