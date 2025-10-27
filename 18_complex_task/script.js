// Komplexní úloha - 1. část
// Data získaná z formuláře
var user1 = {
    name: 'John',
    yearOfBirth: 1990,
    email: 'john@example.com'
};
var user2 = {
    name: 'Jane',
    yearOfBirth: 1995
};
// Funkce na výpočet věku uživatele
var calculateAge = function (user) {
    var currentYear = new Date().getFullYear();
    return currentYear - user.yearOfBirth;
};
// Funkce na zobrazení uživatelských informací
var displayUserInfo = function (user) {
    var userAge = calculateAge(user);
    return "U\u017Eivatel ".concat(user.name, ", v\u011Bk: ").concat(userAge, ", email: ").concat(user.email || '~ neuveden ~', ".");
};
console.log(displayUserInfo(user1)); // Uživatel John, věk: 35, email: john@example.com.
console.log(displayUserInfo(user2)); // Uživatel Jane, věk: 30, email: ~ neuveden ~.
