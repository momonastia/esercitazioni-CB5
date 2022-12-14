import arr from "./data.js";

/// выпадающий список

const selectEl = document.getElementById("select-location");
const mainEl = document.querySelector(".main");

////проба с картой

const createCard = (nome, value, parent) => {
  const wrapperEl = document.createElement("div");
  wrapperEl.setAttribute("class", "wrapper-card");

  const cardEl = document.createElement("div");
  cardEl.setAttribute("class", "card");
  cardEl.setAttribute("id", value);
  cardEl.addEventListener("click", (e) => {
    requestApi(cardEl.id);
    mainEl.classList.remove("active");
  });

  const titleEl = document.createElement("h4");
  titleEl.setAttribute("class", "cardtext");
  titleEl.textContent = nome;

  // appending
  cardEl.append(titleEl);
  wrapperEl.appendChild(cardEl);
  parent.append(wrapperEl);
};

arr.map((comune) => createCard(comune.name, comune.value, mainEl));

////_________________________________________________________________________

const wrapper = document.querySelector(".wrapper"),
  inputPart = document.querySelector(".input-part"),
  infoTxt = inputPart.querySelector(".info-txt"),
  weatherPart = wrapper.querySelector(".weather-part"),
  wIcon = weatherPart.querySelector("img"),
  arrowBack = wrapper.querySelector("header i"),
  rainBackgroudEl = document.querySelector(".rain-background"),
  clearBackgroudEl = document.querySelector(".clear-background"),
  cloudBackgroudEl = document.querySelector(".cloud-background"),
  snowBackgroudEl = document.querySelector(".snow-background"),
  hazeBackgroudEl = document.querySelector(".haze-background"),
  stormBackgroudEl = document.querySelector(".storm-background"),
  buttonSelectEl = document.querySelector(".button-select");

let api;

function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=37e64d32df1a5897bfae2b5672c5e514`;
  fetchData();
}

function fetchData() {
  infoTxt.innerText = "Getting weather details...";
  infoTxt.classList.add("pending");
  fetch(api)
    .then((res) => res.json())
    .then((result) => weatherDetails(result))
    .catch(() => {
      infoTxt.innerText = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
    });
}

function weatherDetails(info) {
  if (info.cod == "404") {
    infoTxt.classList.replace("pending", "error");
    infoTxt.innerText = `${selectEl.value} isn't a valid city name`;
  } else {
    const city = info.name;
    const country = info.sys.country;
    const { description, id } = info.weather[0];
    const { temp, feels_like, humidity, pressure } = info.main;
    const windspeed = info.wind.speed;

    if (id == 800) {
      wIcon.src = "icons/clear.png";
      clearBackgroudEl.classList.add("active");
    } else if (id >= 200 && id <= 232) {
      wIcon.src = "icons/storm.png";
      stormBackgroudEl.classList.add("active");
    } else if (id >= 600 && id <= 622) {
      wIcon.src = "icons/snow.png";
      snowBackgroudEl.classList.add("active");
    } else if (id >= 701 && id <= 781) {
      wIcon.src = "icons/haze.png";
      hazeBackgroudEl.classList.add("active");
    } else if (id >= 801 && id <= 804) {
      wIcon.src = "icons/cloud.png";
      cloudBackgroudEl.classList.add("active");
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      wIcon.src = "icons/rain.png";
      rainBackgroudEl.classList.add("active");
    }
    setTimeout(addWrapper, 500); /// при нажатии на кнопку выбора комуне задержка в полсекунды чтобы меню не перекрывало виджет
    /*   wrapper.classList.add("active"); */
    weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
    weatherPart.querySelector(".weather").innerText = description;
    weatherPart.querySelector(
      ".location span"
    ).innerText = `${city}, ${country}`;
    weatherPart.querySelector(".temp .numb-2").innerText =
      Math.floor(feels_like);
    weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
    weatherPart.querySelector(".pressure span").innerText = `${pressure}hPa`;
    weatherPart.querySelector(".wind-speed span").innerText = `${windspeed}m/s`;
    infoTxt.classList.remove("pending", "error");
    infoTxt.innerText = "";
    selectEl.value = "";
  }
}

arrowBack.addEventListener("click", () => {
  /*   wrapper.classList.remove("active");
  clearBackgroudEl.classList.remove("active");
  rainBackgroudEl.classList.remove("active");
  cloudBackgroudEl.classList.remove("active");
  snowBackgroudEl.classList.remove("active");
  hazeBackgroudEl.classList.remove("active");
  stormBackgroudEl.classList.remove("active");
  mainEl.classList.add("active"); */
  location.onload = requestApi("catania");
});

/// кнопка выбора комуне

function toggleMain() {
  mainEl.classList.toggle("active");
}

function addWrapper() {
  /// при нажатии на кнопку выбора комуне задержка в полсекунды чтобы меню не перекрывало виджет
  wrapper.classList.add("active");
}

buttonSelectEl.addEventListener("click", (e) => {
  mainEl.classList.toggle("active");
  /*  setTimeout(toggleMain, 500); */
  wrapper.classList.remove("active");
});

/// загрузка катании по умолчанию

location.onload = requestApi("catania");
