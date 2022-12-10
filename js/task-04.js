const valueRef = document.querySelector("#value");
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');
let counterValue = Number(valueRef.textContent);
const onIncrementAddBtnClick = function () {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const onDecrementMinesBtnClick = function () {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

incrementRef.addEventListener("click", onIncrementAddBtnClick);
decrementRef.addEventListener("click", onDecrementMinesBtnClick);
