/*Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5

Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.*/

var arr = ['Есть', 'жизнь', 'на', 'Марсе'];

var arrLength = arr.map(function (arr) {
    return arr.length;
});

alert(arrLength);

/*На входе массив чисел, например: arr = [1,2,3,4,5].

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

То есть:z
для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

    Функция не должна модифицировать входной массив.
    В решении используйте метод arr.reduce.
*/

function getSums(arr) {
    var result = [];
    if (!arr.length) {
        return result;
    }

    var finSum = arr.reduce(function (sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(finSum);
    return result;
}

alert(getSums([1, 2, 3, 4, 5]));
alert(getSums([-2, -1, 0, 1]));