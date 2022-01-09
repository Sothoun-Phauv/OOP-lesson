 

// -------------------------------------------------------------
// CHALLENGE 1
// Create a function to remove duplicated code
// -------------------------------------------------------------
// count the number of mango
let fruits = ["banana", "banana", "apple", "banana", "mango", "mango"];
let numberOfMango = 0;
for (let fruit of fruits) {
  if (fruit === "mango") {
    numberOfMango++;
  }
}

// count the number of carrot
let vegetables = ["tomato", "potato", "carrot", "tomato", "potato", "tomato"];
let numberOfCarrot = 0;
for (let vegetable of vegetables) {
  if (vegetable === "carrot") {
    numberOfCarrot++;
  }
}

// count the number of rady
let teachers = ["rady", "rith", "rith", "rady", "ronan", "channak"];
let numberOfRady = 0;
for (let teacher of teachers) {
  if (teacher == "rady") {
    numberOfRady++;
  }
}


console.log("Number of banana=", numberOfMango);
console.log("Number of carrot=", numberOfCarrot);
console.log("Number of rady=", numberOfRady);


// -------------------------------------------------------------
// CHALLENGE 2
// Refactor the code with a method inside Employee class, to remove duplicated code
// -------------------------------------------------------------

class Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}
}

let sopkeak = new Employee("sopeak", "riss", 30);
console.log("First name :" + sopkeak.firstName);
console.log("Last name : " + sopkeak.lastName);
console.log("Age name  " + sopkeak.age);

let rady = new Employee("rady", "y", 27);
console.log("First name :" + rady.firstName);
console.log("Last name : " + rady.lastName);
console.log("Age name  " + rady.age);

let ronan = new Employee("ronan", "ogor", 26);
console.log("First name :" + ronan.firstName);
console.log("Last name : " + ronan.lastName);
console.log("Age name  " + ronan.age);
