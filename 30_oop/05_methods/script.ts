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

const section = document.getElementById('books') as HTMLElement;

// Atributy, metody
abstract class Book { // abstraktní třída (nelze vytvořit instanci)
    public readonly title: string;
    public readonly author: string;
    public readonly year: number;
    protected readonly material = 'paper';
    // private bookId: string; // zapouzdření (pouze uvnitř classy)
    protected bookId: string;

    constructor(title: string, author: string, year: number, bookId: string){
        this.title = title;
        this.author = author;
        this.year = year;
        this.bookId = bookId;
    }

    protected bookInfo() {
        return `ID: ${this.bookId} 
            <br> • Název knihy: ${this.title}
            <br> • Autor: ${this.author} 
            <br> • Rok vydání: ${this.year}`
        ;
    }

    public addToWebsite(tag: string, whereToAdd: HTMLElement) {
        const htmlTag = document.createElement(tag);
        htmlTag.innerHTML = this.bookInfo();
        whereToAdd.appendChild(htmlTag);
    }
}

class Bestseller extends Book { // dědičnost
    public pages: number;

    constructor(
        title: string, 
        author: string, 
        year: number, 
        bookId: string,
        pages: number
    ){
        super(title, author, year, bookId); // volání konstruktoru rodičovské classy
        this.pages = pages;
    }

    protected bookInfo() { // přepsání metody (polymorfismus)
        return `ID: ${this.bookId} - bestseller
            <br> • ${this.title} je bestseller! Který si musíte přečíst!
            <br> • Tento bestseller napsal autor: ${this.author} 
            <br> • Rok vydání knihy je: ${this.year}
            <br> • Počet stran: ${this.pages}`
        ;
    }
}

class NormalBook extends Book {
    // abstrakce
}

class AudioBook extends Book {
    // abstrakce
}
    
class Ebook extends Book {
    // abstrakce
}

const bestseller = new Bestseller(
    'The Midnight Library', 
    'Matt Haig', 
    2020, 
    '5MH1234',
    304
)

const normalBook1 = new NormalBook(
    'Tou horou jste vy', 
    'Wiest, Brianna', 
    2023, 
    '8JD3920'
)

const normalBook2 = new NormalBook(
    'Atomic Habits', 
    'Clear, James', 
    2018, 
    '3KA2901'
)

const audioBook3 = new AudioBook(
    'The Psychology of Money', 
    'Housel, Morgan', 
    2020, 
    '9PL4821'
)

// console.log(book1.bookInfo()); // • ID: 8JD3920 - Název knihy je 'Tou horou jste vy', autor: Wiest, Brianna, rok vydání: 2023.
// console.log(book2.bookInfo()); // • ID: 3KA2901 - Název knihy je 'Atomic Habits', autor: Clear, James, rok vydání: 2018.
// console.log(book3.bookInfo()); // • ID: 9PL4821 - Název knihy je 'The Psychology of Money', autor: Housel, Morgan, rok vydání: 2020.

normalBook1.addToWebsite('p', section);
normalBook2.addToWebsite('p', section);
audioBook3.addToWebsite('p', section);
bestseller.addToWebsite('p', section);