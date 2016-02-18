var Backbone= require('backbone');
var TodoItemView = require('../views/TodoItemView.js');

var TodoListView = Backbone.View.extend({
	el: '<ul> </ul>',
	initialize: function(){
		this.listenTo(this.collection,'all',function(event){
			console.log(event);
		});
	},

	render: function(){
		var that = this;
		this.collection.each(function(todo){
			var todoItemView = new TodoItemView({model:todo});
			todoItemView.render();
			that.collection.$el.append(todoItemView.el);
			return this;
		});
	}
});

module.exports= TodoListView;