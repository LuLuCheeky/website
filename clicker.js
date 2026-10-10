let clicks = 0;

const clickCount = document.getElementById("clicks");
const clicker = document.getElementById("clicker");

clicker.addEventListener("click", function() {
    clicks += 1;
    clicksCount.textContent = clicks;
});

