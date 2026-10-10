let clicks = 0;

const clicks = document.getElementById("clicks");
const clicker = document.getElementById("clicker");

clicker.addEventListener("click", function() {
    clicks += 1;
    clicks.textContent = clicks;
});
