/**
 * Splits an object into an array of objects.
 * Each of new objects in the array will be one key/value pair from the object.
 * Doesn't modify the original array.
 *
 * @param {object} [obj] - Object to be split.
 * @returns {Array} - Array of objects.
 * @example
 * splitObject({a: 'b', c: 'd', e: 'f' }
 * {a: 'b', c: 'd', e: 'f' } -> [{a:'b;}, {c:'d'}, {e:'f'}];
 *  */

export const splitObject = (obj) => {
  let arrayOfObjects = []; // create final array
  const allKeys = Object.keys(obj); // get all the keys
  arrayOfObjects = allKeys.map((key) => { // to fill up obj with arrays we loop
    return { [key]: obj[key] }; // assigns keys from 'arr' to values from 'obj'
  });
  return arrayOfObjects; // return final array
};
