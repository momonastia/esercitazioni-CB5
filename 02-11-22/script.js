import GirlImages from "./scriptData.js";

/// Create Navbar
const navBar = document.createElement("nav");
document.body.append(navBar);

const list = document.createElement("ul");
navBar.appendChild(list);

const el1list = document.createElement("li");
el1list.textContent = "Home";
const el2list = document.createElement("li");
el2list.textContent = "Contacts";
const el3list = document.createElement("li");
el3list.textContent = "About";

list.appendChild(el1list);
list.appendChild(el2list);
list.appendChild(el3list);

/// Create Hero div
const hero = document.createElement("div");
hero.setAttribute("class", "hero");
document.body.append(hero);

/// Create Hero Title
const heroTitle = document.createElement("h1");
heroTitle.textContent = "Titolo";
heroTitle.setAttribute("class", "hero-title");
hero.appendChild(heroTitle);

/// Create Hero Image
const heroImg = document.createElement("img");
heroImg.setAttribute("src", "https://loremflickr.com/640/360");
heroImg.setAttribute("alt", "hero image");
heroImg.setAttribute("class", "hero-img");
hero.appendChild(heroImg);

/// Create Footer
const footer = document.createElement("footer");
document.body.append(footer);

const listFooter = document.createElement("ul");
footer.appendChild(listFooter);

const el1listFooter = document.createElement("li");
el1listFooter.textContent = "Adress";
const el2listFooter = document.createElement("li");
el2listFooter.textContent = "Privacy";
const el3listFooter = document.createElement("li");
el3listFooter.textContent = "Terms and conditions";

listFooter.appendChild(el1listFooter);
listFooter.appendChild(el2listFooter);
listFooter.appendChild(el3listFooter);

/// CARDS (non ho finito questa parte)

const createCard = (description, imgUrl, parent) => {
  const cardEl = document.createElement("div");
  // title

  const titleEl = document.createElement("h1");
  titleEl.textContent = description;

  // img
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  cardEl.append(titleEl, imgEl);
  parent.appendChild(cardEl);
};

console.log(
  GirlImages.map((product) =>
    createCard(product.description, product.image, hero)
  )
);
