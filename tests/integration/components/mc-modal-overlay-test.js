import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mc-modal-overlay', 'Integration | Component | mc modal overlay', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mc-modal-overlay}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mc-modal-overlay}}
      template block text
    {{/mc-modal-overlay}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
