const test = require('node:test');
const assert = require('node:assert');
const { pairs } = require('../src/index');

test('pairs groups items in twos', () => {
  assert.deepStrictEqual(pairs([1, 2, 3, 4]), [[1, 2], [3, 4]]);
});

// Intentionally brittle: simulates a repo whose tests break when the dependency is upgraded.
test('is locked to the audited lodash version', () => {
  const { version } = require('lodash/package.json');
  assert.strictEqual(version, '4.17.20');
});
