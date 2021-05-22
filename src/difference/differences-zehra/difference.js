/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and
 * the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * filterItems([2, 1], [2, 3]); //  [1]
 * @example
 *
 * filterItems([1, 2, 1], [2, 3]); //  [1]
 */

export const filterItems = (array = [], values = []) => {
  let newArray = [];
  newArray = array.filter((el) => !values.includes(el));
  return newArray;
};

