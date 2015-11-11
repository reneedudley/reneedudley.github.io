var Backbone = require('backbone');
var TodoListView = require('./TodoListView.js');

var TodoLayoutView = Backbone.View.extend({
	el: '<div>\
			<form>\
				<input type="text">\
				<input type = "submit" value="submit">\
			</form>\
			<div id="todos-container"></div>\
			<span id="num-todos"> </span> Todos (<span id="num-completed"> 0</span> Completed )\
		<div>',
	render: function(){
		var todoListView = new todoListView({collection:this.collection});
		todoListView.render();
		this.$el.find('#todos-container').html(todoListView.el);
		this.$el.find('#num-todos').text(this.collection.length);
		var numCompleted = this.collection.where({Completed:true}).length;
		this.$el.find('#num-completed').text(numCompleted);
		return this
	}

})
module.exports = TodoLayoutView;

