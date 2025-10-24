// Objekt jako parametr ve funkci
var student = {
    firstName: 'David',
    secondName: 'Dejv',
    age: 23
};
var printName = function (person, // důležitý je pojmenovat objekt
age) {
    console.log("".concat(person.firstName, " ").concat(person.secondName, " ").concat(age)); // David Dejv 23
};
printName(student, student.age);
