var Backbone= require('backbone');

var TodoItemView = Backbone.View.extend({
	el: '<li></li>',
	
	render: function(){
		var checked = (this.model.get('completed')) ? 'completed' : '';
		this.$el.html(this.model.get('title') + '<input type = "checkbox"'+ checked+' >');
		return this;
	},
});

module.exports= TodoItemView;