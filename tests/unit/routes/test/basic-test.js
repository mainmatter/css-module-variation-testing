import { module, test } from 'qunit';
import { setupTest } from 'css-module-testing/tests/helpers';

module('Unit | Route | test/basic', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:test/basic');
    assert.ok(route);
  });
});
