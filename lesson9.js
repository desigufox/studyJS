// ПРАКТИКА 4
// ——————————————————
// Часть 1
// Задача 1. Выведите на экран строку чисел от 1 до 50, разделённую пробелами (двумя способами: цикл  for и цикл while)

let str = '';
for (let i = 1; i <= 50; i++) {
  str += i + ' ';
}
console.log(str);
str = '';
let i = 0;
while(i < 50){
  i++;
  str += i + ' ';
}
  console.log(str);

// Задача 2. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

// Задача 3. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
let arr2 = [2, 3, 4, 5];
let sum = 1;
for(let i = 0; i < arr2.length; i++){
  sum *=arr2[i];
}
console.log(sum);

// Задача 4. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
// !!я сделала и даже что-то  получилось но  обьясни мне этот материал
let obj = {
 'Минск':'Беларусь',
 'Москва':'Россия',
 'Киев':'Украина'
}
for(let prop in obj){
  console.log(prop + "- это " + obj[prop]);
}
// ——————————————————
// Часть 2
// Циклы while и for
// Решите эти задачи сначала через цикл while, а затем через цикл for.
// 1. Выведите строку чисел от 1 до 100, разделённую пробелами.

let str1 = '';

for( let i = 1; i <=100; i++){
  str1 += i + ' ';
}
console.log(str1);

str1 = '';
let i1 = 1;
while(i1 <=100){
  str1 += i1 + ' ';
  i1++;
}
  console.log(str1);

// 2. Выведите строку чисел от 10 до 33. Разделите числа пробелами. После каждого третьего числа сделайте переход на новую строку (для этого В КОНЦЕ КАЖДОГО ТРЕТЬЕГО(!) ПРОХОДОДА ЦИКЛА к итоговой строке добавляется символ перехода на новую строку "\n").
// В консоль должно вывестись:
// 10 11 12
// 13 14 15
// 16 17 18 
// и т.д.
let str2 = '';
for(let i =10, i2= 1; i <=33; i++, i2++){
  str2 += i +' ';
  if(i2 === 3){
    str2 += "\n";
    i2 = 0;
  }
  }
console.log(str2);


let str3 = '';
for(let i =17; i <=38; i++){
  str3 += i +' ';
  if(i % 3 === 1){
    str3 += "\n";
    
  }
  }
console.log(str3);

// 3. Выведите только четные числа в промежутке от 0 до 100.

for(let i= 0; i<=100; i++){
  if(i % 2 ==0){
    console.log(i);
  }
}

// 4. С помощью цикла найдите сумму чисел от 1 до 100. Выведите результат суммы на экран

let sum1 = 0;
for(let i =0; i<=100; i++){
  sum1 += i;
}
console.log(sum1);

// Работа с for для массивов
// 5. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let arr3 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr3.length; i++){
  console.log(arr3[i]);
}


// 6. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

let arr4 = [1, 2, 3, 4, 5];
let result = 0;
for(let i = 0; i < arr4.length; i++){
result += arr4[i];
}
console.log(result);


// Работа с for-in
// 7. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта в формате: 'ключ' -> 'значение'.
// const obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

let obj2 = {
  green: 'зеленый',
  red: 'красный',
  blue: 'голубой'};

for(let prop in obj2){
  console.log(prop + "->" + obj2[prop]);
}

// 8. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

let obj3 ={
  'Коля':'200',
  'Вася':'300',
  'Петя':'400'
}
for(let prop in obj3){
  console.log(prop + " - зарплата " + obj3[prop] + " долларов.");
}

// Задачи
// 9. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран те элементы массива, которые больше 3-х, но меньше 10.

let arr5 =[2, 5, 9, 15, 0, 4];

for(let i = 0; i < arr5.length; i++){
  if(arr5[i]> 3 && arr5[i] < 10){
    console.log(arr5[i]);
  }
}

// 10. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let arr6 = [-1, 3, 0 , -5, 6, 1];
let sum2 = 0;
for(let i = 0; i < arr6.length; i++){
  if(arr6[i] > 0){
    sum2 +=arr6[i];
  }
}
console.log(sum2);

// 11. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// ! число 2 и 8(если = 4)
let arr7 = [1, 2, 5, 9, 4, 13, 4, 10];

for(let i =0; i < arr7.length; i++){
  if(arr7[i] == 4){
    console.log('Есть!')
  }
}

// 12. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr8 = [10, 20, 30, 50, 235, 3000];
for(let i = 0; i< arr8.length; i++){
  let str4 = arr8[i] + '';
  if(str4[0] == 1 || str4[0] == 2 || str4[0] == 5){
    // console.log(str4,i, str4[i]);
  console.log(+(str4));
}
}

//13. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
let str5 = '';
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9.];
for(let i = 0; i < arr9.length; i++){
 str5 += '-' + arr9[i];
}
console.log(str5 + '-');

// 14. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите БОЛЬШИМИ БУКВАМИ (метод toUpperCase() -> пример, какаяТоСтрока.toUpperCase() ).

let arrWeek = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for(let i = 0; i <arrWeek.length; i++){
if(arrWeek[i] == 'sat' || arrWeek[i] =='sun'){
  console.log(arrWeek[i].toUpperCase());
} else {
  console.log(arrWeek[i]);
}
} 



// 15. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите БОЛЬШИМИ БУКВАМИ. Текущий день должен храниться в переменной day
let arrWeek2 = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
let day = 'mon';

for(let i = 0; i <arrWeek2.length; i++){
  if (arrWeek2[i] == day){
    console.log(arrWeek[i].toUpperCase())
  } else{
    console.log(arrWeek2[i])
  }

}
// 16. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let iterator = 0;

for(let n = 1000; n > 50; n/=2){
  iterator++;
}
console.log(iterator);
