// Komplexní úloha

// Typ alias - pro uživatele
type User = {
    name: string;
    yearOfBirth: number;
    email?: string; // nepovinný údaj
}

// Funkce na výpočet věku uživatele
const calculateAge = (user: User): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - user.yearOfBirth;
}

// Funkce na zobrazení uživatelských informací
const displayUserInfo = (user: User): string => {
    const userAge = calculateAge(user);
    return `Uživatel: ${user.name}, věk: ${userAge}, email: ${user.email || '~ neuveden ~'}`;
}

// Funkce pro zpracování formuláře
document.getElementById('userForm')!.addEventListener('submit', (e) => {
    e.preventDefault(); // Zabrání výchozímu chování (načítání stránky)

    // Získání hodnot z formuláře
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const yearOfBirth = parseInt((document.getElementById('yearOfBirth') as HTMLInputElement).value);
    const email = (document.getElementById('email') as HTMLInputElement).value || undefined;

    // Vytvoření objektu uživatele
    const user: User = {
        name,
        yearOfBirth,
        email
    }

    // Zobrazení informací o uživateli
    const createUserInfoParagraph = (): HTMLParagraphElement => {
        const p = document.createElement('p');
        p.textContent = displayUserInfo(user);
        return p;
    }

    const userInfo = document.getElementById('userInfo') as HTMLDivElement || null;
    userInfo.appendChild(createUserInfoParagraph());

    // Vyčištění formuláře
    (document.getElementById('userForm') as HTMLFormElement).reset();
});