/* Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:

function User(fullName) {
  this.fullName = fullName;
}
var vasya = new User("Василий Попкин");

Имя и фамилия всегда разделяются пробелом.
Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров

Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set.
Лишнее дублирование здесь ни к чему. */

function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName: {
            get: function () {
                return this.fullName.split(' ')[0];
            },

            set: function (addedFirstName) {
                this.fullName = addedFirstName + ' ' + this.lastName;
            }
        },
        lastName: {
            get: function () {
                return this.fullName.split(' ')[1];
            },
            set: function (addedLastName) {
                this.fullName = this.firstName + ' ' + addedLastName;
            }
        }
    });
}

var vasya = new User('Василий Попкин');

alert(vasya.firstName);
alert(vasya.lastName);

vasya.lastName = 'Сидоров'; //??? don't work

alert(vasya.fullName);