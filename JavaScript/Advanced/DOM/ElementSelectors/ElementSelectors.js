const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
//console.log(myHeading);

/*const fruits = document.getElementsByClassName("fruits");

console.log(fruits);
fruits[1].style.backgroundColor = "yellow";
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});*/

/*const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

//console.log(h4Elements);
//h4Elements[0].style.backgroundColor = "yellow";
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}
for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});*/

/*const element = document.querySelector(".fruits");

element.style.backgroundColor = "yellow";*/

//const fruits = document.querySelectorAll(".fruits");
const foods = document.querySelectorAll("li");

//fruits[0].style.backgroundColor = "yellow";
//foods[4].style.backgroundColor = "yellow";

//console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})