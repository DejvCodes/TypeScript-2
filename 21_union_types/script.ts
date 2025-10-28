/*
Union types
• proměnná nebo parametr může být jeden z několika typů
• zapisuje se pomocí svislé čáry | (pipe)
*/
const getValue = (num: number): number | string => {
    if (num % 2 == 0) {
        return num * 2;
    } else {
        return `Číslo ${num} je liché.`;
    }
}
console.log(getValue(4)); // 8
console.log(getValue(7)); // Číslo 7 je liché.

let age: number | string = 50;

age = 24;
console.log(age); // 24
age = 'Dvacet';
console.log(age); // Dvacet

let firstName: null | string = null;

firstName = 'David';
console.log(firstName); // David

// Procvičení
let students: string | string[];
students = 'David';
console.log(students); // David

students = ['David', 'Dzony', 'Ester'];
console.log(students); // ['David', 'Dzony', 'Ester']

// Union types - složitější příklad
type StudentResults = {
    firstPart: number;
    secondPart: number;
}

type TeacherResults = {
    firstPart: number;
    secondPart: number;
    thirdPart: number;
}

const allResults: StudentResults[] | TeacherResults[] = [
    {firstPart: 80, secondPart: 40, thirdPart: 90},
    {firstPart: 90, secondPart: 65, thirdPart: 80}
]
console.log(allResults); 
// {firstPart: 80, secondPart: 40, thirdPart: 90}
// {firstPart: 90, secondPart: 65, thirdPart: 80}

// Union types - praktické využití
const clearNumber = (price: number | string): number => {
    if (typeof price === 'string') {
        const newPrice = parseFloat(price.replace('$', ''));
        return newPrice;
    }
    return price;
}
console.log(clearNumber(100)); // 100
console.log(clearNumber('$100')); // 100 