"use strict";

// Ссылочный тип данных "Объект"
// user - ссылка на место в памяти
// Изменения происходят сразу и в user и в admin
const user = {
  name: 'Вася', 
  lastName: 'Пупкин'
}
const  admin = user;
console.log(admin, user)
admin.name = 'Лена';
console.log(admin, user)
user.name = 'Петя';
console.log(admin, user)
console.log(console)

// Ссылочный тип данных "Массив"
// arr - ссылка на место в памяти
// Изменения происходят сразу и в arr и в arr2
const arr = [1, 2, 3, 44];
const arr2 = arr;
console.log(arr, arr2);
arr2[0] = 39;
console.log(arr, arr2);

// Типы данных в JS
console.log(1/0,-1/0)
console.log(typeof Infinity)
console.log(typeof NaN)
console.log(typeof "Привет")
console.log(typeof false)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof {})
console.log(typeof [])
console.log(typeof Symbol())

// Преобразование типов
console.log(user.toString());
console.log(String(user));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean("0"));
console.log(Number("  0   "));
console.log(Boolean(Number("  0   ")));

let test = " 0 "
if (test > 0) {
  console.log("Привет, если переменная test больше нуля");
}


console.log(1000 + 1 + '2'); //10012
console.log('1' + 2 + 1000); //121000
console.log(typeof ('1' + 2 - 8))
console.log('Phone: ' + typeof '380630494113')
console.log('Phone: ' + typeof +'380630494113')
console.log('Phone: ' + typeof Number('380630494113'))



// ДЗ
// Сделать объект "отец" со свойствами:
// - имя -> тип string
// - фамилия -> тип string
// - место работы -> тип string
// - полных лет -> тип number
// - курит ли -> тип boolean
// Сделать проверку "старше ли 40 лет" и если старше, то вывести вопрос через сonfirm "В зал ходишь?". При нажатии на ОК - вывести в консоли браузера сообщение "Молодец!", при нажатие на "Отмена" - вывести в консоли браузера сообщение "Пора начинать!"
// Сделать проверку "курит ли отец" и если курит, то вывести alert с сообщением "Надо бросать!"
// Создать переменную типа массив "дети" и записать туда имена детей
// Создать свойство "дети" у объекта "отец" (используя оператор точка '.') и скопировать туда значение переменной-массива "дети"
// Вывести тип (type) каждого свойства объекта (по-отдельности) в консоль браузера (включая новосозданное свойство "дети")
// .*Разобраться как работают другие методы объекта console: console.table(), console.group() и вывести требуемые данные в консоль, используя один из этих методов

const father = {
  name: 'Вася',
  lastName: 'Пупкин',
  job: 'Спорт зал',
  age: 45,
  smoke: true
}

if(father.age > 40){
  const isGym = confirm('В зал ходишь?');
  if(isGym){
    console.log('Молодец!');
  } else {
    console.log('Надо бросать!')
  }
} 
if(father.smoke){
  console.log('Надо бросать!');
}
const arrChildren = ['Лена', 'Витя', 'Коля'];
father.children = arrChildren;

console.group('one');
console.log(typeof(father.name));
console.log(typeof(father.lastName));
console.log(typeof(father.job));
console.log(typeof father.age);
console.log(typeof father.smoke);
console.log(typeof father.children);
console.groupEnd();
console.group('two');
console.table(father);
console.groupEnd();
