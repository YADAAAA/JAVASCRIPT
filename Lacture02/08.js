const people = ["AAA","BBB","CCC"];
const one = 1;
const str = "Hellow World";
const b = true;

const employee = {
    firstName : "Yada",
    lastName : "Sarasomseang",
};

function sayHello(person) {
    console.log("Hello "+ person.firstName);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);