// ПРАКТИКА 3
// ——————————————
// Задания. Часть 1
// Задача 1. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
let a = 10;

if ( a == 10){
  console.log('Верно');
} else {
  console.log('Неверно');
}
// Задача 2. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
let min = 46;

if (min <= 15){
  console.log('I четверть');
} else if( min <= 30){
  console.log('II четверть');
} else if(min <= 45){
  console.log('III четверть');
} else{
  console.log('IV четверть');
}
// Задача 3. Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.

// let week = {
// dayRu: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
// dayEn: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
// }
// let lang = 'dayRu';
// let arr;
// console.log(week[lang]);

const dayRu = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const dayEn = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// if (lang === 'ru'){
//  arr = dayRu;
// } else if (lang === 'en'){
//  arr = dayEn;
// }

let lang = 'ru';
let arr;
switch (lang) {
  case 'ru':
    arr = dayRu;
    break;
  case 'en':
    arr = dayEn;
    break;
}
console.log(arr);

// ——————————————
// Задания. Часть 2
// Работа с if-else
// 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a1 = 1;
// let a1 = 0;
let a1 = -3;

if (a1 === 0){
  console.log('Верно');
} else {
  console.log('Неверно');
}

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

if (a1 > 0){
  console.log('Верно');
} else {
  console.log('Неверно');
}


// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

if (a1 < 0){
  console.log('Верно');
} else {
  console.log('Неверно');
}


// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

if (a1 >= 0){
  console.log('Верно');
} else {
  console.log('Неверно');
}


// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

if (a1 <= 0){
  console.log('Верно');
} else {
  console.log('Неверно');
}


// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

if (a1 != 0){
  console.log('Верно');
} else {
  console.log('Неверно');
}

// 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

let a2 = 'test';
// let a2 = 'тест';
// let a2 = 3;

if (a2 === 'test'){
  console.log('Верно!');
} else {
  console.log('Неверно!');
}

// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

let a3 = '1';
// let a3 = 1;
// let a3 = 3;
if (a3 === '1'){
  console.log('Верно!!');
} else {
  console.log('Неверно!!');
}


// Работа с логическими переменными
// 9. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.


let test1 = true;
if (test1 === true){
  console.log('Верно')
} else {
  console.log('Неверно')
}
  if (test1){
  console.log('Верно')
} else {
  console.log('Неверно')
}
// 10. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

let test2 = true;
if (test2 !== true){
  console.log('Верно')
} else {
  console.log('Неверно')
}
if (!test2){
  console.log('Верно')
} else {
  console.log('Неверно')
}

// Работа с && (и) и || (или)
// 11. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a4 = 5;
// let a4 = 0;
// let a4 = -3;
let a4 = 2;
if (a4 > 0 && a4 < 5){
  console.log('Верно!')
} else {
  console.log('Неверно!')
}

// 12. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a5 = 5;
// let a5 = 0;
// let a5 = -3;
let a5 = 2;

if (a5 == 0 || a5 == 2)  {
  a5 = a5 + 7;
} else {
  a5 = a5 / 10;
}

console.log(a5);


// 13. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

let a6 = 1; let b6 = 3;
// let a6 = 0; let b6 = 6;
// let a6 = 3; let b6 = 5;

if( a6 <= 1 || b6 >=3){
  console.log(a6 + b6);
} else {
  console.log(a6 - b6);
}

// 14. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

let a7 = 3;
let b7 = 6;

if( (a7 > 2 && a7 < 11) || (b7 >= 6 && b7 < 14)){
console.log('Верно');
} else {
  console.log('Неверно');
}

// На switch-case
// 15. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

let num = 3;
let result;

switch (num){
  case 1:
  result = 'зима';
  break;
  case 2 :
  result = 'весна';
  break;
  case 3:
  result = 'лето';
  break;
  case 4:
  result = 'осень';
  break;
}
console.log(result);

// Задачи
// 16. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 23;
 if(day <= 10 ){
   console.log('I декада');
 } else if(day <= 20){
   console.log('II декада');
 } else{
   console.log('III декада');
 }

//  17. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 11;
if (month <=2 || month == 12){
console.log('зима');
} else if(month <=5 && month >=3){
console.log('весна');
}else if(month <= 6 && month >=8){
console.log('лето');
} else{
console.log('осень');
}


// 18. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = 'abcde';

if (str[0] == 'a'){
  console.log('да');
} else{
  console.log('нет');
}

// 19. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str1 = '12345';
if (str1[0] == 1 || str1[0] == 2 || str1[0] == 3){
  console.log('да');
} else{
  console.log('нет');
}


// 20. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

let str2 = '345';
console.log(+str2[0] + +str2[1] + +str2[2]);

// 21. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str3 = '345660';
let sum1 = +str3[0] + +str3[1] + +str3[2];
let sum2 = +str3[3] + +str3[4] + +str3[5]
if(sum1 === sum2){
console.log('да');
} else {
  console.log('нет');
}
