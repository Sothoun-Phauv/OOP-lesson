"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Departerment = void 0;
var Departerment = /** @class */ (function () {
    function Departerment(name, address, timeAviable) {
        this.rooms = [];
        this.name = name;
        this.address = address;
        this.timeAviable = timeAviable;
    }
    Departerment.prototype.getInformation = function () {
        return "Name of Depaterment: " + this.name + " Address: " + this.address + " Time Avaiable: " + this.timeAviable;
    };
    Departerment.prototype.addRoom = function (room) {
        return this.rooms.push(room);
    };
    return Departerment;
}());
exports.Departerment = Departerment;
