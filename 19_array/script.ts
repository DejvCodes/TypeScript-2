// Pole v TypeScriptu
const students: string[] = ['David', 'John', 'Lea'];
const numbers: number[] = [1, 4, 2, 8, 7];
const bool: boolean[] = [true, true, false, true, false];

students.push('Ester');
numbers.push(9);
bool.push(true);

console.log(students); //  ['David', 'John', 'Lea', 'Ester']
console.log(numbers); // [1, 4, 2, 8, 7, 9]
console.log(bool); // [true, true, false, true, false, true]

// Pole - alternativní zápisy
const strings: Array<string> = ['Dzony', 'Dan', 'Natka'];
const numbers2: Array<number> = [1, 2, 3, 4];
const bool2: Array<boolean> = [true, true, false, false];

console.log(strings); // ['Dzony', 'Dan', 'Natka']
console.log(numbers2); // [1, 2, 3, 4]
console.log(bool2); // [true, true, false, false]