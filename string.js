Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:

ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке

P.S. В JavaScript нет встроенного метода для этого.
Создайте функцию, используя toUpperCase() и charAt().

function ucFirst(str) {
    if !(str) {
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

/*function checkSpam(str) {
    
}*/