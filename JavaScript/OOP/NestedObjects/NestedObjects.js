/*const person ={
    fullName: "Harry Potter",
    age: 30,
    isStudent: true,
    hobbies: ["reading", "trekking", "swimming"],
    address: {
        street: "123 Wizard Lane",
        city: "Hogwarts",
        country: "Magical"
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.city);

for(const property in person.address){
    console.log(person.address[property]);
}*/

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("John", 29, "147 White St.",
                                       "Paris",
                                       "France");
const person2 = new Person("Mike", 25, "14 Baker St.",
                                       "London",
                                       "UK");
const person3 = new Person("Lee", 39, "7 China Town",
                                       "Wuhan",
                                       "China");

console.log(person1.address.country);
console.log(person3.address.city);