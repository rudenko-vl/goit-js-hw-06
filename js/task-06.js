const input = document.querySelector('#validation-input');
input.addEventListener('blur', ({ target: { value, dataset } }) => {
    value.length === Number(dataset.length) ? toggleClass('valid', 'invalid') : toggleClass('invalid', 'valid');
});

const toggleClass = (add, rem) => {
    input.classList.add(add);
    input.classList.remove(rem);
};