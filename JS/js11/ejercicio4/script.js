function toggleVisibility(id) {
    const element = document.getElementById(id);
    element.classList.toggle("oculto");
}

document.getElementById("showMoney").addEventListener("click", () => toggleVisibility("imgMoney"));
document.getElementById("showMiami").addEventListener("click", () => toggleVisibility("imgMiami"));
document.getElementById("showMaiameee").addEventListener("click", () => toggleVisibility("imgMaiameee"));
