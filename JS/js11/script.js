const beepButton = document.getElementById("beepButton");

function seEjecutaEnEvento() {
    document.body.insertAdjacentHTML("beforeend", "<p>BEEP</p>");
    document.body.classList.toggle("color");
}

beepButton.addEventListener("click", seEjecutaEnEvento);
