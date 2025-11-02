/*
Generics
• umožňují psát znovupoužitelný a typově bezpečný kód
• pomocí generik můžeme definovat proměnný typ (např. T), který se doplní až při použití  
• díky tomu funguje jeden kód pro různé datové typy, ale zachová se kontrola typů
*/
let studenrs: string[] = ['Jan', 'Petr', 'Eva'];
let studenrs2: Array<string> = ['Jan', 'Petr', 'Eva'];

// K čemu slouží
const identity1 = (arg: number): number => {
    return arg;
}

const identity2 = (arg: string): string => {
    return arg;
}

const identity3 = (arg: boolean): boolean => {
    return arg;
}

// Generická funkce
const identity = <T>(arg: T): T => {
    return arg;
}
console.log(identity<number>(42)); // 42
console.log(identity<string>('Generics')); // Generics
console.log(identity<boolean>(true)); // true

// Automatická inference (odhad typu)
console.log(identity(42)); // 42
console.log(identity('Generics')); // Generics
console.log(identity(true)); // true

// Procvičování
const echo = <T>(value: T): T => {
    return value;
}
console.log(echo<number>(100)); // 100
console.log(echo<string>('Hello Generics')); // Hello Generics
console.log(echo<boolean>(false)); // false
console.log(echo<string[]>(['A', 'B', 'C'])); // ['A', 'B', 'C']

// Generics a interface
interface Box<T> {
    content: T;
}

const numberBox: Box<number> = {content: 123};
const stringBox: Box<string> = {content: 'Hello'};

console.log(numberBox); // {content: 123}
console.log(stringBox); // {content: 'Hello'}

// Generics a classa
class Container<T> {
    private items: T[] = [];

    addItem(item: T) {
        this.items.push(item);
    }

    getAllItems(): T[] {
        return this.items;
    }
}

const stringContainer = new Container<string>();
stringContainer.addItem('Item 1');
stringContainer.addItem('Item 2');
console.log(stringContainer.getAllItems()); // ['Item 1', 'Item 2']

const numberContainer = new Container<number>();
numberContainer.addItem(10);
numberContainer.addItem(20);
console.log(numberContainer.getAllItems()); // [10, 20]

// Generics a omezení (constraints)
const printLength = <T extends {length: number}>(item: T): void => {
    console.log(item.length);
}
printLength<string>('Hello'); // 5
printLength<string[]>(['A', 'B', 'C', 'D']); // 4
printLength<number[]>([1, 2, 3, 4, 5]); // 5
// printLength<number>(12345); // Chyba: number nemá vlastnost length

// Generics a více typových parametrů
const merge = <T, U>(obj1: T, obj2: U): T & U => {
    return {...obj1, ...obj2};
}
console.log(merge({name: 'Jan'}, {age: 30})); // {name: 'Jan', age: 30}

const combined = merge({name: 'Eva'}, {age: 25, city: 'Prague'});
console.log(combined.name); // 'Eva'
console.log(combined.age); // 25
console.log(combined.city); // Prague