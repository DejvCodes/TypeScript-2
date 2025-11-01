/*
Přístupové modifikátory
• v TypeScriptu (a OOP obecně) modifikátory public, private, protected určují,
  kde a jak můžeme přistupovat k vlastnostem a metodám třídy

1. public — přístupné odkudkoliv
• je výchozí modifikátor (když nic nenapíšeme)
• můžeme k vlastnosti/metodě přistupovat odkudkoli – zvenku, zevnitř i z dědiců

2. private — přístupné pouze uvnitř třídy
• můžeme k nim přistupovat jen uvnitř dané třídy
• nejsou vidět zvenku ani v dědičných třídách

3. protected — přístupné uvnitř třídy a jejích potomků
*/

class Book {
    public readonly title: string;
    public readonly author: string;
    public readonly year: number;
    protected readonly material = 'paper';
    private bookId: string;

    constructor(title: string, author: string, year: number, bookId: string){
        this.title = title;
        this.author = author;
        this.year = year;
        this.bookId = bookId;

        console.log(bookId); // 8JD3920
    }
}

const book1 = new Book(
    'Tou horou jste vy', 
    'Wiest, Brianna', 
    2023, 
    '8JD3920'   
);

console.log(book1); // {material: 'paper', title: 'Tou horou jste vy', author: 'Wiest, Brianna', year: 2023, bookId: '8JD3920'}
console.log(book1.title); // Tou horou jste vy
// console.log(book1.bookId); // Error: vlastnost 'bookId' je private a není přístupná mimo třídu 'Book'
