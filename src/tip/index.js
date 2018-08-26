import { numerologicalKey } from "../utils/helper";

class Tip extends Number {
  constructor(a, b) {
    const tmp = numerologicalKey(a, b);

    super(tmp);
    this.number = tmp;
  }

  static create(pyramid) {
    const lastLine = pyramid[pyramid.length - 1];

    return new Tip(lastLine[0], lastLine[1]);
  }

  toString() {
    return this.number.toString();
  }

  prettyPrint() {
    const str = this.toString();

    return `${str[0]} ${str[1]}\n ${str[2]}`;
  }
}

export default Tip;
