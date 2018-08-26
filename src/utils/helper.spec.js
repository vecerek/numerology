const { numerify, numerologicalSum, numerologicalKey } = require("./helper");

describe("numerify", () => {
  it("converts a string to an array of numbers", () => {
    expect(numerify("John")).toEqual([1, 7, 5, 5]);
  });

  it("converts an accented string to an array of numbers", () => {
    expect(numerify("André")).toEqual([1, 5, 4, 2, 5]);
  });

  it("converts a full name to an array of numbers", () => {
    expect(numerify("John Oliver")).toEqual([1, 7, 5, 5, 7, 3, 1, 6, 5, 2]);
  });

  it("ommits unknown characters during the conversion", () => {
    expect(numerify("André!")).toEqual([1, 5, 4, 2, 5]);
  });
});

describe("numerologicalSum", () => {
  it("returns the numerological sum of two numbers {1..9}", () => {
    expect(numerologicalSum(1, 2)).toEqual(3);
    expect(numerologicalSum(3, 9)).toEqual(3);
  });
});

describe("numerologicalKey", () => {
  it("returns the numerological key of two number {1..9}", () => {
    expect(numerologicalKey(1, 2)).toEqual(123);
    expect(numerologicalKey(2, 1)).toEqual(123);
    expect(numerologicalKey(3, 9)).toEqual(393);
    expect(numerologicalKey(9, 3)).toEqual(393);
  });
});
