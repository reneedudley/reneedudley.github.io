$(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('#arrow').pushpin({ top: $('#arrow').offset().top });
    var divs = $('#arrow');
    var header = $('#arrow');
    $(window).scroll(function() {
     header.addClass('lower-opacity');
     if($(this).scrollTop() === 0) {
        header.removeClass('lower-opacity');
     }
    });
    var options = [
    {selector: '#staggered-test', offset: 300, callback: 'Materialize.showStaggeredList("#staggered-test")'  },
    {selector: '#staggered-test2', offset: 350, callback: 'Materialize.showStaggeredList("#staggered-test2")'  }
    ];
    Materialize.scrollFire(options);

}); // end of document ready// end of jQuery name space
