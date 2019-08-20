"use strict";

const DIVISION = 'деление';
const DIVISION_ON = 'деление на ';
const akt = 'четвертое;' 
/**
ДЗ
1. Переписать функции с function declaration на function expression
2. Использовать лямбды (стрелочные функции) для описания function expression
3. Задание на понимание callback-ов. Сделать функцию, которая будет принимать в качестве параметров переменные: массив значений, тип действия, функцию умножения и функцию деления. Далее внутри новой функции в зависимости от типа действия вызвать либо функцию умножения, либо функцию деления.
 */

 function a(nums, action, divi, multi){
   if (action === DIVISION){ 
     return divi(nums)
   }
   else {
    return multi(nums)
   }
 } 

// function calculatorDivi(nums){
// const calculatorDivi =function(nums){ 

const calculatorDivi = (nums) =>{
let summ = nums[0];
for(let i = 1; i < nums.length; i++){
summ = summ / nums[i]
}
return summ;
}
// console.log(calculatorDivi([5, 8, 7]));



//  function calcMulti(nums) {
// const calcMulti = function(nums){

const calcMulti = (nums) => {
   let sum7 = 1;
  for(let i = 0; i < nums.length; i++){
    sum7 = sum7 * nums[i];
  }
  return sum7;
}
// console.log(calcMulti([5, 8 ,7]));

// console.log(a([5 , 8, 7],null, calculatorDivi, calcMulti));
console.log(a([5 , 8, 7], DIVISION, calculatorDivi, calcMulti));
//  function calculatorP(nums)
// const calculatorP = function(nums){

const calculatorP = (nums) => {
let sum = 0;
   for(let i = 0; i < nums.length; i++){
     sum = sum + nums[i];
   }
  return sum ;
}
console.log(calculatorP([4, 6, 7]));




// function calculatorM(nums) { 
// const calculatorM = function(nums)  {

const calculatorM = (nums) => {
  let sum = nums[0];
  for(let i = 1; i < nums.length; i++){
    sum = sum - nums[i];
  }
  return sum;
}
console.log(calculatorM([8, 1]));




function division(a, b, error) {
  if (b === 0) {
    error();
    return false;
  }
  return a / b;
}

function multiplicationWithout0(a, b, errorA, errorB) {
  if (a === 0) {
    errorA();
    return false;
  } else if(b === 0) {
    errorB();
    return false;
  }
  return a * b;
}

// function dolbaebMessage() { alert('ты долбаёб?') }

// division(5, 0, dolbaebMessage)

// multiplicationWithout0(5, 0, dolbaebMessage, function() { alert('ты долбаёб 765457754?') })



/**
ДЗ
1. Переписать функции doubleNum и doubleDivNum с function declaration на function expression.
Использовать лямбды (стрелочные функции) для описания function expression в одну строку
2. Разобраться, что делают эти функции

3. Сделать функцию, которая будет принимать массив с числами (nums) и условие 
(тип действия из прошлого задания),в зависимости от условия увеличивать
 или уменьшать елемент массива (nums[i]) в 2 раза и записывать результат в новый массив (arr).
Затем функция должна вернуть этот новый массив.
По факту должно получиться:
  новаяФункция(nums, условие)
Вызов новаяФункция должен вернуть новый массив данных.

4. Переписать получившуюся функцию так, чтобы для увеличения и уменьшения числа в 2 раза 
использовать функции doubleNum и doubleDivNum.
Подумать как это сделать.
По факту должно получиться:
  новаяФункция(nums, условие, дополнительные параметры если они нужны)
Вызов новаяФункция должен вернуть новый массив данных.
 */

// console.log(doubleNum(7));

// console.log(doubleDivNum(9))

//  console.log(hM([4, 5]));


// function hM4(nums, work,  dN, dD){
//   // debugger
//   if(work === akt) {
//     return dN(nums);
//   } else {
//    return dD(nums);
//  }
//   }

// const doubleNum = (nums) => {
//   let s = [];
//   for (let i = 0; i < nums.length; i++) {
//     s.push(
//       nums[i] * 2
//     );
//   }
//   return s;
// }

// const doubleDivNum = (nums) => {
//  let s = [];
//  for (let i= 1; i < nums.length; i++){
//   s.push(
//     nums[i] / 2
//   );
//  }
//   return s;
// }
//  !

//  console.log(hM([5 , 8, 7], null, doubleNum, doubleDivNum));

const doubleNum = a => a * 2
const doubleDivNum = a => a / 2

function hM(nums, work,dN, dD){
  const arr= [];
  for(let i = 0; i < nums.length; i++){
    if(work === DIVISION_ON){
      arr.push(dN(nums[i]));
    } else {
      arr.push(dD(nums[i]));
    }
  }
  return arr;
}
 console.log(hM([5 , 8, 7], DIVISION_ON, doubleNum, doubleDivNum));