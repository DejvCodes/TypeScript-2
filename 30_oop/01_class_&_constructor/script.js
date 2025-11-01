/*
Třídy a konstruktory v TypeScriptu
• tohle je základ pro tvorbu objektů, které mají vlastnosti (properties) a metody (functions)
*/
// Logika kódu
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
// Použití kódu
var book1 = new Book('Tou horou jste vy', 'Wiest, Brianna', 2023);
console.log(book1.title); // Tou horou jste vy
console.log(book1.author); // Wiest, Brianna
console.log(book1.year); // 2023
