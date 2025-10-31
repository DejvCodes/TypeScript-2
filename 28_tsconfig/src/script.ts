/*
tsconfig.json
• tsconfig.json = konfigurační soubor pro TypeScript kompilátor (tsc)

Umožňuje ti:
• nastavit cílovou verzi JavaScriptu (např. ES6 / ESNext)
• vybrat, kam se má generovat JS výstup (outDir)
• povolit přísnější kontroly (strict)
• nastavit, které soubory se mají překládat (include, exclude)

Vytvoření -> tsc --init
*/
const firstName: string = 'David';
const secondName: string = 'Dejv';
const age: number = 24;

console.log(firstName + ' ' + secondName + '' + age);

// defer -> jedno kam dáme script
// <script src="script.js" defer></script>