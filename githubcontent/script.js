
'use strict';

$(document).ready(function(){
	$.ajax('https://api.github.com/users/reneedudley/repos', {
		success: function (response){
			_.each(response, function(repos){
				var str= '<li> <a class="repo" href=# data-repo="https://api.github.com/repos/reneedudley/'+repos['name']+'/contents">'+repos['name']+'</a></li>';
				
				$('#repos').append(str);
			});
			$('.repo').on('click',function(event){
				event.preventDefault();
				$.ajax( $(this).attr('data-repo'),{
					success: function(response){
						_.each(response, function(contents){
							var str2= '<li>'+contents['name']+'</li>';
							$('#content').html(str2);
						})

					}
				})
			})
		}
	});

});

$(document).ready(function(){
	$.ajax('https://reqres-api.herokuapp.com/api/users', {
		success: function (response){
			var $peopleList = $('people');
			var peronListarr = [];
			_.each(response, function(user){
				var str = '<li> <a class="person" href=# data-user="https://reqres-api.herokuapp.com/api/users/'+user['id']+'"">' + user['first_name']+ ' '+ user['last_name']+'</a></li>';
			});
			$peopleList.html(peronListarr.join(''));

			$('.person').on('click',function(event){
				event.preventDefault();
				$.ajax ( $(this).attr('data-user'), {
					success: function(user){
						var str = user['first_name']+ " " + user['last_name'];
						str += '<br><img src="'+ user['avatar']+ '">'
						$('#person-details').html(str);
					}
				});

			});
		}
	});