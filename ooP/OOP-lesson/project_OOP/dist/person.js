"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, address, age, phone, gender) {
        this.name = name;
        this.address = address;
        this.age = age;
        this.phone = phone;
        this.gender = gender;
    }
    Person.prototype.displayInformation = function () {
        return this.name;
    };
    ;
    return Person;
}());
exports.Person = Person;
