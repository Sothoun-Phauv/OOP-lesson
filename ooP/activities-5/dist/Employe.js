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
var Contract = /** @class */ (function () {
    function Contract() {
    }
    return Contract;
}());
var Employee = /** @class */ (function () {
    //   private contracts: Contract[] = []; // this is intresting  only for commercials
    //   private teamMembers: Employee[] = []; // this is intresting  only for managers
    //   private skills: String[] = []; // this is intresting  only for develeppers
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
var Commercial = /** @class */ (function (_super) {
    __extends(Commercial, _super);
    function Commercial(name, contract) {
        var _this = _super.call(this, name) || this;
        _this.contract = contract;
        return _this;
    }
    Commercial.prototype.getEmployeeType = function () {
        return 'COMMERCIAL';
    };
    Commercial.prototype.getSalary = function () {
        return this.contract.length * 400;
    };
    return Commercial;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, team) {
        var _this = _super.call(this, name) || this;
        _this.teamMember = team;
        return _this;
    }
    Manager.prototype.getEmployeeType = function () {
        return 'MANAGER';
    };
    Manager.prototype.getSalary = function () {
        return this.teamMember.length * 600;
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, skills) {
        var _this = _super.call(this, name) || this;
        _this.skills = skills;
        return _this;
    }
    Developer.prototype.getEmployeeType = function () {
        return 'DEVELOPER';
    };
    Developer.prototype.getSalary = function () {
        var salary = 0;
        salary += this.skills.length * 500;
        // if (this.skills.includes('OOP')) {
        //     salary+=2000
        // }
        return salary;
    };
    return Developer;
}(Employee));
