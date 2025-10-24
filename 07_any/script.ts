/*
Datový typ any
• any znamená doslova -> libovolný typ
• když proměnnou označíme jako any, TypeScript vypne kontrolu typů — můžeme 
  do ní přiřadit cokoli a dělat s ní cokoli, bez chyb

Nevýhoda any!
• použitím any přicházímé o všechny výhody TS — ztrácíme typovou bezpečnost

Kdy má any smysl?
• když pracujeme s neznámým externím kódem nebo knihovnou, která nemá typy
• když rychle prototypujeme a typy nás brzdí
*/

let something: any = 'David';
something = 40;
something = true;
something = null;

console.log(something);