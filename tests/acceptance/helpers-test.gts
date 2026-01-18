import { test, module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import MacroBugMyAddon1 from '#src/index.ts';

module('Acceptance | helpers | test', function (hooks) {
  setupRenderingTest(hooks);

  test('Test Application', function (assert) {
    const myAddon = new MacroBugMyAddon1();

    assert.ok(myAddon.isTesting, 'isTesting is true');
  });
});
