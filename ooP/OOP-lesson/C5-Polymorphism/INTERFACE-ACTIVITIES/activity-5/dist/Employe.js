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
var Employee = /** @class */ (function () {
    function Employee(name, employeeType) {
        this.name = name;
        this.employeeType = employeeType;
    }
    return Employee;
}());
var Commercials = /** @class */ (function (_super) {
    __extends(Commercials, _super);
    function Commercials(name, employeeType, contract) {
        var _this = _super.call(this, name, employeeType) || this;
        _this.contract = contract;
        return _this;
    }
    Commercials.prototype.getSalary = function () {
        return this.contract * 400;
    };
    return Commercials;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, employeeType, skills) {
        var _this = _super.call(this, name, employeeType) || this;
        _this.skills = skills;
        return _this;
    }
    Developer.prototype.getSalary = function () {
        var salary = this.skills.length * 500;
        for (var _i = 0, _a = this.skills; _i < _a.length; _i++) {
            var skill = _a[_i];
            if (skill === "oop" || skill === "OOP") {
                salary = (this.skills.length - 1) * 500;
                salary += 2000;
                return salary;
            }
        }
        return salary;
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, employeeType, teamMembers) {
        var _this = _super.call(this, name, employeeType) || this;
        _this.teamMembers = teamMembers;
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.teamMembers.length * 600;
    };
    return Manager;
}(Employee));
var dev = new Developer("Lyden", "Developer", ["Python", "Dart", "Java", "Kotlin"]);
console.log(dev.getSalary());
var manager = new Manager("Nita", "Manager", ["Lyden"]);
console.log(manager.getSalary());
var commercail = new Commercials("Bobo", "Commercail", 3);
console.log(commercail.getSalary());
