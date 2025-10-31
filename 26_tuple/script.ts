/*
Tuple
• pole s pevně daným počtem prvků a typem každého z nich
• na rozdíl od běžného pole (string[], number[], …) má tuple přesně určený počet 
  položek i jejich pořadí
*/
const person: [string, number, boolean] = ['David', 24, true];
// const person: [string, number, boolean] = ['David', '24', true]; // Error
// const person: [string, number, boolean] = [2, 24, true]; // Error

console.log(person); // ['David', 24, true]

// Procvičení
let book: [string, string, number]; 
book = ['Tou horou jste vy', 'Brianna Wiest', 2023];

const [title, author, publishedYear] = book;

console.log(title); // Tou horou jste vy
console.log(author); // Brianna Wiest
console.log(publishedYear); // 2023

// Procvičení
let car: [string, string, number, boolean];
car = ['Audi', 'A5', 2008, false];

const [brand, model, year, isEletric] = car;

console.log(`Značka: ${brand}`); // Značka: Audi
console.log(`Model: ${model}`); // Model: A5
console.log(`Rok výroby: ${year}`); // Rok výroby: 2008
console.log(`Elektrické: ${isEletric}`); // Elektrické: false

// Praktické využití - Tuple a type alias
type HTTPresponse = [number, string];

const response1: HTTPresponse = [200, 'OK'];
const response2: HTTPresponse = [404, 'Stránka nenalezena'];
const response3: HTTPresponse = [500, 'Chyba serveru'];
const response4: HTTPresponse = [301, 'Přesměrování'];

console.log(response1); // [200, 'OK']
console.log(response2); // [404, 'Stránka nenalezena']
console.log(response3); // [500, 'Chyba serveru']
console.log(response4); // [301, 'Přesměrování']

// Problémy u Tuple
type userInfo = [string, number, boolean];

const user1: userInfo = ['David', 24, true];
const user2: userInfo = ['Anna', 21, false];
const user3: userInfo = ['Martin', 28, true];

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