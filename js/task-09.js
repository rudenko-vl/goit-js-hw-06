function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');
const bodyChangeColor = () => {
  span.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
btn.addEventListener('click', bodyChangeColor);