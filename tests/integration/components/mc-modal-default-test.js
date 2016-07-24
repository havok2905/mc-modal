import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mc-modal-default', 'Integration | Component | mc modal default', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mc-modal-default}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mc-modal-default}}
      template block text
    {{/mc-modal-default}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
