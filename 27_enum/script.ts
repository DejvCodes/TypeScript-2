/*
Enum (enumeration)
• používá se, když máme známou množinu hodnot (např: dny v týdnu, měsíce)
• zabrání chybám při psaní řetězců
• umožňuje lepší čitelnost kódu
*/
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let myDay: string = daysOfWeek[0]; 
console.log(myDay); // Monday

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let myEnumDay: Day = Day.Monday;
console.log(myEnumDay); // 0 (index hodnoty v enumu)

console.log(Day.Monday); // 0
console.log(Day.Tuesday); // 1
console.log(Day.Wednesday); // 2
console.log(Day.Thursday); // 3
console.log(Day.Friday); // 4

// Jak s enum použít stringy
enum trafficLight {
    RED = "RED",
    YELLOW = "YELLOW",
    GREEN = "GREEN"
}

console.log(trafficLight.RED); // RED
console.log(trafficLight.YELLOW); // YELLOW
console.log(trafficLight.GREEN); // GREEN

// Enum a funkce
enum Day2 {
    MONDAY = 'pondělí',     // klíč = 'hodnota'
    TUESDAY = 'úterý',      // klíč = 'hodnota'
    WEDNESDAY = 'středa',   // klíč = 'hodnota'
    THURSDAY = 'čtvrtek',   // klíč = 'hodnota'
    FRIDAY = 'pátek',       // klíč = 'hodnota'
    SATURDAY = 'sobota',    // klíč = 'hodnota'
    SUNDAY = 'neděle'       // klíč = 'hodnota'
}

const isWeekend = (day: Day2): boolean => {
    return day === Day2.SATURDAY || day === Day2.SUNDAY;
}
console.log(isWeekend(Day2.MONDAY)); // false
console.log(isWeekend(Day2.WEDNESDAY)); // false
console.log(isWeekend(Day2.SUNDAY)); // true

// Procvičování s uživatelskými rolemi
enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest'
}

const getPermissions = (role: UserRole) => {
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
}

console.log(getPermissions(UserRole.ADMIN)); // Neomezený přístup
console.log(getPermissions(UserRole.USER)); // Omezený přístup
console.log(getPermissions(UserRole.GUEST)); // Přístup pouze pro čtení
console.log(getPermissions("unknown" as UserRole)); // Neopravněný přístup

// Procvičování se stavy objednávek
enum OrderStatus {
    PENDING = 'čeká',
    SHIPPED = 'odeslána',
    DELIVERED = 'doručena',
    CANCELED = 'zrušena'
}

const getOrderMessage = (status: OrderStatus): string => {
    switch(status) {
        case OrderStatus.PENDING:
            return `Vaše objednávka ${status}.`;
        case OrderStatus.SHIPPED:
            return `Vaše objednávka byla ${status}.`;
        case OrderStatus.DELIVERED:
            return `Vaše objednávka byla ${status}. Děkujeme za nákup!`;
        case OrderStatus.CANCELED:
            return `Vaše objednávka byla ${status}.`;
        default:
            return 'Neznámý stav objednávky.';
    }
}
console.log(getOrderMessage(OrderStatus.PENDING)); // Vaše objednávka čeká.
console.log(getOrderMessage(OrderStatus.SHIPPED)); // Vaše objednávka byla odeslána.
console.log(getOrderMessage(OrderStatus.DELIVERED)); // Vaše objednávka byla doručena. Děkujeme za nákup!
console.log(getOrderMessage(OrderStatus.CANCELED)); // Vaše objednávka byla zrušena.
console.log(getOrderMessage("unknown" as OrderStatus)); // Neznámý stav objednávky.