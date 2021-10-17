const value = document.querySelector('#value');
let counterValue = 0;
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
plusBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});
minusBtn.addEventListener('click', () => {
    if (value.textContent > 0) {
    counterValue -= 1;
    value.textContent = counterValue;
    }
});