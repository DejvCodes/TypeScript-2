// Komplexní úloha - 1. část

// Typ alias - pro uživatele
type User = {
    name: string;
    yearOfBirth: number;
    email?: string; // nepovinný údaj
}

// Data získaná z formuláře
const user1: User = {
    name: 'John',
    yearOfBirth: 1990,
    email: 'john@example.com'
}
const user2: User = {
    name: 'Jane',
    yearOfBirth: 1995
}

// Funkce na výpočet věku uživatele
const calculateAge = (user: User): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - user.yearOfBirth;
}

// Funkce na zobrazení uživatelských informací
const displayUserInfo = (user: User): string => {
    const userAge = calculateAge(user);
    return `Uživatel ${user.name}, věk: ${userAge}, email: ${user.email || '~ neuveden ~'}.`;
}
console.log(displayUserInfo(user1)); // Uživatel John, věk: 35, email: john@example.com.
console.log(displayUserInfo(user2)); // Uživatel Jane, věk: 30, email: ~ neuveden ~.