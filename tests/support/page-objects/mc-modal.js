/**
 * @class
 * @name PageObject
 * @description Class containing query logic for use in integration tests.
 */
export default class PageObject {

  /*
   * @constructor
   * @name constructor
   * @description Initializes the page object
   * @param { Object } context
   * @returns { Void }
   */
  constructor(context) {
    this.context = context;
  }

  /**
   * @function
   * @description Returns the text in the modal header
   * @memberof PageObject
   * @name headerText
   * @returns { String }
   */
  headerText() {
    return this.context.$('.mc-modal__header p').text().trim();
  }

  /**
   * @function
   * @description Returns svg icon that controls closing the modal
   * @memberof PageObject
   * @name closeIcon
   * @returns { JQuery }
   */
  closeIcon() {
    return this.context.$('.mc-modal__header svg');
  }

  /**
   * @function
   * @description Returns the text in the modal footer
   * @memberof PageObject
   * @name footerText
   * @returns { String }
   */
  footerText() {
    return this.context.$('.mc-modal__footer').text().trim();
  }

  /**
   * @function
   * @description Returns the text in the modal content container
   * @memberof PageObject
   * @name content
   * @returns { String }
   */
  content() {
    return this.context.$('.mc-modal__content').text().trim();
  }

  /**
   * @function
   * @description Returns if the content container has top rounded corners
   * @memberof PageObject
   * @name contentTopRounded
   * @returns { Boolean }
   */
  contentTopRounded() {
     return this.context.$('.mc-modal__content').hasClass('mc-modal--top-rounded');
  }

  /**
   * @function
   * @description Returns if the content container has bottom rounded corners
   * @memberof PageObject
   * @name contentBottomRounded
   * @returns { Boolean }
   */
  contentBottomRounded() {
    return this.context.$('.mc-modal__content').hasClass('mc-modal--bottom-rounded');
  }
}
