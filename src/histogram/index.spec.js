import Histogram from "./";
import Pyramid from "../pyramid";

describe("Histogram", () => {
  it("returns a histogram of the values present in a numerological pyramid", () => {
    const pyramid = new Pyramid(
      [1, 7, 5, 5, 7, 3, 1, 6, 5, 2],
      [8, 3, 1, 3, 1, 4, 7, 2, 7],
      [2, 4, 4, 4, 5, 2, 9, 9],
      [6, 8, 8, 9, 7, 2, 9],
      [5, 7, 8, 7, 9, 2],
      [3, 6, 6, 7, 2],
      [9, 3, 4, 9],
      [3, 7, 4],
      [1, 2]
    );
    const expectedHistogram = {
      123: 1,
      134: 4,
      145: 1,
      167: 1,
      178: 1,
      246: 1,
      257: 2,
      279: 4,
      292: 3,
      347: 1,
      369: 1,
      371: 2,
      382: 1,
      393: 1,
      448: 2,
      459: 1,
      472: 2,
      494: 1,
      551: 1,
      562: 1,
      573: 3,
      663: 1,
      674: 1,
      685: 1,
      786: 2,
      797: 2,
      887: 1,
      898: 1,
      999: 1
    };

    expect(Histogram.create(pyramid)).toEqual(expectedHistogram);
  });
});
