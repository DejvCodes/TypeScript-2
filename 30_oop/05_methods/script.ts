/*
Methods
• funkce definovaná uvnitř třídy, která pracuje s jejími vlastnostmi a logikou
• metody obvykle používají this, aby přistupovaly k vlastnostem konkrétní instance
*/
const section = document.getElementById('books') as HTMLElement;

// Atributy, metody
class Book {
    public readonly title: string;
    public readonly author: string;
    public readonly year: number;
    protected readonly material = 'paper';
    private bookId: string; // zapouzdření (pouze uvnitř classy)

    constructor(title: string, author: string, year: number, bookId: string){
        this.title = title;
        this.author = author;
        this.year = year;
        this.bookId = bookId;
    }

    public bookInfo() {
        return `ID: ${this.bookId} 
            <br> • Název knihy: ${this.title}
            <br> • Autor: ${this.author} 
            <br> • Rok vydání: ${this.year}`;
    }

    public addToWebsite(tag: string, whereToAdd: HTMLElement) {
        const htmlTag = document.createElement(tag);
        htmlTag.innerHTML = this.bookInfo();
        whereToAdd.appendChild(htmlTag);
    }
}

const book1 = new Book(
    'Tou horou jste vy', 
    'Wiest, Brianna', 
    2023, 
    '8JD3920'
);

const book2 = new Book(
    'Atomic Habits', 
    'Clear, James', 
    2018, 
    '3KA2901'
);

const book3 = new Book(
    'The Psychology of Money', 
    'Housel, Morgan', 
    2020, 
    '9PL4821'
);

// console.log(book1.bookInfo()); // • ID: 8JD3920 - Název knihy je 'Tou horou jste vy', autor: Wiest, Brianna, rok vydání: 2023.
// console.log(book2.bookInfo()); // • ID: 3KA2901 - Název knihy je 'Atomic Habits', autor: Clear, James, rok vydání: 2018.
// console.log(book3.bookInfo()); // • ID: 9PL4821 - Název knihy je 'The Psychology of Money', autor: Housel, Morgan, rok vydání: 2020.

book1.addToWebsite('p', section);
book2.addToWebsite('p', section);
book3.addToWebsite('p', section);