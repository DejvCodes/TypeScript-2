/*
Funkce a contextual typing (kontextové typování)
• typeScript umí odvodit typ funkce na základě KONTEKSTU
• tedy podle toho, kde a jak je funkce použita

• TypeScript pozná typ parametru nebo návratové hodnoty podle kontextu,
  kde se funkce nachází
*/
var students = ['David', 'Jan', 'Lea'];
var newStudents = students.map(function (oneStudent) {
    return oneStudent.toUpperCase();
});
console.log(newStudents); // ['DAVID', 'JAN', 'LEA']
