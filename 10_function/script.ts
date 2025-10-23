// Funkce
const introduction = (firstName: string, secondName: string, age: number): string => {
    return `${firstName} ${secondName} ${age}`; // vrací string
}
// console.log(introduction('David', 'Dejv', '24')); // age nesmí být typu string
console.log(introduction('David', 'Dejv', 24));