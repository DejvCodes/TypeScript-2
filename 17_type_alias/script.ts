/*
Type alias (alias typu) 
• umožní pojmenovat libovolný typ — můžeme tak znovu používat složité typy 
  jednoduše pomocí jednoho jména

Jinými slovy
• type = způsob, jak dát vlastní jméno určitému typu
*/

type Address = {
    street: string;
    city: string;
}

type User = {
    name: string;
    age: number;
    email: string;
    address: Address;
}

const dejv: User = {
    name: 'David Dejv',
    age: 23,
    email: 'dejv@example.com',
    address: {
        street: 'Náměstí Republiky',
        city: 'Pardunice'
    }
}
console.log(dejv); // {name: 'David Dejv', age: 23, email: 'dejv@example.com', address: {…}}

const john: User = {
    name: 'John',
    age: 27,
    email: 'john@example.com',
    address: {
        street: 'Náměstí Republiky',
        city: 'Pardunice'
    }
}
console.log(john); // {name: 'John', age: 27, email: 'john@example.com', address: {…}}

type Point = {
    firstPart: number;
    secondPart: number;
}

const testResults = (myPoint: Point): Point => {
    return {
        firstPart: myPoint.firstPart * 2,
        secondPart: myPoint.secondPart * 2
    }
}
console.log(testResults({firstPart: 80, secondPart: 90})); // {firstPart: 160, secondPart: 180}

// Type alias - nemusí být jen objekty
// Primitivní datové typy
type UserId = number;

const getUser = (id: UserId) => {
    return `id: ${id}`;
}
console.log(getUser(2)); // id: 2

/*
Union typ
• umožňuje proměnné nebo parametru mít více možných typů
• zapisuje se pomocí svislé čáry | (angl. pipe)

Jinými slovy:
• proměnná může být "buď… nebo…"
*/
type Status = 'loading' | 'success' | 'error';

const showStatus = (status: Status) => {
    if (status === 'loading') {
        return 'loading';
    } else if (status === 'success') {
        return 'success';
    } else {
        return 'error';
    }
}
console.log(showStatus('success')); // success

/*
Type alias - optional properties
• volitelná (nepovinná) vlastnost je taková, kterou objekt nemusí obsahovat
• zapisuje se pomocí otazníku ? za názvem vlastnosti
*/

type Website = {
    title: string;
    url: string;
    pages?: number; // nepovinná vlastnost
    author: string;
}

const firstWebsite: Website = {
    title: 'DejvCodes',
    url: 'www.dejvcodes.com',
    pages: 7,
    author: 'David Kalmus'
}

console.log(firstWebsite.title); // DejvCodes
console.log(firstWebsite.url); // www.dejvcodes.com
console.log(firstWebsite.pages); // 7
console.log(firstWebsite.author); // David Kalmus

const websiteInfo = (web: Website): string => {
    // const pageNum = web.pages === undefined ? 'neznámý' : web.pages; 
    const pageNum = web.pages ?? 'neznámý';

    return `Název webové stránky je ${web.title}. Počet stránek má ${pageNum}. Její URL adresa je ${web.url}. Jejím autorem je ${web.author}.`;
}
console.log(websiteInfo(firstWebsite)); // Název webové stránky je DejvCodes. Počet stránek má 7. Její URL adresa je www.dejvcodes.com. Jejím autorem je David Kalmus.

// Procvičování
type Book = {
    title: string;
    author: string;
    yearPublished?: number;
    genre: string;
}

const firstBook: Book = {
    title: 'Hobit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy'
}
console.log(firstBook); // {title: 'Hobit', author: 'J.R.R. Tolkien', genre: 'Fantasy'}

/*
Type alias - Readonly modifier
• readonly znamená, že hodnotu dané vlastnosti nelze měnit po vytvoření objektu
• funguje tedy jako "ochrana proti přepsání"
• používá se hlavně v type aliasu nebo interface
*/

type Website2 = {
    readonly title: string;
    url: string;
    pages: number;
    author: string;
}

const secondWebsite: Website2 = {
    title: 'DejvCodes',
    url: 'www.dejvcodes.com',
    pages: 7,
    author: 'David Kalmus'
}

console.log(secondWebsite.title); // DejvCodes
// secondWebsite.title = 'nový title';
// console.log(secondWebsite.title);

/*
Type alias - Intersection types
• intersection type (&) kombinuje více typů dohromady -> výsledný typ musí splňovat 
  všechny vlastnosti všech typů

Jednoduše řečeno:
• union (|) = buď jeden, nebo druhý
• intersection (&) = oba zároveň
*/
type Person = {
    name: string;
    age: number;
}

type Employee = {
    company: string;    
    jobTitle: string;
}

type PersonEmployee = Person & Employee;

const employee1: PersonEmployee = {
    name: 'David',
    age: 23,
    company: 'Conviu s.r.o',
    jobTitle: 'Developer'
}
console.log(employee1); // {name: 'David', age: 23, company: 'Conviu s.r.o', jobTitle: 'Developer'}

// Procvičování
type BankAccount = {
    pin: number;
    accountNumber: number;
}

type OtherProperties = {
    loan: boolean;
    retirementSavings: boolean;
}

type ComplexBankAccount = BankAccount & OtherProperties & { insurence: boolean};

const bankAccount1: ComplexBankAccount = {
    pin: 1234,
    accountNumber: 17253829133,
    loan: true,
    retirementSavings: false,
    insurence: true
}
console.log(bankAccount1); // {pin: 1234, accountNumber: 17253829133, loan: true, retirementSavings: false, insurence: true}