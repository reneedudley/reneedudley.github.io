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
		
		function isLegal(){
			
			if ($('[data-stack]').children().length===0 || parseInt($('[data-stack]').children().last().attr('data-block')) < parseInt($(this).children().last().detach())){
				return true; 
			}
			else {
				return false;
			}
		};

		});
		
		

});

