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
  		checkForWin();
  		playerturn = (playerturn ==='X') ? 'O' : 'X';
  	});
  	function horizontalWin() {
    return $('[data-cell="0"]').text() === playerTurn && ('[data-cell="1"]').text() === playerTurn && ('[data-cell="2"]').text() === playerTurn) ||
        $('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn) ||
        ($('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
}
​
function verticalWin() {
    return $('[data-cell="0"]').text() === playerTurn && ('[data-cell="3"]').text() === playerTurn && ('[data-cell="6"]').text() === playerTurn) ||
        $('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn) ||
        ($('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
}
​
function diagonalWin() {
    return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && ('[data-cell="8"]').text() === playerTurn) ||
        ($('[data-cell="6"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn);

function checkForWin(){
	if (horizontalWin() || verticalWin()|| diagonalWin()){
		$('#announce-winner').text('player' + playerturn + 'won!')
	}
}


}); 

