// -------------------------------------------------------------
// CHALLENGE 1
// Create a function to void udplication of code
// -------------------------------------------------------------
let a = 40;
let b = 50;
if (a >= b) {
  console.log("The largest number is " + a);
} else {
  console.log("The largest number is " + b);
}

let c = 10;
let d = 5;
if (c >= d) {
  console.log("The largest number is " + c);
} else {
  console.log("The largest number is " + d);
}

let e = 10;
let f = 5;
if (e >= f) {
  console.log("The largest number is " + e);
} else {
  console.log("The largest number is " + f);
}

// -------------------------------------------------------------
// CHALLENGE 2
//  Rename with meaningful name :  function name
// -------------------------------------------------------------
function f_2(words: string[]): string[] {
  let result: string[] = [];
  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }
  return result;
}

// -------------------------------------------------------------
// CHALLENGE 3
//  Rename with meaningful name :  function name
// -------------------------------------------------------------
function f_3(numbers: number[]): boolean {
  let result = false;
  for (let number of numbers) {
    if (number < 0) {
      result = true;
    }
  }
  return result;
}

// -------------------------------------------------------------
// CHALLENGE 4
//  Rename with meaningful name :  function name and a, b, c , d , e, f, g
// -------------------------------------------------------------
function f_4(word: string): boolean {
  let a = word === "MONDAY";
  let b = word === "TUESDAY";
  let c = word === "WEDNESDAY";
  let d = word === "THURDAY";
  let e = word === "FRIDAY";
  let f = word === "SATURDAY";
  let g = word === "SUNDAY";
  return a || b || c || d || e || f || g;
}

// -------------------------------------------------------------
// CHALLENGE 5
//  Change the code to have ONLY ONE return at the end
// -------------------------------------------------------------
function getEmployeeSalary(age: number): number {
  if (age <= 20) {
    return 200;
  }
  if (age > 20 && age <= 40) {
    return 400;
	
  } else {
    return 600;
  }
}

// -------------------------------------------------------------
// CHALLENGE 6
// Change the code  by creating a class Student and an array of Students, instead of 3 arrays of data
// -------------------------------------------------------------

let studentNames: string[] = [];
let studentYearBirths: number[] = [];
let studentProvinces: string[] = [];

function getStudentName(index: number): string {
  return studentNames[index];
}

function getStudentYearBirth(index: number): number {
  return studentYearBirths[index];
}

function getStudentProvince(index: number): string {
  return studentProvinces[index];
}
