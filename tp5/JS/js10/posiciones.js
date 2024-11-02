let personas = [
    { nombre: "Alba", edad: 15 },
    { nombre: "Estrella", edad: 30 },
    { nombre: "Belén", edad: 20 },
    { nombre: "Santiago", edad: 4 },
    { nombre: "Katharine", edad: 55 }
];

const personasOrdenadas = personas
    .slice()
    .sort((a, b) => a.edad - b.edad)
    .map((persona, index) => ({ ...persona, posicion: index }));

console.log(personasOrdenadas);
