//Example1 - Swap the value in 2 variables
/*let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);*/

/*const colors = ["red", "green", "blue", "black", "white"];

//Example2 - Swap 2 elements in an array
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//Example3 - Assign array elements to variables
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);*/

//Example4 - Extract values from objects.
/*const person1 = {
    firstName: "Harry",
    lastName: "Potter",
    age: 30,
    job: "Wizard"
}
const person2 = {
    firstName: "Ned",
    lastName: "Stark",
    age: 30
}
const {firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);*/

//Example5 - Destructure in function parameters
function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
const person1 = {
    firstName: "Harry",
    lastName: "Potter",
    age: 30,
    job: "Wizard"
}
const person2 = {
    firstName: "Ned",
    lastName: "Stark",
    age: 30
}
displayPerson(person1);