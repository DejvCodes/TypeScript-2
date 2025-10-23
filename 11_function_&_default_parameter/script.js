// Funkce a defaultní parametr
var crimeDescription = function (firstName, // = 'nezadáno', 
secondName, crime) {
    if (crime === void 0) { crime = 'nezadáno'; }
    return "".concat(firstName, " ").concat(secondName, " sp\u00E1chal: ").concat(crime, ".");
};
// console.log(crimeDescription(undefined, 'David', 'loupež')); // pozor na pořadí
console.log(crimeDescription('David', 'Dejv')); // David Dejv spáchal: nezadáno
