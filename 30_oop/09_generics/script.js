var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
Generics
• umožňují psát znovupoužitelný a typově bezpečný kód
• pomocí generik můžeme definovat proměnný typ (např. T), který se doplní až při použití
• díky tomu funguje jeden kód pro různé datové typy, ale zachová se kontrola typů
*/
var studenrs = ['Jan', 'Petr', 'Eva'];
var studenrs2 = ['Jan', 'Petr', 'Eva'];
// K čemu slouží
var identity1 = function (arg) {
    return arg;
};
var identity2 = function (arg) {
    return arg;
};
var identity3 = function (arg) {
    return arg;
};
// Generická funkce
var identity = function (arg) {
    return arg;
};
console.log(identity(42)); // 42
console.log(identity('Generics')); // Generics
console.log(identity(true)); // true
// Automatická inference (odhad typu)
console.log(identity(42)); // 42
console.log(identity('Generics')); // Generics
console.log(identity(true)); // true
// Procvičování
var echo = function (value) {
    return value;
};
console.log(echo(100)); // 100
console.log(echo('Hello Generics')); // Hello Generics
console.log(echo(false)); // false
console.log(echo(['A', 'B', 'C'])); // ['A', 'B', 'C']
var numberBox = { content: 123 };
var stringBox = { content: 'Hello' };
console.log(numberBox); // {content: 123}
console.log(stringBox); // {content: 'Hello'}
// Generics a classa
var Container = /** @class */ (function () {
    function Container() {
        this.items = [];
    }
    Container.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Container.prototype.getAllItems = function () {
        return this.items;
    };
    return Container;
}());
var stringContainer = new Container();
stringContainer.addItem('Item 1');
stringContainer.addItem('Item 2');
console.log(stringContainer.getAllItems()); // ['Item 1', 'Item 2']
var numberContainer = new Container();
numberContainer.addItem(10);
numberContainer.addItem(20);
console.log(numberContainer.getAllItems()); // [10, 20]
// Generics a omezení (constraints)
var printLength = function (item) {
    console.log(item.length);
};
printLength('Hello'); // 5
printLength(['A', 'B', 'C', 'D']); // 4
printLength([1, 2, 3, 4, 5]); // 5
// printLength<number>(12345); // Chyba: number nemá vlastnost length
// Generics a více typových parametrů
var merge = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
console.log(merge({ name: 'Jan' }, { age: 30 })); // {name: 'Jan', age: 30}
var combined = merge({ name: 'Eva' }, { age: 25, city: 'Prague' });
console.log(combined.name); // 'Eva'
console.log(combined.age); // 25
console.log(combined.city); // Prague
