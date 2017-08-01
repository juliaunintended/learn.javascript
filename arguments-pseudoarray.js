/*Как в функции отличить отсутствующий аргумент от undefined?

function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

f(undefined); // 1
f(); // 0*/

function f(x) {
    if (arguments.length) {
        alert(1);
    } else alert(0);
}

f(undefined); // 1
f();

/*Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10*/

function sum() {
    var result = 0;
    for (i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
alert(sum());
alert(sum(1));
alert(sum(1, 2));
alert(sum(1, 2, 3));
alert(sum(1, 2, 3, 4));