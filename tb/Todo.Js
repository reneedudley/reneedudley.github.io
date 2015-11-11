var TodoModel = Backbone.Model.extend({
	defaults: {completed:false}; 
})

var todo1 = new TodoModel({title:"walk dog"});
var todo2 = new TodoModel({title:"feed cat"});

var TodoCollection = Backbone.Collection.extend({
	model: Todo Model
});

var todoCollection = new TodoCollection();

todoCollection.add([todo1,todo2]);

var TodoLayoutView = Backbone.View.extend({
	el: '<div> \ 
			<form> \ 
				<input type = "text"> \
				<input type = "submit" value="submit"> \
			</form> \
			<div id ="todo-container"></div> items \
			<span id ="num-todos"> </span>\
		</div>'
	render function(){
		this.$el.find('#num-todos').text(this.collection.length)
	}
});

var todolayoutview= new TodoLayoutView({collection: todoCollection});
todolayoutview.render
