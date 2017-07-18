/*В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
var obj = {
  className: 'open menu'
}

Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"

P.S. Ваша функция не должна добавлять лишних пробелов.*/

function addClass(obj, cls) {
    var col = obj.className ? obj.className.split(' ') : [];
    if (obj.className) {
        obj.className.split(' ');
    } else {
        [];
    }

    for (var i = 0; i < col.length; i++) {
        if (col[i] == cls) return;
    }
    col.push(cls);
    obj.className = col.join(' ');
}

var obj = {
    className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className);

/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают заглавную букву.
Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

Такая функция полезна при работе с CSS.
P.S. Вам пригодятся методы строк charAt, split и toUpperCase.*/

function camelize(str) {
    var a = str.split('-');
    for (var i = 1; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    return a.join('');
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

/*У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu'
};

Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'

Лишних пробелов после функции образовываться не должно.*/

function removeClass(obj, cls) {
    var a = obj.className.split(' ');
    for (var i = 0; i < a.length; i++) {
        if (a[i] == cls) {
            a.splice(i, 1);
            i--;
        }
    }
    obj.className = a.join(' ');
}
var obj = {
    className: 'open menu'
};
removeClass(obj, 'open');
removeClass(obj, 'blabla');

/*Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b.
То есть, проверка имеет вид a≤ arr[i]≤ b.Функция должна менять сам массив и ничего не возвращать.
Например:

    arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert(arr); // массив изменился: остались [3, 1]*/

function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i--, 1)
        }
    }

}

var arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);

/*Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, -10, 8];
// отсортируйте?
alert( arr ); // 8, 5, 2, 1, -10*/

var arr = [5, 2, 1, -10, 8];

function compareElements(a, b) {
    return b - a;
}
arr.sort(compareElements);
alert(arr);

/*Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];
// ... ваш код ...

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

Постарайтесь сделать код как можно короче.*/

var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice().sort();
alert(arrSorted);
alert(arr);

/*Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]*/

var arr = [1, 2, 3, 4, 5];

function randComp(a, b) {
    return Math.random() - 0.5;
}
arr.sort(randComp);
alert(arr);

/*Напишите код, который отсортирует массив объектов people по полю age.
Например:

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

... ваш код ...

// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6

Выведите список имён в массиве после сортировки.*/