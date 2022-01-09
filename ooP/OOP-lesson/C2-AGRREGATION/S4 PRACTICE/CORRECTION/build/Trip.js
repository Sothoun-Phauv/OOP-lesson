"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trip = void 0;
var Trip = /** @class */ (function () {
    function Trip(busName, departurePlace, arrivalPlace, departureDate, arrivalDate) {
        this.customers = [];
        this.busName = busName;
        this.departurePlace = departurePlace;
        this.arrivalPlace = arrivalPlace;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
    }
    Trip.prototype.addCustomer = function (customer) {
        this.customers.push(customer);
    };
    Trip.prototype.setDeparture = function (place, date) {
        this.departurePlace = place;
        this.departureDate = date;
    };
    Trip.prototype.setArrival = function (place, date) {
        this.arrivalPlace = place;
        this.arrivalDate = date;
    };
    return Trip;
}());
exports.Trip = Trip;
