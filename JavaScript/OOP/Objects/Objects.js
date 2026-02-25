const person1 = {
    firstName: "Harry",
    lastName: "Potter",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("hey! It's me Harry.")},
    eat: function(){console.log("I'm eating roast chicken.")}
}
const person2 = {
    firstName: "Ned",
    lastName: "Stark",
    age: 50,
    isEmployed: false,
    sayHello: function(){console.log("I'm Ned Stark.")},
    drink: function(){console.log("I'm drinking wine.")}
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.drink();