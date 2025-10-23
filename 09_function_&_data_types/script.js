/*
Funkce v TypeScriptu
• v TypeScriptu můžeš typovat vstupní parametry i návratovou hodnotu
• tím zajistíš, že funkce bude volána správně a vracet očekávaný typ

| Prvek              | Příklad           | Význam                     |
| ------------------ | ----------------- | -------------------------- |
| Typ parametru      | `(name: string)`  | parametr musí být string   |
| Návratový typ      | `(): number`      | funkce vrací číslo         |
| Bez návratu        | `(): void`        | funkce nic nevrací         |
| Volitelný parametr | `(name?: string)` | může, ale nemusí být zadán |
| Výchozí hodnota    | `(b: number = 1)` | pokud chybí, použije se 1  |
*/
var fullName = function (firstName, secondName) {
    return firstName + ' ' + secondName;
};
console.log(fullName('David', 'Dejv'));
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(10, 20));
// Vrací string
var stringAndNum = function (name, num) {
    return "String: ".concat(name, " | Number: ").concat(num);
};
console.log(stringAndNum('Dejv', 24));
