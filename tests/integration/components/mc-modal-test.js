import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const pageObject = {
  headerText(context) {
    return context.$('.mc-modal__header p').text().trim();
  },

  closeIcon(context) {
    return context.$('.mc-modal__header i');
  },

  footerText(context) {
    return context.$('.mc-modal__footer').text().trim();
  },

  content(context) {
    return context.$('.mc-modal__content').text().trim();
  }
};

moduleForComponent('mc-modal', 'Integration | Component | mc modal', {
  integration: true,

  beforeEach() {
    this.set('headerText', 'Modal Header');
    this.set('footerText', 'Footer Text');
    this.set('displayable', true);
    this.set('closable', true);
  }
});

test('it renders and yields content when displayable and closable', function(assert) {
  this.render(hbs`
    {{#mc-modal headerText=headerText
                footerText=footerText
                displayable=displayable
                closable=closable}}
      <p>My Content</p>
    {{/mc-modal}}
  `);

  assert.equal(pageObject.headerText(this), 'Modal Header');
  assert.equal(pageObject.closeIcon(this).length, 1);
  assert.equal(pageObject.footerText(this), 'Footer Text');
  assert.equal(pageObject.content(this), 'My Content');
});

test('it renders without a close button when not closable', function(assert) {
  this.set('closable', false);

  this.render(hbs`
    {{#mc-modal headerText=headerText
                footerText=footerText
                displayable=displayable
                closable=closable}}
      <p>My Content</p>
    {{/mc-modal}}
  `);

  assert.equal(pageObject.closeIcon(this).length, 0);
});

test('it does not render when not displayable', function(assert) {
  this.set('displayable', false);

  this.render(hbs`
    {{#mc-modal headerText=headerText
                footerText=footerText
                displayable=displayable
                closable=closable}}
      <p>My Content</p>
    {{/mc-modal}}
  `);

  assert.equal(pageObject.headerText(this), '');
  assert.equal(pageObject.closeIcon(this).length, 0);
  assert.equal(pageObject.footerText(this), '');
  assert.equal(pageObject.content(this), '');
});

test('it can be self closing', function(assert) {

  this.render(hbs`
    {{#mc-modal headerText=headerText
                footerText=footerText
                displayable=displayable
                closable=closable}}
      <p>My Content</p>
    {{/mc-modal}}
  `);

  assert.equal(pageObject.headerText(this), 'Modal Header');
  assert.equal(pageObject.closeIcon(this).length, 1);
  assert.equal(pageObject.footerText(this), 'Footer Text');
  assert.equal(pageObject.content(this), 'My Content');

  pageObject.closeIcon(this).click();

  assert.equal(pageObject.headerText(this), '');
  assert.equal(pageObject.closeIcon(this).length, 0);
  assert.equal(pageObject.footerText(this), '');
  assert.equal(pageObject.content(this), '');
});
