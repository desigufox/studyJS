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



// 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

// 6.Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
