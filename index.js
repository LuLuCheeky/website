const popup = document.getElementById('optionsPopup');
const openBtn = document.getElementById('openBtn');
const cancelBtn = document.getElementById('cancelBtn');
const resultText = document.getElementById('resultText');
const cookieContainer = document.getElementById('cookieContainer');

openBtn.addEventListener('click', () => {
    popup.showModal();
});

popup.addEventListener('close', () => {
    if (popup.returnValue) {
        resultText.textContent = `You selected: ${popup.returnValue}`;
        
        if (popup.returnValue === 'COOKIE') {
            cookieContainer.textContent = '🍪';
        } else {
            cookieContainer.textContent = '';
        }
    } else {
        resultText.textContent = "Selection cancelled.";
        cookieContainer.textContent = '';
    }
});

cancelBtn.addEventListener('click', () => {
    popup.close();
});
