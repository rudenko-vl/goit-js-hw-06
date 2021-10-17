const value = document.querySelector('#value');
let counterValue = 0;
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
plusBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});
minusBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});