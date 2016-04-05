

$(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    
    var options = [
    {selector: '#staggered-test', offset: 10, callback: 'Materialize.showStaggeredList("#staggered-test")'  },
    {selector: '#staggered-test2', offset: 20, callback: 'Materialize.showStaggeredList("#staggered-test2")'  }
    ];
    Materialize.scrollFire(options);
   
   
   $('.zoom').hover(function(){
    $(this).css("transform", "scale(1.3, 1.3)");
    }, function(){
    $(this).css("transform", "none");
   });
   $('.one').click(function(){
    $('#one').removeClass('leave');
    $('#two').addClass('leave');
    $('#three').addClass('leave');
    $('#four').addClass('leave');
    $('#five').addClass('leave');
    $('#six').addClass('leave');
    $('#seven').addClass('leave');
   });
   $('.two').click(function(){
    $('#two').removeClass('leave');
    $('#three').addClass('leave');
    $('#four').addClass('leave');
    $('#five').addClass('leave');
    $('#six').addClass('leave');
    $('#one').addClass('leave');
     $('#seven').addClass('leave');
   });
   $('.three').click(function(){
    $('#three').removeClass('leave');
    $('#two').addClass('leave');
    $('#four').addClass('leave');
    $('#five').addClass('leave');
    $('#six').addClass('leave');
     $('#seven').addClass('leave');
    $('#one').addClass('leave');
   });
   $('.four').click(function(){
    $('#four').removeClass('leave');
    $('#two').addClass('leave');
    $('#five').addClass('leave');
    $('#six').addClass('leave');
    $('#one').addClass('leave');
    $('#three').addClass('leave');
     $('#seven').addClass('leave');
   });
   $('.five').click(function(){
    $('#five').removeClass('leave');
    $('#two').addClass('leave');
    $('#six').addClass('leave');
    $('#one').addClass('leave');
    $('#three').addClass('leave');
    $('#four').addClass('leave');
     $('#seven').addClass('leave');
   });
   $('.six').click(function(){
    $('#six').removeClass('leave');
    $('#two').addClass('leave');
    $('#five').addClass('leave');
    $('#one').addClass('leave');
    $('#three').addClass('leave');
    $('#four').addClass('leave');
     $('#seven').addClass('leave');
   });

   $('.home').click(function(){
    $('#seven').removeClass('leave');
    $('#two').addClass('leave');
    $('#five').addClass('leave');
    $('#one').addClass('leave');
    $('#three').addClass('leave');
    $('#four').addClass('leave');
     $('#six').addClass('leave');
   });

}); // end of document ready// end of jQuery name space