const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('.ingredients');
const firstItem = document.createElement('li');
firstItem.textContent = 'Potatoes';
const list.prepend(firstItem);
console.log(ingredients);
