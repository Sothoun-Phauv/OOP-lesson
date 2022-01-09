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
exports.Staff = void 0;
var person_1 = require("./person");
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, address, age, phone, gender, datejoin, isAviable, role) {
        var _this = _super.call(this, name, address, age, phone, gender) || this;
        _this.datejoin = datejoin;
        _this.isAviable = isAviable;
        _this.role = role;
        _this.doctors = [];
        _this.nurses = [];
        _this.secs = [];
        _this.datejoin = datejoin;
        _this.isAviable = isAviable;
        _this.role = role;
        return _this;
    }
    Staff.prototype.addStaff = function (staff) {
        return this.doctors.push(staff);
    };
    Staff.prototype.addSecurity = function (sec) {
        return this.secs.push(sec);
    };
    Staff.prototype.addNurses = function (nurse) {
        return this.nurses.push(nurse);
    };
    Staff.prototype.isAviables = function () {
        if (this.isAviable === true) {
            return this.name;
        }
    };
    return Staff;
}(person_1.Person));
exports.Staff = Staff;
