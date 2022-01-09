// TODO  :
import { Director } from "./Director";
import { School } from "./School";
import { Student } from "./Student";

//  1- UPdate the classes to mange
//          - a schoo has many students
//          - as school has 1 director

// 2 - Create a school with a director, and students
let school = new School ("PNC");

// Object for direcot
let director = new Director ("Ronan");

// Object for student
let student1 = new Student ("Sara");
let student2 = new Student ("Lamyai");
let student3 = new Student ("Dara");
let student4 = new Student ("Sokha");
let student5 = new Student ("Sreypov");


school.addStudents(student1);
school.addStudents(student2);
school.addStudents(student3);
school.addStudents(student4);
school.addStudents(student5);

school.addDirector(director);
console.log(school);