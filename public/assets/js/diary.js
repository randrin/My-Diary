$(document).ready(function () {
  $("body").append(
    '<a id="diary-goToTop" class="btn btn-primary" href="#" title="Go to Top Page"><i class="fa fa-arrow-up"></i></a>'
  );
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#diary-goToTop").fadeIn();
    } else {
      $("#diary-goToTop").fadeOut();
    }
  });
  $("#diary-goToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
