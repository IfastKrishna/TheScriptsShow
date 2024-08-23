log = console.log;
dir = console.dir;

// const card = document.querySelector(".card");
// const button = card.children[1].querySelector("a");

// function printHello(e) {
//   log(e);
//   log("Hello");
// }

// second way
// button.onclick = printHello;
// button.onclick = function () {
//   log("Hello 2");
// };

// third way
// button.addEventListener("click", printHello);
// button.addEventListener("click", function (e) {
//   log(e);
//   log("Hello 2");
// });

// button.addEventListener("click", (e) => {
//   //   log((e.target.style.backgroundColor = "red"));
//   log(e);
//   log("Hello 3");
// });

// const card = document.querySelector(".card");
// const button = card.children[1].querySelector("a");
// button.addEventListener("dblclick", (e) => {
//   e.stopPropagation();
//   log(e.target);
// });

// button.addEventListener("click", function (e) {
//   log("clicked");
// });

// card.addEventListener("click", (e) => {
//   log(e.target);
// });

// counter

// const card = document.querySelector(".card");
// const cardBody = card.firstElementChild;
// const h5 = cardBody.children[0];
// const add = cardBody.children[1];
// const sub = cardBody.children[2];

// add.addEventListener("click", () => {
//   const oldValue = h5.textContent.split(" ");
//   h5.textContent = `${oldValue[0]} ${Number(oldValue[1]) + 1}`;
// });

// sub.addEventListener("click", () => {
//   const oldValue = h5.textContent.split(" ");
//   h5.textContent = `${oldValue[0]} ${Number(oldValue[1]) - 1}`;
// });

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  const card = document.querySelector(".card");
  const newCard = card.cloneNode(true);
  const container = document.querySelector(".container");
  container.appendChild(newCard);
});
