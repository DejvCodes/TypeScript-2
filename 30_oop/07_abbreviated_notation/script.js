// Zkrácený zápis pro nastavení atributů
var User1 = /** @class */ (function () {
    function User1(name, age) {
        this.name = name;
        this.age = age;
    }
    User1.prototype.introduction = function () {
        return "".concat(this.name, " ").concat(this.age);
    };
    return User1;
}());
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    User2.prototype.introduction = function () {
        return "".concat(this.name, " ").concat(this.age);
    };
    return User2;
}());
var user1 = new User1('David', 23);
console.log(user1); // User1 {name: 'David', age: 23}
var user2 = new User2('DAVO', 20);
console.log(user2); // User2 {name: 'DAVO', age: 20}
console.log(user1.introduction()); // David 23
console.log(user2.introduction()); // DAVO 20
