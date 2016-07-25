import Ember from 'ember';
import layout from '../templates/components/mc-modal';

/**
 * @class
 * @name McModal
 * @description Modal window component
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,

  /**
   * @type { Boolean }
   * @description Returns proper rounding class if there is a no valid header text.
   * @memberof McModal
   * @returns { String }
   */
  contentNeedsTopRounding: Ember.computed('headerText', function() {
    const headerText = this.get('headerText');
    if(headerText === null || headerText === '') {
      return 'mc-modal--top-rounded';
    }

    return '';
  }),

  /**
   * @type { Boolean }
   * @description Returns proper rounding class if there is a no valid footer text.
   * @memberof McModal
   * @returns { String }
   */
  contentNeedsBottomRounding: Ember.computed('footerText', function() {
    const footerText = this.get('footerText');

    if(footerText === null || footerText === '') {
      return 'mc-modal--bottom-rounded';
    }

    return '';
  }),

  actions: {

    /**
     * @function
     * @memberof McModal
     * @description Turns off the modal window
     * @name action:closeModal
     * @returns { Void }
     */
    closeModal() {
      this.set(`displayable`, false);
    }

  }
});
