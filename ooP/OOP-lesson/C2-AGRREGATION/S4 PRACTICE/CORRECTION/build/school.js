"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
var Classroom = /** @class */ (function () {
    function Classroom(school, name) {
        this.students = [];
        this.school = school;
        this.name = name;
    }
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.getNumberOfStudents = function () {
        return this.students.length;
    };
    return Classroom;
}());
var School = /** @class */ (function () {
    function School(name) {
        this.classrooms = [];
        this.name = name;
    }
    School.prototype.addClassroom = function (classroomName) {
        var newCLassroom = new Classroom(this, classroomName);
        this.classrooms.push(newCLassroom);
        return newCLassroom;
    };
    return School;
}());
