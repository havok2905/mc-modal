import Ember from 'ember';

export default Ember.Controller.extend({
  displayable: false,

  actions: {
    enable() {
      this.set('displayable', true);
    },

    disable() {
      this.set('displayable', false);
    }
  }
});
