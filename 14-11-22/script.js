const createCard = (title, ID, bodyCard, parent) => {
  const cardEl = document.createElement("div");
  cardEl.setAttribute("class", "card");
  /*  cardEl.classList.add(type); */
  // title for each card

  const titleIdEl = document.createElement("div");
  titleIdEl.setAttribute("class", "title-id");

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const idEl = document.createElement("h4");
  idEl.textContent = ID;
  idEl.setAttribute("class", "id-card");

  //body
  const bodyCardEl = document.createElement("div");
  bodyCardEl.textContent = bodyCard;
  bodyCardEl.setAttribute("class", "body-card");

  // appending
  cardEl.append(titleIdEl, bodyCardEl);
  titleIdEl.append(titleEl, idEl);
  parent.innerHTML = "";
  parent.appendChild(cardEl);
};

const mainDiv = document.querySelector(".main-div");
/// Tagging buttons
const btnPrevious = document.querySelector(".btn-previous");
const btnNext = document.querySelector(".btn-next");

// Handle Paginated Cards

const LIMIT = 10;
let page = 1;

/* Loader */

const loadEl = document.querySelector(".lds-roller");

/**
 * It takes a number, and returns a promise that resolves to a JSON object containing the data for that
 * post
 * @param num - The number of the post you want to fetch.
 */
const getPost = (num) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${num}`).then((res) =>
    res.json()
  );

const addPost = (post) => createCard(post.title, post.id, post.body, mainDiv);

/**
 * It fetches a new page of posts, adds the post to the page, and then updates the page number
 * @param newPage - The new page number to update to.
 */
const updatePage = (newPage) => {
  loadEl.style.opacity = "1"; /// showing loader
  /* Checking if the newPage is greater than 0 and less than or equal to the limit. */
  if (newPage > 0 && newPage <= LIMIT) {
    getPost(newPage)
      .then(addPost)
      .then(() => (page = newPage));
  }
  loadEl.style.opacity = "0"; /// hiding loader
};

btnNext.addEventListener("click", () => updatePage(page + 1));
btnPrevious.addEventListener("click", () => updatePage(page - 1));

/* Calling the updatePage function with the argument of 1 to get the first post card */
updatePage(page);
