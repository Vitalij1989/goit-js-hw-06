// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const itemsEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemsEl.length);

itemsEl.forEach(myFunction);

function myFunction(category) {
  const categoryTitleEl = category.firstElementChild;
  console.log("Category:", categoryTitleEl.textContent);
  const categoryListEl = categoryTitleEl.nextElementSibling;
  console.log("Elements", categoryListEl.childElementCount);
}
