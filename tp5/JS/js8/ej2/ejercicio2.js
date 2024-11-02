let diasDeViaje = prompt("¿Cuántos días vas a estar de viaje?");

let presupuestoMaximo = prompt("¿Cuál es tu presupuesto máximo para todo el viaje (en dinero)?");

let comidasPorDia = prompt("¿Cuántas comidas tienes por día?");

let totalComidas = comidasPorDia * diasDeViaje;

let gastoPorComida = presupuestoMaximo / totalComidas;

alert("Podés gastar $" + gastoPorComida.toFixed(2) + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");
