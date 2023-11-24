import { expect, it } from "vitest";

export const getName = (first: string, last: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it("Should work with just the first name", () => {
  const name = getName("Matt");

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName("Matt", "Pocock");

  expect(name).toEqual("Matt Pocock");
});

// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#use-optional-parameters