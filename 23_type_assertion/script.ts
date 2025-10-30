/*
Type Assertion
• manuální určení typu hodnoty
• („Hej TypeScripte, věř mi, vím líp než ty, co to je.“)
• neprovádí žádnou změnu za běhu (runtime) — je to jen pro kontrolu typů při vývoji
• používá se, když má TypeScript nedostatek informací o typu
*/
const value: unknown = 'Neznámá data';

const myString = value as string;

console.log(myString); // Neznámá data
console.log(typeof(myString)); // string
console.log(myString.length); // 12

// Type Assertion a HTML prvky
const imgTag = document.getElementById('myImage') as HTMLImageElement;
const inputElement = document.getElementById('myInput') as HTMLInputElement;
const textAreaElement = document.getElementById('myTextArea') as HTMLTextAreaElement;

console.log(imgTag); // img#myImage
console.log(imgTag.src); // http://127.0.0.1:5500/23_type_assertion/index.html#
// console.log(imgTag.value); // 'value' does not exist on type 'HTMLImageElement'

if (imgTag instanceof HTMLImageElement) {
    console.log(imgTag.src);
} else {
    console.log('Prvek není IMG!');
}

console.log(inputElement); // input#myInput
console.log(textAreaElement); // textarea#myTextArea

// Type guard -> element is HTMLImageElement

// Type Assertion a funkce na kontrolu prvků
// Zkontroluje, jestli je prvek HTMLImageElement
const isImageElement = (element: Element|null):element is HTMLImageElement => {
    return element instanceof HTMLImageElement;
}

// Zkontroluje, jestli je prvek HTMLInputElement
const isInputElement = (element: Element|null):element is HTMLInputElement => {
    return element instanceof HTMLInputElement;
}

if (isImageElement(imgTag)) {
    console.log(`Máme obrázek ${imgTag.src}`);
} else if (isInputElement(imgTag)) {
    console.log(`Máme input ${imgTag.value}`);
} else {
    console.error('Neznámý typ prvku.');
} 