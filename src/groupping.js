import "core-js/actual/array/index.js";
import { it, describe } from "node:test";
import assert from "node:assert";

  describe("Grouping", () => {
    const arrayBase = [0, 1, 2, 3, 4];
    it("Old way", () => {
      const GroupEvenAndOdd = arrayBase.reduce(
        (acc, cur) =>
          cur % 2 === 0 ? { ...acc, even: [...acc.even, cur] } : { ...acc, odd: [...acc.odd, cur] },
        { even: [], odd: [] }
      );

      assert.deepStrictEqual(GroupEvenAndOdd, { even: [0, 2, 4], odd: [1, 3] });
    });
  });
