let actores = [];
const actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
};

function obtenerActoresPrincipales() {
    return Object.values(actoresPrincipalesPorPelicula);
}

function filtrarActoresPorVocal(actores) {
    return actores.filter(actor => /^[aeiouAEIOU]/.test(actor));
}

function obtenerPeliculas() {
    return Object.keys(actoresPrincipalesPorPelicula);
}

function crearPeliculaPorActor() {
    let peliculaPorActor = {};
    for (let [pelicula, actor] of Object.entries(actoresPrincipalesPorPelicula)) {
        if (peliculaPorActor[actor]) {
            if (Array.isArray(peliculaPorActor[actor])) {
                peliculaPorActor[actor].push(pelicula);
            } else {
                peliculaPorActor[actor] = [peliculaPorActor[actor], pelicula];
            }
        } else {
            peliculaPorActor[actor] = pelicula;
        }
    }
    return peliculaPorActor;
}

function agregarPeliculaActor(actor, pelicula) {
    if (peliculaPorActor[actor]) {
        if (Array.isArray(peliculaPorActor[actor])) {
            peliculaPorActor[actor].push(pelicula);
        } else {
            peliculaPorActor[actor] = [peliculaPorActor[actor], pelicula];
        }
    } else {
        peliculaPorActor[actor] = pelicula;
    }
}

const actoresPrincipales = obtenerActoresPrincipales();
const actoresVocales = filtrarActoresPorVocal(actoresPrincipales);
const peliculas = obtenerPeliculas();
let peliculaPorActor = crearPeliculaPorActor();

console.log("Actores que comienzan con vocal:", actoresVocales);
console.log("Todos los actores principales:", actoresPrincipales);
console.log("Películas:", peliculas);
console.log("Películas por actor:", peliculaPorActor);

agregarPeliculaActor("Leonardo DiCaprio", "El lobo de Wall Street");
agregarPeliculaActor("Al Pacino", "Scarface");

console.log("Películas por actor (actualizado):", peliculaPorActor);
