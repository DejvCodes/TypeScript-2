/*
Funkce a výchozí (defaultní) parametry v TS
• ve funkci můžeš nastavit výchozí hodnotu parametru
• pokud při volání funkce ten parametr nepředáš, TypeScript použije tu výchozí hodnotu
*/
const crimeDescription = (
    firstName: string, // = 'nezadáno', 
    secondName: string, 
    crime: string = 'nezadáno'
): string => {
    return `${firstName} ${secondName} spáchal: ${crime}.`;
}
// console.log(crimeDescription(undefined, 'David', 'loupež')); // pozor na pořadí
console.log(crimeDescription('David', 'Dejv')); // David Dejv spáchal: nezadáno