'use strict';

$(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
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
   
   $('.hippo').click(function(){
        event.preventDefault();
        $('#one').removeClass('gall');
        $('#two').addClass('gall');
        $('#three').addClass('gall');
        $('#pro').addClass('gall');
        $('#contact').addClass('gall');
        $('#four').addClass('gall');
        $('#AR').removeClass('gall');
        $('.hippo').addClass('gall');
        $('.mission2').removeClass('gall');
        $('.serv').removeClass('gall');
        $('.con').removeClass('gall');
        $('.name').removeClass('gall');
    });
   $('.mission2').click(function () {
       event.preventDefault();
       $('#two').removeClass('gall');
       $('#one').addClass('gall');
       $('#three').addClass('gall');
       $('#pro').addClass('gall');
       $('#contact').addClass('gall');
       $('#four').addClass('gall');
       $('#AR').removeClass('gall');
       $('.mission2').addClass('gall');
       $('.serv').removeClass('gall');
        $('.con').removeClass('gall');
        $('.name').removeClass('gall');
        $('.hippo').removeClass('gall');
   });
   $('.serv').click(function(){
    event.preventDefault();
    $('#three').removeClass('gall');
    $('#one').addClass('gall');
    $('#two').addClass('gall');
    $('#pro').addClass('gall');
    $('#contact').addClass('gall');
    $('#four').addClass('gall');
    $('#AR').removeClass('gall');
    $('.serv').addClass('gall');
    $('.mission2').removeClass('gall');
    $('.con').removeClass('gall');
    $('.name').removeClass('gall');
    $('.hippo').removeClass('gall');
   });
   $('#click').click(function(){
    event.preventDefault();
    $('#pro').removeClass('gall');
    $('#three').addClass('gall');
    $('two').addClass('gall');
    $('#one').addClass('gall');
    $('#contact').addClass('gall');
    $('#four').addClass('gall');
    $('#AR').removeClass('gall');
    $('.con').removeClass('gall');
   });
   $('#here').click(function(){
    event.preventDefault();
    $('#pro').removeClass('gall');
    $('#three').addClass('gall');
    $('two').addClass('gall');
    $('#one').addClass('gall');
    $('#contact').addClass('gall');
    $('#four').addClass('gall');
    $('#AR').removeClass('gall');
    $('.con').removeClass('gall');
   });

   $('.con').click(function(){
    event.preventDefault();
    $('#contact').removeClass('gall');
    $('#three').addClass('gall');
    $('two').addClass('gall');
    $('#one').addClass('gall');
    $('#AR').removeClass('gall');
    $('#four').addClass('gall');
    $('.con').addClass('gall');
    $('.mission2').removeClass('gall');
    $('.serv').removeClass('gall');
    $('.name').removeClass('gall');
    $('.hippo').removeClass('gall');
   });
   $('.name').click(function(){
    event.preventDefault();
    $('#four').removeClass('gall');
    $('#three').addClass('gall');
    $('two').addClass('gall');
    $('#one').addClass('gall');
    $('#AR').removeClass('gall');
    $('#contact').addClass('gall');
    $('.name').addClass('gall');
    $('.con').removeClass('gall');
    $('.mission2').removeClass('gall');
    $('.serv').removeClass('gall');
    $('.hippo').removeClass('gall');
   });
   $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true
    });



}); // end of document ready// end of jQuery name space