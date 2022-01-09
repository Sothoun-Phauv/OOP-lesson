"use strict";
exports.__esModule = true;
exports.Compagny = void 0;
var Computer_1 = require("./materials/Computer");
var UsbKey_1 = require("./materials/UsbKey");
var Customer_1 = require("./persons/Customer");
var Employee_1 = require("./persons/Employee");
var MeetingRoom_1 = require("./rooms/MeetingRoom");
var Room_1 = require("./rooms/Room");
var Compagny = /** @class */ (function () {
    function Compagny() {
        this.allRooms = [];
        this.allMaterials = [];
        this.allPeople = [];
    }
    Compagny.prototype.addRoom = function (room) {
        this.allRooms.push(room);
    };
    Compagny.prototype.addMaterial = function (material) {
        this.allMaterials.push(material);
    };
    Compagny.prototype.addPeople = function (person) {
        this.allPeople.push(person);
    };
    /**
     * Find in compagny material or personn or room, the ressource
     * corresponding to given name.
     * TODO !!!!!!!
     * @param name
     * @returns
     */
    Compagny.prototype.findByName = function (name) {
        var result = [];
        for (var _i = 0, _a = this.allRooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.getName() === name) {
                result.push(room);
            }
        }
        for (var _b = 0, _c = this.allMaterials; _b < _c.length; _b++) {
            var material = _c[_b];
            if (material.getName() === name) {
                result.push(material);
            }
        }
        for (var _d = 0, _e = this.allPeople; _d < _e.length; _d++) {
            var person = _e[_d];
            if (person.getName() === name) {
                result.push(person);
            }
        }
        return result;
    };
    return Compagny;
}());
exports.Compagny = Compagny;
// -------------------------------------
// TEST
var myCompagny = new Compagny();
myCompagny.addMaterial(new UsbKey_1.UsbKey(458, 5));
myCompagny.addMaterial(new Computer_1.Computer(458, "DELL 452"));
myCompagny.addMaterial(new Computer_1.Computer(458, "thon"));
myCompagny.addRoom(new Room_1.Room("Learning Lab"));
myCompagny.addRoom(new MeetingRoom_1.MeetingRoom("B32", true));
myCompagny.addPeople(new Customer_1.Customer("virak", "Mango Byte"));
myCompagny.addPeople(new Employee_1.Employee("thon", 4500));
console.log(myCompagny.findByName('thon'));
