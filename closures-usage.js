/* Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

Да, именно так, через двойные скобки (это не опечатка). Например:

sum(1)(2) = 3
sum(5)(-1) = 4 */

function sum(a) {
    return function (b) {
        return a + b;
    };
}

alert(sum(1)(2));
alert(sum(5)(-1));

function sum(a) {
    return function (b) {
        return a + b; // возьмет a из внешнего LexicalEnvironment
    };
}

alert(sum(1)(2));
alert(sum(5)(-1));

/* В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения.
Его функционал состоит из двух возможностей:

    Добавить значение в буфер.
    Получить текущее содержимое.

Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
    Создание объекта: var buffer = makeBuffer();.
    Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) 
    добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
Вот пример работы:

function makeBuffer() { 
    //ваш код
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert(buffer()); // Замыкания Использовать Нужно!

Буфер должен преобразовывать все данные к строковому типу:

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

alert(buffer()); // '010'

Решение не должно использовать глобальные переменные. */

function makeBuffer() {
    var smth = '';
    return function (a) {
        if (arguments.length == 0) {
            return smth;
        }
        smth += a;
    };
};

var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert(buffer());

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);
alert(buffer2());

/* Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(),
который будет очищать текущее содержимое буфера:

function makeBuffer() {
  ...ваш код...
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // "" */

function makeBuffer() {
    var smth = '';

    function buffer(a) {
        if (arguments.length == 0) {
            return smth;
        }
        smth += a;
    };
    buffer.clear = function () {
        smth = '';
    }
    return buffer;
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест");
alert(buffer());

buffer.clear();

alert(buffer());