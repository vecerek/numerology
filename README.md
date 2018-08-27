# numerology

This npm package aims to provide multiple numerology analysis tools. The first such tool is the karma analysis. It analyzes the compatibility between one or multiple people based on their full legal name.

## Getting started
### Install

```
npm install @numero-dee/numerology --save-dev
```

or

```
yarn add --dev @numero-dee/numerology
```

## Usage

```js
import { karma } from @numero-dee/numerology;

const result = karma(["Michael James Ross"], ["Harvey Reginald Specter"])
```
### Expected outcome

```json
{
  "Michael James Ross": {
    "__person": [Object Person],
    "Harvey Reginald Specter": {
      "in": 3,
      "out": 5,
      "total": 8
    }
  },
  "Harvey Reginald Specter": {
    "__person": [Object Person],
    "Michael James Ross": {
      "in": 5,
      "out": 3,
      "total": 8
    }
  }
}
```

## Documentation

### Person

The `Person` object holds numerological properties of a person that are needed to perform the karma analysis.

```js
result["Michael James Ross"].__person
```

would return the following object:

```json
{
  "name": "Michael James Ross",
  "pyramid": [Object Pyramid],
  "tip": [Object Tip],
  "histogram": [Object Histogram]
}
```

### Pyramid

The `Pyramid` object is an array of arrays. It can be thought of as an upside down pyramid. The object is built from the name of a person. Each letter of the person is mapped to a specific digit. These digits make up the first array of the `Pyramid` array.

The second array is derived from the first array and so on. Consecutive pairs of digits (tuples) are numerogically summed up and the result is another element of the following array. For example: `3 + 4 = 7` but `6 + 7 = 4` because `6 + 7 = 13 => 1 + 3 = 4`.

A tuple with its numerological sum is also called a `triangle`. The `Pyramid` is a collection of triangles. See more in section [Histogram](#histogram).

To better visualize the pyramid, the `Pyramid#prettyPrint` method is available.

For example, in case of `Michael James Ross`:

```js
person.pyramid.prettyPrint()
```

would return the following formatted string:

```
4 1 3 5 1 5 3 1 1 4 5 3 2 7 3 3
 5 4 8 6 6 8 4 2 5 9 8 5 9 1 6
  9 3 5 3 5 3 6 7 5 8 4 5 1 7
   3 8 8 8 8 9 4 3 4 3 9 6 8
    2 7 7 7 8 4 7 7 7 3 6 5
     9 5 5 6 3 2 5 5 1 9 2
      5 1 2 9 5 7 1 6 1 2
       6 3 2 5 3 8 7 7 3
        9 5 7 8 2 6 5 1
         5 3 6 1 8 2 6
          8 9 7 9 1 8
           8 7 7 1 9
            6 5 8 1
             2 4 9
              6 4
               1
```

*Notice:* the last array of the above pyramid is not `[1]`. Instead, it is the last array of length 2: `[6 4]`.

### Tip
The `Tip` object is the numerical representaion of the bottom triangle of the `Pyramid`. A tip is also a triangle.

In case of the above pyramid the tip would be `461`. In numerology, the tuples `[6 4]` and `[4 6]` are equivalent because their numerological sums return the same result. Thus, both tuples would result in a tip of `461`.

A `Tip` can be similarly visualized as a `Pyramid` - using the method:

```js
tip.prettyPrint();
```

which would return the following formatted string:

```
4 6
 1
```

### Histogram
A pyramid is a collection of `triangles`. Tuples `[4 6]` and `[6 4]` are equivalent in numerology because their numerological sum is the same. Hence, the triangles represented by these tuples are also equivalent. They both would be numerically represented as `461`.

The `Histogram` object contains the counts of all triangles in a pyramid. The key is the numerical representation of a triangle and the value is its count in the pyramid.

An excerpt of the histogram of `Michael James Ross`'s pyramid would be as follows:

```json
{
  "112": 1,
  "123": 2,
  "134": 2,
  "145": 2,
  "156": 6,
  ...
}
```

### karma()

```js
const nameListA = ['Michael James Ross']; // non-empty array
const nameListB = ['Harvey Reginald Specter']; //non-empty array

const result = karma(nameListA, nameListB)
// typeof result === 'object'
```

This method returns the result of the karma analysis of two or multiple people. It expects 2 non-empty arrays of strings as arguments. All the people in the first array are compared to all the people in the second array.

To create comparisons between specific pairs of people, it is advised to create `multiple one-to-one comparisons` and merge the results into one object.

For example, when comparing `Michael James Ross` to `Harvey Reginals Specter`, the comparison object would be:

```json
{
  "in": 3,
  "out": 5,
  "total": 8
}
```

- `in`: gives the count of `Mike`'s [`Tip`](#tip) in `Harvey`'s [`Pyramid`](#pyramid).
- `out`: gives the count of `Harvey`'s [`Tip`](#tip) in `Mike`'s [`Pyramid`](#pyramid).
- `total`: gives the sum of `in` and `out`.

Alternatively, when comparing `Harvey Reginals Specter` to `Michael James Ross`, the comparison object would be the inverse of the previous object:

```json
{
  "in": 5,
  "out": 3,
  "total": 8
}
```
