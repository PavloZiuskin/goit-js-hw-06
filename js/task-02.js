const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1. Створить окремий елемент < li >.
//   Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const listIngredientsRef = document.querySelector("#ingredients");

// const option = ingredients[0];
// const liVegetableRef = document.createElement("li");
// liVegetableRef.classList.add("item");
// liVegetableRef.textContent = option;
// console.log(liVegetableRef);
const itemsRef = ingredients.map((option) => {
  const liVegetableRef = document.createElement("li");
  liVegetableRef.classList.add("item");
  liVegetableRef.textContent = option;
  console.log(liVegetableRef);
  return liVegetableRef;
});
listIngredientsRef.append(...itemsRef);
