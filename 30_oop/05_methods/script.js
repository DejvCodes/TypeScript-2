/*
Methods
• funkce definovaná uvnitř třídy, která pracuje s jejími vlastnostmi a logikou
• metody obvykle používají this, aby přistupovaly k vlastnostem konkrétní instance
*/
var section = document.getElementById('books');
// Atributy, metody
var Book = /** @class */ (function () {
    function Book(title, author, year, bookId) {
        this.material = 'paper';
        this.title = title;
        this.author = author;
        this.year = year;
        this.bookId = bookId;
    }
    Book.prototype.bookInfo = function () {
        return "ID: ".concat(this.bookId, " \n            <br> \u2022 N\u00E1zev knihy: ").concat(this.title, "\n            <br> \u2022 Autor: ").concat(this.author, " \n            <br> \u2022 Rok vyd\u00E1n\u00ED: ").concat(this.year);
    };
    Book.prototype.addToWebsite = function (tag, whereToAdd) {
        var htmlTag = document.createElement(tag);
        htmlTag.innerHTML = this.bookInfo();
        whereToAdd.appendChild(htmlTag);
    };
    return Book;
}());
var book1 = new Book('Tou horou jste vy', 'Wiest, Brianna', 2023, '8JD3920');
var book2 = new Book('Atomic Habits', 'Clear, James', 2018, '3KA2901');
var book3 = new Book('The Psychology of Money', 'Housel, Morgan', 2020, '9PL4821');
// console.log(book1.bookInfo()); // • ID: 8JD3920 - Název knihy je 'Tou horou jste vy', autor: Wiest, Brianna, rok vydání: 2023.
// console.log(book2.bookInfo()); // • ID: 3KA2901 - Název knihy je 'Atomic Habits', autor: Clear, James, rok vydání: 2018.
// console.log(book3.bookInfo()); // • ID: 9PL4821 - Název knihy je 'The Psychology of Money', autor: Housel, Morgan, rok vydání: 2020.
book1.addToWebsite('p', section);
book2.addToWebsite('p', section);
book3.addToWebsite('p', section);
