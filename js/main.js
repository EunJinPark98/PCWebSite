// main.js

// 쇼룸 슬라이드 버튼
$('.rightBtn').click(function() {
    var active = $(this).siblings('.showList.active');
    var next = active.next('.showList');
  
    console.log(active);
    console.log(next);
    if (next.length === 0) {
      next = $('.showList').first();
    }
  
    active.removeClass('active');
    next.addClass('active');

    return false;
});
  