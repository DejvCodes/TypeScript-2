/*
Non-null assertion operátor v TypeScriptu
• tedy zápis s vykřičníkem !, který říká TypeScriptu -> Tahle hodnota určitě není null ani undefined
*/

const input = document.getElementById('userNameInput') as HTMLInputElement;
input!.value = 'input element';

console.log(input.value); // input element

type User = {
    name: string;
    email?: string;
}

const myUser:User = {
    name: 'David',
    email: 'david@example.com'
}

console.log(myUser.email!.length); // 17