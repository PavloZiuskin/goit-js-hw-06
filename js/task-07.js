const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};
console.log(refs.input);

refs.input.addEventListener("input", onInputControlerChange);
function onInputControlerChange(evt) {
  let inputValue = evt.currentTarget.value;
  refs.span.style.fontSize = `${inputValue}px`;
}
