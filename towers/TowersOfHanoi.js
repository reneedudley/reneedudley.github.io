$(function() {
	var $lastChild = null;

	$('[data-stack]').click(function(){
		// console.log($(this).attr('data-stack'));
		if (!$lastChild){  
		 $lastChild= $(this).children().last().detach(); 

		}
		else {
			$(this).append($lastChild);
			$lastChild= null;
		}
		//parseInt to turn a string into a number
		});
	// if (){
	// 	$lastChild= $(this).children().last().attr('data-block') > $lastChildren.attr('data-block')	|| $(this).children().length===0}
	
	function isLegal(stack){
	if ($stack.children().length===0 || parseInt($stack.children().last().attr('data-block')) < parseInt($(block).attr('data-block'))){
		return true; 
	}
	else {
		return false;
	}
}
});

