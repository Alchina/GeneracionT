const toTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hora(s) y ${minutes} minuto(s)`;
};

const filterList = (arr) => {
    const numbers = arr.filter(item => typeof item === 'number');
    return numbers.length ? numbers : "lista de números vacía";
};

const findShort = (str) => {
    if (str === '') return 0;
    return Math.min(...str.split(' ').map(word => word.length));
};

const abbrevName = (name) => {
    return name.split(' ').map(word => word[0].toUpperCase()).join('.');
};

const sumEvenNumbers = (arr) => {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
};

const flip = (direction, arr) => {
    return direction === 'ascendente' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
};

const getPlanetName = (num) => {
    const planets = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno'];
    return planets[num - 1] || 'Planeta no encontrado';
};

const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};

const loopDePares = (num) => {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
        if ((i + num) % 2 === 0) {
            console.log(`El número ${i + num} es par`);
        }
    }
};

const nuevoArreglo = (n) => {
    return Array.from({ length: n }, (_, i) => i + 1);
};

const oneProperty = (arr, prop) => {
    return arr.map(obj => ({ [prop]: obj[prop] }));
};

const sumattion = (num) => {
    return (num * (num + 1)) / 2;
};

const middleCharacter = (str) => {
    const mid = Math.floor(str.length / 2);
    return str.length % 2 === 0 ? str.slice(mid - 1, mid + 1) : str[mid];
};

const isOldEnoughToVote = (age) => {
    return age >= 16;
};

const descuento = (marca, modelo) => {
    if (marca.toLowerCase() === 'ford') {
        if (modelo.toLowerCase() === 'fiesta') return 0.05;
        if (modelo.toLowerCase() === 'focus') return 0.10;
    }
    return 0;
};

const winner = (score1, score2) => {
    if (score1 > score2) return "Jugador 1 ha ganado";
    if (score2 > score1) return "Jugador 2 ha ganado";
    return "Empate";
};

console.log(toTime(3665));  
console.log(filterList([1, 2, 'a', 'b']));  
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));  
console.log(abbrevName("Sam Harris"));  
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));  
console.log(flip('ascendente', [3, 2, 1, 2]));  
console.log(getPlanetName(3));  
console.log(factorial(5));  
loopDePares(2);  
console.log(nuevoArreglo(5)); 
console.log(oneProperty([{ a: 1, b: 2 }, { a: 3, b: 4 }], 'b'));  
console.log(sumattion(4));  
console.log(middleCharacter("test"));  
console.log(isOldEnoughToVote(18)); 
console.log(descuento("Ford", "Fiesta"));  
console.log(winner(3, 2));  
