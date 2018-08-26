import Pyramid from "../pyramid";
import Tip from "../tip";
import Histogram from "../histogram";

export default class Person {
  constructor(name) {
    const pyramid = new Pyramid(name);

    this.name = name;
    this.pyramid = pyramid;
    this.tip = Tip.create(pyramid);
    this.histogram = Histogram.create(pyramid);
  }
}
