import Ember from 'ember';

export default Ember.Component.extend({
  postNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('postNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        query: this.get('query') ? this.get('query') : "",
        note: this.get('note') ? this.get('note') : "",
      };
      this.set('postNewQuestion', false);
      this.sendAction('addNewQuestion', params);
    }
  }
});
