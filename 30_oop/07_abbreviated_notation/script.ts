// Zkrácený zápis pro nastavení atributů

class User1 {
    public name:string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduction() {
        return `${this.name} ${this.age}`;
    }
}

class User2 {
    constructor(public name: string, public age: number) {}

    public introduction() {
        return `${this.name} ${this.age}`;
    }
}

const user1 = new User1('David', 23);
console.log(user1); // User1 {name: 'David', age: 23}

const user2 = new User2('DAVO', 20);
console.log(user2); // User2 {name: 'DAVO', age: 20}

console.log(user1.introduction()); // David 23
console.log(user2.introduction()); // DAVO 20