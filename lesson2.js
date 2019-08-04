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



