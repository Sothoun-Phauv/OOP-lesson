"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hostpital = void 0;
var Hostpital = /** @class */ (function () {
    function Hostpital(name, address, phone) {
        this.staff = [];
        this.patient = [];
        this.material = [];
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    Hostpital.prototype.displayDetail = function () {
        return "Name:" + this.name + " Address: " + this.address + " Phone: " + this.phone;
    };
    Hostpital.prototype.addPatient = function (patient) {
        return this.patient.push(patient);
    };
    Hostpital.prototype.addStaff = function (staff) {
        return this.staff.push(staff);
    };
    Hostpital.prototype.addMeterial = function (mater) {
        return this.material.push(mater);
    };
    return Hostpital;
}());
exports.Hostpital = Hostpital;
