$(function () {
  var scrolltop = new Array();
  var i = 0;
  scrolltop[0] = 0;

  $(document).scroll(function () {
    i++;
    scrolltop[i] = $(document).scrollTop();

    if (scrolltop[i] < scrolltop[i - 1]) {
      $(".navbar-content").css({
        'transform': 'translate(0, 0)',
      })
    } else {
      $(".navbar-content").css({
        'transform': 'translate(0, -80px)',
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
