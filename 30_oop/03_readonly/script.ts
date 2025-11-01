/*
Readonly
• klíčové slovo readonly označí vlastnost nebo proměnnou jako neměnitelnou po jejím přiřazení
• hodnotu můžeme nastavit pouze jednou – při deklaraci nebo v konstruktoru
*/

class Book {
    readonly title: string;
    readonly author: string;
    readonly year: number;
    readonly material = 'paper';

    constructor(title: string, author: string, year: number){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

const book1 = new Book('Tou horou jste vy', 'Wiest, Brianna', 2023);
console.log(book1.title); // Tou horou jste vy
book1.title = 'Pět nocí'; // Cannot assign to 'title' because it is a read-only property
console.log(book1.title); // Pět nocí
