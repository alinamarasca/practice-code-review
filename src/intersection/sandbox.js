// import { solutionName } from './intersection.js';

/**
 * 
 * Creates an array of values that are in both the first and the second arrays. 
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); call function 
 * // -> [2]   expected 
 *
 * @example
 * difference([2, 1, 2], [2, 3]);
 * // -> [2]
 */

/* 	- set unique arrays for both arrays
	- iterate through array1 and see if array2 contains the same element 
	- if yes then push that number to copyArr
  - if not then pass 

*/

// Inspired by farshid =>>> https://edabit.com/challenge/MfAkm7CkWqepAZTBM

/*
  const finalIntersection = (arr =[], values =[]) => {
  let intersectionValues = [];

  arr.forEach((element) => {
    if (values.includes(element)) {
      intersectionValues.indexOf(element) === -1 && intersectionValues.push(element);
    }
  });
  return [intersectionValues];
  }


finalIntersection ([2, 3, 4], [3, 1]);
*/
// Inspired by youtube channel, adding values to a different sets (set for unique element and set for common elements) //==>https://www.youtube.com/watch?v=Wo7dbhMEw0o

//--------------------- This method -----------------//

// Inspired by youtube channel, map method, https://www.youtube.com/watch?v=em4zXfZsfds 

const intersection = (arr1 = [], arr2 = []) => {
   // create a object or something to track elements
   const objMap = {}; // 
   // return condition of common elements 
   let result = [];

   if (arr1.length === 0 || arr2.length === 0){
    return('at least one array is empty'); // return nothing if they don't have any element in common 
    }

    arr2.forEach((i) => {
     objMap[i] = 1; 

   }); 

    arr1.forEach((i) => {
     if (ojbMap[i] === 1){
       result.push(i); // push common element 
     } else {
       // there is nothing to push 
     }

   });

   return result;
}

console.log(intersection([2, 1], [2, 3, 1]));  // [2, "some", 4]


//---------------------test---------------------//

describe('intersection returns shared elements', () => {
  describe('', () => {
    it('numbers', () => {
      const expected = [2];
      const received = commonFromArrays ([2, 1], [2, 3]);
      expect(received).toEqual(expected);
    });

     it('string and numbers', () => {
      const expected = [2, 1, 3];
      const received = commonFromArrays ([2, 1, 'sky', 3], [2, 3, 'cookies', 8, 1]);
      expect(received).toEqual(expected);
    });
    
    it('strings', () => {
      const expected = ['', 'cookies'];
      const received = commonFromArrays (['', 'sky', 'cookies'], ['fly', 'cookies', '']);
      expect(received).toEqual(expected);
    });

  });


  // describe for weird elements 

  // describe for side effects 

  // 