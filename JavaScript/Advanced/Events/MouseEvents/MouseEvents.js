const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

/*function changeColor(event){
    //console.log(event);
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕"
}*/

//myBox.addEventListener("click", changeColor);

/*myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕"
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't Do It 😲"
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😃"
});*/

myButton.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕"
});

myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't Do It 😲"
});

myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😃"
});