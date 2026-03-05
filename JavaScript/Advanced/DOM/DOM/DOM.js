//console.log(document);
//document.title = "Document";
//document.body.style.backgroundColor = "black";
//console.dir(document);

const username = "Nahim";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);