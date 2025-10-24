// Objekt jako parametr ve funkci
const student: {
    firstName: string, 
    secondName: string, 
    age: number
} = {
    firstName: 'David',
    secondName: 'Dejv',
    age: 23
}

const printName = (
    person: {firstName: string, secondName: string}, // důležitý je pojmenovat objekt
    age: number
): void => {
    console.log(`${person.firstName} ${person.secondName} ${age}`); // David Dejv 23
}
printName(student, student.age);