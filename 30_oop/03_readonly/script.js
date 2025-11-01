/*
Readonly
• klíčové slovo readonly označí vlastnost nebo proměnnou jako neměnitelnou po jejím přiřazení
• hodnotu můžeš nastavit pouze jednou – při deklaraci nebo v konstruktoru
*/
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.material = 'paper';
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
var book1 = new Book('Tou horou jste vy', 'Wiest, Brianna', 2023);
console.log(book1.title); // Tou horou jste vy
book1.title = 'Pět nocí'; // Cannot assign to 'title' because it is a read-only property
console.log(book1.title); // Pět nocí
