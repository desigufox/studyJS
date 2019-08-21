// Задача 1. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

let str ='abcde';
console.log(str[0]);
console.log(str[1]);
console.log(str[4]);

// Задача 2. Напишите скрипт, который считает количество секунд в часе.
// let day =(h, m , s) => (h * m * s);
console.log(24 * 60 * 60);


// Задача 3. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки:
// var num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// alert(num);

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
console.log(num);

// Работа с переменными
// 1. Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.

let a = 3 ;
// alert(a) ;

// 2. Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
let a1 = 10;
let b1 = 2;
console.log(a1 + b1); 
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);

// 3. Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
 
let c = 15;
let d = 2;
let result = c + d;
console.log(result);

// 4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

let c1 = 5;
console.log(a1 + b1 + c1);

// 5. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.

let a2 = 17;
let b2 = 10;
c2 = a2 - b2;
let d2 = 7;
let result2 = c2 + d2;
console.log(result2);

// Работа со строками
// 6. Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
let  = 'Привет, Мир!';
console.log(str);

// 7. Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

let str1 = 'Привет, ';
let str2='Мир!';
console.log(str1 + str2);

// 8. Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
let name = 'Даша';
console.log('Привет,' + name);

// 9. Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.

let age = 18;
console.log('Мне ' + age + ' лет!');

// Функция prompt
// 10. Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

// let name2 = prompt('Ваше имя ?');
// alert('Ваше имя ' + name2);

// 11. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.

// let numb = prompt ('введите число?');
// alert(numb * numb);

// Обращение к символам строки
// 12. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

let srt4 = 'abcde';
console.log(srt4.charAt(2));

// 13. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

let num2 = '12345';
console.log(num2[0] * num2[1] * num2[2] * num2[3] * num2[4]);

// Практика
// 14. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

let secondsInMinute = 60;
let minutesInHour = 60;
let secondsInHour = minutesInHour * secondsInMinute;
let hoursInDay = 24;
let daysInMonth = 30;
console.log(secondsInHour, secondsInHour * hoursInDay, secondsInHour * hoursInDay * daysInMonth);

// 15. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'. 

let hou = 12;
let min = 33;
let seck = 22;
console.log(hou + ':' + min + ':' + seck);
console.log(`${hou}:${min}:${seck}`);

// 16. Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран
let l = 77;
console.log(l * l);

// Работа с присваиванием и декрементами
// 17. Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.
var num3 = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// alert(num);

num3 +=7;
num3 -= 18;
num3 *= 10;
num3 /= 15;
console.log(num3);

// 18. Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.
var num4 = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// alert(num)

num4++
num4++
num4--
console.log(num4)