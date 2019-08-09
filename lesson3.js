
if (1 || 0){
  console.log('lalala');//da
}
if ('nnn' == true || 0){
  console.log('lalala2');//nit
}
const v2 = 77;
if(v2 > 100 || v2 <70 || v2 == 77){
  console.log('true');
}
const v3 = false;
if(!v3 ){
  console.log('р');//if  стработает !v3 = true, 
  //!! if срабатывает когда выражение =true !!
}


//популярная проверка в программировании

const r7 ='';
const v7 = 'false';//!!! любая не пустая строка !!!
if(!v7 ){
  console.log('lll')//строка не пустая = true, if не выведется
}
if(!!v7 && v7){
  console.log('oo');
}

if(!r7){
//код здесь выполнится
}
if(!!r7){
//код здесь не выполнится
}
if(!!r7 || r7){
//код здесь не выполнится
}

const a = true; // значение чекбокса (например, курит ли пользователь)
const b = 50; // полных лет пользователя
const c = ''; // имя - текст из input

if(a && b <= 50 && (c || b)){
  //код здесь выполнится
} else {
  // обработка ошибок
}



//Массив

const array =  [true, 50, '', 'dog', 'slon']
console.log(array, array[1]);
const array2 = array;
array2[1] = 44;
console.log(array, array2);

console.log('for begins 1');
const array3 = [];
for(let i = 0; i < array.length; ++i) {
  array3[i] = array[i];
  console.log(array3, array);
}
array3[1] = 255;
array[0] = false;
console.log('for ends 1');
console.log('result after for 1', array3, array);


console.log('for begins 2');
const array4 = [];
for(let i = 0; i < array.length; ++i) {
  if (typeof array[i] == 'number' || array[i] === ''){
    array4[i] = 'cat';
  } else {
    array4[i] = array[i];
  }
  console.log(array4, array);
console.log('for ends 2');
}
console.log('result after for 2', array4, array);




/**
ДЗ
1. Объявить массив1 и заполнить его элементами разного типа
(строки, boolean, числа)
2. Объявить массив2 и скопировать в него элементы массива1 учитывая следующие условия:
- если элемент массива1 после приведения к числу имеет значение отличное от 0, то записать это приведённое значение в массив2
- если же элемент массива1 после приведения к числу имеет значение 0, то записать вместо него в массив2 значение null
Таким образом в массиве2 будут собраны числовые значения (типа number) эквивалентные значениям массива1
3. Объявить массив3 и скопировать в него ТОЛЬКО ТЕ элементы массива1, которые удовлетворяют условиям:
- скопировать в массив3 только числа больше 0
(ВАЖНО! Необъодимо подумать нужно ли учесть типы элементов)
 */



console.log('for begins 3');
 const arHM1 = ['lol', '12', undefined, true, false, 12, -1];
 const arHM2 = [];

 for (let i = 0; i < arHM1.length; ++i){
   if(arHM1[i] > 0 || arHM1[i] < 0 || arHM1[i] == undefined 
   || typeof arHM1[i] == 'string'){
    arHM2[i] = +arHM1[i];

   } else {
     arHM2[i] = null;
   }
   console.log(arHM2, arHM1)
console.log('for ends 3');
 }
console.log('result after for 3', arHM2, arHM1);

// !альтернатива
// console.log('for begins 3');
//  const arHM1 = ['lol', true, 12, undefined];
//  const arHM2 = [];

//  for (let i = 0; i < array.length; ++i){
//     arHM2[i] = +arHM1[i];
//    console.log(arHM2, arHM1)
// console.log('for ends 3');
//  }
// console.log('result after for 3', arHM2, arHM1);

const arHM3 = []

for (let i = 0; i < arHM1.length; ++i){
  if (arHM1[i] > 0  && typeof arHM1[i] =='number'){
    arHM3.push(arHM1[i]);

  }
  console.log(arHM3, arHM1);
}



/**
ДЗ

1. Объявить фрукты и заполнить его любыми значениями (10 значений)
2. Объявить массивы фруктыДлинные и фруктыКороткие, скопировать в них фрукты из массива фрукты1 учитывая следующие условия:
- если название фрукта строка и длина названия (длина строки, 'пример'.length) больше 5 -> записать фрукт в массив фруктыДлинные
- если название фрукта строка и длина названия (длина строки, 'пример'.length) меньше-равно 5 -> записать фрукт в массив фруктыКороткие
- если название фрукта НЕ СТРОКА, то не записывать никуда
Для записи в массивы использовать метод массива push()

 

 */
console.log('HM');
const fruits = ['apple', true, false, 'cherry', '', 99, false, null, undefined, NaN];

const longFruits = [];
const shortFruits = [];
for (let i = 0; i < fruits.length; ++i){
  
  if(typeof fruits[i] === 'string' && fruits[i].length > 5){
    longFruits.push(fruits[i]);
  } else if(typeof fruits[i] === 'string' && fruits[i].length <= 5 ) {
    shortFruits.push(fruits[i]);
  }
  // !alternative variant
  // if(typeof fruits[i] === 'string') {
  //   if(fruits[i].length > 5) {
  //     longFruits.push(fruits[i]);
  //   } else {
  //     shortFruits.push(fruits[i]);
  //   }
  // }
console.log(shortFruits, longFruits, fruits);
}



// 3. Объявить массив супергерои и заполнить массив значениями разных типов
// 4. Создать массив суперзлодеи и скопировать из массива супергерои в массив суперзлодеи все элементы массива супергерои, приведя все эти значения к строке
// (используя либо приведение типов через строку String(любаяПеременная))

console.log('superheroes');

const superheroes = ['superman', 22, 'lalala', 'wonderwoman', false , true];
const supervillain = [];

for (let i = 0; i < superheroes.length; ++i){
   supervillain.push(String(superheroes[i]));
 console.log(supervillain, superheroes);
}

// 5. Создать массив космическийМусор и записать в него все элементы массива супергерои учитывая следующие условия:
// - если имя супергероя (значение в массиве супергерои) НЕ СТРОКА, то записать его значение без изменений
// - если имя супергероя (значение в массиве супергерои) СТРОКА, то записать вместо него просто строку 'я тебе не мусор'
const spaceDerbis = [];

for (let i = 0; i < superheroes.length; ++i){
  if(typeof superheroes[i] != 'string'){
    spaceDerbis.push(superheroes[i]);
  } else if(typeof superheroes[i] === 'string') {
    spaceDerbis.push('я тебе не мусор');
  }
  console.log(spaceDerbis, superheroes);
}

// 6. Переписать цикл с for на while
// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }
// 7. Добавить в переписанный на while цикл условие (if), по которому чётные значения i будут записываться в массив goodDigits,
// а нечётные числа будут просто выводиться в консоль 



let i = 0;
const goodDigits = [];
while (i < 10){
  if (i % 2 == 0) {
  goodDigits.push(i);
} else {
  console.log(i);
}
  ++i;
}
  console.log(goodDigits);