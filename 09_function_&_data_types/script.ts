/*
Funkce v TypeScriptu
• v TypeScriptu můžeme typovat vstupní parametry i návratovou hodnotu
• tím zajistíme, že funkce bude volána správně a vracet očekávaný typ

| Prvek              | Příklad           | Význam                     |
| ------------------ | ----------------- | -------------------------- |
| Typ parametru      | `(name: string)`  | parametr musí být string   |
| Návratový typ      | `(): number`      | funkce vrací číslo         |
| Bez návratu        | `(): void`        | funkce nic nevrací         |
| Volitelný parametr | `(name?: string)` | může, ale nemusí být zadán |
| Výchozí hodnota    | `(b: number = 1)` | pokud chybí, použije se 1  |
*/
const fullName = (firstName: string, secondName: string): string => {
    return firstName + ' ' + secondName;
}
console.log(fullName('David', 'Dejv'));

const sum = (num1: number, num2: number): number => {
    return num1 + num2;
}
console.log(sum(10, 20));

// Vrací string
const stringAndNum = (name: string, num: number): string => {
    return `String: ${name} | Number: ${num}`;
}
console.log(stringAndNum('Dejv', 24));