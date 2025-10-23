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
// 2.Funkce s návratovým typem "string"
var greet = function (name) {
    return "Ahoj, ".concat(name, "!");
};
console.log(greet('Dejv')); // Ahoj, Dejv!
// 3. Funkce bez návratu (void)
var logMessage = function (message) {
    console.log(message); // Zpráva
};
logMessage('Zpráva');
// 4. Funkce - Infinity -> návratový typ "number"
var division = function (num1, num2) {
    return num1 / num2;
};
console.log(division(10, 5)); // 2
// console.log(division(10, 0)); // Infinity 
// console.log(typeof(Infinity));  // number
console.log('----------------------');
// 4️⃣ Funkce, která nikdy neskončí (never)
function throwError(msg) {
    throw new Error(msg);
}
// throwError("Něco se pokazilo!"); // 💥 vyhodí chybu
// 5️⃣ Automatické odvození návratového typu (type inference)
function multiply(a, b) {
    return a * b; // TS automaticky pozná, že vrací "number"
}
var result = multiply(4, 2); // ✅ number
// 6️⃣ Funkce vracející více možností (union type)
function getStatus(success) {
    return success ? "OK" : 500;
}
var status = getStatus(true); // ✅ "OK" nebo 500
// 7️⃣ Funkce vracející objekt (ručně typovaný)
function createUser(name, age) {
    return { name: name, age: age };
}
var user1 = createUser("David", 23);
function makeUser(name, age) {
    return { name: name, age: age };
}
var user2 = makeUser("Petr", 30);
// 9️⃣ Funkce s výchozí hodnotou parametru
function greetUser(name) {
    if (name === void 0) { name = "návštěvníku"; }
    return "Ahoj, ".concat(name, "!");
}
console.log(greetUser()); // "Ahoj, návštěvníku!"
console.log(greetUser("Dejv")); // "Ahoj, Dejv!"
// 🔟 Funkce s volitelným parametrem (?)
function sayHello(name) {
    return name ? "Ahoj, ".concat(name, "!") : "Ahoj!";
}
console.log(sayHello()); // "Ahoj!"
console.log(sayHello("David")); // "Ahoj, David!"
