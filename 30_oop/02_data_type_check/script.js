// Kontrola datových typů
// Logika kódu
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.material = 'paper';
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
console.log(book1.material); // paper
