var value = prompt('Каково «официальное» название JavaScript?');
if (value == 'ECMAScript') {
    alert ('Верно!')
} else {
    alert ('Не знаете? «ECMAScript»!');
}

var value = prompt ('Введите число', 0);
if (value>0) {
    alert(1);
} else if (value<0) {
    alert(-1);
} else {
    alert(0);
}

var userName = prompt ('Кто пришёл?');
if (userName == 'Админ') {
    var pass = prompt ('Пароль?', '');

    if (pass == 'Чёрный Властелин') {
        alert ('Добро пожаловать!');
    } else if (pass == null) {
        alert ('Вход отменён');
    } else {
        alert ('Пароль неверен');
    }
} else if (userName == null) {
    alert ('Вход отменён');
} else {
    alert ('Я вас не знаю');
}

(a + b < 4) ? result = 'Мало' : result = 'Много';

var message = (login == 'Вася') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';