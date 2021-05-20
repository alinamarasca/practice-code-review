/**
 * Creates an array of values that are in both the first and the second arrays.
 * Repeated values are not duplicated in the return value, and the order of result
values are determined by the first array.
 * Note: This function returns a new array, and has no side-effects.
*
 * @param {Array} [arr1=[]] - First array to inspect.
 * @param {Array} [arr2=[]] - Second array to inspect.
 * @returns {Array} Returns the new array of filtered values.
 */

export const intersection = (arr1 = [], arr2 = []) => {
  // create a object to track elements
  const objMap = {};

  // create a new set to avoid duplicates in final result
  const result = new Set([]);

  // if they don't have any in common
  if (arr1.length === 0 || arr2.length === 0) {
    return "at least one array is empty";
  }
  // add a value to compare in next step
  arr2.forEach((i) => {
    objMap[i] = 1;
  });
  // condition to compare keys and values
  arr1.forEach((i) => {
    if (objMap[i] === 1) {
      // add new element to new Set
      result.add(i);
    } else {
      // don't add element
    }
  });
  // make array to final result
  return Array.from(result);
};
