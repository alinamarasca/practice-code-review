//import { splitObject } from './solution-split-object.js';

const myObj = {
  fruit: 'lemon',
  berry: 'raspberry',
  vegetable: 'cucumber',
};
//option 1 bu Amit
const splitObject = myObj => {
  const res = [];
  const keys = Object.keys(myObj);
  keys.forEach(key => {
    res.push({
      key: myObj[key],
    });
  });
  return res;
};
console.log(splitObject(myObj));

//soption 2 by Konhar
const splitObject = myObj => {

let arr = Object.keys(myObj);

let arrObj = arr.map(function(key) {
    return {[key]:myObj[key]};
});
}
console.log(arrObj)

//solution by Konhar turned to function


const splitObject3 = (obj) => {
  let arrayOfObjects = []; //create final array
  
  let arr = Object.keys(obj);//get all the values
  
  arrayOfObjects = arr.map(function(key) {//fill up obj with arrays
      return {[key]:obj[key]};
  });
  return arrayOfObjects; //return array
  }
  console.log(splitObject3(myObj))

//-------------tests---------------//

 for (const solution of [splitObject
]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter', () => {
      expect(solution()).toEqual([0]);
    });

    it('0', () => {
      expect(solution(0)).toEqual([0]);
    });

    it('1', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    it('4', () => {
      expect(solution(4)).toEqual([4, 3, 2, 1, 0]);
    });
    it('NaN', () => {
      expect(solution('r')).toEqual('is NaN');
    });
    
   //write at least 5 more tests ...
  });
}