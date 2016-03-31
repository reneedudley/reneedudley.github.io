'use strict';

$(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    
    var options = [
    {selector: '#staggered-test', offset: 10, callback: 'Materialize.showStaggeredList("#staggered-test")'  },
    {selector: '#staggered-test2', offset: 20, callback: 'Materialize.showStaggeredList("#staggered-test2")'  }
    ];
    Materialize.scrollFire(options);
   
   $('.profile').click(function(){
    $('#profile').removeClass('hide')
   });
   $('.zoom').hover(function(){
    $(this).css("transform", "scale(1.3, 1.3)");
    }, function(){
    $(this).css("transform", "none");
   });

  


}); // end of document ready// end of jQuery name space