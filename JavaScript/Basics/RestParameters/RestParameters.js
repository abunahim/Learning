/*function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "soda";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is ${total}`)

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(100, 72, 83, 94, 85);
console.log(total)*/

function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Harry", "Potter", "II");
console.log(fullName);