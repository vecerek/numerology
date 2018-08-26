import { numerologicalKey } from "../utils/helper";

export default class Histogram {
  static create(pyramid) {
    return pyramid.reduce((acc, line) => {
      const limit = line.length - 2;

      for (let i = 0; i <= limit; i++) {
        const key = numerologicalKey(line[i], line[i + 1]);

        acc[key] ? (acc[key] += 1) : (acc[key] = 1);
      }

      return acc;
    }, {});
  }
}
