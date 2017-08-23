/* Возможны ли такие функции A и B в примере ниже, что соответствующие объекты a,b равны (см. код ниже)?

function A() { ... }
function B() { ... }

var a = new A;
var b = new B;

alert( a == b ); // true

Если да – приведите пример кода с такими функциями. */

var ex = {
    name: "Julie"
}

function A() {
    return ex;
}

function B() {
    return ex;
}

var a = new A;
var b = new B;

alert(a == b);

/* Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

    Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
    Метод sum() возвращает сумму запомненных свойств.
    Метод mul() возвращает произведение запомненных свойств.

Пример использования:

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() ); */

function Calculator() {
    this.read = function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

var calculator = new Calculator();
calculator.read();

alert('Сумма=' + calculator.sum());
alert('Произведение=' + calculator.mul());

/* Напишите функцию-конструктор Accumulator(startingValue). 
Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

Более формально, объект должен:

    Хранить текущее значение в своём свойстве value.
    Начальное значение свойства value ставится конструктором равным startingValue.
    Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.

Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(),
с учетом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение */

function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Сколько прибавить?', 0);
    };
}

var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

/* Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
Эта задача состоит из двух частей, которые можно решать одна за другой.

    Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2»,
    с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат.
    Понимает плюс + и минус -.
    Пример использования:

    var calc = new Calculator;

    alert( calc.calculate("3 + 7") ); // 10

Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. 
Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
Например, добавим операции умножить *, поделить / и возвести в степень **:

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

    Поддержка скобок и сложных математических выражений в этой задаче не требуется.
    Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
    Предусмотрите обработку ошибок. Какая она должна быть – решите сами.
 */

function Calculator() {

    var methods = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        }
    };

    this.calculate = function (str) {
        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        methods[name] = func;
    };
}

var powerCalc = new Calculator;
powerCalc.addMethod('*', function (a, b) {
    return a * b;
});
powerCalc.addMethod('/', function (a, b) {
    return a / b;
});
powerCalc.addMethod('**', function (a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
alert(result);