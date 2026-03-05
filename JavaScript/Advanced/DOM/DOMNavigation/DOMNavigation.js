/*const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});

const element = document.getElementById("icecream");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

const element = document.getElementById("apple");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

const element = document.getElementById("carrot");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";*/

const element = document.getElementById("fruits");
const children = element.children;

/*console.log(children);
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});*/

children[1].style.backgroundColor = "yellow";