/*function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Nahim", 21);
happyBirthday("Tom", 30);*/

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

console.log(add(3, 4));
console.log(subtract(3, 4));
console.log(multiply(3, 4));
console.log(divide(3, 4));

function isEven(number){
    return number % 2 === 0 ? true : false;
}
console.log(isEven(1));

function isValidEmail(email){
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("me@gmail.com"))