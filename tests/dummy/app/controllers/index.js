import Ember from 'ember';
import McModalToggle from 'mc-modal/mixins/mc-modal-toggle';

export default Ember.Controller.extend(McModalToggle, {
  first:  false,
  second: false,
  third:  false,
  fourth: false
});
