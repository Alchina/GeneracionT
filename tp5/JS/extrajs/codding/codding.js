const paresEImpares = (num1, num2, palabra) => {
    const resultados = {
        pares: [],
        impares: []
    };

    for (let i = 1; i <= num1; i++) {
        if (i % num2 === 0) {
            resultados.pares.push(palabra);
            resultados.impares.push(palabra);
        } else if (i % 2 === 0) {
            resultados.pares.push(i);
        } else {
            resultados.impares.push(i);
        }
    }

    console.log([...resultados.pares, ...resultados.impares].join(', '));
};

const min = (arr, type) => {
    const minValue = Math.min(...arr);
    const result = type === "value" ? minValue : arr.indexOf(minValue);
    console.log(result);
};

const doubleFilter = (paises, continente, poblacion) => {
    return paises
        .filter(pais => pais.continente === continente && pais.poblacion >= poblacion)
        .map(pais => pais.nombre);
};

const doubleFilterII = (paises, continente, poblacion) => {
    const filtrados = paises.filter(pais => pais.continente === continente && pais.poblacion >= poblacion);
    return {
        nombres: filtrados.map(pais => pais.nombre),
        'población total': filtrados.reduce((sum, pais) => sum + pais.poblacion, 0)
    };
};

const doubleFilterIII = (paises, continente, poblacion) => {
    const filtrados = paises.filter(pais => pais.continente === continente && pais.poblacion >= poblacion);
    const result = {
        nombres: filtrados.map(pais => pais.nombre),
        'población total': filtrados.reduce((sum, pais) => sum + pais.poblacion, 0)
    };

    if (filtrados.length > 0) {
        const maxPob = Math.max(...filtrados.map(pais => pais.poblacion));
        const minPob = Math.min(...filtrados.map(pais => pais.poblacion));
        result.mayor = filtrados.find(pais => pais.poblacion === maxPob).nombre;
        result.menor = filtrados.find(pais => pais.poblacion === minPob).nombre;
    }

    return result;
};

const paises = [
    { nombre: "España", continente: "europa", poblacion: 47000000 },
    { nombre: "Francia", continente: "europa", poblacion: 67000000 },
    { nombre: "Alemania", continente: "europa", poblacion: 83000000 },
    { nombre: "Italia", continente: "europa", poblacion: 60000000 },
    { nombre: "Grecia", continente: "europa", poblacion: 10700000 },
];

console.log("1. Pares e Impares:");
paresEImpares(10, 3, "hola");

console.log("\n2. Index o Value:");
min([5, 8, 2, 3, 4, 9, 1, 18], "value");
min([5, 8, 2, 3, 4, 9, 1, 18], "index");

console.log("\n3. Doble Filtro:");
console.log(doubleFilter(paises, "europa", 30000000));

console.log("\n4. Doble Filtro II:");
console.log(doubleFilterII(paises, "europa", 30000000));

console.log("\n5. Doble Filtro III:");
console.log(doubleFilterIII(paises, "europa", 30000000));
