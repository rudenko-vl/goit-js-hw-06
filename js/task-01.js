const listCategories = document.querySelector('#categories');
const listCategoriesItem = listCategories.querySelectorAll('.item')
console.log(`Number of categories: ${listCategoriesItem.length}`);
listCategoriesItem.forEach(el => {
    const title = el.querySelector('h2');
    const item = el.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${item.length}`);
});

