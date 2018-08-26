import Pyramid from "./";

describe("Pyramid", () => {
  describe("new", () => {
    it("returns the pyramid representation of a name when it is only 2 characters long", () => {
      const name = "Ab";
      const expectedPyramid = [[1, 2]];

      expect(new Pyramid(name).slice()).toEqual(expectedPyramid);
    });

    it("returns the pyramid representation of a name", () => {
      const name = "John Oliver";
      const expectedPyramid = [
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

      expect(new Pyramid(name)).toEqual(expectedPyramid);
    });

    it("throws an error when name is less then 2 characters long", () => {
      const name = "a";

      expect(() => new Pyramid(name)).toThrow();
    });
  });

  describe("print", () => {
    it("prints the Pyramid correctly", () => {
      const pyramid = new Pyramid(
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4],
        [1, 2, 3],
        [1, 2]
      );
      const expectedResult = `1 2 3 4 5
 1 2 3 4
  1 2 3
   1 2
    3`;

      expect(pyramid.prettyPrint()).toBe(expectedResult);
    });
  });
});
