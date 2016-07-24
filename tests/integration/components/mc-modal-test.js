import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import PageObject from '../../support/page-objects/mc-modal';

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
  const pageObject = new PageObject(this);

  this.render(hbs`
    {{#mc-modal headerText=headerText
                footerText=footerText
                displayable=displayable
                closable=closable}}
      <p>My Content</p>
    {{/mc-modal}}
  `);

  assert.equal(pageObject.headerText(), 'Modal Header');
  assert.equal(pageObject.closeIcon().length, 1);
  assert.equal(pageObject.footerText(), 'Footer Text');
  assert.equal(pageObject.content(), 'My Content');
});

test('it renders without a close button when not closable', function(assert) {
  const pageObject = new PageObject(this);

  this.set('closable', false);

  this.render(hbs`
    {{#mc-modal headerText=headerText
                footerText=footerText
                displayable=displayable
                closable=closable}}
      <p>My Content</p>
    {{/mc-modal}}
  `);

  assert.equal(pageObject.closeIcon().length, 0);
});

test('it does not render when not displayable', function(assert) {
  const pageObject = new PageObject(this);

  this.set('displayable', false);

  this.render(hbs`
    {{#mc-modal headerText=headerText
                footerText=footerText
                displayable=displayable
                closable=closable}}
      <p>My Content</p>
    {{/mc-modal}}
  `);

  assert.equal(pageObject.headerText(), '');
  assert.equal(pageObject.closeIcon().length, 0);
  assert.equal(pageObject.footerText(), '');
  assert.equal(pageObject.content(), '');
});

test('it can be self closing', function(assert) {
  const pageObject = new PageObject(this);

  this.render(hbs`
    {{#mc-modal headerText=headerText
                footerText=footerText
                displayable=displayable
                closable=closable}}
      <p>My Content</p>
    {{/mc-modal}}
  `);

  assert.equal(pageObject.headerText(), 'Modal Header');
  assert.equal(pageObject.closeIcon().length, 1);
  assert.equal(pageObject.footerText(), 'Footer Text');
  assert.equal(pageObject.content(), 'My Content');

  pageObject.closeIcon(this).click();

  assert.equal(pageObject.headerText(), '');
  assert.equal(pageObject.closeIcon().length, 0);
  assert.equal(pageObject.footerText(), '');
  assert.equal(pageObject.content(), '');
});
