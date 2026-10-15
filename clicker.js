let clicks = 0;
const clickCount = document.getElementById("clicks");
const clicker = document.getElementById("clicker");

clicker.addEventListener("click", function() {
    clicks += 1;
    clickCount.textContent = clicks;
    
    clicker.classList.remove("click-animate");
    void clicker.offsetWidth; 
    clicker.classList.add("click-animate");
    
    const floatingText = document.createElement("span");

    floatingText.textContent = "+1";
    floatingText.classList.add("floating-text");

    const buttonPosition = clicker.getBoundingClientRect();

    floatingText.style.left = buttonPosition.left + Math.floor(Math.random() * 20) + px;
    floatingText.style.top = buttonPosition.top + "px";

    document.body.appendChild(floatingText);
    floatingText.addEventListener("animationend", function() {
        floatingText.remove();
    });
});


