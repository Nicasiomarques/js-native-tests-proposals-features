import 'core-js/actual/array/index.js';
import { it, describe } from 'node:test';
import assert from 'node:assert';

describe('Old (mutable) array functions', () => {
  const array = [1, 3, 2];
  it('should sort the array', () => {
    array.sort();
    assert.deepStrictEqual(array, [1, 2, 3]);
  })

  it('should reverse the array', () => {
    array.reverse();
    assert.deepStrictEqual(array, [3, 2, 1]);
  })
})
