const magiaDiv = document.getElementById("magia");
const magiaImage = document.getElementById("magiaImage");

magiaDiv.addEventListener("mouseover", () => {
    magiaImage.style.display = "none";
});

magiaDiv.addEventListener("mouseout", () => {
    magiaImage.style.display = "block";
});
