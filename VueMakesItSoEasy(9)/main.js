Vue.component('tasks', {

	props: ['list'],

	template: '#tasks-template',

	computed: {
		remaining: function() {
			var vm = this;

			return this.list.filter(this.inProgress).length;
		}
	},

	methods: {
		isCompleted: function(task) {
			return task.completed;
		},
		
		inProgress: function(task) {
			return ! this.isCompleted(task);
		},

		deleteTask: function(task) {
			this.list.$remove(task);
		},

		clearCompleted: function() {
			this.list = this.list.filter(this.inProgress);
		},
		editTask: function(task) {
			var thisTask = task;
			return thisTask;
		}
	}

});

new Vue({
	el: '#app',

	data: {
		tasks: [
			{ body: 'Go to the store', completed: false },
			{ body: 'Go to the bank', completed: true },
			{ body: 'Go to the doctor', completed: false }
		]
	},

	methods: {

		toggleCompletedFor: function(task) {
			task.completed = !task.completed;
		}
	}
})