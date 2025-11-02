const greet = (name: string): string => {
  return `Hello, ${name}!`;
}
console.log(greet('World')); // Hello, World!

const user = 'David';
console.log(greet(user)); // Hello, David!
