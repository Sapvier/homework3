import {MyArray} from "./MyArray.js";

const arr = new MyArray({name: 'Paul'}, {name: "Jean"} , {name: 'Misha'});

arr.mySort()
console.log(arr)