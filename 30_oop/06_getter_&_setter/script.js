/*
Getter
• getter je speciální metoda v třídě, která umožňuje číst hodnotu vlastnosti jako běžnou proměnnou
• používá se klíčové slovo 'get'
• umožňuje provést logiku při čtení hodnoty (např. formátování, výpočty)

Setter
• setter je speciální metoda v třídě, která umožňuje nastavit (měnit) hodnotu vlastnosti
• používá se klíčové slovo 'set'
• umožňuje provést logiku při přiřazení hodnoty (např. validaci nebo formátování)

Static
• klíčové slovo 'static' označuje vlastnosti nebo metody, které patří třídě, ne konkrétní instanci
• volají se přímo přes název třídy, ne přes objekt
• používá se pro sdílená data, konstanty nebo pomocné funkce

_ dává najavo, že to je private
*/
var Person = /** @class */ (function () {
    function Person(name) {
        this._age = 0;
        this._fullName = name;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            if (this._fullName.includes(' ')) {
                return this._fullName;
            }
            return "Chybn\u011B zadan\u00E9 jm\u00E9no.";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0 || value > 150) {
                console.warn('Neplatný věk');
                return;
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.description = 'Toto je člověk';
    return Person;
}());
var person1 = new Person('David DejvCodes');
console.log(person1); // Person {_fullName: 'David'}
// console.log(person1._fullName); // vypíše David, ale je to chyba protože to je private
console.log(person1.fullName); // David DejvCodes
person1.age = 30; // zavolá se setter
console.log(person1.age); // 30
console.log(Person.description); // Toto je člověk
