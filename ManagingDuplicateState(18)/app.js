var store = {

	username: 'JohnWayne'
};

new Vue({
	el: 'body',

	data: {
		misc: 'data',

		shared: store
	},

	components: {
		notification: {
			data: function() {
				return store;
			},

			template: '<h2>{{ username }}: <slot></slot></h2>'
		}
	}
})