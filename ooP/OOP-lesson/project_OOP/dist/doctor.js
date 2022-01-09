"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
var person_1 = require("./person");
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(salary, specialty, name, address, age, phone, gender) {
        var _this = _super.call(this, name, address, age, phone, gender) || this;
        _this.diag = [];
        _this.salary = salary;
        _this.specialty = specialty;
        return _this;
    }
    Doctor.prototype.getName = function () {
        return this.name;
    };
    Doctor.prototype.getSalary = function () {
        return this.salary;
    };
    Doctor.prototype.getSpecialty = function () {
        return this.specialty;
    };
    Doctor.prototype.addDiag = function (diag) {
        return this.diag.push(diag);
    };
    return Doctor;
}(person_1.Person));
exports.Doctor = Doctor;
