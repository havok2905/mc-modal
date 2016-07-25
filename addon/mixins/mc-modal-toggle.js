import Ember from 'ember';

/**
 * @mixin
 * @name McModalToggle
 * @description Common actions for components and controllers to control the modal window
 * @extends Ember.Mixin
 */
export default Ember.Mixin.create({
  actions: {

    /**
     * @function
     * @description Turns on the modal window
     * @memberof McModalToggle
     * @name action:enable
     * @param { String } id
     * @returns { Void }
     */
    enable(id) {
      this.set(id, true);
    },

    /**
     * @function
     * @description Turns off the modal window
     * @memberof McModalToggle
     * @name action:disable
     * @param { String } id
     * @returns { Void }
     */
    disable(id) {
      this.set(id, false);
    }
  }
});
