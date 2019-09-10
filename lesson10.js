// let num = 12345.6789;
// console.log(num.toFixed(-2));
// !вызывает ошибку

// Работа с %
// 1.Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b. 

let a = 10;
let b = 3;
let result = a % b;
console.log(result);

// 2. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

if(a % b == 0){
  console.log('Делится');
} else {
  console.log('Делится с остатком' + ' = '+ result);
}

// Работа со степенью и корнем
// 3. Возведите 2 в 10 степень. Результат запишите в переменную st.
let st = Math.pow(2,10)
console.log(st);

// 4. Найдите квадратный корень из 245.
console.log(Math.sqrt(245));

// 5. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum =1;
for(let i = 0; i < arr.length ; i++){
  sum += Math.sqrt(arr[i]);
console.log(Math.sqrt(sum));
}

// Работа с функциями округления
// 6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let sq = Math.sqrt(379);
console.log(Math.round(sq));
console.log(sq.toFixed(1));
console.log(sq.toFixed(2));


// 7. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let sq2 = Math.sqrt(578);

let obj ={
  'floor': '24', 
  'ceil' : '25'
}
console.log(obj);

// Нахождение максимального и минимального числа

// 8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

console.log(Math.min(4, -2, 5, 19, -130, 0, 10))
console.log(Math.max(4, -2, 5, 19, -130, 0, 10))

// Работа с рандомом
// 9. Выведите на экран случайное целое число от 1 до 100.
function getRandomArbitary(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomArbitary(1,100));
// 10. Заполните массив 10-ю случайными целыми числами.

let arr1 =[];
for(let i = 0; i < 10; i++){
  arr1[i] = Math.floor(Math.random() * (10 - 1 +1))+ 1;
  console.log(arr1);
}

// Работа с модулем
// Для решения задач данного блока вам понадобятся следующие методы: Math.abs.
//  11.Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
let a1 = 3;
let b1 = 4;
console.log(Math.abs(a1 - b1));

//  12.Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

let a2 = 6;
let b2 = 1;
let c = a2 - b2;
console.log(Math.abs(c));


// Задачи
//  13.Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let arr2 = [12, 15, 20, 25, 59, 79];
// let arr2  = [4, 10];
let sum1 = 0 ;
for(let i = 0; i < arr2.length; i++){
sum1 += arr2[i] / arr2.length;
  console.log(sum1);
}


//  14.Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4

let arr3 = [5];
for(let i = 0; i < 5; i++){
arr3.push(arr3[i] - 1);
}
  console.log(arr3);
sum2 = 1;
for(let i =0; i < arr3.length; i++){
  sum2 *=arr3[i];
console.log(sum2);
}