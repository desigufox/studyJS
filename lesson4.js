"use strict";

// switch

let a = 2;
let b =0;
switch(a){
  case  b + 1:
    console.log('goo');
    break;
  case 4:
    console.log('d');
    break;
  case 2:
    console.log('gooooood');
    break;
  case '2':
    console.log('nooo');
    break;
  default:
  console.log('end');
}

a = '2';
switch(a){
  case  b + 1:
    console.log('goo');
    break;
  case 4:
    console.log('d');
    break;
  case 2:
  case '2':
    console.log('gooooood');
    break;
  default:
  console.log('end');
}

// function

function sum(a, b) {
//  console.log(arguments);
 return a + b;

}

// console.log(sum(9, 7));
// console.log(sum(91, 77));

// function sum2(...numbers) {
//   const ar = [56, 89, 34];
//   console.log([...numbers, ...ar])
// }

// sum2(4, 5, 6, 8, 9);



/**
ДЗ
1. Написать 4 функции для следующих математических действий: 
- сложение двух чисел
- вычитание одного числа из другого
- умножение двух чисел
- деление одного  числа на другое
при выводе console.log(имяФункции(параметр1, параметр2)) в консоль должны выводится результаты

2. Усовершенствовать все 4 функции с помощью оператора спрэд (три точки) и цикла так, чтобы действия можно было проводить с любым количеством аргументов.
Т.е. чтобы в функции можо было передовать любое количество параметров. Пример:
имяФункции(параметр1, параметр2, параметр3 и т.д.)
*/ 




 function calculatorMultiplication(multi) {
   let sum = 1;
for(let i = 0; i < multi.length; i++){
  sum = sum * multi[i];
}
return sum;
}
console.log(calculatorMultiplication([5, 8 ,7]));


 function calculatorP(nums) {
   let sum = 0;
   for(let i = 0; i < nums.length; i++){
     sum = sum + nums[i];
   }
  return sum ;
}
console.log(calculatorP([4, 6, 7]));



function calculatorM(nums) {
  let sum = nums[0];
  for(let i = 1; i < nums.length; i++){
    sum = sum - nums[i];
  }
  return sum;
}
console.log(calculatorM([8, 1]));



function calculatorDivi(nums) {
let summ = nums[0];
for(let i = 1; i < nums.length; i++){
summ = summ / nums[i]
}
return summ;
}
console.log(calculatorDivi([5, 8, 7]));
