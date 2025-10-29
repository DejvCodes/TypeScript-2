/*
Union types
• proměnná nebo parametr může být jeden z několika typů
• zapisuje se pomocí svislé čáry | (pipe)
*/
var getValue = function (num) {
    if (num % 2 == 0) {
        return num * 2;
    }
    else {
        return "\u010C\u00EDslo ".concat(num, " je lich\u00E9.");
    }
};
console.log(getValue(4)); // 8
console.log(getValue(7)); // Číslo 7 je liché.
var age = 50;
age = 24;
console.log(age); // 24
age = 'Dvacet';
console.log(age); // Dvacet
var firstName = null;
firstName = 'David';
console.log(firstName); // David
// Procvičení
var students;
students = 'David';
console.log(students); // David
students = ['David', 'Dzony', 'Ester'];
console.log(students); // ['David', 'Dzony', 'Ester']
var allResults = [
    { firstPart: 80, secondPart: 40, thirdPart: 90 },
    { firstPart: 90, secondPart: 65, thirdPart: 80 }
];
console.log(allResults);
// {firstPart: 80, secondPart: 40, thirdPart: 90}
// {firstPart: 90, secondPart: 65, thirdPart: 80}
// Union types - praktické využití
var clearNumber = function (price) {
    if (typeof (price) === 'string') {
        var newPrice = parseFloat(price.replace('$', ''));
        return newPrice;
    }
    return price;
};
console.log(clearNumber(100)); // 100
console.log(clearNumber('$100')); // 100 
