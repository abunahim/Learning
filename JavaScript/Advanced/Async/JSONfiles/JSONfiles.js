/* *stringify*
const names = ["Harry", "Ben", "Ned", "Tony"];
const person = {
                    "name": "Harry",
                    "age": 30,
                    "isEmployed": true,
                    "hobbies": ["swimming", "flying", "gardening"]
                };
const people = [{
                    "name": "Harry",
                    "age": 30,
                    "isEmployed": true
                },
                {
                    "name": "Ben",
                    "age": 25,
                    "isEmployed": true
                },
                {
                    "name": "Ned",
                    "age": 27,
                    "isEmployed": false
                },
                {
                    "name": "Tony",
                    "age": 45,
                    "isEmployed": true
                }];

const jsonString = JSON.stringify(names);

console.log(jsonString);*/

/* *parse*
const jsonNames = `["Harry", "Ben", "Ned", "Tony"]`;
const jsonPerson = `{"name": "Harry", "age": 30, "isEmployed": true, "hobbies": ["swimming", "flying", "gardening"]}`;
const jsonPeople = `[{"name": "Harry", "age": 30, "isEmployed": true},
                {"name": "Ben", "age": 25, "isEmployed": true},
                {"name": "Ned", "age": 27, "isEmployed": false},
                {"name": "Tony", "age": 45, "isEmployed": true}]`;

const parseData = JSON.parse(jsonPeople);

console.log(parseData);*/

fetch("people.json")
        .then(response => response.json())
        .then(values => values.forEach(value => console.log(value.name)))
        .catch(error => console.error(error));