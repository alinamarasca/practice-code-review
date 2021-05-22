# difference: Array filter function

<!-- BEGIN DOCS -->

<a name="filterItems"></a>

## filterItems ⇒ <code>Array</code>

Creates an array of values that are in the first array, but not not in the second array.

Repeated values are not duplicated in the return value, and
the order of result values are determined by the first array.

**Note:** This function returns a new array, and has no side-effects.

**Returns**: <code>Array</code> - Returns the new array of filtered values.

| Param    | Type               | Default         | Description            |
| -------- | ------------------ | --------------- | ---------------------- |
| [array]  | <code>Array</code> | <code>[]</code> | The array to inspect.  |
| [values] | <code>Array</code> | <code>[]</code> | The values to exclude. |

**Example**

```js
filterItems([2, 1], [2, 3]); //  [1]
```

**Example**

```js
filterItems([1, 2, 1], [2, 3]); //  [1]
```

> Docs generated: Sat May 22 2021, 1:44:24 PM

<!-- END DOCS -->

---

## Strategy

The function that takes the difference of two arrays and writes to a new array
The filter() method creates an array filled with all array elements that pass a test (provided as a function).

---

## Implementation

I used a special function. It is array.filter(). It is easy and ready function to take difference.

## Use Cases const array1 = [2, 3, 4];

```js
const array2 = [3, 4, 5];
const array3 = filterItems(array1, array2);
console.log(array3);
```

---

## Inspiration

https://www.w3schools.com/jsref/jsref_filter.asp

https://forum.freecodecamp.org/t/how-to-filter-an-array-with-another-array/139352

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
