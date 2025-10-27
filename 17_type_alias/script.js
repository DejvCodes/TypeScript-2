/*
Type alias (alias typu)
• umožní pojmenovat libovolný typ — můžeme tak znovu používat složité typy
  jednoduše pomocí jednoho jména

Jinými slovy
• type = způsob, jak dát vlastní jméno určitému typu
*/
var dejv = {
    name: 'David Dejv',
    age: 23,
    email: 'dejv@example.com',
    address: {
        street: 'Náměstí Republiky',
        city: 'Pardunice'
    }
};
console.log(dejv); // {name: 'David Dejv', age: 23, email: 'dejv@example.com', address: {…}}
var john = {
    name: 'John',
    age: 27,
    email: 'john@example.com',
    address: {
        street: 'Náměstí Republiky',
        city: 'Pardunice'
    }
};
console.log(john); // {name: 'John', age: 27, email: 'john@example.com', address: {…}}
var testResults = function (myPoint) {
    return {
        firstPart: myPoint.firstPart * 2,
        secondPart: myPoint.secondPart * 2
    };
};
console.log(testResults({ firstPart: 80, secondPart: 90 })); // {firstPart: 160, secondPart: 180}
var getUser = function (id) {
    return "id: ".concat(id);
};
console.log(getUser(2)); // id: 2
var showStatus = function (status) {
    if (status === 'loading') {
        return 'loading';
    }
    else if (status === 'success') {
        return 'success';
    }
    else {
        return 'error';
    }
};
console.log(showStatus('success')); // success
var firstWebsite = {
    title: 'DejvCodes',
    url: 'www.dejvcodes.com',
    pages: 7,
    author: 'David Kalmus'
};
console.log(firstWebsite.title); // DejvCodes
console.log(firstWebsite.url); // www.dejvcodes.com
console.log(firstWebsite.pages); // 7
console.log(firstWebsite.author); // David Kalmus
var websiteInfo = function (web) {
    var _a;
    // const pageNum = web.pages === undefined ? 'neznámý' : web.pages; 
    var pageNum = (_a = web.pages) !== null && _a !== void 0 ? _a : 'neznámý';
    return "N\u00E1zev webov\u00E9 str\u00E1nky je ".concat(web.title, ". Po\u010Det str\u00E1nek m\u00E1 ").concat(pageNum, ". Jej\u00ED URL adresa je ").concat(web.url, ". Jej\u00EDm autorem je ").concat(web.author, ".");
};
console.log(websiteInfo(firstWebsite)); // Název webové stránky je DejvCodes. Počet stránek má 7. Její URL adresa je www.dejvcodes.com. Jejím autorem je David Kalmus.
var firstBook = {
    title: 'Hobit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy'
};
console.log(firstBook); // {title: 'Hobit', author: 'J.R.R. Tolkien', genre: 'Fantasy'}
var secondWebsite = {
    title: 'DejvCodes',
    url: 'www.dejvcodes.com',
    pages: 7,
    author: 'David Kalmus'
};
console.log(secondWebsite.title); // DejvCodes
var employee1 = {
    name: 'David',
    age: 23,
    company: 'Conviu s.r.o',
    jobTitle: 'Developer'
};
console.log(employee1); // {name: 'David', age: 23, company: 'Conviu s.r.o', jobTitle: 'Developer'}
var bankAccount1 = {
    pin: 1234,
    accountNumber: 17253829133,
    loan: true,
    retirementSavings: false,
    insurence: true
};
console.log(bankAccount1); // {pin: 1234, accountNumber: 17253829133, loan: true, retirementSavings: false, insurence: true}
