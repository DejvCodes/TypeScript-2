// Objekt jako návratová hodnota
const randomCoordinate = (): {x: number, y: number} => {
    return {
        x: Math.random(),
        y: Math.random()
        // z: Math.random() // 'z' does not exist in type 
    }
}
console.log(randomCoordinate()); // {x: 0.49694866575439745, y: 0.09686178038282423}
console.log(randomCoordinate().x); // 0.9483650842646539
console.log(randomCoordinate().y); // 0.034579584448909295