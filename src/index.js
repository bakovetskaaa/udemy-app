// var numbers = [3, 56, 2, 48, 5];
//
// //Map -Create a new array by doing something with each item in an array.
// // function double(x){
// //     return x * 2;
// // }
// //
// // const newNumbers = numbers.map(double);
//
// // var newNumbers = [];
// // numbers.forEach(function (x){
// //     newNumbers.push(x * 2)
// // });
//
// // var newNumbers = numbers.map(function (x) {
// //     return (x * 2)
// // })
// //
// // console.log(newNumbers);
//-----------------------------------------------------------------------------------------------//
// //Filter - Create a new array by keeping the items that return true.
//
//
// // const newNumbers = numbers.filter(function(num) {
// //     return num < 10;
// // })
//
// // var newNumbers = [];
// // numbers.forEach(function (num){
// //     if (num < 10){
// //         newNumbers.push(num)
// //     }
// // })
//
// // console.log(newNumbers);
//-----------------------------------------------------------------------------------------------//
// //Reduce - Accumulate a value by doing something to each item in an array.
//
// // var newNumbers = numbers.reduce(function (accumulator, currentNumber){
// //     return accumulator + currentNumber
// // })
//
// // var newNumbers= 0;
// // numbers.forEach(function (currentNumber){
// //     newNumbers += currentNumber
// // })
// //
// // console.log(newNumbers);
//-----------------------------------------------------------------------------------------------//
// //Find - find the first item that matches from an array.
//
// // var newNumber = numbers.find(function (num){
// //     return num > 10;
// // })
// //
// // console.log(newNumber);
//
//-----------------------------------------------------------------------------------------------//
// //FindIndex - find the index of the first item that matches.
// var newNumber = numbers.findIndex(function (num){
//     return num > 10;
// })
//
// console.log(newNumber);

import emojipedia from "./emojipedia";

console.log(emojipedia);

var string = emojipedia.map(function (x){
    return x.meaning.slice(0, 100)
})

console.log(string);