//При помощи цикла for выведите чётные числа от 2 до 10.
for (i = 2; i<=10; i++) {
    if (i % 2 == 0) {
        alert (i);
    }
}

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
var i = 0; 
while (i < 3) {
  alert( "номер " + i + "!" );
   i++;
}

/*Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.*/
var i;
do {
    i = prompt('Введите число, большее 100', 0);
} while (i > 100 && i != null);

/*Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.*/
x:
    for (var i = 2; i < 10; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue x;
        }
        alert (i);
    }