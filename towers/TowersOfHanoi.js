$(document).ready(function() {
	$('[data-stack]').click(function(){
		// console.log($(this).attr('data-stack'));
		var $lastChild= $(this).children().last().detach(); 
		console.log($lastChild);
	});
});