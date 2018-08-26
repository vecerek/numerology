import { numerologicalSum, numerify } from "../utils/helper";

class Pyramid extends Array {
  constructor(...args) {
    if (args.length === 1 && typeof args[0] === "string") {
      const name = args[0];

      if (name.length < 2) {
        throw Error("The name must be at least 2 characters long");
      }

      const pyramid = Pyramid.build(name);
      super(...pyramid);
    } else {
      super(...args);
    }
  }

  static build(name) {
    const numerifiedName = numerify(name);
    const pyramid = [];
    const stack = [numerifiedName];

    while (stack.length > 0) {
      const currentLine = stack.pop();
      pyramid.push(currentLine);
      if (currentLine.length === 2) break;

      const nextLine = [];
      const limit = currentLine.length - 2;
      for (let i = 0; i <= limit; i++) {
        nextLine.push(numerologicalSum(currentLine[i], currentLine[i + 1]));
      }

      nextLine.length === 2 ? pyramid.push(nextLine) : stack.push(nextLine);
    }

    return pyramid;
  }

  prettyPrint() {
    return this.reduce((acc, line, index) => {
      const tmp = acc.concat(" ".repeat(index) + line.join(" "));
      if (line.length === 2) {
        return tmp.concat(
          " ".repeat(index + 1) + numerologicalSum(line[0], line[1])
        );
      }

      return tmp;
    }, []).join("\n");
  }
}

export default Pyramid;
