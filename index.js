import {MyArray} from "./MyArray.js";

const arr = new MyArray(1 ,4, [2,4], { name: 'Misha' });
let newArr = arr.push('555')
console.log(arr, newArr)
let poppedArr = arr.pop()
console.log(arr, poppedArr)




