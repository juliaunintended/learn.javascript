/*Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:

ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке

P.S. В JavaScript нет встроенного метода для этого.
Создайте функцию, используя toUpperCase() и charAt().*/

function ucFirst(str) {
    if (!(str)) {
        return str
    } else {
        return str[0].toUpperCase() + str.slice(1);
    }
}

alert (ucFirst('julie'));

/*Напишите функцию checkSpam(str), которая возвращает true, 
если строка str содержит „viagra“ или „XXX“, а иначе false.
Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false*/

function checkSpam(str) {
    var myStr = str.toLowerCase ();
    return !!(~myStr.indexOf('viagra') || ~myStr.indexOf('xxx'))
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit'));

/*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str,
 и если она превосходит maxlength – заменяет конец str на "...", 
 так чтобы ее длина стала равна maxlength.
Результатом функции должна быть (при необходимости) усечённая строка.
Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."
truncate("Всем привет!", 20) = "Всем привет!"

Эта функция имеет применение в жизни. 
Она используется, чтобы усекать слишком длинные темы сообщений.*/

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...'
    } return str;
}

alert (truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
alert (truncate('Всем привет!', 20));

/*Есть стоимость в виде строки: "$120". 
То есть, первым идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), 
которая будет из такой строки выделять число-значение, в данном случае 120.*/

function extractCurrencyValue(str) {
    return +str.slice(1)
}