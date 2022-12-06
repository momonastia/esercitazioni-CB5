const inputIdEl = document.getElementById("id");
const btnDelEl = document.getElementById("delete-btn");
const ResEl = document.querySelector(".cardList");

const _DELETE = async (url, id) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ id: id }),
  });
  return await res.json();
};

function deleteActor(id) {
  const url = `http://localhost:3000/attore`;
  return _DELETE(url, id);
}

btnDelEl.addEventListener("click", (e) => {
  e.preventDefault();
  deleteActor(inputIdEl.value).then((message) => {
    ResEl.textContent = message;
  });
});
