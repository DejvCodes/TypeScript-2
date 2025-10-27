// Pole objektů v TypeScriptu
type TestResults = {
    firstPart: number;
    secondPart: number;
}

const allResults: TestResults[] = [
    {firstPart: 17, secondPart: 23},
    {firstPart: 20, secondPart: 25}
]

console.log(allResults); // [{firstPart: 17, secondPart: 23} {firstPart: 20, secondPart: 25}]

/*
Multidimenzionální pole
• je to pole, které obsahuje jiná pole
• každá úroveň má svůj typ a TypeScript to dokáže přesně zapsat
*/

const table: string[][] = [
    ['X', 'O', 'O'],
    ['X', 'W', 'O'],
    ['X', 'O', 'O']
]
console.log(table[1]); // ['X', 'W', 'O']
console.log(table[1][1]); // W

// Procvičení multidimenzionálního pole
const table2: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(table2[1]); // [4, 5, 6]
console.log(table2[1][1]); // 5