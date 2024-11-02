const autoRojo = document.getElementById("autoRojo");
const autoAzul = document.getElementById("autoAzul");
let posicionRojo = 0;
let posicionAzul = 0;

window.addEventListener("keyup", (event) => {
    if (event.key === "a") {
        posicionRojo += 10;
        autoRojo.style.marginLeft = `${posicionRojo}px`;
        if (posicionRojo >= document.querySelector(".track").offsetWidth - autoRojo.width) {
            alert("El auto rojo ganó!");
        }
    }
    if (event.key === "l") {
        posicionAzul += 10;
        autoAzul.style.marginLeft = `${posicionAzul}px`;
        if (posicionAzul >= document.querySelector(".track").offsetWidth - autoAzul.width) {
            alert("El auto azul ganó!");
        }
    }
});
