const colorInput = document.getElementById("colorInput");

colorInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        document.body.style.backgroundColor = colorInput.value;
    } else if (event.key === "Backspace" && colorInput.value === "") {
        document.body.style.backgroundColor = "white";
    }
});
    