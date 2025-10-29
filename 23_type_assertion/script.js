/*
Type Assertion
• manuální určení typu hodnoty
• („Hej TypeScripte, věř mi, vím líp než ty, co to je.“)
• neprovádí žádnou změnu za běhu (runtime) — je to jen pro kontrolu typů při vývoji
• používá se, když má TypeScript nedostatek informací o typu
*/
var value = 'Neznámá data';
var myString = value;
console.log(myString); // Neznámá data
console.log(typeof (myString)); // string
console.log(myString.length); // 12
// Type Assertion a HTML prvky
var imgTag = document.getElementById('myImage');
var inputElement = document.getElementById('myInput');
var textAreaElement = document.getElementById('myTextArea');
console.log(imgTag); // img#myImage
console.log(imgTag.src); // http://127.0.0.1:5500/23_type_assertion/index.html#
// console.log(imgTag.value); // 'value' does not exist on type 'HTMLImageElement'
if (imgTag instanceof HTMLImageElement) {
    console.log(imgTag.src);
}
else {
    console.log('Prvek není IMG!');
}
console.log(inputElement); // input#myInput
console.log(textAreaElement); // textarea#myTextArea
// Type guard -> element is HTMLImageElement
// Type Assertion a funkce na kontrolu prvků
// Zkontroluje, jestli je prvek HTMLImageElement
var isImageElement = function (element) {
    return element instanceof HTMLImageElement;
};
// Zkontroluje, jestli je prvek HTMLInputElement
var isInputElement = function (element) {
    return element instanceof HTMLInputElement;
};
if (isImageElement(imgTag)) {
    console.log("M\u00E1me obr\u00E1zek ".concat(imgTag.src));
}
else if (isInputElement(imgTag)) {
    console.log("M\u00E1me input ".concat(imgTag.value));
}
else {
    console.error('Neznámý typ prvku.');
}
