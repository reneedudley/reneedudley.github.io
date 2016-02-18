var Backbone = require('Backbone');

var ToDoModel = Backbone.Model.extend({
	defaults:{
		completed: false,
		title:''
	}
});

module.exports = ToDoModel;

