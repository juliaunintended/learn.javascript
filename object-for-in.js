/*Создайте функцию isEmpty(obj), которая возвращает true, 
если в объекте нет свойств и false – если хоть одно свойство есть.
Работать должно так:

function isEmpty(obj) {
  ваш код //
}
var schedule = {};
alert( isEmpty(schedule) );  //true
schedule["8:30"] = "подъём";
alert( isEmpty(schedule) ); //false*/

function isEmpty (obj) {
    for (var key in obj) {
        return false;
    } return true;
}
var schedule = {};
alert(isEmpty(schedule));  //true
schedule['8:30'] = 'подъём';
alert(isEmpty(schedule));

/*Есть объект salaries с зарплатами. 
Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0.
Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650

P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.*/

"use strict";

var salaries = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
};

var a = 0
for (var person in salaries) {
    a += salaries[person];
}

alert (a);

/*Есть объект salaries с зарплатами. 
Напишите код, который выведет имя сотрудника,
у которого самая большая зарплата.
Если объект пустой, то пусть он выводит «нет сотрудников».
Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

// ... ваш код выведет "Петя"*/

'use strict';

var salaries = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
};

var max = 0;
var maxSalary = '';
for (var name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxSalary = name;
    }
}

alert (maxSalary || 'нет сотрудников');

/*Создайте функцию multiplyNumeric,
которая получает объект и умножает все численные свойства на 2. Например:
// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}*/

var menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
    for(var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *=2;
        }
    }
}

multiplyNumeric(menu);

alert('menu.width: ' + menu.width + ', menu.height: ' + menu.height + ', menu.title: ' + menu.title);