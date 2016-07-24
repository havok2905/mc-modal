import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    enable(id) {
      this.set(`${id}ModalDisplayable`, true);
    },

    disable(id) {
      this.set(`${id}ModalDisplayable`, false);
    }
  }
});
