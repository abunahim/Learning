const fruits = [{name: "apple", color: "red", calories: 99},
                {name: "mango", color: "yellow", calories: 120},
                {name: "orange", color: "orange", calories: 89},
                {name: "coconut", color: "white", calories: 199},
                {name: "watermelon", color: "red", calories: 299}]

//console.log(fruits[1].name);

//fruits.push({name: "grapes", color: "green", calories: 29});
//fruits.pop();
//fruits.splice(1, 2);

//console.log(fruits);

//fruits.forEach(fruits => console.log(fruits.name));

/*const fruitNames = fruits.map(fruit => fruit.name);
const fruitColor = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColor);
console.log(fruitCalories);*/

/*const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);*/

const maxFruit = fruits.reduce((max, fruit) => 
                               fruit.calories > max.calories ? 
                               fruit : max);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) => 
                               fruit.calories < min.calories ? 
                               fruit : min);
console.log(minFruit);
