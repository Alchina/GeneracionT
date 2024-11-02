const personas = [
    { nombre: 'Ana', edad: '28' },
    { nombre: 'María', edad: '24' },
    { nombre: 'José', edad: '31' }
];

function filtrarPersonasPorEdad(arr, edadMinima) {
    return arr.filter(persona => parseInt(persona.edad) > edadMinima);
}

const personasConMasDe27 = filtrarPersonasPorEdad(personas, 27);
console.log(personasConMasDe27);


