/*
Non-null assertion operátor v TypeScriptu
• tedy zápis s vykřičníkem !, který říká TypeScriptu -> Tahle hodnota určitě není null ani undefined
*/
var input = document.getElementById('userNameInput');
input.value = 'input element';
console.log(input.value); // input element
var myUser = {
    name: 'David',
    email: 'david@example.com'
};
console.log(myUser.email.length); // 17
