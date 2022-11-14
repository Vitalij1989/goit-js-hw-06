const refs = {
  bodyEl: document.querySelector("body"),
  hexColText: document.querySelector(".color"),
  btrChangeCol: document.querySelector(".change-color"),
};

refs.btrChangeCol.addEventListener("click", onClickBtr);

function onClickBtr(event) {
  const randomBackgroundColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomBackgroundColor;
  refs.hexColText.textContent = randomBackgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
