const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
const firstLiEl = document.createElement('li');
firstLiEl.classList.add('item');
firstLiEl.textContent = 'Potatoes'


const secondLiEl = document.createElement('li');
secondLiEl.classList.add('item');
secondLiEl.textContent = 'Mushrooms'


const thridLiEl = document.createElement('li');
thridLiEl.classList.add('item');
thridLiEl.textContent = 'Mushrooms'

const fouthLiEl = document.createElement('li');
fouthLiEl.classList.add('item');
fouthLiEl.textContent = 'Tomatos'


const fifthLiEl = document.createElement('li');
fifthLiEl.classList.add('item');
fifthLiEl.textContent = 'Herbs'

ingredientsEl.append(firstLiEl, secondLiEl, thridLiEl, fouthLiEl, fifthLiEl);

console.log(ingredientsEl);
