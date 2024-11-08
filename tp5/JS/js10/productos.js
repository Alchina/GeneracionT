const calcularValorTotalProductos = (productos) => {
    const totalesPorProducto = {};

    productos.forEach(({ nombre, precio, cantidad }) => {
        totalesPorProducto[nombre] = (totalesPorProducto[nombre] || 0) + precio * cantidad;
    });

    return Object.entries(totalesPorProducto).map(([nombre, valorTotal]) => ({
        nombre,
        valorTotal
    }));
};

const productosEcommerce = [
    { nombre: "Televisor", precio: 500, cantidad: 3 },
    { nombre: "Laptop", precio: 800, cantidad: 2 },
    { nombre: "Teléfono", precio: 200, cantidad: 5 },
    { nombre: "Televisor", precio: 500, cantidad: 2 },
    { nombre: "Tablet", precio: 300, cantidad: 4 }
];

const resultadoTotal = calcularValorTotalProductos(productosEcommerce);
console.log(resultadoTotal);

console.log("Lista de artículos con su valor total:");
resultadoTotal.forEach(({ nombre, valorTotal }) => {
    console.log(`${nombre}: $${valorTotal}`);
});
