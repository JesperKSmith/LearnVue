Vue.component('tasks', {

  props: ['list'],

  template: '#tasks-template'

});

new Vue({
  el: '#app',

  data: {
    tasks: [
      { body: 'Registered user login', completed: false },
      { body: 'Registered correct account', completed: false },
      { body: 'Graph drawn', completed: false }
    ],
    test: { body: 'Is it done?', completed: false }
  },

  methods: {

    toggleCompletedFor: function(graph) {
      graph.completed = !graph.completed;
    }
  }
})