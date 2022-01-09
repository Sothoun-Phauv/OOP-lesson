
// -------------------------------------------------------------
// CHALLENGE 1
// Rename with meaningful name :  function name
// -------------------------------------------------------------
function f_1(numbers: number[]): number {
  let result = 0;
  for (let n of numbers) {
    result += n;
  }
  return result;
}


// -------------------------------------------------------------
// CHALLENGE 2
// Rename with meaningful name :  function name
// -------------------------------------------------------------
function f_2(numbers: number[]): number {
  let count = 0;
  for (let value of numbers) {
    if (value == 2) {
      count++;
    }
  }
  return count;
}

// -------------------------------------------------------------
// CHALLENGE 3
// Rename with mean full names :  z1, z2 and  the function name
// -------------------------------------------------------------
function f_3(words: string[]): boolean {
  let z1 = false;
  let z2 = false;
  for (let word of words) {
    if (word === "ronan") {
      z1 = true;
    }
    if (word === "sovanda") {
      z2 = true;
    }
  }
  return z1 && z2;
}

// -------------------------------------------------------------
// CHALLENGE 4
// Rename with mean full names :   the function name
// -------------------------------------------------------------
class Employee {
  isSenior: boolean;
  name: string;
}

function f_5(employees: Employee[]): Employee[] {
  let result: Employee[] = [];
  for (let employee of employees) {
    if (employee.isSenior) {
      result.push(employee);
    }
  }
  return result;
}

	

// -------------------------------------------------------------
// CHALLENGE 5
// Create a function to remove duplicated code
// -------------------------------------------------------------
let list1 = [1, 5, 9, 8, 7, 6, 8];
let list1HasEven = false;
for (let n of list1) {
  if (n % 2 == 0) {
    list1HasEven = true;
  }
}
console.log(list1HasEven ? "list1 has even numbers" : "list1 has NO even numbers");

let list2 = [2, 5, 8, 4, 9, 10];
let list2HasEven = false;
for (let n of list2) {
  if (n % 2 == 0) {
    list2HasEven = true;
  }
}
console.log(list2HasEven ? "list2 has even numbers" : "list2 has NO even numbers");

let list3 = [1, 5, 9, 8, 7, 6, 8];
let list3HasEven = false;
for (let n of list3) {
  if (n % 2 == 0) {
    list3HasEven = true;
  }
}
console.log(list3HasEven ? "list3 has even numbers" : "list3 has NO even numbers");



// -------------------------------------------------------------
// CHALLENGE 6
//  Add a GOOD comments instead of the todos
// -------------------------------------------------------------

/**
 * TODO
 * @param   TODO
 * @return  TODO
 */
function isValidPassword(password : string) : boolean{
	let hasUpperCase = false;
	for(let char of password) {
		if (char === char.toUpperCase() ) {
			hasUpperCase = true;
		}
	}	
	return password.length > 7 && hasUpperCase;
}




// -------------------------------------------------------------
// CHALLENGE 7
//  - Rename with meaningful name :  aaa  , zzzz
//  - Add a GOOD comments instead of the todos
// -------------------------------------------------------------


/**
 * TODO
 * @param   TODO
 * @return  TODO
 */
function zzzz(word: string): boolean {
  let aaa = 0;
  for (let char of word) {
    if (char === char.toLowerCase()) {
      aaa++;
    }
  }
  return aaa >= 2;
}