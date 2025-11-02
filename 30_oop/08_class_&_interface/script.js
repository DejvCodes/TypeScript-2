// Třída, která implementuje interface
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.introduce = function () {
        return "Jm\u00E9no: ".concat(this.name, ", V\u011Bk: ").concat(this.age);
    };
    return User;
}());
var user1 = new User('David', 23);
console.log(user1); // User {name: 'David', age: 23}
console.log(user1.introduce()); // Jméno: David, Věk: 23
