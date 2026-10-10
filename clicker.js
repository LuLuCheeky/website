let clicks = 0;
const clickCount = document.getElementById("clicks");
const clicker = document.getElementById("clicker");

clicker.addEventListener("click", function() {
    clicks += 1;
    clickCount.textContent = clicks;
    
    clicker.classList.remove("click-animate");
    void clicker.offsetWidth; 
    clicker.classList.add("click-animate");
});

clicker.addEventListener("animationend", function() {
    clicker.classList.remove("click-animate");
});
