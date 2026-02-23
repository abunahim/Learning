let fruits = ["apple", "banana", "orange", "coconut", "mango"];

//fruits[2] = "coconut";
//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

/*console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("apple");
console.log(index);

for(let i = 0; i < fruits.length; i+=2){
    console.log(fruits[i]);
}*/

//fruits.sort();
fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}