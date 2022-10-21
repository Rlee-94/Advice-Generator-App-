const adviceText = document.querySelector(".advice__text");
const adviceHeader = document.querySelector(".advice__header");
const textContainer = document.querySelector(".text__container");

function fetchAdviceData() {
  return fetch("https://api.adviceslip.com/advice").then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  });
}

async function renderAdviceData() {
  const data = await fetchAdviceData();

  const {
    slip: { id, advice },
  } = data;

  return id, advice;
}

function renderText() {}
