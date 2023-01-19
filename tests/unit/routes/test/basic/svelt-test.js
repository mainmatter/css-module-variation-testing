import { module, test } from 'qunit';
import { setupTest } from 'css-module-testing/tests/helpers';

module('Unit | Route | test/basic/svelt', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:test/basic/svelt');
    assert.ok(route);
  });
});
