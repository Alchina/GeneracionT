let miEdad = prompt("¿Cuántos años tienes?");

let edadMaxima = prompt("¿Hasta qué edad te gustaría vivir?");

let snackFavorito = prompt("¿Cuál es tu snack favorito?");

let snacksPorDia = prompt("¿Cuántos " + snackFavorito + "s comes al día?");

let snacksRestantes = (edadMaxima - miEdad) * 365 * snacksPorDia;

alert("Necesitarás " + snacksRestantes + " " + snackFavorito + "s para que te alcancen hasta los " + edadMaxima + " años.");

let precioPorSnack = prompt("¿Cuál es el precio de un " + snackFavorito + "?");

let gastoTotal = snacksRestantes * precioPorSnack;

alert("Vas a gastar aproximadamente $" + gastoTotal + " en " + snackFavorito + "s el resto de tu vida.");
