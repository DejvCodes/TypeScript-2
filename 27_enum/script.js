/*
Enum (enumeration)
• používá se, když máme známou množinu hodnot (např: dny v týdnu, měsíce)
• zabrání chybám při psaní řetězců
• umožňuje lepší čitelnost kódu
*/
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var myDay = daysOfWeek[0];
console.log(myDay); // Monday
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
var myEnumDay = Day.Monday;
console.log(myEnumDay); // 0 (index hodnoty v enumu)
console.log(Day.Monday); // 0
console.log(Day.Tuesday); // 1
console.log(Day.Wednesday); // 2
console.log(Day.Thursday); // 3
console.log(Day.Friday); // 4
// Jak s enum použít stringy
var trafficLight;
(function (trafficLight) {
    trafficLight["RED"] = "RED";
    trafficLight["YELLOW"] = "YELLOW";
    trafficLight["GREEN"] = "GREEN";
})(trafficLight || (trafficLight = {}));
console.log(trafficLight.RED); // RED
console.log(trafficLight.YELLOW); // YELLOW
console.log(trafficLight.GREEN); // GREEN
// Enum a funkce
var Day2;
(function (Day2) {
    Day2["MONDAY"] = "pond\u011Bl\u00ED";
    Day2["TUESDAY"] = "\u00FAter\u00FD";
    Day2["WEDNESDAY"] = "st\u0159eda";
    Day2["THURSDAY"] = "\u010Dtvrtek";
    Day2["FRIDAY"] = "p\u00E1tek";
    Day2["SATURDAY"] = "sobota";
    Day2["SUNDAY"] = "ned\u011Ble"; // klíč = 'hodnota'
})(Day2 || (Day2 = {}));
var isWeekend = function (day) {
    return day === Day2.SATURDAY || day === Day2.SUNDAY;
};
console.log(isWeekend(Day2.MONDAY)); // false
console.log(isWeekend(Day2.WEDNESDAY)); // false
console.log(isWeekend(Day2.SUNDAY)); // true
// Procvičování s uživatelskými rolemi
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["GUEST"] = "guest";
})(UserRole || (UserRole = {}));
var getPermissions = function (role) {
    switch (role) {
        case UserRole.ADMIN:
            return 'Neomezený přístup';
        case UserRole.USER:
            return 'Omezený přístup';
        case UserRole.GUEST:
            return 'Přístup pouze pro čtení';
        default:
            return 'Neopravněný přístup';
    }
};
console.log(getPermissions(UserRole.ADMIN)); // Neomezený přístup
console.log(getPermissions(UserRole.USER)); // Omezený přístup
console.log(getPermissions(UserRole.GUEST)); // Přístup pouze pro čtení
console.log(getPermissions("unknown")); // Neopravněný přístup
// Procvičování se stavy objednávek
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "\u010Dek\u00E1";
    OrderStatus["SHIPPED"] = "odesl\u00E1na";
    OrderStatus["DELIVERED"] = "doru\u010Dena";
    OrderStatus["CANCELED"] = "zru\u0161ena";
})(OrderStatus || (OrderStatus = {}));
var getOrderMessage = function (status) {
    switch (status) {
        case OrderStatus.PENDING:
            return "Va\u0161e objedn\u00E1vka ".concat(status, ".");
        case OrderStatus.SHIPPED:
            return "Va\u0161e objedn\u00E1vka byla ".concat(status, ".");
        case OrderStatus.DELIVERED:
            return "Va\u0161e objedn\u00E1vka byla ".concat(status, ". D\u011Bkujeme za n\u00E1kup!");
        case OrderStatus.CANCELED:
            return "Va\u0161e objedn\u00E1vka byla ".concat(status, ".");
        default:
            return 'Neznámý stav objednávky.';
    }
};
console.log(getOrderMessage(OrderStatus.PENDING)); // Vaše objednávka čeká.
console.log(getOrderMessage(OrderStatus.SHIPPED)); // Vaše objednávka byla odeslána.
console.log(getOrderMessage(OrderStatus.DELIVERED)); // Vaše objednávka byla doručena. Děkujeme za nákup!
console.log(getOrderMessage(OrderStatus.CANCELED)); // Vaše objednávka byla zrušena.
console.log(getOrderMessage("unknown")); // Neznámý stav objednávky.
