/*
Interface v TypeScriptu
• definuje strukturu objektu
• slouží k popisu tvaru objektu — tedy určuje, jaké vlastnosti objekt má mít a
  jakých jsou typů, díky čemuž můžeme psát přehlednější a bezpečnější kód

Interface a type alias v TypeScriptu dělají podobnou věc — oba dokážou popsat tvar objektu
nebo definovat vlastní typ, ale interface se používá hlavně pro objekty a struktury, zatímco
type alias je univerzálnější a zvládne i uniony, intersection typy nebo primitivní typy
*/
var myDog = {
    species: 'Canis lupus familiaris',
    breed: 'Golden Retriever'
};
console.log(myDog); // {species: 'Canis lupus familiaris', breed: 'Golden Retriever'}
var yourDog = {
    species: 'Canis lupus familiaris',
    breed: 'Golden Retriever'
};
console.log(yourDog); // {species: 'Canis lupus familiaris', breed: 'Golden Retriever'}
var firstName = {
    name: 'Captain America',
    price: 2394,
};
console.log(firstName); // {name: 'Captain America', price: 2394}
var person = {
    name: 'Bob',
    age: 23,
    greet: function () {
        console.log("Ahoj ".concat(this.name));
    },
};
console.log(person.name); // Bob
console.log(person.age); // 23
person.greet(); // Ahoj Bob
var person1 = {
    name: 'Bob',
    age: 23,
    greet: function () {
        console.log("Ahoj ".concat(this.name));
    },
};
console.log(person1.name); // Bob
console.log(person1.age); // 23
person1.greet(); // Ahoj Bob
