const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form-input");
const elResult = document.querySelector(".result");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = elInput.value;
  elResult.textContent = (inputValue * 9/5 + 32).toFixed(0);
});
