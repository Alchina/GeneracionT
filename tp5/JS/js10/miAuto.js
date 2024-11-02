const auto = {
    marca: "Toyota",
    año: 2021,
    nuevo: true,
    modelo: "Corolla",
    precio: 25000,
    color: "Rojo"
};

function mostrarDetallesAuto(auto) {
    for (let key in auto) {
        console.log(`${key}: ${auto[key]}`);
    }
}

mostrarDetallesAuto(auto);
