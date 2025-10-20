/*
Datový typ any
• any znamená doslova -> libovolný typ
• když proměnnou označíš jako any, TypeScript vypne kontrolu typů — můžeš
  do ní přiřadit cokoli a dělat s ní cokoli, bez chyb

Nevýhoda any!
• použitím any přicházíš o všechny výhody TS — ztrácíš typovou bezpečnost

Kdy má any smysl?
• když pracuješ s neznámým externím kódem nebo knihovnou, která nemá typy
• když rychle prototypuješ a typy tě brzdí
*/
var something = 'David';
something = 40;
something = true;
something = null;
console.log(something);
