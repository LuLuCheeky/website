const popup = document.getElementById('optionsPopup');
const openBtn = document.getElementById('openBtn');
const cancelBtn = document.getElementById('cancelBtn');
const resultText = document.getElementById('resultText');
const cookieContainer = document.getElementById('cookieContainer');
const cookieImage = document.getElementById('cookieImage');
const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
const cookieRejectBtn = document.getElementById('cookieRejectBtn');
const crunch = new Audio('cookieCrunch.mp3');
let bitesLeft = 4;
let isCooldown = false;

openBtn.addEventListener('click', () => {
  popup.showModal();
});

cookieAcceptBtn.addEventListener('click', () => {
  resultText.textContent = "You chose cookie";
  cookieContainer.style.display = 'flex';
  
  setTimeout(() => {
    cookieContainer.style.opacity = '1';
    cookieImage.style.transform = 'scale(1)';
  }, 20);
  
  cookieImage.innerHTML = `<img src="cookieImages/cookieFull.png" alt="Cookie" id="cookieImg">`;
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
            if (bitesLeft >= 1) { 
                isCooldown = true;
                img.src = `cookieImages/cookie${bitesLeft}Bites.png`;              
                cookieImage.classList.remove("click-animate"); 
                void cookieImage.offsetWidth; 
                cookieImage.classList.add("click-animate");              
                crunch.play(); 
                setTimeout(() => {
                    isCooldown = false;
                }, 200);
            } else { 
                resultText.textContent = "you ate the giant cookie! yum!1!!1"; 
                resetCookie(); 
            } 
        } 
    }
});
