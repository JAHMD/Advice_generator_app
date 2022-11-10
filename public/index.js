const BASE_URL = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector("#advice-id span");
const adviceText = document.querySelector("#advice-text span");

window.addEventListener("load", generateAdvice);
// fetching the api
async function fetchApi(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.slip;
}
// generate a new advice
async function generateAdvice() {
  const advice = await fetchApi(BASE_URL);
  adviceId.innerText = advice.id;
  adviceText.innerText = advice.advice;
}
