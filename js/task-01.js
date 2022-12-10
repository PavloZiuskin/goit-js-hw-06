// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2.Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
// текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

const categoriesRef = document.querySelector("#categories");
console.dir(categoriesRef);

const itemCategoriesRef = document.querySelectorAll(".item");
console.log(itemCategoriesRef);

const allCatecoriesItem = itemCategoriesRef.length;
console.log(`Number of categories: ${allCatecoriesItem}`);

const firstChildrenElementCategorieRef = categoriesRef.firstElementChild;
const firstItemNameCategorieRef =
  firstChildrenElementCategorieRef.querySelector("h2");
console.log(`Category: ${firstItemNameCategorieRef.textContent}`);
const firstChildCategorieListRef =
  firstChildrenElementCategorieRef.querySelector("ul");
const firstCategorieListChildrenRef = firstChildCategorieListRef.children;
console.log(`Elements: ${firstCategorieListChildrenRef.length}`);

const secondChildrenElementCategorieRef = categoriesRef.children[1];
const secondItemNameCategorieRef =
  secondChildrenElementCategorieRef.querySelector("h2");
console.log(`Category: ${secondItemNameCategorieRef.textContent}`);
const secondChildCategorieListRef =
  secondChildrenElementCategorieRef.querySelector("ul");
const secondCategorieListChildrenRef = secondChildCategorieListRef.children;
console.log(`Elements: ${secondCategorieListChildrenRef.length}`);

const lastChildrenElementCategorieRef = categoriesRef.lastElementChild;
const lastItemNameCategorieRef =
  lastChildrenElementCategorieRef.querySelector("h2");
console.log(`Category: ${lastItemNameCategorieRef.textContent}`);
const lastChildCategorieListRef =
  lastChildrenElementCategorieRef.querySelector("ul");
const lastCategorieListChildrenRef = lastChildCategorieListRef.children;
console.log(`Elements: ${lastCategorieListChildrenRef.length}`);
