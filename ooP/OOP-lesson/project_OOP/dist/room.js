"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(name, isRoomAviable) {
        this.addPatient = [];
        this.med = [];
        this.name = name;
        this.isRoomAviable = isRoomAviable;
    }
    Room.prototype.isRoomAvaibles = function (patient) {
        if (this.isRoomAviable === true) {
            for (var _i = 0, _a = this.addPatient; _i < _a.length; _i++) {
                var patient_1 = _a[_i];
                this.addPatient.push(patient_1);
            }
        }
        return this.addPatient;
    };
    Room.prototype.addMedic = function (med) {
        return this.med;
    };
    return Room;
}());
exports.Room = Room;
