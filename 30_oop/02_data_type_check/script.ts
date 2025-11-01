// Kontrola datových typů

// Logika kódu
class Book {
    title: string;
    author: string;
    year: number;
    material = 'paper';

    constructor(title: string, author: string, year: number){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// Použití kódu
const book1 = new Book('Tou horou jste vy', 'Wiest, Brianna', 2023);
console.log(book1.title); // Tou horou jste vy
console.log(book1.author); // Wiest, Brianna
console.log(book1.year); // 2023
console.log(book1.material); // paper