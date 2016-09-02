Vue.component('tasks', {

	template: '#tasks-template',

	data: function() {
		return {
			list: []
		};
	},

	created: function() {
		
		this.fetchTaskList();
	},

	methods: {
		// Lesson 11: Using Vue Resource ($http)
		fetchTaskList: function() {			
			this.$http.get('api/tasks')
				.then(
					(response) => {
						// Success
						var tasks = JSON.parse(response.body)					
						this.list = tasks;
					}, (response) => {
						// Error
						console.log("Error fetching tasks");
					}
				);
			



			// This is the jQuery way of fetching tasks
			// $.getJSON('api/tasks', function(tasks) {
			// 	this.list = tasks;
			// }.bind(this));
		},

		deleteTask: function(task) {			
			this.list.$remove(task);
			console.log("Task deleted");
		}
	}

});


new Vue({

	el: 'body'
});