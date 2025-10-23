// Function
var introduction = function (firstName, secondName, age) {
    return "".concat(firstName, " ").concat(secondName, " ").concat(age); // vrací string
};
// console.log(introduction('David', 'Dejv', '24')); // age nesmí být podle typu string
console.log(introduction('David', 'Dejv', 24));
