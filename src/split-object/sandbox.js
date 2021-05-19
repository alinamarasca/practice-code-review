//import { splitObject } from './solution-split-object.js';

const myObj = {
  fruit: 'lemon',
  berry: 'raspberry',
  vegetable: 'cucumber',
};
// //option 1 bu Amit
// const splitObject = myObj => {
//   const res = [];
//   const keys = Object.keys(myObj);
//   keys.forEach(key => {
//     res.push({
//       key: myObj[key],
//     });
//   });
//   return res;
// };
// console.log(splitObject(myObj));

// //option 2 by Konhar
// const splitObject = myObj => {

// let arr = Object.keys(myObj);

// let arrObj = arr.map(function(key) {
//     return {[key]:myObj[key]};
// });
// }
// console.log(arrObj)

//option by Konhar turned to function

const splitObject = (obj) => {
  let arrayOfObjects = []; //create final array
  
  let arr = Object.keys(obj);//get all the values
  
  arrayOfObjects = arr.map(function(key) {//to fill up obj with arrays
      return {[key]:obj[key]}; //assigns keys from 'arr' to values from 'obj'
  });
  return arrayOfObjects; //return array
  }
  //console.log(splitObject3(myObj))

//-------------tests---------------//

describe('splitObject splits an object into one key/value pair objects, returns and array with objects', () => {
  describe('keys, values - simple', () => {

    it('keys, values - numbers', () => {
      const expected = [{1: 2}, {3: 4}, {5:6}];
      const received = splitObject({1: 2, 3: 4, 5:6})
      expect(received).toEqual(expected);
    });
    
    it('keys, values - strings', () => {
      const expected = [{Anna: 'Adler'}, {Doctor: 'Watson'}, { Sherlock:'Holmes'}];
      const received = splitObject({Anna: 'Adler', Doctor: 'Watson', Sherlock:'Holmes'});
      expect(received).toEqual(expected);
    });
    it('keys, values - numbers/strings', () => {
      const expected = [{12: 'monkeys'}, {hateful: 8},  {weeks: 9.5} , {2.5: 'man'}];
      const received = splitObject({12: 'monkeys', hateful: 8, weeks: 9.5, 2.5: 'man'});
      expect(received).toEqual(expected);
    });
    
  });

  describe('weird values', () => {
    it('value - boolean', () => {
      const expected = [-5, -3, -2, -1, 0];
      const received = sortNumbers([-1, 0, -3, -2, -5]);
      expect(received).toEqual(expected);
    });
    it('value - undefined', () => {
      const expected = [-5.09, -3.01, -2.56, -1.4, 0];
      const received = sortNumbers([-1.4, -3.01, -2.56, 0, -5.09]);
      expect(received).toEqual(expected);
    });
    it('value - NaN, Infinity, null', () => {
      const expected = [-5.09, -3.01, -2, -1, 0];
      const received = sortNumbers([0, -1, -3.01, -2, -5.09]);
      expect(received).toEqual(expected);
    });
  });
  describe('something empty', () => {

    it('empty array', () => {
      const expected = [0, 1, 2, 3, 5];
      const received = sortNumbers([5, 2, 0, 3, 1]);
      expect(received).toEqual(expected);
    });
    it('empty values', () => {
      const expected = [0, 1.11, 2.01, 3.8, 5.4];
      const received = sortNumbers([5.4, 2.01, 3.8, 0, 1.11]);
      expect(received).toEqual(expected);
    });
    // it('keys, values - numbers/strings',', () => {
    //   const expected = [1, 2, 3.8, 5.4];
    //   const received = sortNumbers([5.4, 2, 3.8, 1]);
    //   expect(received).toEqual(expected);
    // });
    
  });
  // describe('!!!!!!!!', () => {
  //   it('whole numbers', () => {
  //     const expected = [-2, -1, 0, 1, 2];
  //     const received = sortNumbers([0, 1, -1, 2, -2]);
  //     expect(received).toEqual(expected);
  //   });
  //   it('decimal numbers', () => {
  //     const expected = [-2.34, -1.01, 0, 1.4, 2.99];
  //     const received = sortNumbers([0, 1.4, -1.01, 2.99, -2.34]);
  //     expect(received).toEqual(expected);
  //   });
  //   it('mixed whole and decimal numbers', () => {
  //     const expected = [-5.09, -1, 0, 2, 3.01];
  //     const received = sortNumbers([-1, 3.01, 0, 2, -5.09]);
  //     expect(received).toEqual(expected);
  //   });
  // });
  
  describe('has no side effects', () => {
    it('empty array', () => {
      const arg = [];
      const returned = sortNumbers(arg);
      const areDifferent = arg !== returned;
      expect(areDifferent).toEqual(true);
    });
    it('values are empty', () => {
      const arg = [3, 2, 1];
      sortNumbers(arg);
      expect(arg).toEqual([3, 2, 1]);
    });
  });
});
