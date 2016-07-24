import Ember from 'ember';
import layout from '../templates/components/mc-modal';

export default Ember.Component.extend({
  layout,

  actions: {
    closeModal() {
      this.set(`displayable`, false);
    }
  }
});
