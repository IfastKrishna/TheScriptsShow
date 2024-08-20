/*
DOM: Document Object Model

* using dom we can do 4 things
1. Traverse the DOM tree (move up, down, and sideways in the DOM tree) 
   and access the nodes
2. Create elements
3. Remove elements
4. Modify elements
    
*/

// get the element by these methods

// const collection = document.all;
// for (let i = 0; i < collection.length; i++) {
//   console.log(collection[i]);
// }

// const h1 = document.getElementById("heading");
// const h1 = document.getElementsByClassName("heading");[0]
// const h1 = document.getElementsByTagName("ul");
// console.log(h1);

// const h1 = document.querySelectorAll("ul>li");

// console.log((h1.style.color = "red"));

// h1.forEach((h1) => {
//   console.log((h1.style.color = "red"));
// });

// update the element by these methods

// const h1 = document.querySelector("h1");
// h1.innerHTML = "<h1> Hello World</h1>";
// h1.textContent = "Hello World";
// h1.innerText = "Hello World";
// h1.style.color = "red";
// h1.style.fontSize = "50px";
// h1.style.fontWeight = "bold";
// // h1.style.backgroundColor = "black";  // background-color => backgroundColor => kebab-case to camelCase
// h1.style.borderBottom = "2px solid black";

// // event listener on element

// h1.addEventListener("click", function () {
//   console.log("clicked");
//   h1.style.backgroundColor = "black";
// });

// const btn = document.querySelectorAll("button");
// // console.log(btn);

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     const color = btn[i].textContent;
//     const h1 = document.querySelector("h1");
//     h1.style.color = color;
//   });
// }

// deletion method
