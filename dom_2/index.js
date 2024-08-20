// // innerText and innerHTML and textContent

// const h1 = document.querySelector("h1");

// // console.log(h1.innerText); , return the text content of the element as a string but it will not return the text content of the element if the element is hidden
// // console.log(h1.textContent); // return the text content of the element as a string
// // console.log(h1.innerHTML); // return the html content of the element as a string including the tags
// // h1.innerHTML = "text <h1>span</h1>";
// h1.innerHTML = `text <h1 style="display: none">span</h1>`;

// console.log(h1.innerText);
// console.log(h1.textContent);

// remove html element

// element element.remove() method
const h1 = document.querySelector("h1");
// h1.remove();

const h2s = document.querySelectorAll("h2");

// h2s.forEach(function (h2) {
//   h2.addEventListener("click", (e) => {
//     console.log(this); // window object
//     console.log(e);
//     // console.log(e.target);
//   });
// });

// h2s.forEach(function (h2) {
//   h2.addEventListener("click", function (e) {
//     // element object
//     // h2.remove(); // remove the element
//     // this.remove();
//     // e.target.remove();
//     console.log(e);
//     // console.log(e.target);
//   });
// });

// const body = document.querySelector("body");
// console.log(body);
// const header = document.querySelector("header");
// [2]
// body.removeChild(header);

const ul = document.querySelector("ul");
const li = ul.querySelectorAll("li");
console.log(li);
console.log(ul);
ul.removeChild(li[2]);
ul.remove();

// element.parentElement.removeChild(element) method

// ul.setAttribute();

