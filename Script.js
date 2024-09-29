const coin = document.getElementById("coin");
const balance = document.getElementById("balance");

function formatNumber(number) {
  const parts = number.toString().split('.');
  const integerPart = parts[0];
  const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedInteger + decimalPart;
}

function removeCommas(number) {
  return parseInt(number.replace(/,/g, ''), 10);
}

function displayPlus(num, event) {
  event.preventDefault();

  const plusOne = document.createElement('div');
  plusOne.classList.add('plus-one');
  plusOne.textContent = `+${num}`;

  const coinRect = coin.getBoundingClientRect();
  const touchX = event.touches[0].clientX - coinRect.left;
  const touchY = event.touches[0].clientY - coinRect.top;

  plusOne.style.top = `${touchY}px`;
  plusOne.style.left = `${touchX}px`;
}

coin.addEventListener('touchstart', (event) => {
  coin.style.scale = "1.07";
  displayPlus(1, event)
  currentBalance = removeCommas(balance.innerText);
  newBalance = currentBalance += 1
  
  balance.innerText = formatNumber(newBalance);
});

coin.addEventListener('touchend', (event ) => {
  coin.style.scale = "1";
});

