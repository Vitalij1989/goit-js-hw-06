const inputValid = document.querySelector("#validation-input");

inputValid.addEventListener("blur", onFocus);

function onFocus(event) {
  inputValid.classList.remove("invalid");
  if (inputValid.value.length === Number(inputValid.dataset.length)) {
    inputValid.classList.add("valid");
  } else {
    inputValid.classList.add("invalid");
  }
}
