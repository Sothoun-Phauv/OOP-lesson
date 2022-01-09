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
exports.Patient = void 0;
var person_1 = require("./person");
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(name, address, age, phone, gender, id, birthOfDate) {
        var _this = _super.call(this, name, address, age, phone, gender) || this;
        _this.diag = [];
        _this.id = id;
        _this.birthOfDate = birthOfDate;
        return _this;
    }
    Patient.prototype.getName = function () {
        return this.name;
    };
    Patient.prototype.getAge = function () {
        return this.age;
    };
    Patient.prototype.addDiag = function (diag) {
        return this.diag.push(diag);
    };
    return Patient;
}(person_1.Person));
exports.Patient = Patient;
