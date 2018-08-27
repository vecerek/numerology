const letterToNumber = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 8,
  g: 3,
  h: 5,
  i: 1,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 7,
  p: 8,
  q: 1,
  r: 2,
  s: 3,
  t: 4,
  u: 6,
  v: 6,
  w: 6,
  x: 5,
  y: 1,
  z: 7
};

const removeAccents = str =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const numerify = str => {
  const asciiStr = removeAccents(str).toLowerCase().replace(/\s/g, "");

  return asciiStr
    .split("")
    .filter(c => !!letterToNumber[c])
    .map(c => letterToNumber[c]);
};

export const numerologicalSum = (a, b) => {
  const sum = a + b;
  return Math.floor(sum / 10) + sum % 10;
};

export const numerologicalKey = (a, b) => {
  return a < b
    ? a * 100 + b * 10 + numerologicalSum(a, b)
    : b * 100 + a * 10 + numerologicalSum(a, b);
};
