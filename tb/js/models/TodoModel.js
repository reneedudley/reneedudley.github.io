var Backbone = require('Backbone');

var ToDoModel = Backbone.Model.extend({
	defaults:{
		completed: false
	}
});

module.exports = ToDoModel;

