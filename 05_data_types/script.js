/*
Datové typy (string, number, boolean)
• TypeScript typy jsou statické – kontrolují se před spuštěním kódu, takže
  ti editor hned ukáže chybu a zabrání hloupým bugům
*/
var student = 'David';
student = 'Dejv';
console.log(student); // Dejv
console.log(student.toLocaleLowerCase()); // dejv
// console.log(student.toFixed(2)); // 'toFixed' does not exist on type 'string'
var age = 23;
age = 24;
console.log(age); // 24
console.log(age.toFixed(2)); // 24.00
// console.log(age.toLocaleLowerCase()); // 'toLocaleLowerCase' does not exist on type 'number'
// u boolean -> is nebo has např. isAdult
var isAdult = false;
isAdult = true;
console.log(isAdult); // true
