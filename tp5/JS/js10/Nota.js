const estudiantes = [
    { nombre: 'Juan', nota: 6 },
    { nombre: 'Mario', nota: 8 },
    { nombre: 'Julia', nota: 10 },
    { nombre: 'Sofía', nota: 2 }
];

function aumentarNotas(estudiantes) {
    estudiantes.forEach(estudiante => {
        if (estudiante.nota > 5) {
            estudiante.nota = Math.min(estudiante.nota + 2, 10);
        }
    });
}

aumentarNotas(estudiantes);
console.log(estudiantes);
