# Intersection

Write a function that finds all the values shared between two arrays.

---

## Docstring

```js
/**
 *
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [arr1=[]] - First array to inspect.
 * @param {Array} [arr2=[]] - Second array to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); call function
 * // -> [2]   expected
 *
 * @example
 *
 * difference([2, 1, 2], [2, 3]);
 * // -> [2]
 * function expect which values are in common
 */
```

> Docstring is adapted from [lodash's intersection](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7498)

## Strategy

- In order to compare two arrays and find the shared elements, I chose to check each element of array and assign a new value to compare them after. These compared elements will go to an empty box which is going to filter duplicates.

## Implementation

I had to figure it out certain things:

- the forEach method calls a function once for each element. To compare each element of array I had to used this method because it allowed me to add a value to be passed and compared in a specific condition.And it was in order so I could check better.

  Inspired by 'Code with tkssharma' [channel on youTube](https://www.youtube.com/watch?v=em4zXfZsfds)

- the set object let me to store unique values of any type. In order to have a result without duplicates I had to store the elements in a set to filter and make them unique.

- Array.from. Converted to array again.

## Use cases

It could be used to compare items in a online shopping.

----> compare items inside of shopping card and final step of purchase.

addToShoppingCard["jeans, 40£", "scarf, 15£" "skirt, 20£"] finalStep["jeans, 35£", "jeans, 40£"]

You already have it in your shopping card, are you sure you want to buy it?

## Inspired by

- forEach [w3school](https://www.w3schools.com/jsref/jsref_foreach.asp) and [freeCodeCamp](https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/)
- Set [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
-
