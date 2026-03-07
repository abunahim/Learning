/* Example 1
const newH1 = document.createElement("H1");

newH1.textContent = "I like cake!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//document.body.append(newH1);
//document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2);
//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[2]);

document.getElementById("box1").removeChild(newH1);*/

const newListItem = document.createElement("li");

newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//document.body.append(newListItem);
//document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);
//const banana = document.getElementById("banana");
//document.getElementById("fruits").insertBefore(newListItem, banana);
//const listItems = document.querySelectorAll("#fruits li");
//document.getElementById("fruits").insertBefore(newListItem, listItems[0]);

document.getElementById("fruits").removeChild(newListItem);