// main.js

// 스크롤 내리면 해당 영역의 타이틀 나타나기
$(window).scroll(function(){
  let st = $(window).scrollTop();

  let a1 = $('.animate1').offset().top;
  if(st >= a1){
    $('.main4').find('.title').animate({
      opacity : 1,
      marginLeft : 0
    }, 1000);
  }
  let a2 = $('.animate2').offset().top;
  if(st >= a2){
    $('.main6').find('.title').animate({
      opacity : 1,
      marginLeft : 0
    }, 1000);
  }
  let a3 = $('.animate3').offset().top;
  if(st >= a3){
    $('.main7').find('.title').animate({
      opacity : 1,
      marginLeft : 0
    }, 1000);
  }
  let a4 = $('.animate4').offset().top;
  if(st >= a4){
    $('.main8').find('.title').animate({
      opacity : 1,
      marginLeft : 0
    }, 1000);
  }
  let a5 = $('.animate5').offset().top;
  if(st >= a5){
    $('.main9').find('.title').animate({
      opacity : 1,
      marginLeft : 0
    }, 1000, function(){
      $('.main9').find('.tag1, .tag2').animate({
        opacity : 1
      }, 1000);
    });
  }
});

// 팝업광고끄기
$('.popupBtn .close').click(function(){
  $('.popup').hide();
  return false;
});

// main1 이미지 슬라이드
$('.slideList').slick({
  dots : true,
  appendDots : '.ms_pager',
  customPaging : function(slider, i){
    return i+1 + '/' + slider.slideCount;
  },
  prevArrow : '.m1_prev',
  nextArrow : '.m1_next',
  autoplay : true,
  atoplaySpeed : 500,
  speed : 1000,
  slidesToShow : 3,
  centerMode : true,
  variableWidth: true
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

// 쇼룸 넘기기 버튼
$('.rightBtn').click(function() {
  var active = $(this).siblings('.showList.active');
  var next = active.next('.showList');

  if (next.length === 0) {
    next = active.parent().find('.showList').first();
  }

  active.removeClass('active');
  next.addClass('active');

  return false;
});

$('.leftBtn').click(function() {
  var active = $(this).siblings('.showList.active');
  var prev = active.prev('.showList');

  if (prev.length === 0) {
    prev = active.parent().find('.showList').last();
  }

  active.removeClass('active');
  prev.addClass('active');

  return false;
});



  