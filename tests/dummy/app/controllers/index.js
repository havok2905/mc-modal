import Ember from 'ember';

export default Ember.Controller.extend({
  firstModalDisplayable:  true,
  secondModalDisplayable: false,
  thirdModalDisplayable:  false,

  actions: {
    enable(id) {
      this.set(`${id}ModalDisplayable`, true);
    },

    disable(id) {
      this.set(`${id}ModalDisplayable`, false);
    }
  }
});
