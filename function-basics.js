/*Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:

    Используя оператор '?'
    Используя оператор || */
//a)
function checkAge(age) {
    return age > 18 ? true : confirm ('Родители разрешили?');
}
//b)
 function checkAge(age) {
     return age > 18 || confirm ('Родители разрешили?');
 }
 
/*Задача «Hello World» для функций :)

Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */
function min (a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

/*Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1

Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.*/

function pow (x, n) {
    var result = x;

    for (var i = 1; i < n; i++){
        result *= x;
    }
    return result;
}
var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n + 'не поддерживается, введите целую степень, большую 1');
} else {
  alert( pow(x, n) );
}