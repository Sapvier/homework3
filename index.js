import {MyArray} from "./MyArray.js";

const arr = new MyArray(1, 4, [2,4]);


const reducer = (accumulator, currentValue) => [...accumulator, currentValue];

console.log(arr.myReduce(reducer, []))

