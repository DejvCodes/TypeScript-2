/*
Funkce - hlubší pohled na návratovou hodnotu
• každá funkce může vracet nějaký výsledek pomocí return
• v TypeScriptu můžeme určit, jakého typu ten výsledek má být
*/

// 1. Funkce s návratovým typem "number"
const square = (num: number): number => {
    return num * num;
}
console.log(square(5)); // 25

// 2.Funkce s návratovým typem "string"
const greet = (name: string): string => {
  return `Ahoj, ${name}!`;
}
console.log(greet('Dejv')); // Ahoj, Dejv!

// 3. Funkce bez návratu (void)
const logMessage = (message: string): void => {
    console.log(message); // Zpráva
}
logMessage('Zpráva');

// 4. Funkce - Infinity -> návratový typ "number"
const division = (num1: number, num2: number): number => {
    return num1 / num2;
}
console.log(division(10, 5)); // 2
// console.log(division(10, 0)); // Infinity 
// console.log(typeof(Infinity));  // number




console.log('----------------------')

// 4️⃣ Funkce, která nikdy neskončí (never)
function throwError(msg: string): never {
  throw new Error(msg);
}
// throwError("Něco se pokazilo!"); // 💥 vyhodí chybu


// 5️⃣ Automatické odvození návratového typu (type inference)
function multiply(a: number, b: number) {
  return a * b; // TS automaticky pozná, že vrací "number"
}
const result = multiply(4, 2); // ✅ number


// 6️⃣ Funkce vracející více možností (union type)
function getStatus(success: boolean): string | number {
  return success ? "OK" : 500;
}
const status = getStatus(true); // ✅ "OK" nebo 500


// 7️⃣ Funkce vracející objekt (ručně typovaný)
function createUser(name: string, age: number): { name: string; age: number } {
  return { name, age };
}
const user1 = createUser("David", 23);


// 8️⃣ Funkce vracející objekt pomocí vlastního typu
type User = { name: string; age: number };

function makeUser(name: string, age: number): User {
  return { name, age };
}
const user2 = makeUser("Petr", 30);


// 9️⃣ Funkce s výchozí hodnotou parametru
function greetUser(name: string = "návštěvníku"): string {
  return `Ahoj, ${name}!`;
}
console.log(greetUser());      // "Ahoj, návštěvníku!"
console.log(greetUser("Dejv")); // "Ahoj, Dejv!"


// 🔟 Funkce s volitelným parametrem (?)
function sayHello(name?: string): string {
  return name ? `Ahoj, ${name}!` : "Ahoj!";
}
console.log(sayHello());      // "Ahoj!"
console.log(sayHello("David")); // "Ahoj, David!"
