/*
Tuple
• pole s pevně daným počtem prvků a typem každého z nich
• na rozdíl od běžného pole (string[], number[], …) má tuple přesně určený počet
  položek i jejich pořadí
*/
var person = ['David', 24, true];
// const person: [string, number, boolean] = ['David', '24', true]; // Error
// const person: [string, number, boolean] = [2, 24, true]; // Error
console.log(person); // ['David', 24, true]
// Procvičení
var book;
book = ['Tou horou jste vy', 'Brianna Wiest', 2023];
var title = book[0], author = book[1], publishedYear = book[2];
console.log(title); // Tou horou jste vy
console.log(author); // Brianna Wiest
console.log(publishedYear); // 2023
// Procvičení
var car;
car = ['Audi', 'A5', 2008, false];
var brand = car[0], model = car[1], year = car[2], isEletric = car[3];
console.log("Zna\u010Dka: ".concat(brand)); // Značka: Audi
console.log("Model: ".concat(model)); // Model: A5
console.log("Rok v\u00FDroby: ".concat(year)); // Rok výroby: 2008
console.log("Elektrick\u00E9: ".concat(isEletric)); // Elektrické: false
var response1 = [200, 'OK'];
var response2 = [404, 'Stránka nenalezena'];
var response3 = [500, 'Chyba serveru'];
var response4 = [301, 'Přesměrování'];
console.log(response1); // [200, 'OK']
console.log(response2); // [404, 'Stránka nenalezena']
console.log(response3); // [500, 'Chyba serveru']
console.log(response4); // [301, 'Přesměrování']
var user1 = ['David', 24, true];
var user2 = ['Anna', 21, false];
var user3 = ['Martin', 28, true];
// Výpis do konzole
// console.log(user1); // ['David', 24, true]
// console.log(user2); // ['Anna', 21, false]
// console.log(user3); // ['Martin', 28, true]
console.log(user1);
user1.push('extra value'); // No error
console.log(user1); // ['David', 24, true, 'extra value'] // Toto by se stát nemělo
console.log(user2);
user2.pop();
user2.pop();
console.log(user2); // ['Anna'] // Toto by se stát nemělo
