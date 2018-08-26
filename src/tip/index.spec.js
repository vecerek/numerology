import Tip from "./";

describe("Tip", () => {
  describe("create", () => {
    it("returns the tip of a pyramid as a key", () => {
      const pyramid = [
        [1, 7, 5, 5, 7, 3, 1, 6, 5, 2],
        [8, 3, 1, 3, 1, 4, 7, 2, 7],
        [2, 4, 4, 4, 5, 2, 9, 9],
        [6, 8, 8, 9, 7, 2, 9],
        [5, 7, 8, 7, 9, 2],
        [3, 6, 6, 7, 2],
        [9, 3, 4, 9],
        [3, 7, 4],
        [1, 2]
      ];
      const expectedTip = 123;

      expect(Tip.create(pyramid)).toEqual(expectedTip);
    });
  });

  describe("print", () => {
    it("prints the Tip correctly", () => {
      expect(new Tip(1, 2).prettyPrint()).toBe("1 2\n 3");
    });
  });
});
