$(function () {
  let scrollTop = new Array();
  let i = 0;
  scrollTop[0] = 0;

  $(document).scroll(function () {
    i++;
    scrollTop[i] = $(document).scrollTop();

    if (scrollTop[i] < scrollTop[i - 1]) {
      $(".fixed-header").css({
        'transform': 'translate(0, 0)',
      })
    } else {
      $(".fixed-header").css({
        'transform': 'translate(0, -160px)',
      })
    }

    //出现回到顶部按钮
    if ($(document).scrollTop() > 100) {
      $(".fixed-tool").css('transform', 'translateX(0)')
    } else {
      $(".fixed-tool").css('transform', 'translateX(100px)')
    }

  })

  //回到顶部事件
  $('.back-top').click(function () {
    $('html , body').animate({scrollTop: 0}, 'slow');
  })
})
