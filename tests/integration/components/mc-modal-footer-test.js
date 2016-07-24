import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mc-modal-footer', 'Integration | Component | mc modal footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mc-modal-footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mc-modal-footer}}
      template block text
    {{/mc-modal-footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
