const popup = document.getElementById('optionsPopup');
const openBtn = document.getElementById('openBtn');
const cancelBtn = document.getElementById('cancelBtn');
const resultText = document.getElementById('resultText');
const cookieContainer = document.getElementById('cookieContainer');

const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
const cookieRejectBtn = document.getElementById('cookieRejectBtn');

let bitesLeft = 4; // Tracks how much cookie is left to eat

openBtn.addEventListener('click', () => {
    popup.showModal();
});

// User accepts cookie
cookieAcceptBtn.addEventListener('click', () => {
    resultText.textContent = "You selected: COOKIE";
    cookieContainer.textContent = '🍪';
    cookieContainer.style.opacity = '1';
    cookieContainer.style.transform = 'scale(1)';
    bitesLeft = 4; // Reset cookie status
    popup.close();
});

// User rejects cookie
cookieRejectBtn.addEventListener('click', () => {
    resultText.textContent = "You selected: hatesCookies";
    cookieContainer.textContent = '';
    popup.close();
});

// User cancels
cancelBtn.addEventListener('click', () => {
    resultText.textContent = "Selection cancelled.";
    cookieContainer.textContent = '';
    popup.close();
});

// Eating mechanic when clicking the cookie
cookieContainer.addEventListener('click', () => {
    if (bitesLeft > 0) {
        bitesLeft--;
        
        // Add a temporary bite/crunch visual pop
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
            // Completely eaten! Fade away
            cookieContainer.style.transform = 'scale(0)';
            cookieContainer.style.opacity = '0';
            resultText.textContent = "You ate the cookie! Yum.";
            setTimeout(() => {
                cookieContainer.textContent = '';
            }, 500);
        }
    }
});
