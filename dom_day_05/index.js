log = console.log;
dir = console.dir;
// const body = document.querySelector("body");
// const parent = body.parentElement; // target the parent
// const children = body.children; // target the children
// log(children[0].children[1].children[1]); // target the parent
// log(children[0].children[1].lastElementChild); // target the parent
// log(children[0].children[1].children[1].nextElementSibling); // target the parent

const body = document.querySelector("body");

const bodyChildren = body.children;
const bodyParent = body.parentElement;
const bodyFirstChild = body.lastElementChild; // firstElementChild
const bodySecondChild = body.firstElementChild.nextElementSibling; // second child of body
// log(bodyParent);
log(bodySecondChild.nextElementSibling.previousElementSibling);
// log(bodyFirstChild);
