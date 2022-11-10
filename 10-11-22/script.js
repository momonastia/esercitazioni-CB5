const btn = document.querySelector(".button");
const advice = document.querySelector(".advice");
const urlAdvice = "https://api.adviceslip.com/advice";
const advTitleEl = document.querySelector(".advise-title");

/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then(
      (res) =>
        (advice.innerHTML = res.slip.advice) +
        (advTitleEl.textContent = "ADVICE #" + res.slip.id)
    )
    .catch((e) => console.log("Error:" + e));
};

/**
 * Call Get data function while clicking on button
 *
 */
const onFirstLoad = () => {
  btn.addEventListener("click", () => {
    getAdvice(urlAdvice);
  });

  getAdvice(urlAdvice);
};

// Call Get data function while loading page
window.onload = onFirstLoad;
