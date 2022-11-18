const btn = document.querySelector(".button");
const advice = document.querySelector(".advice");
const urlAdvice = "https://api.adviceslip.com/advice";
const advTitleEl = document.querySelector(".advise-title");
const loadEl = document.querySelector(".loader");
/* loadEl.classList.add = "active"; */

/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getAdvice = (URL) => {
  loadEl.style.opacity = 1;
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then(
      (res) =>
        (advice.innerHTML = res.slip.advice) +
        (advTitleEl.textContent = "ADVICE #" + res.slip.id)
    )
    .catch((e) => console.log("Error:" + e))
    .finally(() => (loadEl.style.opacity = 0));
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
