// Komplexní úloha
// Funkce na výpočet věku uživatele
var calculateAge = function (user) {
    var currentYear = new Date().getFullYear();
    return currentYear - user.yearOfBirth;
};
// Funkce na zobrazení uživatelských informací
var displayUserInfo = function (user) {
    var userAge = calculateAge(user);
    return "U\u017Eivatel: ".concat(user.name, ", v\u011Bk: ").concat(userAge, ", email: ").concat(user.email || '~ neuveden ~');
};
// Funkce pro zpracování formuláře
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Zabrání výchozímu chování (načítání stránky)
    // Získání hodnot z formuláře
    var name = document.getElementById('name').value;
    var yearOfBirth = parseInt(document.getElementById('yearOfBirth').value);
    var email = document.getElementById('email').value || undefined;
    // Vytvoření objektu uživatele
    var user = {
        name: name,
        yearOfBirth: yearOfBirth,
        email: email
    };
    // Zobrazení informací o uživateli
    var createUserInfoParagraph = function () {
        var p = document.createElement('p');
        p.textContent = displayUserInfo(user);
        return p;
    };
    var userInfo = document.getElementById('userInfo') || null;
    userInfo.appendChild(createUserInfoParagraph());
    // Vyčištění formuláře
    document.getElementById('userForm').reset();
});
