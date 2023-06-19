
/*-------------------------------------On Load-------------------------------------*/
    $(window).on('load resize', function() {
        $('body').imagesLoaded().done(function(instance) {
            $('body').addClass('loaded');
        });
    });
/*-------------------------------------*/


/*-------------------------------------Vegas Slider-------------------------------------*/
if ($.fn.vegas !== undefined && $("#vegas-slide").length) {
  var target_slider = $("#vegas-slide"),
    vegas_options = target_slider.data("vegas-options");
  if (typeof vegas_options === "object") {
    target_slider.vegas(vegas_options);
  }
}
/*-------------------------------------*/