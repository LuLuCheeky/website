const popup = document.getElementById('optionsPopup');
const openBtn = document.getElementById('openBtn');
const cancelBtn = document.getElementById('cancelBtn');
const resultText = document.getElementById('resultText');

openBtn.addEventListener('click', () => {
  popup.showModal();
});

popup.addEventListener('close', () => {
  if (popup.returnValue) {
    resultText.textContent = `You selected: ${popup.returnValue}`;
  } else {
    resultText.textContent = "Selection cancelled.";
  }
});

cancelBtn.addEventListener('click', () => {
  popup.close();
});
