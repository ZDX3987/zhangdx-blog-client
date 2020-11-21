$(function () {
  let scrolltop = new Array();
  let i = 0;
  scrolltop[0] = 0;

  $(document).scroll(function () {
    i++;
    scrolltop[i] = $(document).scrollTop();
    let element1 = $(".article-content").height();
    let element2 = $(".clear-fixed").offset().top;
    if (element1 <= element2 + 320.3) {
      $(".clear-fixed").removeClass("article-directory-fixed");
      $(".clear-fixed").addClass("article-directory");
    } else if (scrolltop[i] < scrolltop[i - 1]) {
      console.log(element1, element2)
      $(".clear-fixed").removeClass("article-directory");
      $(".clear-fixed").addClass("article-directory-fixed");
    }
  })

});
