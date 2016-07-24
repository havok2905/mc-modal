export default class PageObject {
  constructor(context) {
    this.context = context;
  }

  headerText() {
    return this.context.$('.mc-modal__header p').text().trim();
  }

  closeIcon() {
    return this.context.$('.mc-modal__header svg');
  }

  footerText() {
    return this.context.$('.mc-modal__footer').text().trim();
  }

  content() {
    return this.context.$('.mc-modal__content').text().trim();
  }
}
