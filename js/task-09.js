function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.btn.addEventListener("click", onChangeBodyColorClick);

function onChangeBodyColorClick() {
  const backgroundColor = getRandomHexColor();
  refs.body.style.backgroundColor = `${backgroundColor}`;
  // console.log(refs.body.style.backgroundColor);
  refs.span.textContent = `${backgroundColor}`;
  // console.log(refs.span.textContent);
}
