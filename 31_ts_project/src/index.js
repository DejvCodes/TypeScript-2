// tsc -w --project tsconfig.json
var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(greet('World')); // Hello, World!
var user = 'David';
console.log(greet(user)); // Hello, David!
