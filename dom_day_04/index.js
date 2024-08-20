console.log("Hello, World!");

// create element
const h1 = document.createElement("h1");
h1.setAttribute("id", "main-title");
h1.textContent = "Hello, everyone!";
h1.style.color = "red";

const img = document.createElement("img");
img.setAttribute("src", "https://via.placeholder.com/150");
img.setAttribute("alt", "placeholder image");
img.setAttribute("myImage", "its my image");

const a = document.createElement("a");
a.setAttribute("href", "https://www.youtube.com");
a.textContent = "Go to YouTube";

const body = document.querySelector("body");
const br = document.createElement("br");

body.appendChild(h1);
body.prepend(img);
body.prepend(br);
body.prepend(img.cloneNode(true));

//
// body.appendChild(img);
// body.appendChild(document.createElement("br"));
// body.appendChild(a);

// body.append(
//   h1,
//   document.createElement("br"),
//   a,
//   document.createElement("br"),
//   img
// );

// src id class href alt style title

// append element
// appendChild() method adds a node to the end of the list of children of a specified parent node.

const products = [
  {
    name: "Product 1",
    price: 100,
    img: "https://via.placeholder.com/150",
    discount: 10,
  },
  {
    name: "Product 2",
    price: 200,
    img: "https://via.placeholder.com/150",
    discount: 20,
  },
];

products.forEach((product) => {
  const productContainer = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = product.name;

  const img = document.createElement("img");
  img.setAttribute("src", product.img);
  const p1 = document.createElement("p");
  p1.textContent = product.price;
  const p2 = document.createElement("p");
  p2.textContent = product.discount;

  productContainer.append(h1, img, p1, p2);
  //   product.appendChild(img);
  //   product.appendChild(p1);
  //   product.appendChild(p2);
  body.appendChild(productContainer);
});

// div > h1 + img + p + p
