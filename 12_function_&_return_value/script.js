/*
Funkce - hlubší pohled na návratovou hodnotu
• každá funkce může vracet nějaký výsledek pomocí return
• v TypeScriptu můžeme určit, jakého typu ten výsledek má být
*/
// 1. Funkce s návratovým typem "number"
var square = function (num) {
    return num * num;
};
console.log(square(5)); // 25
// 2. Funkce s návratovým typem "string"
var greet = function (name) {
    return "Ahoj, ".concat(name, "!");
};
console.log(greet('Dejv')); // Ahoj, Dejv!
// 3. Funkce bez návratu (void) -> nevrací žádnou užitečnou hodnotu
var logMessage = function (message) {
    console.log(message); // Zpráva
};
logMessage('Zpráva');
var showMessage = function (message) {
    var output = document.querySelector('h1');
    if (output) {
        output.textContent = message; // h1 bude mít text Nadpis
    }
};
showMessage('Nadpis');
// 4. Funkce - Infinity -> návratový typ "number"
var division = function (num1, num2) {
    return num1 / num2;
};
console.log(division(10, 5)); // 2
// console.log(division(10, 0)); // Infinity 
// console.log(typeof(Infinity));  // number
// 5. Funkce, která nikdy neskončí nebo vrátí chybu (never)
var errorFunction = function (errorText) {
    throw new Error(errorText);
};
// console.log(errorFunction('chyba!')); // Uncaught Error: chyba!
// 6. Automatické odvození návratového typu (type inference)
var multiply = function (a, b) {
    return a * b; // TS automaticky pozná, že vrací "number"
};
console.log(multiply(5, 5)); // 25
// 7. Funkce vracející více možností (union type)
var getStatus = function (success) {
    return success ? 'OK' : 500;
};
console.log(getStatus(true)); // "OK" nebo 500
// 8. Funkce vracející objekt (ručně typovaný)
var createUser = function (name, age) {
    return { name: name, age: age };
};
console.log(createUser('David', 23)); // {name: 'David', age: 23}
var makeUser = function (name, age) {
    return { name: name, age: age };
};
console.log(makeUser('Dejv', 23)); // {name: 'Dejv', age: 23}
// 10. Funkce s výchozí hodnotou parametru
var greetUser = function (name) {
    if (name === void 0) { name = 'návštěvník'; }
    return "Ahoj, ".concat(name, "!");
};
console.log(greetUser()); // Ahoj, návštěvník!
// 11. Funkce s volitelným parametrem (?)
var sayHello = function (name) {
    return name ? "Ahoj, ".concat(name, "!") : "Ahoj!";
};
console.log(sayHello()); // "Ahoj!"
console.log(sayHello("David")); // "Ahoj, David!"
