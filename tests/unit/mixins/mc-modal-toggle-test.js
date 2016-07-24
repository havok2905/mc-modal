import Ember from 'ember';
import McModalToggle from 'mc-modal/mixins/mc-modal-toggle';
import { module, test } from 'qunit';

module('Unit | Mixin | mc modal toggle');

test('actions:enable should toggle a set <id> property to true', function(assert) {
  const controllerMock = Ember.Controller.extend(McModalToggle, {
    foo: false
  });

  const subject = controllerMock.create();

  subject.send('enable', 'foo');

  assert.ok(subject.get('foo'));
});

test('actions:disable should toggle a set <id> property to false', function(assert) {
  const controllerMock = Ember.Controller.extend(McModalToggle, {
    foo: false
  });

  const subject = controllerMock.create();

  subject.send('disable', 'foo');

  assert.ok(!subject.get('foo'));
});
