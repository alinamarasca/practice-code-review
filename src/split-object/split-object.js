/**
 * Splits an object into an array of objects.
 * Each of new objects in the array will be one key/value pair from the object.
 * Doesn't modify the original array.
 * @param {object} [obj] - object to be split.
 * @returns {Array}  - array of objects.
 * @example
 * splitObject({a: 'b', c: 'd', e: 'f' }
 * {a: 'b', c: 'd', e: 'f' } -> [{a:'b;}, {c:'d'}, {e:'f'}];
 *  */

export const splitObject = (obj) => {
  let arrayOfObjects = [];
  const arr = Object.keys(obj);
  arrayOfObjects = arr.map((key) => {
    return { [key]: obj[key] };
  });
  return arrayOfObjects;
};
