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

// 2. Funkce s návratovým typem "string"
const greet = (name: string): string => {
    return `Ahoj, ${name}!`;
}
console.log(greet('Dejv')); // Ahoj, Dejv!

// 3. Funkce bez návratu (void) -> nevrací žádnou užitečnou hodnotu
const logMessage = (message: string): void => {
    console.log(message); // Zpráva
}
logMessage('Zpráva');

const showMessage = (message: string): void => {
    const output = document.querySelector('h1') as HTMLElement;
    if (output) {
        output.textContent = message; // h1 bude mít text Nadpis
    }
}
showMessage('Nadpis');

// 4. Funkce - Infinity -> návratový typ "number"
const division = (num1: number, num2: number): number => {
    return num1 / num2;
}
console.log(division(10, 5)); // 2
// console.log(division(10, 0)); // Infinity 
// console.log(typeof(Infinity));  // number

// 5. Funkce, která nikdy neskončí nebo vrátí chybu (never)
const errorFunction = (errorText: string): never => {
    throw new Error(errorText);
}
// console.log(errorFunction('chyba!')); // Uncaught Error: chyba!

// 6. Automatické odvození návratového typu (type inference)
const multiply = (a: number, b: number) => {
    return a * b; // TS automaticky pozná, že vrací "number"
}
console.log(multiply(5, 5)); // 25

// 7. Funkce vracející více možností (union type)
const getStatus = (success: boolean): string | number => {
    return success ? 'OK' : 500;
}
console.log(getStatus(true)); // "OK" nebo 500

// 8. Funkce vracející objekt (ručně typovaný)
const createUser = (name: string, age: number): {name: string; age: number} => {
    return { name, age };
}
console.log(createUser('David', 23)); // {name: 'David', age: 23}

// 9. Funkce vracející objekt pomocí vlastního typu
type User = { name: string; age: number };

const makeUser = (name: string, age: number): User => {
    return { name, age };
}
console.log(makeUser('Dejv', 23)); // {name: 'Dejv', age: 23}

// 10. Funkce s výchozí hodnotou parametru
const greetUser = (name: string = 'návštěvník'): string => {
    return `Ahoj, ${name}!`;
}
console.log(greetUser()); // Ahoj, návštěvník!

// 11. Funkce s volitelným parametrem (?)
const sayHello = (name?: string): string => {
    return name ? `Ahoj, ${name}!` : "Ahoj!";
}
console.log(sayHello()); // "Ahoj!"
console.log(sayHello("David")); // "Ahoj, David!"