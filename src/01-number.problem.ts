import { expect, it } from "vitest";

export const addTwoNumbers = (a, b) => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});

// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions