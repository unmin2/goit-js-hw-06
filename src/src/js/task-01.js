const categoriesEl = document.querySelectorAll('#categories .item');
let categoriesQuantity = 0;
categoriesEl.forEach(() => {
    categoriesQuantity += 1;
})
console.log(`Number of categories: ${categoriesQuantity}`);

const firstCategory = categoriesEl[0];
const firstHeader = firstCategory.querySelector('h2');
console.log(`Category: ${firstHeader.textContent}`);
const firstElements = firstCategory.querySelectorAll('ul li');
let firstElementsQuantity = 0;
firstElements.forEach(() => {
    firstElementsQuantity += 1;
});
console.log(`Elements: ${firstElementsQuantity}`);


const secondCategory = categoriesEl[1];
const secondHeader = secondCategory.querySelector('h2');
console.log(`Category: ${secondHeader.textContent}`);
const secondElements = secondCategory.querySelectorAll('ul li');
let secondElementsQuantity = 0;
secondElements.forEach(() => {
    secondElementsQuantity += 1;
});
console.log(`Elements: ${secondElementsQuantity}`);

const thridCategory = categoriesEl[2]
const thridHeader = thridCategory.querySelector('h2');
console.log(`Category: ${thridHeader.textContent}`);
const thridElements = thridCategory.querySelectorAll('ul li');
let thridElementsQuantity = 0;
thridElements.forEach(() => {
    thridElementsQuantity += 1;
});
console.log(`Elements: ${thridElementsQuantity}`);
