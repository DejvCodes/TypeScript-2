/*
Definite Assignment Assertion
• slouží k tomu, aby TypeScriptu řekl, že určitá proměnná bude určitě přiřazena, 
  i když to na první pohled není zřejmé

• používá se s vykřičníkem ! za názvem proměnné: let value!: string;

TypeScript tím přestane hlásit chybu „Variable is used before being assigned“
protože mu doslova říkáš -> Věř mi, já to přiřazení udělám, i když to teď nevidíš
*/

let firstName!: string; // díky ! nehází chybu

const initialize = () => {
    firstName = 'David';
}
initialize();

console.log(firstName);