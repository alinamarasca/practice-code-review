# challenge name: strategy name

<!-- BEGIN DOCS -->

<!-- END DOCS -->

---

## Strategy

* Splits an object into multiple objects with one key/value pair each.
* The new objects are returned in an array.

## Implementation

After checking out possible solutions, I've tried to make my own using JS methods to get all values and keys, than iterate through them with the help of a loop. That was a big fail because I can't iterate simultaneously through one object and write key/value pairs(there was some smart terminology for that) in another object. My attempts helped me to understand better Konhar's solution - he creates array with keys to be able to iterate through them easily and uses `map()`  to make solutions shorter.

* get an object to work with
* create empty final array
* get all keys
* get all values(in fact, values stay in original object, I address them when create a pair)
* create new one key/value pair object: get key from array with keys, values - from original array;
* push objects into final array

## Use Cases

* __make data iterable__
* easier iteration through values
* to get length of array
* to use `for each()`, `filter()`, `map()`, `reduce()` methods
* use `for` loop

## Inspiration

I had no ideas how to solve this one by myself, so I searched for possible solution in internet.

**Solutions**

1. [AmitDiwan](https://www.tutorialspoint.com/splitting-an-object-into-an-array-of-objects-in-javascript)
2. [Konhar Coding](https://www.youtube.com/watch?v=Rvfl7nKNcMU)

I chose solution by Konhar because I want to get more familiar with JS methods, especially with `map()`. I also just liked his approach.
But I had to turn his solution into a function.

**Extra explanations**

* [Steve Griffith - Object keys, values, and entries methods](https://www.youtube.com/watch?v=VmicKaGcs5g)
