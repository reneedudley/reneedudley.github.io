var TodoModel = require('../models/TodoModel.js');
var Backbone = require('Backbone');
var TodosCollection = Backbone.Collection.extend({
	model: TodoModel
});

module.exports = TodosCollection;