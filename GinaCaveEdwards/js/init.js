(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('#logo-container').fadeIn(1000);
            } else {
                $('#logo-container').fadeOut(500);
            }
        });
  }); // end of document ready
})(jQuery); // end of jQuery name space