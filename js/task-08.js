const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubForm);

function onSubForm(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value;
  const emailKey = event.currentTarget.elements.email.name;
  const passwordValue = event.currentTarget.elements.password.value;
  const passwordKey = event.currentTarget.elements.password.name;

  if (emailValue === "" || passwordValue === "") {
    alert("Warning! Email and Password must be filled!");
  } else {
    const formFile = {
      [emailKey]: emailValue,
      [passwordKey]: passwordValue,
    };
    console.log(formFile);
    form.reset();
  }
}
