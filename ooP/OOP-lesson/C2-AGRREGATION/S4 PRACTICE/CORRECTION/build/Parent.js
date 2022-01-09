"use strict";
var Account = /** @class */ (function () {
    function Account(name) {
        this.name = name;
    }
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.setNameToRonan = function () {
        this.name = "ronan";
    };
    return Account;
}());
var sara = new Account("sara");
sara.setNameToRonan();
console.log(sara.getName());
