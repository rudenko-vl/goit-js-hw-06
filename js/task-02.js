const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
  const listElements = ingredients.map((el) => {
  const newElement = document.createElement('li');
  newElement.textContent = el;
    newElement.classList.add('item');
    return newElement;
  });

list.append(...listElements);

