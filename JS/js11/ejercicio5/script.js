const tracker = document.getElementById("tracker");

document.body.addEventListener("mousemove", (event) => {
    tracker.style.top = `${event.clientY}px`;
    tracker.style.left = `${event.clientX}px`;
});
