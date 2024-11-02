const peliculas = [
    { titulo: "Búsqueda implacable", rating: 5, loHasVisto: true },
    { titulo: "Norbbit", rating: 3, loHasVisto: false },
    { titulo: "Mini espías", rating: 4, loHasVisto: true },
    { titulo: "La vida es bella", rating: 5, loHasVisto: false }
];

peliculas.forEach(pelicula => {
    const estadoVisto = pelicula.loHasVisto ? "Visto" : "No visto";
    const estrellas = "⭐".repeat(pelicula.rating);
    
    console.log(`${estadoVisto} "${pelicula.titulo}" - ${pelicula.rating} ${estrellas}`);
});
