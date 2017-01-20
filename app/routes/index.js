import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    addNewQuestion(params) {
      var neoQuestion = this.store.createRecord('question', params);
      neoQuestion.save();
      this.transitionTo('index');
    },
  }
});
