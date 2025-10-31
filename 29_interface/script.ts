/*
Interface v TypeScriptu 
• definuje strukturu objektu
• slouží k popisu tvaru objektu — tedy určuje, jaké vlastnosti objekt má mít a 
  jakých jsou typů, díky čemuž můžeme psát přehlednější a bezpečnější kód

Interface a type alias v TypeScriptu dělají podobnou věc — oba dokážou popsat tvar objektu 
nebo definovat vlastní typ, ale interface se používá hlavně pro objekty a struktury, zatímco 
type alias je univerzálnější a zvládne i uniony, intersection typy nebo primitivní typy
*/

// Interface
interface User {
    name: string;
}

// Type alias
type UserType = {
    name: string;
}

// Rozšíření u interfacu
interface Animal {
    species: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    species: 'Canis lupus familiaris',
    breed: 'Golden Retriever'
}
console.log(myDog); // {species: 'Canis lupus familiaris', breed: 'Golden Retriever'}

// Rozšíření u type aliasu
type AnimalType = {
    species: string;
}

type DogType = AnimalType & {breed: string}

const yourDog: DogType = {
    species: 'Canis lupus familiaris',
    breed: 'Golden Retriever'
}
console.log(yourDog); // {species: 'Canis lupus familiaris', breed: 'Golden Retriever'}

// Použití pro různé datové typy

// Interface
// interface Idinterface = string | number; // Nefunguje
interface Idinterface {
    id: string | number;
}

// Type alias
type data = string;
type data1 = string | number; // union type

// Opětovné otevření interfacu
interface Product {
    name: string;
}

interface Product {
    price: number;
}

const firstName: Product = {
    name: 'Captain America',
    price: 2394,
}
console.log(firstName); // {name: 'Captain America', price: 2394}

// Metody u interfacu
interface Person {
    name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: 'Bob',
    age: 23,
    greet() {
        console.log(`Ahoj ${this.name}`);
    },
}
console.log(person.name); // Bob
console.log(person.age); // 23
person.greet(); // Ahoj Bob

// Metody u type alias
type PersonType = {
    name: string;
    age: number;
    greet(): void;
}

const person1: PersonType = {
    name: 'Bob',
    age: 23,
    greet() {
        console.log(`Ahoj ${this.name}`);
    },
}
console.log(person1.name); // Bob
console.log(person1.age); // 23
person1.greet(); // Ahoj Bob
