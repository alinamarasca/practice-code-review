//import { splitObject } from './solution-split-object.js';

const juicyObj = {
  fruit: 'lemon',
  berry: 'raspberry',
  vegetable: 'cucumber',
};
//option 1 bu Amit
const separateObject = myObj => {
  const res = [];
  const keys = Object.keys(myObj);
  keys.forEach(key => {
    res.push({
      key: myObj[key],
    });
  });
  return res;
};
console.log(separateObject(myObj));

//option 2 by Konhar

var arr = Object.keys(obj);

var arrObj = arr.map(function(key) {
    return {key:obj[key]};
});

