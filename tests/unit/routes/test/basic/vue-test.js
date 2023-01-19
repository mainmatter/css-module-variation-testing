import { module, test } from 'qunit';
import { setupTest } from 'css-module-testing/tests/helpers';

module('Unit | Route | test/basic/vue', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:test/basic/vue');
    assert.ok(route);
  });
});
