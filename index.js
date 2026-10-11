const popup = document.getElementById('optionsPopup');
const openBtn = document.getElementById('openBtn');
const cancelBtn = document.getElementById('cancelBtn');
const resultText = document.getElementById('resultText');
const cookieContainer = document.getElementById('cookieContainer');

const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
const cookieRejectBtn = document.getElementById('cookieRejectBtn');

let bitesLeft = 4;

openBtn.addEventListener('click', () => {
    popup.showModal();
});

cookieAcceptBtn.addEventListener('click', () => {
    resultText.textContent = "You selected: COOKIE";
    cookieContainer.textContent = '🍪';
    
    cookieContainer.style.display = 'flex';

    setTimeout(() => {
        cookieContainer.style.opacity = '1';
        cookieContainer.style.transform = 'scale(1)';
    }, 20);
    
    bitesLeft = 4;
    popup.close();
});

cookieRejectBtn.addEventListener('click', () => {
    resultText.textContent = "You selected: hatesCookies";
    resetCookie();
    popup.close();
});

cancelBtn.addEventListener('click', () => {
    resultText.textContent = "Selection cancelled.";
    resetCookie();
    popup.close();
});

function resetCookie() {
    cookieContainer.style.transform = 'scale(0)';
    cookieContainer.style.opacity = '0';
    
    // Completely hide layout after shrinking finishes
    setTimeout(() => {
        cookieContainer.style.display = 'none';
        cookieContainer.textContent = '';
    }, 300);
}

cookieContainer.addEventListener('click', () => {
    if (bitesLeft > 0) {
        bitesLeft--;
        
        cookieContainer.classList.add('crunch');
        setTimeout(() => {
            cookieContainer.classList.remove('crunch');
        }, 150);

        if (bitesLeft === 3) {
            cookieContainer.style.transform = 'scale(0.75)';
        } else if (bitesLeft === 2) {
            cookieContainer.style.transform = 'scale(0.5)';
        } else if (bitesLeft === 1) {
            cookieContainer.style.transform = 'scale(0.25)';
        } else if (bitesLeft === 0) {
            resultText.textContent = "You ate the giant cookie! Yum.";
            resetCookie();
        }
    }
});
