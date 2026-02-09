// Horloge en temps réel
function updateClock() {
    const clock = document.querySelector(".clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("fr-CA", {
        hour: "2-digit",
        minute: "2-digit"
    });
}

setInterval(updateClock, 1000);
updateClock();
