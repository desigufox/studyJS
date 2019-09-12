// конспект
let str = 'Мне очень нравится JavaScript';
console.log(str.substring(0, 9));
console.log(str.substr(0,9));

let str1 = 'Мне-очень-нравится-JavaScript';
let arr1 = str1.split('-');
console.log(arr1);

let str2 = 'Мне-очень-нравится-JavaScript';
let arr2 = str2.split(' ');
console.log(arr2);

let str3 = 'Мне-очень-нравится-JavaScript';
let arr3 = str3.split('');
console.log(arr3);

let str4 = 'Мне-очень-нравится-JavaScript';
let arr4 = str4.split('');
arr4 = arr4.reverse();
let result = arr4.join('');
console.log(result);

let str5 = 'Мне-очень-нравится-JavaScript';
let result1 = str5.split('').reverse().join('');
console.log(result1);


// ___________________________________________________________________________
// Задача . Поиск и замена
// Задача. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

let str6 = 'aaa@bbb@ccc';
let nStr6 = str6.replace(/@/g, '!');
console.log(nStr6);

// Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

let str7 ='aaa bbb ccc';
console.log(str7.substr(3,4));
// от и сколько
console.log(str7.substring(3,7));
// от и до
console.log(str7.slice(3,-4));
// от и до '-'start

// Задача. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
 let date = '2025-12-31';
 let arr5 = date.split('-');
 let date2 = arr5[2] + '/' + arr5[1] + '/' + arr5[0];
 console.log(date2);


// Задачи для решения

// Работа с регистром символов
// 1.Дана строка 'js'. Сделайте из нее строку 'JS'.
let str8 ='js';
console.log(str8.toUpperCase());

// 2. Дана строка 'JS'. Сделайте из нее строку 'js'.

let str9 ='js';
console.log(str9.toLowerCase());

// Работа с length, substr, substring, slice. Работа с indexOf
// Для решения задач данного блока вам понадобятся следующие методы: length, substr, substring, slice, indexOf.
//  3.Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let str10 = 'я учу javascript!';
console.log(str10.length);

//  4.Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str11 = 'я учу javascript!';
console.log(str11.substr(1,4));
console.log(str11.substring(1,5));
console.log(str11.slice(1,-11));


// 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
let str12 = 'я учу javascript!';
console.log(str12.indexOf('учу'));


// 6.Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

let str13 = 'хранится какой-либо текст';
let n = 8;
let result2;
if(str13.length > n){
  result2 =str13.substr(0,8) + '...';
} else {
  result2 = str13;
}
 console.log(result2);

//  Работа с replace
// 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let str14 ='я-учу-javascript!';
let nStr14 = str14.replace(/-/g, '!')
console.log(nStr14);

// Работа с split
// 8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let str15 ='я учу javascript!';
let arr6 = str15.split(' ');
console.log(arr6);

// 9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let str16 ='я учу javascript!';
let arr7 = str16.split('');
console.log(arr7);

// 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

let date3 = '2025-12-31';
let arr8 = date3.split('-');
let date4 = arr8[2] + '.' + arr8[1] + '.' + arr8[0];
console.log(date4);


// Работа с join
// 11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
let arr9 = ['я', 'учу', 'javascript', '!'];
let str17 = String(arr9)
console.log(str17.replace(/,/g,'+'));
console.log(arr9.join('+'));



// Задачи
// 12. 
let str18 = 'преобразуйте первую букву строки в верхний регистр.'
console.log(str18[0].toUpperCase() + str18.slice(1));

// 13. Преобразуйте первую букву каждого слова строки в верхний регистр.
let str19 = 'преобразуйте первую букву каждого слова';
let arr18 = str19.split(' ');
for (let i = 0; i < arr18.length; i++) {
  arr18[i]= arr18[i][0].toUpperCase() + arr18[i].slice(1);
}
console.log(arr18.join(' '));

// 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
let str20 ='var_test_text';
let arr19 = str20.replace(/_/g, ' ').split(' ');
for (let i = 0; i < arr19.length; i++) {
  arr19[0] = arr19[i][0].toLowerCase() + arr19[i].slice(1);
  arr19[i] = arr19[i][0].toUpperCase() + arr19[i].slice(1);
}

console.log(arr19.join(''));

