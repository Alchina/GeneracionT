function bienvenida() {
    setTimeout(() => {
        console.log("Bienvenido a tu challenge");
    }, 3000);
}

function fechaDeHoy() {
    const hoy = new Date().getDate();
    console.log(`La fecha de hoy es ${hoy % 2 === 0 ? 'par' : 'impar'}`);
}

function coincidencias(arr, num) {
    if (num > arr.length) {
        return "El arreglo no tiene la cantidad suficiente de elementos";
    }
    return arr.slice(0, num);
}

function mismaLetra(productos, letra) {
    return productos
        .filter(p => p.producto.toLowerCase().startsWith(letra.toLowerCase()))
        .reduce((sum, p) => sum + p.precio, 0);
}

function generala() {
    const generalaWin = [6, 6, 6, 6, 6];
    let intentos = 0;

    function tirarDados() {
        return Array.from({length: 5}, () => Math.floor(Math.random() * 6) + 1);
    }

    while (true) {
        intentos++;
        const tirada = tirarDados();
        if (JSON.stringify(tirada) === JSON.stringify(generalaWin)) {
            return intentos;
        }
    }
}

bienvenida();
fechaDeHoy();
console.log(coincidencias([1, 2, 3, 4, 5], 3));
console.log(mismaLetra([
    {producto: "Manzana", precio: 10},
    {producto: "Pera", precio: 15},
    {producto: "Mandarina", precio: 8}
], "M"));
console.log(`Se logró la generala en ${generala()} intentos`);
