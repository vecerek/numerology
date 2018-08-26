import karma from "./karma";
import Person from "../person";

describe("analyze", () => {
  it("returns the correct result when one person is compared to other people", () => {
    const nameListA = ["Michael James Ross"];
    const nameListB = ["Donna Roberta Paulsen", "Harvey Reginald Specter"];

    const result = karma(nameListA, nameListB);

    expect(result["Michael James Ross"].__person).toBeInstanceOf(Person);
    expect(result["Michael James Ross"]["Michael James Ross"]).toBeUndefined();

    expect(
      result["Michael James Ross"]["Donna Roberta Paulsen"]
    ).toMatchObject({
      in: 3,
      out: 4,
      total: 7
    });

    expect(
      result["Donna Roberta Paulsen"]["Michael James Ross"]
    ).toMatchObject({
      in: 4,
      out: 3,
      total: 7
    });

    expect(
      result["Michael James Ross"]["Harvey Reginald Specter"]
    ).toMatchObject({
      in: 3,
      out: 5,
      total: 8
    });

    expect(
      result["Harvey Reginald Specter"]["Michael James Ross"]
    ).toMatchObject({
      in: 5,
      out: 3,
      total: 8
    });
  });

  it("returns the correct result when multiple people are compared to other people", () => {
    const nameListA = ["Michael James Ross", "Donna Roberta Paulsen"];
    const nameListB = ["Donna Roberta Paulsen", "Harvey Reginald Specter"];

    const result = karma(nameListA, nameListB);

    expect(result["Michael James Ross"].__person).toBeInstanceOf(Person);
    expect(result["Michael James Ross"]["Michael James Ross"]).toBeUndefined();

    expect(
      result["Michael James Ross"]["Donna Roberta Paulsen"]
    ).toMatchObject({
      in: 3,
      out: 4,
      total: 7
    });

    expect(
      result["Donna Roberta Paulsen"]["Michael James Ross"]
    ).toMatchObject({
      in: 4,
      out: 3,
      total: 7
    });

    expect(
      result["Michael James Ross"]["Harvey Reginald Specter"]
    ).toMatchObject({
      in: 3,
      out: 5,
      total: 8
    });

    expect(
      result["Harvey Reginald Specter"]["Michael James Ross"]
    ).toMatchObject({
      in: 5,
      out: 3,
      total: 8
    });

    expect(result["Donna Roberta Paulsen"].__person).toBeInstanceOf(Person);
    expect(
      result["Donna Roberta Paulsen"]["Donna Roberta Paulsen"]
    ).toBeUndefined();

    expect(
      result["Donna Roberta Paulsen"]["Harvey Reginald Specter"]
    ).toMatchObject({
      in: 5,
      out: 12,
      total: 17
    });

    expect(
      result["Harvey Reginald Specter"]["Donna Roberta Paulsen"]
    ).toMatchObject({
      in: 12,
      out: 5,
      total: 17
    });
  });
});
