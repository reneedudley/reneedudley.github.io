'use strict';


$(document).ready(function () {
	var $datacell = $('[data-cell]');
	$datacell.click(function(){
  		$(this).text('X')
  	});

}); 