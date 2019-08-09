"use strict";

const father = {
  name: 'Jon',
  age: '45',
  work: 7
}

const son = {
  age: '12',
}


console.log(father.age - son.age);//33
console.log(father.age - father.work);//38 число
console.log(father.work - father.work);//0  число
console.log(father.work - 'b');//NaN
console.log(-father.work, -father.age, -father.name);//-7, -45, NaN
console.log(+father.work, +father.age, +father.name);//7,45,NaN


console.log(father.age  + son.age);// '4512' сложение строк
console.log(father.age  + father.work);// '457' 
console.log(father.work  + father.work);// 14

console.log(father.work + father.age * son.age);//число
console.log(father.age + father.work * son.age);//'45' + число =str
console.log(father.age + father.work - son.age);//number'457'-12=445


//одинаковые операции

const a = '45';
console.log(+45, Number(a));

const b = 77;
console.log(b + '', String(b));

const t = true;
const f = false;
console.log(+t, +f); // 1,0
console.log(f +''); // boolean + str= "false"


const boolFalse = false;
const strFalse = 'false';// не пустая строка
const emptyString =  '';

if (boolFalse){//не выполнится
 console.log('boolFalse');
}
if (strFalse){//выполнится
 console.log('strFalse');
}
if (emptyString){//не выполнится
 console.log('empty string');
}

if('' == false){//выпосляется приведение типов ''(пустая строка) = False
  console.log('выполнится');
}
if('' === false){ //не стработало приведение типов ''-это строка и false =boolian тип
  console.log('не выполнится');
}
let templateString = `что-то и переменная b = ${b} сзади`;
console.log(templateString); //темплеитные строки - шаблонные

function test1(a, b) {
  console.log('in console');
  document.body.innerHTML = 'on page';
  return a - b;
}
const vTest = test1(44, 32);
console.log(vTest);

const p2 = test1(77, 7);
console.log(p2);

console.log(
  p2 > 70 ? 'бодьше 70' : 
  p2 < 70 ? 'меньше 70' : 'равно');

if (p2 > 70) {
  console.log('бодьше 70')
} else if (p2 < 70){
  console.log('меньше 70')
} else{
  console.log('равно 70');
}

/*

ДЗ
ВАЖНО! Не забывать, что функцию надо не только описать:
  function name(params) { },
но и затем ВЫЗВАТЬ:
  name(params)

1. Объявить две числовые переменные и сложить их.
Написать проверку используя конструкцию if..else: если результат сложения больше 100 вывести в консоль строку "Больше 100", если результат меньше 100 вывести "Меньше 100", если равен 100 - вывести "равно 100".

2. Переписать Пункт 1 в виде функции "сумма", которая будет принимать два числа, делать ТУ ЖЕ САМУЮ ПРОВЕРКУ с помощью if..else, и ВОЗВРАЩАТЬ ТУ ЖЕ СТРОКУ: "Больше 100" если результат сложения больше 100, если результат меньше 100 вывести "Меньше 100", если равен 100 - вывести "равно 100". Внутри функции НЕ должно быть console.log. А вот результат, который ВЕРНУЛСЯ ИЗ ФУНКЦИИ, надо вывести в консоль.
ВЫЗВАТЬ функцию несколько раз с разными параметрами, чтобы увидеть, что всё работает правильно

3. Переписать Пункт 2 испольуя тернарный оператор ((условие) ? : ) вместо конструкции if..else. Вернуть из функции те же строки.

4*. Предусмотреть возможность правильной работы функции при передачи туда строк. Например, при передачи в функцию значений (5, 4) и значений ('5', '4') результат должен быть одинаковым. ПОДСКАЗКА: привести типы РУКАМИ внутри функции перед сложением.

*/

const m = 77;
const s = 25;
const vH = m + s;

if (vH > 100 ){
  console.log('Больше 100');
} else if(vH < 100){
  console.log("Меньше 100");
} else{
  console.log("равно 100");
}

function sum(m, s){
  if (m + s >100 ){
    return 'Больше 100'
  } else if(m + s <100){
    return 'Меньше 100'
  } else{
    return 'равно 100'
  }
}
const vSum = sum(65, 55);
console.log(vSum);


function sum2(d, g){
  const sum = Number(d) + Number(g)
  return sum > 100 ? 'Больше 100' :
   sum <100 ? 'Меньше 100' : 'равно 100';
}
console.log(sum2('10', '90'));




