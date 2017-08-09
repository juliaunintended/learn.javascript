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

/*Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2*/

function getLocalDay(date) {
    var day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;
}
var date = new Date(2012, 0, 3);
alert(getLocalDay(date));

/*Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
Например, для 2 января 2015:

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)

P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.*/

function getDateAgo(date, days) {
    var dateCopied = new Date();
    dateCopied.setDate(date.getDate() - days);
    return dateCopied.getDate();
}

var date = new Date(2015, 0, 2);
alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));

/*Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
Параметры:

    year – 4-значный год, например 2012.
    month – месяц от 0 до 11.

Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).*/

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDate()
}

alert(getLastDayOfMonth(2017, 0));
alert(getLastDayOfMonth(2016, 1));
alert(getLastDayOfMonth(2014, 0));

/*Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/

function getSecondsToday() {
    var day = new Date();
    return day.getHours() * 3600 + day.getMinutes() * 3600 + day.getSeconds() * 3600;
}

alert(getSecondsToday());

/*Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600

P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/

function getSecondsToTomorrow() {
    var today = new Date();
    var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    var difference = tomorrow - today;
    return Math.round(difference / 1000);
}
alert(getSecondsToTomorrow());

/*Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:  
Например:

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'

P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.*/

function formatDate(date) {
    var day = date.getDate();
    if (day < 10) day = '0' + day;

    var month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    var year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;

    return day + '.' + month + '.' + year;

}

var d = new Date(2014, 0, 30);
alert(formatDate(d));

/*Напишите функцию formatDate(date), которая форматирует дату date так:

    Если со времени date прошло менее секунды, то возвращает "только что".
    Иначе если со времени date прошло менее минуты, то "n сек. назад".
    Иначе если прошло меньше часа, то "m мин. назад".
    Иначе полная дата в формате "дд.мм.гг чч:мм".

Например:

function formatDate(date) { 
    // ваш код
}

alert(formatDate(new Date(new Date - 1))); // "только что"
alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
alert(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата в формате "дд.мм.гг чч:мм"
*/

function formatDate(date) {
    var difference = new Date() - date;
    if (difference < 1000) {
        return 'только что';
    }
    var seconds = Math.floor(difference / 1000);
    if (seconds < 60) {
        return seconds + ' сек. назад';
    }
    var minutes = Math.floor(difference / 60000);
    if (minutes < 60) {
        return minutes + ' мин. назад';
    }

    var formDate = date;
    formDate = [
        '0' + formDate.getDate(),
        '0' + (formDate.getMonth() + 1),
        '' + formDate.getFullYear(),
        '0' + formDate.getHours(),
        '0' + formDate.getMinutes()
    ];

    for (var i = 0; i < formDate.length; i++) {
        formDate[i] = formDate[i].slice(-2);
    }
    return formDate.slice(0, 3).join('.') + ' ' + formDate.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));