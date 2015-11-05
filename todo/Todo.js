'use strict';
$(function(){
	$(document).submit(function(event){
		event.preventDefault();
		var text = $(this).val('input[type="text"]');
		$('input').find(text);
		var listItem = '<li>" + text + "<li>'
		$('#todo-list').append(text);
	})
});