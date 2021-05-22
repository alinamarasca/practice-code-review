import { filterItems } from './difference.js';

const array1 = [2, 3, 4];
const array2 = [3, 4, 5];
const array3 = filterItems(array1, array2);
console.log(array3);
