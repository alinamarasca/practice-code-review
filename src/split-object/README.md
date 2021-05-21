# challenge name: strategy name

<!-- BEGIN DOCS -->

<a name="splitObject"></a>

## splitObject ⇒ <code>Array</code>

Splits an object into an array of objects.
Each of new objects in the array will be one key/value pair from the object.
Doesn't modify the original array.

**Returns**: <code>Array</code> - - Array of objects.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| [obj] | <code>object</code> | Object to be split. |

**Example**

```js
splitObject({a: 'b', c: 'd', e: 'f' }
{a: 'b', c: 'd', e: 'f' } -> [{a:'b;}, {c:'d'}, {e:'f'}];
```

> Docs generated: Thu May 20 2021, 10:22:08 AM

<!-- END DOCS -->

---

## Strategy

To create an array filled with one key-value pair objects I need to take key and value from given object and rewrite them into new object. That needs to be done for each key/value pair of given object.
Every new object is added to final array.

## Implementation

- get an object to work with
- create empty final array
- get all keys
- get all values(in fact, values stay in original object, I address them when create a pair)
- create new one key/value pair object: get key from array with keys, values - from original array;
- push objects into final array

## Use Cases

- **make data iterable**
- easier iteration through values
- to get length of array
- to use `for each()`, `filter()`, `map()`, `reduce()` methods
- use `for` loop

## Inspiration

I had no ideas how to solve this one by myself, so I searched for possible solution in internet.

**Solutions**

1. [AmitDiwan](https://www.tutorialspoint.com/splitting-an-object-into-an-array-of-objects-in-javascript)
2. [Konhar Coding](https://www.youtube.com/watch?v=Rvfl7nKNcMU)

I chose solution by Konhar because:

- I want to get more familiar with JS methods, especially with `map()`
- this solution is also an example of easier iteration through array instead of object
- I also just liked his approach it is simple and short

But I had to turn his solution into a function.

**Extra explanations**

- [Steve Griffith - Object keys, values, and entries methods](https://www.youtube.com/watch?v=VmicKaGcs5g)
