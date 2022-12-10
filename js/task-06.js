const input = document.querySelector("#validation-input");

input.addEventListener("blur", onChekedTrueValidationInput);
function onChekedTrueValidationInput(evt) {
  let inputValue = evt.currentTarget.value.length;
  if (inputValue >= input.dataset.length) {
    input.style.borderColor = "#4caf50";
  } else {
    input.style.borderColor = "#f44336";
  }
}
