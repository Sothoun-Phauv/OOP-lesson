import { Student } from "./Student";
import { Director } from "./Director";

export class School {
  SchoolName: string;
  Students : Student [] = [];

  director ?: Director;

  constructor(SchoolNames: string) {
    this.SchoolName = SchoolNames;
  }
  addStudents(nameOfStudents : Student){
    this.Students.push(nameOfStudents);
  }
  addDirector(nameDirector : Director){
    this.director = nameDirector;
  }
}


