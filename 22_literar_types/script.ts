/*
Literal type
• proměnná může mít pouze určitou konkrétní hodnotu, nic jiného
*/
type DayOfWeek = 'po' | 'út' | 'st' | 'čt' | 'pá' | 'so' | 'ne';

const today: DayOfWeek = 'st';
const yesterday: DayOfWeek = 'út';
// const favouriteDay: DayOfWeek = 'pátek'; // Type '"pátek"' is not assignable to type 'DayOfWeek'

console.log(today); // po
console.log(yesterday); // út

// Procvičení
type Direction = 'north' | 'south' | 'east' | 'west';

const myDirection: Direction = 'north';

console.log(myDirection); // north

// Procvičení
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

const roll: DiceRoll = 5;

console.log(roll); // 5