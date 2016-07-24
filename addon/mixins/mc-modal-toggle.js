import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    enable(id) {
      this.set(id, true);
    },

    disable(id) {
      this.set(id, false);
    }
  }
});
