'use strict'; //keeps from assigning global variables

$(document).ready(function () {
	//siwtch players
	var playerturn = 'X';
	var $datacell = $('[data-cell]');
	$datacell.click(function(){
  		$(this).text(playerturn);
  		// if (playerturn ==='X'){
  		// 	playerturn = 'O';
  		// }
  		// else{
  		// 	playerturn = 'X'
  		// }
  		playerturn = (playerturn ==='X') ? 'O' : 'X';
  	});




}); 

