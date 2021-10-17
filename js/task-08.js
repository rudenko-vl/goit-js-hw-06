const formRef = document.querySelector('form');
const emailRef = document.querySelector('input[name="email"]');
const passwordRef = document.querySelector('input[name="password"]');
const onFormSubmit = (event) => {
    event.preventDefault();
    if (!emailRef.value || !passwordRef.value) {
        return alert('Заполнены не все поля!');
    }
    const userData = {
        email: emailRef.value,
        password: passwordRef.value,
    };
    console.log(userData);
    event.currentTarget.reset();
}
formRef.addEventListener('submit', onFormSubmit);

