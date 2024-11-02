const numeros = [2, 4, 5, 37, 0];

function crearNumerosDuplicados(arr) {
    return arr.reduce((acc, numero) => {
        acc[numero] = numero * 2;
        return acc;
    }, {});
}

function obtenerResultadoOrdenado(obj) {
    return Object.entries(obj).sort((a, b) => a[0] - b[0]);
}

const numerosDuplicados = crearNumerosDuplicados(numeros);
const resultado = obtenerResultadoOrdenado(numerosDuplicados);

console.log("Arreglo original:", numeros);
console.log("Objeto con números duplicados:", numerosDuplicados);
console.log("Resultado ordenado:", resultado);
