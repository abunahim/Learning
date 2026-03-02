//let fruits = ["apple", "orange", "banana", "coconut", "mango"];
//fruits.sort();
//console.log(fruits);

/*let numbers = [1, 10, 3, 5, 6, 7, 2, 4, 9, 8];
numbers.sort((a, b) => b - a);
console.log(numbers);*/

const people = [{name: "Harry", age: 29, marks: 91},
                {name: "Ron", age: 27, marks: 89},
                {name: "Lily", age: 28, marks: 95},
                {name: "James", age: 30, marks: 99}]
//people.sort((a, b) => b.age - a.age);
//console.log(people);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);