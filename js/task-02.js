const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

const makeIngradientList = (options) => {
  return options.map((option) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = option;
    return liEl;
  });
};

const elements = makeIngradientList(ingredients);
console.log(ingredients);
listEl.append(...elements);
