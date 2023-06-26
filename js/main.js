// main.js

// 쇼룸 슬라이드 버튼
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
  