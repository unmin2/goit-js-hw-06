const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('.ingredients');
let litags = '';
ingredients.forEach(ingredients => {
  const listEl = `<li> class="item"</li>`;
  listEl += litags;
console.log(ingredients);
})


// let liTags = '';
// images.forEach(image => {
//   const liEl = `<li class="gallery-item"><img scr=${image.url} alt="${image.alt}" width="480" height="240"/></li>`; 
//   liTags += liEl;
// });
// listEl.insertAdjacentHTML('afterbegin', liTags);
