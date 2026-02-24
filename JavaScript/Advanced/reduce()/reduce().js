/*const prices = [5, 10, 60, 22, 19, 45];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}*/

const grades = [75, 50, 95, 88, 89, 71];

const maximun = grades.reduce(getMax);
const minimun = grades.reduce(getMin);

console.log(minimun);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}