const popup = document.getElementById('optionsPopup');
const openBtn = document.getElementById('openBtn');
const cancelBtn = document.getElementById('cancelBtn');
const resultText = document.getElementById('resultText');
const cookieContainer = document.getElementById('cookieContainer');
const cookieImage = document.getElementById('cookieImage');
const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
const cookieRejectBtn = document.getElementById('cookieRejectBtn');
const crunch = new Audio('cookieCrunch.mp3');
const burp = new Audio('burp.mp3');
const goldenBurp = new Audio('goldenBurp.mp3');
let bitesLeft = 4;
let isCooldown = false;
let golden, cookieType;
const cookieTypes = ["oatmeal", "chocolate"];

function playSound(audioTrack) {
    audioTrack.currentTime = 0;
    audioTrack.play().catch(e => {});
}

openBtn.addEventListener('click', () => {
    popup.showModal();
});

cookieAcceptBtn.addEventListener('click', () => {
    resultText.textContent = "You chose cookie";
    cookieImage.style.transform = 'scale(0)';
    cookieContainer.style.display = 'flex';
    void cookieContainer.offsetWidth; 
    cookieContainer.style.opacity = '1';
    cookieImage.style.transform = 'scale(1)';
    golden = Math.floor(Math.random() * 25) + 1;
    if (golden === 25) {
        cookieImage.innerHTML = `<img src="cookieImages/goldenCookieFull.png" alt="Cookie" id="cookieImg">`;
    } else {
        cookieType = Math.floor(Math.random() * 2);
        cookieImage.innerHTML = `<img src="cookieImages/${cookieTypes[cookieType]}CookieFull.png" alt="Cookie" id="cookieImg">`;
    }
    bitesLeft = 4;
    isCooldown = false;
    popup.close();
});

cookieRejectBtn.addEventListener('click', () => {
    resultText.textContent = "You hate cookies 😡";
    resetCookie();
    popup.close();
});

cancelBtn.addEventListener('click', () => {
    resultText.textContent = "you chose uhhh nothing???";
    resetCookie();
    popup.close();
});

function resetCookie() {
    cookieImage.style.transform = 'scale(0)';
    cookieContainer.style.opacity = '0';
    setTimeout(() => {
        cookieContainer.style.display = 'none';
        cookieImage.innerHTML = '';
    }, 300);
}

cookieImage.addEventListener('click', () => {
    if (isCooldown) {
        return;
    }
    if (bitesLeft > 0) {
        bitesLeft--;
        const img = cookieImage.querySelector('img');
        if (img) {
            cookieImage.classList.remove("click-animate");
            void cookieImage.offsetWidth;
            cookieImage.classList.add("click-animate");
            if (bitesLeft >= 1) {
                playSound(crunch);
                isCooldown = true;
                if (golden === 25) {
                    img.src = `cookieImages/goldenCookie${bitesLeft}Bites.png`;
                } else {
                    img.src = `cookieImages/${cookieTypes[cookieType]}Cookie${bitesLeft}Bites.png`;
                }
                setTimeout(() => {
                    isCooldown = false;
                }, 200);
            } else {
                playSound(crunch);
                isCooldown = true;
                if (golden === 25) {
                    resultText.textContent = "oooohh shiny!!";
                    resetCookie();
                    setTimeout(() => {
                        playSound(goldenBurp);
                    }, 600);
                } else {
                    resultText.textContent = "you ate the giant cookie! yum!1!!1";
                    resetCookie();
                    setTimeout(() => {
                        playSound(burp);
                    }, 600);
                }
            }
        }
    }
});

let visitors = localStorage.getItem("visitors");
if (visitors === null) {
    visitors = 0;
}
visitors = Number(visitors) + 1;
localStorage.setItem("visitors", visitors);
const visitorCount = document.getElementById("visitorCount");
if (visitorCount) {
    visitorCount.textContent = String(visitors).padStart(6, "0");
}
