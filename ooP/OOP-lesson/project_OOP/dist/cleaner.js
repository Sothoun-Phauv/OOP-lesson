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
exports.Cleaner = void 0;
var person_1 = require("./person");
var Cleaner = /** @class */ (function (_super) {
    __extends(Cleaner, _super);
    function Cleaner(salary, workTime, name, address, age, phone, gender) {
        var _this = _super.call(this, name, address, age, phone, gender) || this;
        _this.salary = salary;
        _this.workTime = workTime;
        return _this;
    }
    Cleaner.prototype.getSalary = function () {
        return this.salary;
    };
    Cleaner.prototype.getName = function () {
        return this.name;
    };
    return Cleaner;
}(person_1.Person));
exports.Cleaner = Cleaner;
