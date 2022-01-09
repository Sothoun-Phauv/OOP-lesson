"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Customer.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Customer;
}());
exports.Customer = Customer;
