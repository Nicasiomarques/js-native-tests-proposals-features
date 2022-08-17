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

  it('should remove the element at index 1', () => {
    array.splice(1, 1);
    assert.deepStrictEqual(array, [3, 1]);
  })
})

describe('New (immutable) array functions', () => {
  const originalArray = [1, 3, 2];
  const checkIfSteelImmutable = () => assert.deepStrictEqual(originalArray, [1, 3, 2]);
  it('[toSorted]', () => {
    const sortedArray = originalArray.toSorted();
   
    assert.deepStrictEqual(sortedArray, [1, 2, 3]);
    checkIfSteelImmutable();
  });

  it('[toSpliced]', () => {
    const splicedArray = originalArray.toSpliced(1, 2);
   
    assert.deepStrictEqual(splicedArray, [1]);
    checkIfSteelImmutable();
  });
});
