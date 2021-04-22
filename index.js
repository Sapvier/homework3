import {MyArray} from "./MyArray.js";

const arr = new MyArray(1, 3, 5);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.myReduce(reducer))