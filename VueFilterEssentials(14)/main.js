Vue.filter('role', function(value, role) {
	return value.filter(function(item) {
		return item.role == role;
	});

});

new Vue({
	el: 'body',

	data: {
		people: [
			{ name: 'John', role: 'admin' },
			{ name: 'Ben', role: 'admin' },
			{ name: 'Bruce', role: 'student' },
			{ name: 'Gerald', role: 'admin' }


		]
	}
})