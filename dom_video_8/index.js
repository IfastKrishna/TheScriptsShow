const input = document.querySelector("input");

// let id;
// input.addEventListener("focus", (e) => {
//   let name = "krishna Prasad";
//   let i = 0;

//   id = setInterval(() => {
//     e.target.value = name.slice(0, i);
//     i++;
//     if (i > name.length) {
//       clearInterval(id);
//     }
//   }, 500);

//   console.log(" input is focus");
// });

// input.addEventListener("blur", (e) => {
//   clearInterval(id);
//   console.log(" input is blur");
// });

// input.addEventListener("change", (e) => {
//   console.log(" input is change");
//   console.log(e.target.value);
// });

// input.addEventListener("", (e) => {
//   console.log(e.target.value);
// });

const data = [];

const tableBody = document.querySelector("#user-table tbody");
const form = document.querySelector("#myForm");
console.log(tableBody);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   let name = e.target.elements.name.value;
  //   let email = e.target.elements.email.value;
  //   let password = e.target.elements.password.value;

  //   let formData = {
  //     name,
  //     email,
  //     password,
  //   };

  let { name, email, password } = e.target.elements;
  let formData = {
    name: name.value,
    email: email.value,
    password: password.value,
    id: data.length + 1,
  };

  data.push(formData);
  renderTable(formData);
  e.target.reset();
});

// console.log(tableBody);

function renderTable(user) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
`;
  tableBody.appendChild(tr);
}
