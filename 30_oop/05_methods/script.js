/*
Methods (metody)
• funkce definovaná uvnitř třídy, která pracuje s jejími vlastnostmi a logikou
• metody obvykle používají this, aby přistupovaly k vlastnostem konkrétní instance

Co je super v TypeScriptu
• super se používá pro volání konstruktoru rodičovské třídy (superclass)
  nebo pro přístup k metodám rodiče, které jsi přepsal (override)

4 principy OOP
• zapouzdření
• dědičnost
• polymorfismus
• abstrakce

Zapouzdření (Encapsulation)
• skrytí vnitřní logiky objektu a ochrana jeho dat před nechtěným přístupem
• k datům se přistupuje přes veřejné metody, ne přímo

Dědičnost (Inheritance)
• umožňuje jedné třídě přebírat vlastnosti a metody jiné třídy
• zajišťuje znovupoužití kódu a jednodušší rozšiřování

Polymorfismus (Polymorphism)
• různé objekty mohou reagovat na stejnou metodu různým způsobem
• umožňuje přepsat metodu z rodičovské třídy podle potřeby

Abstrakce (Abstraction)
• skrývá složitou implementaci a ukazuje jen podstatné vlastnosti a chování
• používá se abstract class nebo interface pro definování rozhraní
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Bestseller = /** @class */ (function (_super) {
    __extends(Bestseller, _super);
    function Bestseller(title, author, year, bookId, pages) {
        var _this = _super.call(this, title, author, year, bookId) || this; // volání konstruktoru rodičovské classy
        _this.pages = pages;
        return _this;
    }
    Bestseller.prototype.bookInfo = function () {
        return "ID: ".concat(this.bookId, " - bestseller\n            <br> \u2022 ").concat(this.title, " je bestseller! Kter\u00FD si mus\u00EDte p\u0159e\u010D\u00EDst!\n            <br> \u2022 Tento bestseller napsal autor: ").concat(this.author, " \n            <br> \u2022 Rok vyd\u00E1n\u00ED knihy je: ").concat(this.year, "\n            <br> \u2022 Po\u010Det stran: ").concat(this.pages);
    };
    return Bestseller;
}(Book));
var NormalBook = /** @class */ (function (_super) {
    __extends(NormalBook, _super);
    function NormalBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NormalBook;
}(Book));
var AudioBook = /** @class */ (function (_super) {
    __extends(AudioBook, _super);
    function AudioBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AudioBook;
}(Book));
var Ebook = /** @class */ (function (_super) {
    __extends(Ebook, _super);
    function Ebook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ebook;
}(Book));
var bestseller = new Bestseller('The Midnight Library', 'Matt Haig', 2020, '5MH1234', 304);
var normalBook1 = new NormalBook('Tou horou jste vy', 'Wiest, Brianna', 2023, '8JD3920');
var normalBook2 = new NormalBook('Atomic Habits', 'Clear, James', 2018, '3KA2901');
var audioBook3 = new AudioBook('The Psychology of Money', 'Housel, Morgan', 2020, '9PL4821');
// console.log(book1.bookInfo()); // • ID: 8JD3920 - Název knihy je 'Tou horou jste vy', autor: Wiest, Brianna, rok vydání: 2023.
// console.log(book2.bookInfo()); // • ID: 3KA2901 - Název knihy je 'Atomic Habits', autor: Clear, James, rok vydání: 2018.
// console.log(book3.bookInfo()); // • ID: 9PL4821 - Název knihy je 'The Psychology of Money', autor: Housel, Morgan, rok vydání: 2020.
normalBook1.addToWebsite('p', section);
normalBook2.addToWebsite('p', section);
audioBook3.addToWebsite('p', section);
bestseller.addToWebsite('p', section);
