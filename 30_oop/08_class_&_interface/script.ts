/*
Class a interface
• interface určuje, co musí classa splňovat
*/
interface IUser {
    name: string;
    age: number;
    introduce(): string;
}

// Třída, která implementuje interface
class User implements IUser {
    constructor(public name: string, public age: number){}

    introduce(): string {
        return `Jméno: ${this.name}, Věk: ${this.age}`;
    }
}

const user1 = new User('David', 23);
console.log(user1); // User {name: 'David', age: 23}
console.log(user1.introduce()); // Jméno: David, Věk: 23