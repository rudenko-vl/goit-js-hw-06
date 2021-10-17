const span = document.querySelector('#name-output');
const textInput = document.querySelector('#name-input');
textInput.addEventListener('input', () => {
    textInput.value === '' ? span.textContent = 'Anonymous': span.textContent = textInput.value.trim();
});