/*Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
Временная зона – местная. Выведите его на экран.*/

var date = new Date(2012, 1, 20, 3, 12);

alert(date);

/*Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
Например:

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'*/

function getWeekDay(date) {
    var week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return week[date.getDay()];
}

var date = new Date(2012, 0, 3);
alert(getWeekDay(date));
//or

var date = new Date(2012, 0, 3);
alert(date.toLocaleString('ru', {
    weekday: 'short'
}));