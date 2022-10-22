const adviceNumber = document.querySelector(".advice__number");
const adviceText = document.querySelector(".advice__text");
const diceBtn = document.querySelector(".advice__btn");

function showQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceNumber.textContent = `Advice #${data.id}`;
      adviceText.textContent = `"${data.advice}"`;
    })
    .catch((error) => {
      alert(`Error ${error}`);
    });
}

diceBtn.addEventListener("click", () => {
  showQuote();
});
