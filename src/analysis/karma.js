import Person from "../person";

export default (nameListA, nameListB) => {
  const peopleA = nameListA.map(name => new Person(name));
  const peopleB = nameListB.map(name => new Person(name));

  return peopleA.reduce((acc, personA) => {
    const nameA = personA.name;
    acc[nameA] = acc[nameA] || {};

    for (const personB of peopleB) {
      const nameB = personB.name;
      acc[nameB] = acc[nameB] || {};

      if (nameA === nameB) continue;
      if (acc[nameA][nameB] || acc[nameB][nameA]) continue;

      const inside = personA.histogram[personB.tip] || 0;
      const outside = personB.histogram[personA.tip] || 0;

      const result = {
        in: inside,
        out: outside,
        total: inside + outside
      };

      acc[nameA][nameB] = result;
      acc[nameB][nameA] = Object.assign({}, result, {
        in: result.out,
        out: result.in
      });
      acc[nameB].__person = personB;
    }

    acc[nameA].__person = personA;

    return acc;
  }, {});
};
