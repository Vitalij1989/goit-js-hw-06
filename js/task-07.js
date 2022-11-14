const refs = {
  inputElement: document.querySelector("#font-size-control"),
  textElement: document.querySelector("#text"),
};

refs.textElement.style.fontSize = `${refs.inputElement.value}px`;

console.log("🚀 ~ refs.inputElement.value", refs.inputElement.value);
refs.inputElement.addEventListener("input", (event) => {
  refs.textElement.style.fontSize = `${refs.inputElement.value}px`;
});
