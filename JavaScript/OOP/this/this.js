const person1 = {
    name: "Harry",
    favFood: "pizza",
    sayHello: function(){console.log(`hey, I am ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "Ned",
    favFood: "hotdogs",
    sayHello: function(){console.log(`hey, I am ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();