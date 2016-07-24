import Ember from 'ember';
import McModalToggleMixin from 'mc-modal/mixins/mc-modal-toggle';
import { module, test } from 'qunit';

module('Unit | Mixin | mc modal toggle');

// Replace this with your real tests.
test('it works', function(assert) {
  let McModalToggleObject = Ember.Object.extend(McModalToggleMixin);
  let subject = McModalToggleObject.create();
  assert.ok(subject);
});
